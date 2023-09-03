/**
 * ServCards.js
 */
"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import servData from "./servData.json";

const ServCards = () => {
  return (
    <div className="h-full w-[92%] max-w-[1300px]  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-8  pb-24">
      {servData.map(({ id, title, href, description, src, alt }) => {
        return (
          <motion.div
            key={id}
            initial={{ opacity: 0.3, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 * bIndex }}
             
          >
          <div key={id}>
            <Link
              href={`servicii/${href}`}
              className="relative group col-span-1  flex flex-col border rounded-md bg-neutral-800 border-neutral-800   shadow-md
                         hover:scale-[102%] duration-100 h-auto hover:border-blue-600 "
            >
              {/* <div className="absolute w-full h-full z-50 inset-0 bg-white opacity-0 hover:opacity-[2%] transition-opacity "></div> */}

              <div className="relative h-[300px]">
                <Image
                  className="w-full h-full object-cover rounded-t-md"
                  width={500}
                  height={500}
                  src={src}
                  alt={alt}
                  loading="lazy"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/70 to-transparent rounded-t-md"></div>
              </div>

              <div className="w-full h-aut p-5 flex flex-col gap-3 pb-6 ">
                <div className="text-xl text-neutral-100 font-semibold  ">
                  {title}
                </div>
                <hr className="border-neutral-500" />
                <div className="text-md text-neutral-200/80">{description}</div>
                <div className="w-full text-neutral-500 group-hover:text-blue-500 duration-100 flex gap-1 items-center">
                  <p>Afla mai multe</p>
                  <svg
                    className="w-2.5 h-2.5 group-hover:translate-x-1 duration-150  group-hover:scale-105 mt-0.5"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default ServCards;
