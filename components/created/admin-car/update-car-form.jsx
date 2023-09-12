/**
 * car/[carId]/page.jsx
 */

"use client";

import axios from "axios";
import React, { useState } from "react";

const UpdateCarForm = ({ carId, carSpecs }) => {
  const [specs, setSpecs] = useState(carSpecs);

  const handleChange = (section, key, value) => {
    setSpecs((prevSpecs) => ({
      ...prevSpecs,
      [section]: {
        ...prevSpecs[section],
        [key]: value,
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        "/api/admin/update-car-specs",
        {
          carId: carId, // Pass the carId value
          specs: specs, // Pass the updated specs
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(data);

      alert("Car specs updated successfully");
    } catch (error) {
      console.error("Error updating car specs", error);
      alert("Error updating car specs");
    }
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit}>
        {Object.entries(carSpecs).map(([section, sectionData]) => (
          <div key={section}>
            <h3 className="text-xl font-semibold mb-2">{section}</h3>
            {Object.entries(sectionData).map(([key, value]) => (
              <div key={key} className="mb-2">
                <label className="font-semibold">{key}</label>
                <input
                  type="text"
                  value={specs[section][key]} // Use specs instead of value
                  onChange={(e) => handleChange(section, key, e.target.value)}
                  className="border rounded p-1 ml-2"
                />
              </div>
            ))}
          </div>
        ))}
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Update Car Specs
        </button>
      </form>
    </div>
  );
};

export default UpdateCarForm;
