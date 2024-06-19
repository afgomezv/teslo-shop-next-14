import { notFound, redirect } from "next/navigation";
import { getPaginatedProductWithImages } from "@/actions";
import { Pagination, ProductGrid, Title } from "@/components";
import { Gender } from "@prisma/client";

interface Props {
  params: {
    gender: string;
  };
  searchParams: {
    page?: string;
  };
}

export default async function CategoryPage({ params, searchParams }: Props) {
  const { gender } = params;

  const page = searchParams.page ? parseInt(searchParams.page) : 1;

  const { products, currentPage, totalpages } =
    await getPaginatedProductWithImages({ page, gender: gender as Gender });

  if (products.length === 0) {
    redirect(`/gender/${gender}`);
  }

  const labels: Record<string, string> = {
    men: "Hombre",
    women: "Mujeres",
    kid: "Niños",
    unisex: "Todos",
  };

  // if (id === "kids") {
  //   notFound();
  // }

  return (
    <>
      <Title
        title={`Articulos para ${labels[gender]}`}
        subtitle="Todos los productos"
        className="mb-2"
      />
      <ProductGrid products={products} />

      <Pagination totalPages={totalpages} />
    </>
  );
}
