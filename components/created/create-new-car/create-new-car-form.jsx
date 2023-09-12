/**
 * create-new-car-form.jsx
 */

"use client";

const createCar = async (data) => {
  try {
    const response = await fetch("/api/admin/create-new-car", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      console.log("Car created succcesfully!!!");
      // const newCar = await response.json();
      // router.push(`/cars/${newCar.id}`);
    } else {
      throw new Error("Failed to create car");
    }
  } catch (error) {
    console.error(error);
  }
};

import { useRouter } from "next/navigation";
import { useState } from "react";

const CreateNewCarForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    make: "",
    model: "",
    year: "",
    ownerId: null, // Set this to the selected owner's ID
    specs: {}, // Initialize specs object as needed
    picture: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createCar(formData);
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label>
          Make:
          <input
            type="text"
            name="make"
            value={formData.make}
            onChange={handleChange}
          />
        </label>
        <label>
          Model:
          <input
            type="text"
            name="model"
            value={formData.model}
            onChange={handleChange}
          />
        </label>
        <label>
          Year:
          <input
            type="number"
            name="year"
            value={formData.year}
            onChange={handleChange}
          />
        </label>
        {/* Include other form fields here */}
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default CreateNewCarForm;
