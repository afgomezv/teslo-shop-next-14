import Link from "next/link";

export const AddressCheckout = () => {
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
        <p className="mb-5">
          {/*Disclaimer */}
          <span className="text-xs">
            Al hacer clic en Colocar Orden, acepta nuestros{" "}
            <a href="#" className="underline">
              términos y condiciones{" "}
            </a>
            y{" "}
            <a href="#" className="underline">
              polítca de privacidad
            </a>
          </span>
        </p>
        <Link className="flex btn-primary justify-center" href="/orders/123">
          Colocar orden
        </Link>
      </div>
    </div>
  );
};
