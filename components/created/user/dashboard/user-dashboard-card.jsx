import React from "react";

const USERDASHBORADCARD = () => {
  return <div>USERDASHBORADCARD</div>;
};

export default USERDASHBORADCARD; // /**
//  * user/dashboard/user-dashboard-card.jsx
//  */

// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// const UserDashboardCard = ({ carData }) => {
//   const img = [];
//   carData.ShowcaseCar.image.forEach((el) => {
//     img.push(el);
//   });

//   return (
//     <Link href={`/`} className="relative w-full h-full border border-dashed rounded-lg group border-neutral-300">
//       <div className="absolute left-0 w-full h-full -top-16">
//         <Image src={img[0].url} alt="" priority fill className="object-contain transform group-hover:scale-98 duration-400" />
//       </div>
//       <div className="absolute left-0 z-50 w-full h-full p-3 duration-300 transform -bottom-14 group-hover:scale-105">
//         <div className="w-full h-full p-5 border rounded-lg supports-backdrop-blur:bg-neutral-700/80 backdrop-blur-md">
//           <div className="px-4 py-2 rounded-lg bg-white/70">
//             {/* <div className="flex text-4xl font-semibold text-transparent bg-gradient-to-t from-neutral-900 via-neutral-700 to-neutral-600 bg-clip-text"> */}
//             <div className="flex text-2xl font-bold text-neutral-900">
//               {/* <div className="text-xl">{carData.make}</div>
//             <div className="text-lg">{carData.model}</div> */}
//               {carData.make} {carData.model}
//             </div>
//             <div>
//               <div>CP:116</div>
//               <div>Engine:1995cm3</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Link>
//   );
// };

// export default UserDashboardCard;
