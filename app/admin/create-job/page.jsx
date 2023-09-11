/**
 * create-job/page.jsx
 */

// "use client";

import { CarsCombobox } from "@/components/created/create-job/combobox-cars";
import WrapperCarsCombobox from "@/components/created/create-job/wrapper-combobox-cars";
import { carsSchema } from "@/components/table/data/schema";
// import { useState } from "react";

const CreateNewJob = () => {
  // State to manage form fields
  // const [formData, setFormData] = useState({
  //   name: "",
  //   category: "",
  //   time: 0,
  //   price: 0,
  // });

  // // Handle form input changes
  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

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

  /////////////////////////////////////////////////////TO DO

  // wrap the client components in a server component and pass down the necessary data: Users (send back up the user id to later search it's car), and cars (based on the user id)

  return (
    <section>
      <h2>Create a New Job</h2>
      {/* <form onSubmit={handleSubmit}> */}
      {/* <CarsCombobox /> */}
      <WrapperCarsCombobox />
      {/* <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="time">Time:</label>
          <input
            type="number"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <button type="submit">Create Job</button>
        </div>
      </form> */}
    </section>
  );
};

export default CreateNewJob;
