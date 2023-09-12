/**
 * wrapper-combobox-cars.jsx
 */

"use client";

import { CarsCombobox } from "@/components/created/create-job/combobox-cars";
import { carsSchema } from "@/components/table/data/schema";
import { useState } from "react";

const WrapperCarsCombobox = ({ users }) => {
  // State to manage form fields
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    user: "",
    time: 0,
    price: 0,
  });

  // // Handle form submission
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Send formData to your backend API to create a new job
  //   // You can use Axios or fetch to make the API request
  //   // Example:
  //   // fetch("/api/admin/create-new-job", {
  //   //   method: "POST",
  //   //   body: JSON.stringify(formData),
  //   //   headers: {
  //   //     "Content-Type": "application/json",
  //   //   },
  //   // })
  //   //   .then((response) => response.json())
  //   //   .then((data) => {
  //   //     // Handle success or error

  //   //     console.log(data);
  //   //   })
  //   //   .catch((error) => {
  //   //     // Handle error
  //   //     console.log(error);
  //   //   });
  // };

  console.log(formData);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <section>
      <CarsCombobox setFormData={setFormData} users={users} />

      {/* Create the rest of the form */}
    </section>
  );
};

export default WrapperCarsCombobox;
