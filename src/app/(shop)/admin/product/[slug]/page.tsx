import { getCategories, getProductBySlug } from "@/actions";
import { Title } from "@/components";
import { redirect } from "next/navigation";
import { ProductForm } from "./ui/ProductForm";

interface Props {
  params: {
    slug: string;
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = params;

  const [product, categories] = await Promise.all([
    getProductBySlug(slug),
    getCategories(),
  ]);

  // todo: creation new product

  if (!product && slug !== "create") {
    redirect("/admin/products");
  }

  const title = slug === "create" ? "Crear Producto" : "Editar  Producto";

  return (
    <>
      <Title title={title} />
      <ProductForm product={product ?? {}} categories={categories} />
    </>
  );
}
