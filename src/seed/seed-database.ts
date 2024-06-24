import { initialData } from "./seed";
import prisma from "../lib/prisma";

async function main() {
  // 1. Borrar registros previos
  await Promise.all([
    prisma.user.deleteMany(),
    prisma.productImage.deleteMany(),
    prisma.product.deleteMany(),
    prisma.category.deleteMany(),
  ]);

  const { categories, products, users } = initialData;

  await prisma.user.createMany({
    data: users,
  });

  // 2. Insertar productos

  // 2.1 Insertar categorias
  const categoriesData = categories.map((category) => ({
    name: category,
  }));

  await prisma.category.createMany({
    data: categoriesData,
  });

  const categoriesDB = await prisma.category.findMany();

  const categoriesMap = categoriesDB.reduce((map, category) => {
    map[category.name.toLowerCase()] = category.id;

    return map;
  }, {} as Record<string, string>); // <string=shirt, string=catedoryID>

  // 2.2 Insertar products
  products.forEach(async (product) => {
    const { type, images, ...rest } = product;

    const dbproduct = await prisma.product.create({
      data: {
        ...rest,
        categoryId: categoriesMap[type],
      },
    });

    // 2.3 Inserta images
    const imagesData = images.map((image) => ({
      url: image,
      productId: dbproduct.id,
    }));

    await prisma.productImage.createMany({
      data: imagesData,
    });
  });

  console.log("Seed Executed success");
}

(() => {
  if (process.env.NODE_ENV === "production") return;

  main();
})();
