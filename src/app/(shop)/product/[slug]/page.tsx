export const revalidate = 604080; // 7dias

import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import { titleFont } from "@/config/fonts";
//import { initialData } from "@/seed/seed";

import { getProductBySlug } from "@/actions";
import {
  ProductMobileSlideshow,
  ProductSlideShow,
  QuantitySelector,
  SizeSelector,
  StockLabel,
} from "@/components";
import prisma from "@/lib/prisma";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug;

  const product = await getProductBySlug(slug);

  return {
    title: product?.title ?? "Producto not found",
    description: product?.description ?? "",
    openGraph: {
      //images: [], https://misitioweb.com/products/prod-1/image.png
      images: [`/products/${product?.images[1]}`],
    },
  };
}

export default async function ProductPage({ params }: Props) {
  //const product = initialData.products.find((product) => product.slug === slug);
  const { slug } = params;

  const product = await getProductBySlug(slug);

  //console.log(product);

  if (!product) {
    notFound();
  }

  return (
    <div className="mt-5 mb-20 grid md:grid-cols-3 gap-3">
      {/*SlideShow*/}
      <div className="col-span-1 md:col-span-2">
        {/*Mobile Slideshow */}
        <ProductMobileSlideshow
          title={product.title}
          images={product.images}
          className="block md:hidden"
        />

        {/*Desktop Slideshow */}
        <ProductSlideShow
          title={product.title}
          images={product.images}
          className="hidden md:block"
        />
      </div>

      {/*Detallles */}
      <div className="col-span-1 px-5">
        {/*Stock */}
        <StockLabel slug={product.slug} />

        {/*Nombre del product */}
        <h1 className={`${titleFont.className} antialiased font-bold text-xl`}>
          {product.title}
        </h1>
        <p className="text-lg mb-5">${product.price}</p>

        {/*Selector de tallas*/}
        <SizeSelector
          selectedSize={product.sizes[0]}
          availableSizes={product.sizes}
        />

        {/*Selector de cantidad */}
        <QuantitySelector quantity={2} />

        {/*buton*/}
        <button className="btn-primary my-5">Agregar al carrito</button>
        <h3 className="font-bold text-sm">Descripción</h3>
        <p className="font-light text-justify">{product.description}</p>
      </div>
    </div>
  );
}
