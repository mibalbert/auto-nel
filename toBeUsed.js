
// "use client"
// var $ = require('jquery');
// import Image from 'next/image';
// // import ocean from '../public/images/ocean-g2ba1bb5c0_1280.jpg';
// // import sea from '../public/images/sea-g879f4f00d_1280.jpg';
// // import woman from '../public/images/woman-g0b7a7f5dd_1280.jpg';

// if (typeof window !== 'undefined') {
//   window.$ = window.jQuery = require('jquery');
// }
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
// import dynamic from 'next/dynamic';

// const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
//   ssr: false,
// });

// const options = {
//   loop: false,
//   margin: 50,
//   items: 3.5,
//   autoplay: false,
//   dots: false
// };

// import { useState, useEffect } from "react";
// import { useSearchParams } from 'next/navigation'
// import { ServCards } from "@/components/created/searchBar/ServCards";
// import servData from '@/components/created/searchBar/servData.json'

// import { FaSearch } from "react-icons/fa";
// import { motion } from "framer-motion";
// import { Icons } from "@/components/ui/icons";
// import MainNav from "@/components/created/navigation/main-nav";
// import { navigationConfig } from "@/config/navigation";

// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
// import 'owl.carousel';


// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card"

// const SearchPage = () => {

//   const searchParams = useSearchParams()

//   const search = searchParams.get('name')



//   const [searchTerm, setSearchTerm] = useState("");
//   const [searchResults, setSearchResults] = useState([]);



//   useEffect(() => {


//     if (search !== null && search !== undefined) {
//       const newSearch = servData.filter((data) => {
//         return data.href.toLowerCase().includes(search.toLowerCase())
//       })
//       setSearchTerm(newSearch[0].title);
//       // handleSearch(newSearch.title)
//       setSearchResults(newSearch);

//     } else {
//       setSearchResults([]);
//     }
//   }, [search]);

//   let searchTimeout; // Declare a variable to hold the timeout ID
//   const [isLoading, setIsLoading] = useState(false); // State for loading indicator

//   const handleSearch = (event) => {
//     const newSearchTerm = event.target ? event.target.value : event;
//     setSearchTerm(newSearchTerm);

//     setIsLoading(true); // Show loading indicator

//     clearTimeout(searchTimeout); // Clear any previously set timeouts

//     if (newSearchTerm !== "") {
//       // Set a timeout to perform the search after a short delay
//       searchTimeout = setTimeout(() => {
//         const results = servData.filter((cardData) =>
//           cardData.title.toLowerCase().includes(newSearchTerm.toLowerCase())
//         );
//         setSearchResults(results);
//         setIsLoading(false); // Hide loading indicator after search
//       }, 300); // Adjust the delay time (in milliseconds) as needed
//     } else {
//       setSearchResults([]);
//       setIsLoading(false); // Hide loading indicator if search term is empty
//     }
//   };


//   return (
//     <section className="w-full min-h-screen">
//       <MainNav items={navigationConfig.guestTopNav} className="bg-white" />
//       <div className="relative flex flex-col items-center py-12 bg-slate-800 dark:bg-slate-300">
//         <div className="absolute left-0 top-0 w-full h-full dark:mask-image:linear-gradient(white, transparent)">
//           <div className="absolute inset-0 bg-gradient-to-r from-[#b45336] to-[#ff7575] opacity-40 dark:from-[#ff7575]/30 dark:to-[#b45336]/30 dark:opacity-100">
//             <svg
//               aria-hidden="true"
//               className="absolute inset-x-0 inset-y-[-50%] h-[200%] w-full skew-y-[-18deg] fill-black/40 stroke-black/50 mix-blend-overlay dark:fill-white/2.5 dark:stroke-white/5"
//             >
//               <defs>
//                 <pattern id=":S2:" width="72" height="56" patternUnits="userSpaceOnUse" x="-12" y="4">
//                   <path d="M.5 56V.5H72" fill="none"></path>
//                 </pattern>
//               </defs>
//               <rect width="100%" height="100%" strokeWidth="0" fill="url(#:S2:)"></rect>
//               <svg x="-12" y="4" className="overflow-visible">
//                 <rect strokeWidth="0" width="73" height="57" x="288" y="168"></rect>
//                 <rect strokeWidth="0" width="73" height="57" x="144" y="56"></rect>
//                 <rect strokeWidth="0" width="73" height="57" x="504" y="168"></rect>
//                 <rect strokeWidth="0" width="73" height="57" x="720" y="336"></rect>
//               </svg>
//             </svg>
//           </div>
//           {/* <svg viewBox="0 0 1113 440" aria-hidden="true" className="absolute left-1/2 top-0 ml-[-19rem] w-[69.5625rem] fill-white blur-[26px] dark:hidden">
//               <path d="M.016 439.5s-9.5-300 434-300S882.516 20 882.516 20V0h230.004v439.5H.016Z"></path>
//             </svg> */}
//         </div>

//         <div className="w-full px-10">
//           <div className="relative z-10 flex max-w-2xl space-x-3 p-1.5 bg-white border  rounded-xl shadow-lg shadow-gray-900/[.2] dark:bg-gray-800 dark:border-gray-500 dark:shadow-gray-900/[.2]">
//             <div className="relative w-full max-w-2xl">
//               <label htmlFor="hs-search-article-1" className="block text-sm font-medium text-gray-700 dark:text-white"><span className="sr-only">Cauta Servicii...</span></label>
//               <form className="relative flex-[1_0_0%]">
//                 <input
//                   type="text"
//                   value={searchTerm}
//                   // onChange={handleSearch}
//                   name="hs-search-article-1"
//                   id="hs-search-article-1"
//                   className="block w-full p-3 border-transparent rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-400"
//                   placeholder="Cauta servicii..."
//                 />


//                 {isLoading ? (
//                   <div className="absolute top-1/2 right-8 transform -translate-y-1/2">
//                     <Icons.spinner className="animate-spin transition-all duration-500" />
//                   </div>)
//                   : (<button
//                     type='submit'
//                     onSubmit={handleSearch}
//                     className="absolute top-1/2 right-8 transform -translate-y-1/2">
//                     <FaSearch />
//                   </button>)
//                 }

//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="relative w-full h-full pl-10 pb-72">
//         <div class="absolute -right-[30%] bottom-0 w-full  h-[50%] rotate-180  dark:[mask-image:linear-gradient(white,transparent)]">
//           <div class="absolute inset-0 bg-gradient-to-r from-[#36b456] to-[#75c8ff] opacity-40 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-[#36b49f]/30 dark:to-[#DBFF75]/30 dark:opacity-100">
//             {/* <svg aria-hidden="true" class="absolute inset-x-0 inset-y-[-50%] h-[200%] w-full  fill-black/40 stroke-black/50 mix-blend-overlay dark:fill-white/2.5 dark:stroke-white/5">
//                 <defs>
//                   <pattern id=":S2:" width="72" height="56" patternUnits="userSpaceOnUse" x="-12" y="4">
//                     <path d="M.5 56V.5H72" fill="none">
//                     </path>
//                   </pattern>
//                 </defs>
//                 <rect width="100%" height="100%" stroke-width="0" fill="url(#:S2:)">
//                 </rect>
//                 <svg x="-12" y="4" class="overflow-visible">
//                   <rect stroke-width="0" width="73" height="57" x="288" y="168">
//                   </rect><rect stroke-width="0" width="73" height="57" x="144" y="56">
//                   </rect><rect stroke-width="0" width="73" height="57" x="504" y="168">
//                   </rect><rect stroke-width="0" width="73" height="57" x="720" y="336">
//                   </rect>
//                 </svg>
//               </svg> */}
//           </div>
//           {/* <svg viewBox="0 0 1113 440" aria-hidden="true" class="absolute left-1/2 top-0 ml-[-19rem] w-[69.5625rem] fill-white blur-[26px] dark:hidden">
//               <path d="M.016 439.5s-9.5-300 434-300S882.516 20 882.516 20V0h230.004v439.5H.016Z">
//               </path>
//             </svg> */}
//         </div>
//         <div className=" min-h-[400px] flex gap-5 mx-auto ">
//           <OwlCarousel className="owl-theme" {...options}>

//             {isLoading ? ( // Show loading indicator
//               null
//             ) : (
//               // Show search results
//               searchResults.slice(0, 6).map((serv, id) => (
//                 <motion.div
//                   key={id}
//                   initial={{ opacity: 0.3, x: 50 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.3, delay: 0.1 * id }}
//                   className="flex flex-col gap-5 px-2 py-5 mt-10 text-xl border "
//                 >
//                   <Card>
//                     <CardHeader>
//                       <CardTitle>{serv.title}</CardTitle>
//                       <CardDescription>{serv.description}</CardDescription>
//                     </CardHeader>
//                     <CardContent>
//                       <p>Card Content</p>
//                     </CardContent>
//                     <CardFooter>
//                       <p>Card Footer</p>
//                     </CardFooter>
//                   </Card>
//                 </motion.div>
//               ))
//             )}

//           </OwlCarousel>
//         </div>
//       </div>
//       <OwlCarousel className="owl-theme" {...options}>
//         <div className="h-44 w-44 bg-slate-100">
//           {/* <Image
//               src={ocean}
//               alt="Ocean"
//               width={1280}
//               height={853}
//             /> */}
//           <div>First</div>
//         </div>
//         {/* <div className="h-44 w-44 bg-slate-200"> */}
//         {/* <Image
//               src={sea}
//               alt="Sea"
//               width={1280}
//               height={853}
//             /> */}
//         {/* <div>Second</div> */}
//         {/* </div> */}
//         {/* <div className="h-44 w-44 bg-slate-300"> */}
//         {/* <Image
//               src={woman}
//               alt="Woman"
//               width={1280}
//               height={853}
//             /> */}
//         {/* <div>Third</div> */}
//         {/* </div> */}
//       </OwlCarousel>
//     </section >
//   )
// }

// export default SearchPage

/**
 * SearchBarSearchPage.js
//  */
// "use client"

// import React, { useState, useEffect, useCallback, useRef } from "react";
// import { useSearchParams } from "next/navigation";
// import dynamic from "next/dynamic";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";
// import { FaSearch } from "react-icons/fa";
// import { motion } from "framer-motion";
// import { Icons } from "@/components/ui/icons";
// import MainNav from "@/components/created/navigation/main-nav";
// import { navigationConfig } from "@/config/navigation";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import servData from "@/components/created/searchBar/servData.json";


// import useEmblaCarousel from "embla-carousel-react";
// import Autoplay from "embla-carousel-autoplay";



// // const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
// //   ssr: false,
// // });

// // const options = {
// //   loop: false,
// //   margin: 50,
// //   items: 3,
// //   autoplay: false,
// //   dots: true,
// //   dotsEach: true,
// // };

// const SearchPage = () => {
//   const searchParams = useSearchParams();
//   let initialSearch = searchParams.get("name");

//   const [searchTerm, setSearchTerm] = useState("");
//   const [searchResults, setSearchResults] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   const searchRef = useRef(initialSearch);

//   useEffect(() => {
//     if (searchRef.current !== null && searchRef.current !== undefined) {
//       const searchResult = servData.filter((data) =>
//         data.title.toLowerCase().includes(searchRef.current.toLowerCase())
//       );
//       setSearchTerm(searchResult);
//     }
//   }, []);

//   const handleChange = (event) => {
//     const newSearchTerm = event.target.value;
//     setSearchTerm(newSearchTerm);
//   }

//   useEffect(() => {
//     searchForServices(searchTerm)
//   }, [searchTerm])

//   const searchForServices = (term) => {
//     const result = servData.filter(el => el.href.includes(term))
//     setSearchResults(result)
//   }




//   // useEffect(() => {
//   //   if (search !== null && search !== undefined) {
//   //     const newSearch = servData.filter((data) => {
//   //       return data.href.toLowerCase().includes(search.toLowerCase());
//   //     });
//   //     setSearchTerm(newSearch[0]?.title || "");
//   //     setSearchResults(newSearch);
//   //   } else {
//   //     setSearchResults([]);
//   //   }
//   // }, []);

//   let searchTimeout;


//   // const handleSearch = (event) => {
//   //   const newSearchTerm = event.target.value;
//   //   setSearchTerm(newSearchTerm);
//   //   setIsLoading(true);
//   //   clearTimeout(searchTimeout);

//   //   if (newSearchTerm !== "") {
//   //     searchTimeout = setTimeout(() => {
//   //       const results = servData.filter((cardData) =>
//   //         cardData.title.toLowerCase().includes(newSearchTerm.toLowerCase())
//   //       );
//   //       setSearchResults(results);
//   //       setIsLoading(false);
//   //     }, 300);
//   //   } else {
//   //     setSearchResults([]);
//   //     setIsLoading(false);
//   //   }
//   // };


//   const autoplayOptions = {
//     delay: 2200,
//     // delay: 2500,
//     stopOnInteraction: false,
//     rootNode: (emblaRoot) => emblaRoot.parentElement,
//   };

//   const [emblaRef] = useEmblaCarousel(
//     {
//       loop: false,
//       dragFree: true,
//       duration: 1200,
//       // duration: 60,
//       // align: "start",
//       align: "center",
//       containScroll: "trimSnaps",
//     },
//     [Autoplay(autoplayOptions)]
//   );


//   return (
//     <section className="w-full min-h-screen">
//       <MainNav items={navigationConfig.guestTopNav} className="bg-black" />
//       <div className="relative flex flex-col items-center py-12 bg-slate-800 dark:bg-slate-300">
//         <div className="absolute left-0 top-0 w-full h-full dark:mask-image:linear-gradient(white, transparent)">
//           <div className="absolute inset-0 bg-gradient-to-r from-[#b45336] to-[#ff7575] opacity-40 dark:from-[#ff7575]/30 dark:to-[#b45336]/30 dark:opacity-100">
//             <svg
//               aria-hidden="true"
//               className="absolute inset-x-0 inset-y-[-50%] h-[200%] w-full skew-y-[-18deg] fill-black/40 stroke-black/50 mix-blend-overlay dark:fill-white/2.5 dark:stroke-white/5"
//             >
//               <defs>
//                 <pattern id=":S2:" width="72" height="56" patternUnits="userSpaceOnUse" x="-12" y="4">
//                   <path d="M.5 56V.5H72" fill="none"></path>
//                 </pattern>
//               </defs>
//               <rect width="100%" height="100%" strokeWidth="0" fill="url(#:S2:)"></rect>
//               <svg x="-12" y="4" className="overflow-visible">
//                 <rect strokeWidth="0" width="73" height="57" x="288" y="168"></rect>
//                 <rect strokeWidth="0" width="73" height="57" x="144" y="56"></rect>
//                 <rect strokeWidth="0" width="73" height="57" x="504" y="168"></rect>
//                 <rect strokeWidth="0" width="73" height="57" x="720" y="336"></rect>
//               </svg>
//             </svg>
//           </div>
//         </div>
//         <div className="w-full px-10">
//           <div className="relative z-10 flex max-w-2xl space-x-3 p-1.5 bg-white border rounded-xl shadow-lg shadow-gray-900/[.2] dark:bg-gray-800 dark:border-gray-500 dark:shadow-gray-900/[.2]">
//             <div className="relative w-full max-w-2xl">
//               <label
//                 htmlFor="hs-search-article-1"
//                 className="block text-sm font-medium text-gray-700 dark:text-white"
//               >
//                 <span className="sr-only">Cauta Servicii...</span>
//               </label>
//               <div className="relative flex-[1_0_0%]">
//                 <input
//                   type="text"
//                   value={searchTerm}
//                   onChange={handleChange}
//                   name="hs-search-article-1"
//                   id="hs-search-article-1"
//                   className="block w-full p-3 border-transparent rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-400"
//                   placeholder="Cauta servicii..."
//                 />
//                 <div className="absolute top-1/2 right-8 transform -translate-y-1/2">
//                   {isLoading ? (
//                     <Icons.spinner className="animate-spin transition-all duration-500" />
//                   ) : (
//                     <FaSearch />
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="relative w-full h-full pl-10 pb-72">
//         {/* Your background elements */}
//         {/* ... */}
//         <div className="min-h-[400px] flex gap-5 mx-auto pr-20">
          
//           <div className="overflow-hidden" ref={emblaRef}>
//           <div className="flex">
//             {isLoading ? (
//               // Show loading indicator
//               null
//             ) : (searchResults.slice(0,5).map(({ id, src, title, description }) => {
//               // const itemStyle = {
//               //   flex: `0 0 ${width}%`,
//               // };
//               return (
//                 <motion.div
//                   key={id}
//                   initial={{ opacity: 0.3, x: 50 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.3, delay: 0.1 * id }}
//                   className="flex flex-col gap-5 px-2 py-5 mt-10 text-xl border bg-white w-2xl mx-5"
//                 >
//                   <Card>
//                     <CardHeader>
//                       <CardTitle>{title}</CardTitle>
//                       <CardDescription>{description}</CardDescription>
//                     </CardHeader>
//                     <CardContent>
//                       <p>Card Content</p>
//                     </CardContent>
//                     <CardFooter>
//                       <p>Card Footer</p>
//                     </CardFooter>
//                   </Card>
//                 </motion.div>
//               )}
//             ))}
//           </div>
//         </div>
//             {/* {isLoading ? (
//               // Show loading indicator
//               null
//             ) : (
//               // Show search results
//               searchResults.slice(0, 6).map((serv, id) => (
//                 <motion.div
//                   key={id}
//                   initial={{ opacity: 0.3, x: 50 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.3, delay: 0.1 * id }}
//                   className="flex flex-col gap-5 px-2 py-5 mt-10 text-xl border bg-white w-2xl"
//                 >
//                   <Card>
//                     <CardHeader>
//                       <CardTitle>{serv.title}</CardTitle>
//                       <CardDescription>{serv.description}</CardDescription>
//                     </CardHeader>
//                     <CardContent>
//                       <p>Card Content</p>
//                     </CardContent>
//                     <CardFooter>
//                       <p>Card Footer</p>
//                     </CardFooter>
//                   </Card>
//                 </motion.div>
//               ))
//             )}
//           </OwlCarousel> */}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SearchPage;

///////////////////////////////////////////////////////////// START OWL carousel
// /**
//  * SearchBarSearchPage.js
//  */
// "use client"

// import React, { useState, useEffect } from "react";
// import { useSearchParams } from "next/navigation";
// import dynamic from "next/dynamic";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";
// import { FaSearch } from "react-icons/fa";
// import { motion } from "framer-motion";
// import { Icons } from "@/components/ui/icons";
// import MainNav from "@/components/created/navigation/main-nav";
// import { navigationConfig } from "@/config/navigation";
// import servData from "@/components/created/searchBar/servData.json";
// import Link from "next/link";

// const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
//   ssr: false,
// });

// const SearchPage = () => {
//   const searchParams = useSearchParams();
//   let initialSearch = searchParams.get("name");

//   const [searchTerm, setSearchTerm] = useState("");
//   const [searchResults, setSearchResults] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     if (initialSearch.current !== null && initialSearch.current !== undefined) {
//       const searchResult = servData.filter((data) =>
//         data.title.toLowerCase().includes(searchRef.current.toLowerCase())
//       );
//       setSearchTerm(searchResult);
//     }
//   }, []);

//   const handleChange = (event) => {
//     const newSearchTerm = event.target.value;
//     setSearchTerm(newSearchTerm);
//   }

//   useEffect(() => {
//     searchForServices(searchTerm)
//   }, [searchTerm])

//   const searchForServices = (term) => {
//     const result = servData.filter(el => el.href.includes(term))
//     setSearchResults(result)
//   }


//   return (
//     <section className="w-full min-h-screen">
//       <MainNav items={navigationConfig.guestTopNav} className="bg-black" />
//       <div className="relative flex flex-col items-center py-12 bg-slate-800 dark:bg-slate-300">
//         <div className="absolute left-0 top-0 w-full h-full dark:mask-image:linear-gradient(white, transparent)">
//           <div className="absolute inset-0 bg-gradient-to-r from-[#b45336] to-[#ff7575] opacity-40 dark:from-[#ff7575]/30 dark:to-[#b45336]/30 dark:opacity-100">
//             <svg
//               aria-hidden="true"
//               className="absolute inset-x-0 inset-y-[-50%] h-[200%] w-full skew-y-[-18deg] fill-black/40 stroke-black/50 mix-blend-overlay dark:fill-white/2.5 dark:stroke-white/5"
//             >
//               <defs>
//                 <pattern id=":S2:" width="72" height="56" patternUnits="userSpaceOnUse" x="-12" y="4">
//                   <path d="M.5 56V.5H72" fill="none"></path>
//                 </pattern>
//               </defs>
//               <rect width="100%" height="100%" strokeWidth="0" fill="url(#:S2:)"></rect>
//               <svg x="-12" y="4" className="overflow-visible">
//                 <rect strokeWidth="0" width="73" height="57" x="288" y="168"></rect>
//                 <rect strokeWidth="0" width="73" height="57" x="144" y="56"></rect>
//                 <rect strokeWidth="0" width="73" height="57" x="504" y="168"></rect>
//                 <rect strokeWidth="0" width="73" height="57" x="720" y="336"></rect>
//               </svg>
//             </svg>
//           </div>
//         </div>
//         <div className="w-full px-10">
//           <div className="relative z-10 flex max-w-2xl space-x-3 p-1.5 bg-white border rounded-xl shadow-lg shadow-gray-900/[.2] dark:bg-gray-800 dark:border-gray-500 dark:shadow-gray-900/[.2]">
//             <div className="relative w-full max-w-2xl">
//               <label
//                 htmlFor="hs-search-article-1"
//                 className="block text-sm font-medium text-gray-700 dark:text-white"
//               >
//                 <span className="sr-only">Cauta Servicii...</span>
//               </label>
//               <div className="relative flex-[1_0_0%]">
//                 <input
//                   type="text"
//                   value={searchTerm}
//                   onChange={handleChange}
//                   name="hs-search-article-1"
//                   id="hs-search-article-1"
//                   className="block w-full p-3 border-transparent rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-400"
//                   placeholder="Cauta servicii..."
//                 />
//                 <div className="absolute top-1/2 right-8 transform -translate-y-1/2">
//                   {isLoading ? (
//                     <Icons.spinner className="animate-spin transition-all duration-500" />
//                   ) : (
//                     <FaSearch />
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="relative w-full h-full pl-10 pb-72">
//         {/* Your background elements */}
//         {/* ... */}
//         <div className="min-h-[400px] flex gap-5 mx-auto pr-20">
//           <OwlCarousel className="owl-theme " {...options}>
//             {isLoading ? (
//               // Show loading indicator
//               null
//             ) : (
//               // Show search results
//               searchResults.map((serv, id) => (
//                 <motion.div 
//                 key={id}
//                 initial={{ opacity: 0.3, x: 50 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.3, delay: 0.1 * id }}
//               >
//                   <Link href={serv.link} className="relative flex flex-col w-full h-full  text-xl border bg-white gap-5 px-2 py-5 mt-10  w-2xl">
//                      <div className={`absolute flex justify-center items-center w-full h-full inset-0 opacity-0 hover:opacity-100 transition-opacity`}>
//                      <p>This is an overlay</p>
//                    </div>
//                     <div>
//                       <div>{serv.title}</div>
//                       <div>{serv.description}</div>
//                     </div>
//                     <div>
//                       <p>Card Content</p>
//                     </div>
//                     <div>
//                       <p>Card Footer</p>
//                     </div>
//                   </Link>
//                   </motion.div>
//               ))
//             )}
//           </OwlCarousel>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SearchPage;

///////////////////////////////////////////////////////////// END OWL carousel