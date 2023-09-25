/**
 * add-new-car/page.jsx
 */

import AddNewCarForm from "@/components/created/user/add-new-car/add-new-car-form";

const getData = async () => {
  const data = await fetch("http://localhost:3000/api/user/get-showcase-cars");
  return await data.json();
};

const AddNewCar = async () => {
  const data = await getData();

  console.log("FFFF", data);
  return (
    <section>
      <div className="text-2xl">+Add a New Car</div>

      <AddNewCarForm data={data.showcaseCarData} />
    </section>
  );
};

export default AddNewCar;
