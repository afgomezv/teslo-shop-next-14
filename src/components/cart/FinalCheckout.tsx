import clsx from "clsx";
import Link from "next/link";
import { IoCardOutline } from "react-icons/io5";

export const FinalCheckout = () => {
  return (
    <div className="bg-white h-full rounded-xl shadow-xl p-7">
      <h2 className="text-2xl mb-2">Dirección de entrega</h2>
      <div className="mb-10">
        <p className="text-xl">Andrey Gómez</p>
        <p>Av. Siempre Viva 123</p>
        <p>Col Centro</p>
        <p>Alcaldia Cuauhtécmoc</p>
        <p>CP 123456</p>
        <p>123.123.123.</p>
      </div>

      {/* */}
      <div className="w-full h-0.5 rounded bg-gray-200 mb-10" />

      <h2 className="text-2xl mb-2">Resumen de orden</h2>
      <div className="grid grid-cols-2">
        <span>No. Productos</span>
        <span className="text-right">3 artículos</span>

        <span>Subtotal</span>
        <span className="text-right">$ 100</span>

        <span>Impuesto (15%)</span>
        <span className="text-right">$ 100</span>

        <span className="mt-5 text-2xl">Total</span>
        <span className="mt-5 text-2xl text-right">$ 100</span>
      </div>

      <div className="mt-5 mb-2 w-full">
        <div
          className={clsx(
            "flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5",
            { "bg-red-500": false, "bg-green-700": true }
          )}
        >
          <IoCardOutline size={30} />
          {/* <span className="mx-2">Pendiente de pago</span> */}
          <span className="mx-2">Orden Pagada</span>
        </div>
      </div>
    </div>
  );
};
