/**
 * SearchBarSearchPage.js
 */
"use client";

import { Button } from "@/components/ui/button";
import { useCarStore, useCartStore } from "@/store/store";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import StoreCategoryCards from "./store-category-cards";
import ChangeCar from "./change-car";

const SearchPage = ({ carsData, services }) => {
  const { cartItems, addToCart, clearCart, getTotalCost, removeOneFromCart } = useCartStore();

  /////// To-do, make the cart into a button or add it to the nav-bar when smaller in size and

  //// To-do, make the share button

  return (
    <section className="relative h-full w-full ">
      <div className="mx-auto max-w-[1450px]">Header</div>
      <div className="mx-auto grid h-full w-full max-w-[1450px] grid-cols-12">
        <div className="col-span-12 flex items-center justify-center  xl:col-span-8">
          <ChangeCar carsData={carsData} />
        </div>
        <div className="col-span-12 hidden items-center justify-center  xl:col-span-4 xl:flex">asd</div>
      </div>
      <div className="mx-auto min-h-[120vh] max-w-[1450px]">Foooter</div>
    </section>
  );
};

export default SearchPage;
