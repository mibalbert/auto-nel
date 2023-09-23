import Image from "next/image";
import React from "react";

const UserDashboardCard = () => {
  return (
    <div className="relative h-full max-h-[30%] w-full">
      <Image src={"/2019_mb_g63_amg_0000-first-side.png"} alt=";" fill className="object-cover" />
    </div>
  );
};

export default UserDashboardCard;
