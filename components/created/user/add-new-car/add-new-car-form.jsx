/**
 * add-new-car-form.jsx
 */

"use client";

import { vinDecoderReq } from "./form-actions";

import { experimental_useFormState as useFormState } from "react-dom";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

// import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { useAddCustomerCarStore } from "@/store/store";
import { cn } from "@/lib/utils";

const initialState = {
  message: null,
  make: null,
  model: null,
  year: null
};

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending} className="">
      Add
    </Button>
  );
};

const AddNewCarForm = ({ data, className }) => {
  const [state, formAction] = useFormState(vinDecoderReq, initialState);

  return (
    <section className={cn("", className)}>
      <div>Form</div>

      <form action={formAction} className="flex flex-col py-8 space-y-8">
        {/* <form onSubmit={handleSubmit(vinDecoderReq)} className="flex flex-col py-8 space-y-8"> */}
        <div className="flex flex-col ">
          <label>Input VIN number</label>
          <input name="vin" required className="px-2 py-1 border border-gray-300 rounded" />
        </div>
        <SubmitButton />

        <p className="">{state ? JSON.stringify(state) : null}</p>

        <p>{state?.make}</p>
        <p>{state?.model}</p>
        <p>{state?.year}</p>
        {/* <p>{state?.make}</p> */}
      </form>
    </section>
  );
};

export default AddNewCarForm;

// const { make, model, years, setMake, setModel, setYears } = useAddCustomerCarStore();

// const {
//   register,
//   handleSubmit,
//   formState: { errors }
// } = useForm();

// const handleMakeChange = (e) => {
//   const newMake = e.target.value;
//   setMake(newMake);
//   setModel(""); // Reset model when changing make
//   setYears(""); // Reset years when changing make
// };

// const handleModelChange = (e) => {
//   const newModel = e.target.value;
//   setModel(newModel);
//   setYears(""); // Reset years when changing model
// };

// const handleYearsChange = (e) => {
//   const newYears = e.target.value;
//   setYears(newYears);
// };

// const makes = [...new Set(data.map((el) => el.make))];
// const models = data.filter((el) => el.make === make).map((el) => el.model);
// const yearsPeriod = [...new Set(data.filter((el) => el.model === model).map((el) => el.productionYears))];

// // const submit = (data) => {
// //   /// Add the check for the VIN befor submitting, and return error if there isn't any

// //   // vinDecoderReq();
// //   console.log(data);
// // };

// <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col py-8 space-y-8">
//   <div className="flex flex-col ">
//     <div className="flex flex-col ">
//       <label>Input VIN number</label>
//       <input {...register("vin")} className="px-2 py-1 border border-gray-300 rounded" />
//     </div>

//     <label htmlFor="make">Make</label>
//     <input defaultValue={"BMW"} {...register("example123", { required: true })} disabled className="px-2 py-1 border border-gray-500 rounded" />
//   </div>

//   <div className="flex flex-col ">
//     <input {...register("example123", { required: true })} className="px-2 py-1 border border-gray-300 rounded" />
//     {errors.example123 && <span className="text-red-600">This field is required</span>}
//   </div>
//   <div className="flex flex-col ">
//     <input {...register("exampleRequired", { required: true })} className="px-2 py-1 border border-gray-300 rounded" />
//     {errors.exampleRequired && <span className="text-red-600">This field is required</span>}
//   </div>
//   <Button type="submit">Submit</Button>
// </form>
