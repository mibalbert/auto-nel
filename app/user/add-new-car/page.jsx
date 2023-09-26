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
  return (
    ///TO-DO add a multi step form
    <section>
      <div className="text-2xl">+Add a New Car</div>
      <div className="grid grid-cols-5">
        <AddNewCarForm className="col-span-3" data={data.showcaseCarData} />
        <div>Instructions</div>
      </div>
    </section>
  );
};

export default AddNewCar;
