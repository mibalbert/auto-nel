/**
 * create-new-car.jsx
 */

// import CreateNewCarForm from "@/components/created/create-new-car/create-new-car-form";

const CreateNewCar = () => {
  return (
    <section className="z-10  min-h-[800px] max-w-[95%]  flex-col pt-14 md:flex xl:pl-[5%]">
      <h1 className="text-2xl">+Add a new Car</h1>

      {/* <CreateNewCarForm /> */}
    </section>
  );
};

export default CreateNewCar;

////////////////////////////// MAKE SURE TO CHECK IF THE CAR IS ALREADY EXISTENT IN THE DB NOT TO HAVE DUPLICATES
