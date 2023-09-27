/**
 * sign-in-modal.jsx
 */

"use client";

import { useCarStore, useCartStore } from "@/store/store";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

import { Separator } from "@/components/ui/separator";

const tags = Array.from({ length: 50 }).map((_, i, a) => `v1.2.0-beta.${a.length - i}`);

const Cart = () => {
  const { make, model, years, carImage, setMake, setModel, setYears, setCarImage } = useCarStore();
  const { cartItems, addToCart, clearCart, getTotalCost, removeOneFromCart } = useCartStore();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setOpen(false); // Close the dialog
      }
    };

    window.addEventListener("resize", handleResize); // Add event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild className="block xl:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" className="h-7 w-7" viewBox="0 -0.5 25 25" fill="none">
          <g id="SVGRepo_bgCarrier" strokeWidth="0" />
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.51132 9.177L6.27532 18.177C6.34062 19.1879 7.16948 19.9803 8.18232 20H16.8253C17.8378 19.9798 18.6661 19.1875 18.7313 18.177L19.4953 9.177C19.5542 8.63047 19.3817 8.08424 19.0196 7.67066C18.6575 7.25708 18.1388 7.01389 17.5893 7H7.41732C6.8678 7.01389 6.34917 7.25708 5.98707 7.67066C5.62497 8.08424 5.45246 8.63047 5.51132 9.177Z"
              stroke="#000000"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />{" "}
            <path
              d="M16.703 6.66154C16.5161 7.03118 16.6642 7.48236 17.0338 7.66929C17.4035 7.85621 17.8547 7.7081 18.0416 7.33846L16.703 6.66154ZM17.3515 5.71218L18.0095 5.35226V5.35226L17.3515 5.71218ZM16.2783 5L16.3543 4.25386C16.3291 4.25129 16.3037 4.25 16.2783 4.25V5ZM8.72831 5V4.25C8.70292 4.25 8.67755 4.25129 8.6523 4.25386L8.72831 5ZM7.65513 5.71218L6.99714 5.35226L6.99714 5.35226L7.65513 5.71218ZM6.96502 7.33846C7.15195 7.7081 7.60313 7.85621 7.97277 7.66929C8.34241 7.48236 8.49052 7.03118 8.3036 6.66154L6.96502 7.33846ZM10.7533 11C10.7533 10.5858 10.4175 10.25 10.0033 10.25C9.5891 10.25 9.25331 10.5858 9.25331 11H10.7533ZM10.0033 11.5H9.25331H10.0033ZM15.7533 11C15.7533 10.5858 15.4175 10.25 15.0033 10.25C14.5891 10.25 14.2533 10.5858 14.2533 11H15.7533ZM18.0416 7.33846C18.3586 6.71151 18.3466 5.96863 18.0095 5.35226L16.6935 6.0721C16.7935 6.25502 16.7971 6.47548 16.703 6.66154L18.0416 7.33846ZM18.0095 5.35226C17.6723 4.73588 17.0533 4.32507 16.3543 4.25386L16.2023 5.74614C16.4097 5.76727 16.5934 5.88919 16.6935 6.0721L18.0095 5.35226ZM16.2783 4.25H8.72831V5.75H16.2783V4.25ZM8.6523 4.25386C7.95335 4.32507 7.3343 4.73588 6.99714 5.35226L8.31313 6.0721C8.41318 5.88919 8.5969 5.76727 8.80432 5.74614L8.6523 4.25386ZM6.99714 5.35226C6.65998 5.96863 6.64797 6.71151 6.96502 7.33846L8.3036 6.66154C8.20951 6.47548 8.21307 6.25502 8.31313 6.0721L6.99714 5.35226ZM9.25331 11V11.5H10.7533V11H9.25331ZM9.25331 11.5C9.25331 13.2949 10.7084 14.75 12.5033 14.75V13.25C11.5368 13.25 10.7533 12.4665 10.7533 11.5H9.25331ZM12.5033 14.75C14.2982 14.75 15.7533 13.2949 15.7533 11.5H14.2533C14.2533 12.4665 13.4698 13.25 12.5033 13.25V14.75ZM15.7533 11.5V11H14.2533V11.5H15.7533Z"
              fill="#000000"
            />{" "}
          </g>
        </svg>
      </DialogTrigger>
      <DialogContent className="h-full max-h-[100%] w-full max-w-[100%] overflow-auto sm:max-h-[90vh] sm:max-w-[90%] md:max-h-[85vh] md:max-w-2xl  lg:max-h-[90vh]">
        <div className="flex h-full w-full flex-col justify-between ">
          <section className="pt-5">
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>{`Make changes to your profile here. Click save when you're done.`}</DialogDescription>
            </DialogHeader>
            <div className="">
              <div>
                <div className="mb-2 font-semibold ">Car:</div>
                <div>
                  {make}, {model}, {years}
                </div>
              </div>
              <hr className="my-3" />
              <div className="mb-2 text-center font-semibold">Summary</div>
              <div className="grid grid-cols-7">
                <div className="col-span-5">Name</div>
                <div className="col-span-1">Price</div>
                <div className="col-span-1"></div>
              </div>
              <div className="p-4">
                {cartItems ? (
                  cartItems.map((item) => (
                    <div key={item.id} className="my-2 bg-slate-50 dark:bg-neutral-800 dark:text-white">
                      <div className="grid grid-cols-7">
                        <div className="col-span-5 flex items-center  overflow-hidden px-2 py-1 text-sm">{item.title}</div>
                        <div className="col-span-1 flex  items-center  justify-center py-1 text-sm">${item.price}</div>
                        <button className="col-span-1  flex items-center justify-center py-1" onClick={() => removeOneFromCart(item.id)}>
                          x
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div>No items in the cart</div>
                )}
              </div>
              <div className="mt-4 flex justify-between py-3">
                <button onClick={clearCart} className="text-neutral-500 underline underline-offset-2">
                  Clear
                </button>
                <p className="font-bold">Total: ${getTotalCost()}</p>
              </div>
            </div>
          </section>
          <section className="flex flex-col gap-3">
            <Button className="mt-5 w-full" variant={cartItems.length > 0 ? "" : "outline"} disabled={!(cartItems.length > 0)}>
              Make Reservation
            </Button>
            <div className="flex items-center justify-center gap-2 text-neutral-600">
              <div className="text-center text-xs">Footer</div>
              <Button variant="link" className="text-xs underline">
                Contact-Us
              </Button>
            </div>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Cart;
