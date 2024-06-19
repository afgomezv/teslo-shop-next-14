export const revalidate = 60; // 60 segundos

import { redirect } from "next/navigation";
import { getPaginatedProductWithImages } from "@/actions";
import { Pagination, ProductGrid, Title } from "@/components";

//import { initialData } from "@/seed/seed";
//const products = initialData.products;
interface Props {
  searchParams: {
    page?: string;
  };
}

export default async function HomePage({ searchParams }: Props) {
  const page = searchParams.page ? parseInt(searchParams.page) : 1;

  const { products, currentPage, totalpages } =
    await getPaginatedProductWithImages({ page });

  if (products.length === 0) {
    redirect("/");
  }

  return (
    <>
      <Title title="Tienda" subtitle="Todos los productos" className="mb-2" />
      <ProductGrid products={products} />
      <Pagination totalPages={totalpages} />
    </>
  );
}
