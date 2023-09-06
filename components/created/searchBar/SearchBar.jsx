/**
 * SearchBar.js
 */

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import servData from "@/lib/servData.json";
import { Input } from "@/components/ui/input";

export default function Autocomplete() {
  const [value, setValue] = useState("");
  const [filteredData, setFilteredData] = useState(servData);
  const [showDropdown, setShowDropdown] = useState(false);

  const onKeyUp = (e) => {
    const keyword = e.target.value;
    setValue(keyword);

    if (keyword) {
      const filtered = servData.filter((c) =>
        c.title.toLowerCase().includes(keyword.toLowerCase())
      );
      setFilteredData(filtered);
      setShowDropdown(true);
    } else {
      setFilteredData(servData);
      setShowDropdown(false);
    }
  };

  const selectOption = (selectedOption) => {
    setValue(selectedOption);
    setShowDropdown(false);
  };

  const hideDropdown = () => {
    setShowDropdown(false);
  };

  useEffect(() => {
    setFilteredData(servData);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full z-5">
      <div
        className="relative w-full z-50"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Input
          id="autocompleteInput"
          placeholder="Search for a service..."
          className="w-full  p-7 border text-xl border-zinc-400 rounded-xl"
          // className="block w-full p-3 bg-gray-800 border-transparent rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-400"
          value={value}
          onChange={onKeyUp}
        />
        {showDropdown && (
          <div className="absolute grid w-full grid-cols-1 overflow-x-auto overflow-y-auto bg-white border border-gray-300 rounded-md max-h-60">
            {filteredData.map((data) => (
              // <div
              //   key={data.id}
              //   onClick={() => selectOption(data.title)}
              //   className="px-5 py-3 transition-colors border-b border-gray-200 cursor-pointer text-stone-600 hover:bg-slate-100"
              // >
              //   {data.title}
              // </div>
              <Link
                key={data.id}
                href={data.href}
                className="col-span-1 px-5 py-3 transition-colors border-b border-gray-200 cursor-pointer text-stone-600 hover:bg-slate-100"
              >
                <span>{data.title}</span>
                <span>
                  {data.description}
                  {/* {data.description.length > 20
                  ? data.description.slice(0, 20) + "..." // Limit to 100 characters
                  : data.description} */}
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// /**
//  * SearchBar.js
//  */

// "use client"

// import { useState } from "react";
// import Link from 'next/link'

// import data from '@/components/Servicii/servData.json'

// export default function App() {
//   const [value, setValue] = useState("");

//   const onChange = (event) => {
//     setValue(event.target.value);
//   };

//   const onSearch = (searchTerm) => {
//     setValue(searchTerm);
//     // our api to fetch the search result
//     console.log("search ", searchTerm);
//   };

//   return (
//     <div className="App">
//       <h1>Search</h1>

//       <div className="search-container">
//         <div className="search-inner">
//           <input type="text" value={value} onChange={onChange} />
//           <button onClick={() => onSearch(value)}> Search </button>
//         </div>
//         <div className="dropdown">

//         </div>
//         <div class="hs-dropdown relative inline-flex" data-hs-dropdown-auto-close="inside">
//           <button id="hs-dropdown-item-checkbox" type="button" class="hs-dropdown-toggle py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
//             Actions
//             <svg class="hs-dropdown-open:rotate-180 w-2.5 h-2.5 text-gray-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
//             </svg>
//           </button>

//           <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-[15rem] bg-white shadow-md rounded-lg p-2 mt-2 dark:bg-gray-800 dark:border dark:border-gray-700" aria-labelledby="hs-dropdown-item-checkbox">

//                 {/* <span class="block text-start text-sm font-semibold text-gray-800 dark:text-gray-300">Delete</span>
//                 <span id="hs-dropdown-item-checkbox-delete-description" class="block text-sm text-gray-600 dark:text-gray-500">Notify me when this action happens.</span> */}
//                 {data
//             .filter((item) => {
//               const searchTerm = value.toLowerCase();
//               const fullName = item.title.toLowerCase();

//               return (
//                 searchTerm &&
//                 fullName.startsWith(searchTerm) &&
//                 fullName !== searchTerm
//               );
//             })
//             .slice(0, 10)
//             .map((item) => (
//               <div
//               key={item.title}
//                class="relative flex items-start py-2 px-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">

//                 <Link
//                 href={item.href}
//                 onClick={() => onSearch(item.title)}
//                 className="dropdown-row"
//               for="hs-dropdown-item-checkbox-delete" class="ml-3.5">

//                 <span class="block text-start text-sm font-semibold text-gray-800 dark:text-gray-300">{item.title}</span>
//                 <span id="hs-dropdown-item-checkbox-delete-description" class="block text-sm text-gray-600 dark:text-gray-500">{item.description}</span>

//               </Link>
//             </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// /**
//  * SearchBar.js
//  */

// "use client"

// import { ServCards } from "@/components";
// import { useState } from "react";
// import { FaSearch } from "react-icons/fa";

// import servData from '@/components/Servicii/servData.json'

// const SearchBar = () => {
//     const [searchTerm, setSearchTerm] = useState("");
//   const [searchResults, setSearchResults] = useState([]);

//   const handleSearch = (event) => {
//     setSearchTerm(event.target.value);
//     if (event.target.value !== "") {
//       const results = servData.filter((cardData) =>
//         cardData.title.toLowerCase().match(event.target.value.toLowerCase())
//       );
//       setSearchResults(results);
//     } else {
//       setSearchResults([]);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center py-2">
//       <div className="w-full max-w-2xl">
//         <div class="relative z-10 flex justify-center items-center space-x-3 p-1.5 bg-white border rounded-xl shadow-lg shadow-gray-900/[.2] dark:bg-gray-800 dark:border-gray-700 dark:shadow-gray-900/[.2]">
//           <div class="flex-[1_0_0%]">
//             <label for="hs-search-article-1" class="block text-sm text-gray-700 font-medium dark:text-white"><span class="sr-only">Cauta Servicii...</span></label>
//             <input type="text"
//               value={searchTerm}
//               onChange={handleSearch}
//               name="hs-search-article-1"
//               id="hs-search-article-1"
//               class="p-3 block w-full border-transparent rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-400"
//               placeholder="Cauta servicii..." />
//           </div>
//         </div>
//       </div>
//       <div className="flex gap-5">
//         {searchResults.map((serv, id) => (
//           <div key={serv.id} className="p-10 mt-10 text-xl border ">
//             Title: {serv.title}
//           </div>
//         ))}
//       </div>
//     </div>)
// }

// export default SearchBar

// // /**
// //  * SearchBar.js
// //  */
// // const SearchBar = () => {
// //   return (
// //     <form>
// //       <div class="relative z-10 flex justify-center items-center space-x-3 p-1.5 bg-white border rounded-xl shadow-lg shadow-gray-900/[.2] dark:bg-gray-800 dark:border-gray-700 dark:shadow-gray-900/[.2]">
// //         <div class="flex-[1_0_0%]">
// //           <label for="hs-search-article-1" class="block text-sm text-gray-700 font-medium dark:text-white"><span class="sr-only">Search article</span></label>
// //           <input type="email" name="hs-search-article-1" id="hs-search-article-1" class="p-3 block w-full border-transparent rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-400" placeholder="Search article..." />
// //         </div>
// //         <div class="flex-[0_0_auto]">
// //           <a class="p-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800" href="#">
// //             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
// //               <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
// //             </svg>
// //           </a>
// //         </div>
// //       </div>
// //     </form>

// //     )
// // }

// // export default SearchBar
