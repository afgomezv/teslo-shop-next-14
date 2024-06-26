"use client";

import { useEffect, useState } from "react";

import { useCartStore } from "@/store";
import { currencyFormat } from "@/utils";
import { ProductImage } from "@/components";

export const ProductsInCart = () => {
  const [isloaded, setIsloaded] = useState(false);

  const productsInCart = useCartStore((state) => state.cart);

  useEffect(() => {
    setIsloaded(true);
  }, []);

  if (!isloaded) {
    return <div>Cargando...</div>;
  }

  return (
    <>
      {productsInCart.map((product) => (
        <div key={`${product.slug}-${product.size}`} className="flex mb-5">
          <ProductImage
            src={product.image}
            width={100}
            height={100}
            style={{
              width: "100px",
              height: "100px",
            }}
            alt={product.title}
            className="mr-5 rounded"
          />

          <div>
            <span>
              <p>
                {product.size} - {product.title} ({product.quantity})
              </p>
            </span>

            <p className="font-bold">
              {currencyFormat(product.price * product.quantity)}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};
