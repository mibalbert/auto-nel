/**
 * search/page.jsx
 */

import SearchPage from "@/components/created/search-page/search-page";
import prisma from "@/lib/prisma";

const getCarsData = async () => {
  const res = await prisma.showcaseCar.findMany({
    select: {
      make: true,
      model: true,
      productionYears: true
    }
  });
  return res;
};

const Search = async () => {
  const carsData = await getCarsData();

  return (
    <div>
      <SearchPage carsData={carsData} />
    </div>
  );
};

export default Search;
