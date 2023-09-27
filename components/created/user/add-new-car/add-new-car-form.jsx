/**
 * add-new-car-form.jsx
 */

"use client";

import "../../../css/loading-spinner.css";

import { vinDecoderReq, indvDetailsReq } from "./form-actions";

import { experimental_useFormState as useFormState } from "react-dom";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const initialState = {
  error: null,
  message: null,
  make: null,
  model: null,
  year: null
};
const carIndvDetailsInitialState = {
  error: null,
  message: null,
  make: null,
  model: null,
  year: null
};

const AddNewCarForm = ({ data, className }) => {
  const [state, formAction] = useFormState(vinDecoderReq, initialState);
  const [carIndvDetails, formCarIndvDetailsAction] = useFormState(indvDetailsReq, carIndvDetailsInitialState);

  const SubmitButton = () => {
    const { pending } = useFormStatus();

    pending ? formAction(initialState) : null;

    return (
      <Button disabled={pending} variant="outline" className={`submit-button disabled:bg-neutral-700  ${pending ? "loading" : ""}`}>
        {pending ? <div className="spinner"></div> : "Search by VIN"}
      </Button>
    );
  };

  return (
    <section className={cn("", className)}>
      <div className="oo">Form</div>

      <form action={formAction} className="flex flex-col space-y-8 py-8">
        {/* <form onSubmit={handleSubmit(vinDecoderReq)} className="flex flex-col py-8 space-y-8"> */}

        <div>You can search by VIN</div>

        <div className="flex h-full w-full items-center justify-center">
          <div className="flex w-full flex-1  flex-col ">
            <label>Input VIN number</label>
            <input name="vin" required className="rounded border border-gray-300 px-2 py-1" />
            <p className="text-sm text-red-500">{state?.error}</p>
          </div>
          <div className="flex h-full w-full items-center justify-center">
            <SubmitButton className="" />
          </div>
        </div>

        <div className="flex flex-col ">
          <label>Input VIN number</label>
          <input type="text" defaultValue={state?.make ?? ""} />
        </div>
        <div className="flex flex-col ">
          <label>Input VIN number</label>
          <input type="text" defaultValue={state?.model ?? ""} />
        </div>
        <div className="flex flex-col ">
          <label>Input VIN number</label>
          <input type="text" defaultValue={state?.year ?? ""} />
        </div>
        {state.amke ? (
          <div>
            <input />
            <input />
            <input />
          </div>
        ) : (
          <></>
        )}
      </form>

      {/* <form action={formCarIndvDetailsAction} className={cn("flex flex-col space-y-5 py-8", state.make ? "block" : "hidden")}> */}
      <form action={formCarIndvDetailsAction} className="flex flex-col space-y-5">
        <div className="flex flex-col">
          <label>Km</label>
          <input className="" />
        </div>
        <div className="flex flex-col">
          <label>Fuel Type</label>
          <input className="" />
        </div>
        <div className="flex flex-col">
          <label>Carosery</label>
          <input className="" />
        </div>
        {state.make !== null ? <Button>Create New Car</Button> : <Button disabled={true}>Please complete the form</Button>}
      </form>
    </section>
  );
};

export default AddNewCarForm;
