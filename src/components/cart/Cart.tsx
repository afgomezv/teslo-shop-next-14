import Image from "next/image";
import { Product } from "@/interfaces";

import { QuantitySelector } from "../product/QuantitySelector";

interface Props {
  productsInCart: Product[];
}

export const Cart = ({ productsInCart }: Props) => {
  return (
    <>
      {productsInCart.map((product) => (
        <div key={product.slug} className="flex mb-5">
          <Image
            src={`/products/${product.images[0]}`}
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
            <p>{product.title}</p>
            <p>${product.price}</p>
            <div>
              <QuantitySelector quantity={3} />
              <button className="underline mt-3">Remover</button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
