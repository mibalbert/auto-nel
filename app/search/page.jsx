/**
 * SearchBarSearchPage.js
 */
"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import { FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";
import { Icons } from "@/components/ui/icons";
import servData from "@/lib/servData.json";
import Link from "next/link";

import useEmblaCarousel from "embla-carousel-react";

const SearchPage = () => {
  const searchParams = useSearchParams();
  let initialSearch = searchParams.get("name");

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (initialSearch.current !== null && initialSearch.current !== undefined) {
      const searchResult = servData.filter((data) =>
        data.title.toLowerCase().includes(searchRef.current.toLowerCase())
      );
      setSearchTerm(searchResult);
    }
  }, []);

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
    <section className="w-full min-h-screen">
      <div className="relative flex flex-col items-center py-12 bg-gradient-to-r from-green-700 to-yellow-400">
        <div className="absolute left-0 top-0 z-10 w-full h-full dark:mask-image:linear-gradient(white, transparent)">
          <div className="absolute inset-0 bg-gradient-to-r from-[#b45336] to-[#ff7575] opacity-40 dark:from-[#ff7575]/30 dark:to-[#b45336]/30 dark:opacity-100">
            <svg
              aria-hidden="true"
              className="absolute inset-x-0 inset-y-[-50%] h-[200%] w-full skew-y-[-18deg] fill-black/40 stroke-black/50 mix-blend-overlay dark:fill-white/2.5 dark:stroke-white/5"
            >
              <defs>
                <pattern
                  id=":S2:"
                  width="72"
                  height="56"
                  patternUnits="userSpaceOnUse"
                  x="-12"
                  y="4"
                >
                  <path d="M.5 56V.5H72" fill="none"></path>
                </pattern>
              </defs>
              <rect
                width="100%"
                height="100%"
                strokeWidth="0"
                fill="url(#:S2:)"
              ></rect>
              <svg x="-12" y="4" className="overflow-visible">
                <rect
                  strokeWidth="0"
                  width="73"
                  height="57"
                  x="288"
                  y="168"
                ></rect>
                <rect
                  strokeWidth="0"
                  width="73"
                  height="57"
                  x="144"
                  y="56"
                ></rect>
                <rect
                  strokeWidth="0"
                  width="73"
                  height="57"
                  x="504"
                  y="168"
                ></rect>
                <rect
                  strokeWidth="0"
                  width="73"
                  height="57"
                  x="720"
                  y="336"
                ></rect>
              </svg>
            </svg>
          </div>
        </div>
        <div className="w-full px-10">
          <div className="relative z-10 flex max-w-2xl space-x-3 p-1.5 bg-white border rounded-xl shadow-lg shadow-gray-900/[.2] dark:bg-gray-800 dark:border-gray-500 dark:shadow-gray-900/[.2]">
            <div className="relative w-full max-w-2xl">
              <label
                htmlFor="hs-search-article-1"
                className="block text-sm font-medium text-gray-700 dark:text-white"
              >
                <span className="sr-only">Cauta Servicii...</span>
              </label>
              <div className="relative flex-[1_0_0%] z-50">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={handleChange}
                  name="hs-search-article-1"
                  id="hs-search-article-1"
                  className="block w-full p-3 border-transparent rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-400"
                  placeholder="Cauta servicii..."
                />
                <div className="absolute transform -translate-y-1/2 top-1/2 right-8">
                  {isLoading ? (
                    <Icons.spinner className="transition-all duration-500 animate-spin" />
                  ) : (
                    <FaSearch />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-50 w-full h-full pb-72">
        {/* <div className="overflow-hidden" ref={emblaRef}> */}
        <div className="relative embla min-h-[400px] gap-10" ref={emblaRef}>
          {/* <div className="flex gap-10"> */}
          <div className="px-20 embla__container">
            {isLoading
              ? // Show loading indicator
                null
              : searchResults.map((serv, id) => (
                  <motion.div
                    key={id}
                    initial={{ opacity: 0.3, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * id }}
                    className="embla__slide"
                  >
                    {/* <Link href={serv.link} className={`w-[400px] relative flex flex-col  h-full  text-xl border bg-white gap-5 px-5 py-5 mt-10  w-2xl max-h-[400px]`}> */}
                    <Link href={serv.link}>
                      <div
                        className={`absolute flex justify-center items-center w-full h-full inset-0 opacity-0 hover:opacity-100 transition-opacity`}
                      >
                        <p>This is an overlay</p>
                      </div>
                      <div>
                        <div>{serv.title}</div>
                        <div>{serv.description}</div>
                      </div>
                      <div>
                        <p>Card Content</p>
                      </div>
                      <div>
                        <p>Card Footer</p>
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
    </section>
  );
};

export default SearchPage;
