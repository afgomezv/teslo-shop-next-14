import Image from "next/image";
import { Product } from "@/interfaces";

interface Props {
  productsInCart: Product[];
}

export const CartCheckout = ({ productsInCart }: Props) => {
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
            <p>${product.price} x 3</p>
            <p className="font-bold">Subtotal: ${product.price} * 3</p>
          </div>
        </div>
      ))}
    </>
  );
};
