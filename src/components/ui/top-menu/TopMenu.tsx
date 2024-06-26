"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { useCartStore, useUIStore } from "@/store";

import { titleFont } from "@/config/fonts";
import { IoCartOutline, IoSearchOutline } from "react-icons/io5";

export const TopMenu = () => {
  const openMenuOpen = useUIStore((state) => state.openSideMenu);
  const getTotalItemsInCart = useCartStore((state) => state.getTotalItems());

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <nav className="flex px-5 justify-between items-center">
      {/* logo */}
      <div>
        <Link href="/">
          <span className={`${titleFont.className} antialiased font-bold`}>
            Teslo
          </span>
          <span> | Shop</span>
        </Link>
      </div>

      {/* Center Menu */}
      <div className="hidden sm:block">
        <Link
          href="/gender/men"
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
        >
          Hombres
        </Link>
        <Link
          href="/gender/women"
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
        >
          Mujeres
        </Link>
        <Link
          href="/gender/kid"
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
        >
          Niños
        </Link>
      </div>

      {/*Search, Cart, Menu */}
      <div className="flex items-center">
        <Link href="/search" className="mx-2">
          <IoSearchOutline size={20} />
        </Link>
        <Link
          href={getTotalItemsInCart === 0 && isLoaded ? "/empty" : "/cart"}
          className="mx-2"
        >
          <div className="relative">
            {isLoaded && getTotalItemsInCart > 0 && (
              <span className="fade-in absolute text-xs rounded-full px-1 font-bold -top-2 -right-2 bg-blue-700 text-white">
                {getTotalItemsInCart}
              </span>
            )}
            <IoCartOutline size={20} />
          </div>
        </Link>
        <button
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          onClick={openMenuOpen}
        >
          Menú
        </button>
      </div>
    </nav>
  );
};
