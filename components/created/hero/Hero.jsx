/**
 * Hero2.js
 */

"use client";
import Image from "next/image";

import React, { useState, useEffect, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import SearchBar from "@/components/created/searchBar/SearchBar";
import { Icons } from "@/components/ui/icons";
import { FaSearch } from "react-icons/fa";
import servData from "@/lib/servData.json";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Input } from "@/components/ui/input";

const Hero = () => {
  const searchParams = useSearchParams();
  let initialSearch = searchParams.get("name");

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
  };

  useEffect(() => {
    searchForServices(searchTerm);
  }, [searchTerm]);

  const searchForServices = (term) => {
    const result = servData.filter((el) => el.href.includes(term));
    setSearchResults(result);
  };
  const [scrollProgress, setScrollProgress] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    dragFree: true,
    align: "center",
    containScroll: "trimSnaps",
  });

  const onScroll = useCallback((emblaApi) => {
    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
    setScrollProgress(progress * 100);
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onScroll(emblaApi);
    emblaApi.on("reInit", onScroll);
    emblaApi.on("scroll", onScroll);
  }, [emblaApi, onScroll]);

  return (
    <div className="relative overflow-hidden min-h-[75vh]">
      <div className="relative max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10  z-20  ">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="pb-5 text-4xl font-bold text-transparent sm:text-[50px] bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text"
          >
            Serviciile Noastre
          </motion.div>
          <div className="mt-3 text-gray-600 dark:text-gray-700">
            Stay in the know with insights from industry experts.
          </div>
          <div className="relative max-w-2xl mx-auto mt-7 sm:mt-12">
            {/* <SearchBar /> */}
            <div className="w-full ">
              {/* <div className="relative z-10 flex max-w-2xl p-1.5 bg-white border rounded-xl shadow-lg shadow-gray-900/[.2] dark:bg-gray-800 dark:border-gray-500 dark:shadow-gray-900/[.2]">
                <div className="relative w-full max-w-2xl">
                  <label
                    htmlFor="hs-search-article-1"
                    className="block text-sm font-medium text-gray-700 dark:text-white"
                  >
                    <span className="sr-only">Cauta Servicii...</span>
                  </label>
                  <div className="relative flex-[1_1_0%] z-50">
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={handleChange}
                      name="hs-search-article-1"
                      id="hs-search-article-1"
                      className="block w-full p-3 border-transparent rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-400"
                      placeholder="Cauta servicii..."
                    />
                    <div>
                      <FaSearch />
                    </div>
                    <div className="absolute transform -translate-y-1/2 top-1/2 right-5">
                      {isLoading ? (
                        <Icons.spinner className="transition-all duration-500 animate-spin" />
                      ) : null}
                    </div>
                  </div>
                </div>
              </div> */}
              <div>
                <label
                  htmlFor="hs-trailing-button-add-on-with-icon-and-button"
                  className="sr-only"
                >
                  Label
                </label>
                <div className="relative flex rounded-md shadow-sm">
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={handleChange}
                    id="hs-trailing-button-add-on-with-icon-and-button"
                    name="hs-trailing-button-add-on-with-icon-and-button"
                    className="py-3 px-4 pl-11 block w-full border-gray-200 shadow-sm rounded-l-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                  />
                  <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none z-20 pl-4">
                    <svg
                      className="h-4 w-4 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                  </div>
                  <button
                    type="button"
                    className="py-3 px-4 inline-flex flex-shrink-0 justify-center items-center rounded-r-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm"
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
            {/* The svg Graphics */}
            <div className="absolute top-0 right-0 hidden translate-x-16 -translate-y-16 md:block">
              <svg
                className="w-16 h-auto text-orange-500"
                width="121"
                height="135"
                viewBox="0 0 121 135"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                  stroke="currentColor"
                  strokeWidth="10"
                  strokeLinecap="round"
                />
                <path
                  d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                  stroke="currentColor"
                  strokeWidth="10"
                  strokeLinecap="round"
                />
                <path
                  d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                  stroke="currentColor"
                  strokeWidth="10"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            {/* The svg Graphics */}
            <div className="absolute bottom-0 left-0 hidden translate-y-16 md:block -translate-x-36">
              <svg
                className="w-40 h-auto text-cyan-500"
                width="347"
                height="188"
                viewBox="0 0 347 188"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 82.4591C54.7956 92.8751 30.9771 162.782 68.2065 181.385C112.642 203.59 127.943 78.57 122.161 25.5053C120.504 2.2376 93.4028 -8.11128 89.7468 25.5053C85.8633 61.2125 130.186 199.678 180.982 146.248L214.898 107.02C224.322 95.4118 242.9 79.2851 258.6 107.02C274.299 134.754 299.315 125.589 309.861 117.539L343 93.4426"
                  stroke="currentColor"
                  strokeWidth="7"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
          {/* The Category buttons  */}
          <div className="flex justify-center w-full mt-5 sm:mt-10">
            <a
              className="inline-flex items-center justify-center gap-2 px-4 py-3 m-1 text-sm font-medium text-gray-700 align-middle transition-all bg-white border rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
              href="#"
            >
              <svg
                className="w-3 h-auto"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z" />
              </svg>
              Business
            </a>
            <a
              className="inline-flex items-center justify-center gap-2 px-4 py-3 m-1 text-sm font-medium text-gray-700 align-middle transition-all bg-white border rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
              href="#"
            >
              <svg
                className="w-3 h-auto"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z" />
              </svg>
              Business
            </a>
            <a
              className="inline-flex items-center justify-center gap-2 px-4 py-3 m-1 text-sm font-medium text-gray-700 align-middle transition-all bg-white border rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
              href="#"
            >
              <svg
                className="w-3 h-auto"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z" />
              </svg>
              Business
            </a>
            <a
              className="inline-flex items-center justify-center gap-2 px-4 py-3 m-1 text-sm font-medium text-gray-700 align-middle transition-all bg-white border rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
              href="#"
            >
              <svg
                className="w-3 h-auto"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z" />
              </svg>
              Business
            </a>
          </div>
        </div>
        <div className="relative z-50 w-full h-full ">
          {/* <div className="overflow-hidden" ref={emblaRef}> */}
          <div className="relative embla gap-10 " ref={emblaRef}>
            {/* <div className="flex gap-10"> */}
            <div className="px-20 embla__container min-h-fit ">
              {isLoading
                ? // Show loading indicator
                  null
                : searchResults.map((serv, id) => (
                    <motion.div
                      key={id}
                      initial={{ opacity: 0.3, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.1, delay: 0.2 * id }}
                      className="embla__slide w-full h-full rounded-xl"
                    >
                      {/* <Link href={serv.link} className={`w-[400px] relative flex flex-col  h-full  text-xl border bg-white gap-5 px-5 py-5 mt-10  w-2xl max-h-[400px]`}> */}
                      <Link
                        href={serv.link}
                        className="embla__link w-full h-full flex flex-col p-10 "
                      >
                        <div className="w-full h-full">
                          <Image
                            src={"/amg.jfif"}
                            alt="Car Image"
                            width={300}
                            height={300}
                            className=" w-full h-full object-cover"
                          />
                        </div>
                        <div className="w-full">
                          <div>
                            <h1 className="text-2xl">{serv.title}</h1>
                            <div className="text-md">{serv.description}</div>
                          </div>
                          <div>
                            <p>Card Content</p>
                          </div>
                          <div>
                            <p>Card Footer</p>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
            </div>
            <div className="mt-20 embla__progress">
              <div
                className="embla__progress__bar"
                style={{ transform: `translate3d(${scrollProgress}%,0px,0px)` }}
              />
            </div>
          </div>
        </div>

        <div className="h-screen">lkasd</div>
      </div>
    </div>
  );
};

export default Hero;
