/**
 * add-new-car-form.jsx
 */

"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { useAddCustomerCarStore } from "@/store/store";

// Helper functions
const getMake = (data) => {
  return new Set(data.map((el) => el.make));
};

const getModelsForMake = (make, data) => {
  const models = data.filter((el) => el.make === make).map((el) => el.model);
  return new Set(models);
};

const getProductionYearsForModel = (model, data) => {
  const years = data.filter((el) => el.model === model).map((el) => el.productionYears);
  return new Set(years);
};

const AddNewCarForm = ({ data }) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const { make, model, years, setMake, setModel, setYears } = useAddCustomerCarStore();

  const handleMakeChange = (e) => {
    const newMake = e.target.value;
    setMake(newMake);
    setModel(""); // Reset model when changing make
    setYears(""); // Reset years when changing make
  };

  const handleModelChange = (e) => {
    const newModel = e.target.value;
    setModel(newModel);
    setYears(""); // Reset years when changing model
  };

  const handleYearsChange = (e) => {
    const newYears = e.target.value;
    setYears(newYears);
  };

  // const makes = getMake(data);
  const models = getModelsForMake(make, data);
  const yearsPeriod = getProductionYearsForModel(model, data);

  const onSubmit = (data) => console.log(data);

  return (
    <section>
      <div>Form</div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4">
        <label>Select Make</label>
        <select {...register("make")}>
          {data.map((el, idx) => {
            return (
              <option key={idx} value={el}>
                {el}
              </option>
            );
          })}
        </select>
        <label>Select Model</label>
        <select {...register("make")}>
          {data.map((el, idx) => {
            return (
              <option key={idx} value={el.make}>
                {el.make}
              </option>
            );
          })}
        </select>

        <input defaultValue="test" {...register("example")} className="rounded border border-gray-300 px-2 py-1" />

        <input {...register("example123", { required: true })} className="rounded border border-gray-300 px-2 py-1" />
        {errors.example123 && <span className="text-red-600">This field is required</span>}

        <input {...register("exampleRequired", { required: true })} className="rounded border border-gray-300 px-2 py-1" />
        {errors.exampleRequired && <span className="text-red-600">This field is required</span>}

        <Button
          type="submit"
          // className="px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </Button>
      </form>
    </section>
  );
};

export default AddNewCarForm;
