/**
 * create-new-service.jsx
 */

"use client";

import { useMemo, useState } from "react";

const CreateNewService = ({ allCars }) => {
  console.log("AllCars", allCars);

  const [category, setCategory] = useState("");
  const [serviceName, setServiceName] = useState("");
  const [servicePrice, setServicePrice] = useState("");
  const [availableCars, setAvailableCars] = useState(allCars);
  const [selectedCars, setSelectedCars] = useState([]);
  const [carPrices, setCarPrices] = useState({});
  const [filterText, setFilterText] = useState("");
  const [sortBy, setSortBy] = useState(""); // State for sorting
  const [sortOrder, setSortOrder] = useState("asc"); // Sorting order (asc or desc)

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleServiceNameChange = (e) => {
    setServiceName(e.target.value);
  };

  const handleServicePriceChange = (e) => {
    setServicePrice(e.target.value);
  };

  const handleCarSelection = (carId) => {
    // Toggle car selection
    if (selectedCars.includes(carId)) {
      setSelectedCars(selectedCars.filter((id) => id !== carId));
    } else {
      setSelectedCars([...selectedCars, carId]);
    }
  };

  const handleCarPriceChange = (carId, price) => {
    setCarPrices({ ...carPrices, [carId]: price });
  };

  // Filter cars based on filterText
  const filteredCars = availableCars.filter((car) => `${car.make} ${car.model} ${car.year}`.toLowerCase().includes(filterText.toLowerCase()));

  // Memoize sortedCars
  const sortedCars = useMemo(() => {
    return [...filteredCars].sort((a, b) => {
      if (sortBy === "make") {
        return sortOrder === "asc" ? a.make.localeCompare(b.make) : b.make.localeCompare(a.make);
      } else if (sortBy === "model") {
        return sortOrder === "asc" ? a.model.localeCompare(b.model) : b.model.localeCompare(a.model);
      } else if (sortBy === "year") {
        return sortOrder === "asc" ? a.year - b.year : b.year - a.year;
      }
      return 0;
    });
  }, [filteredCars, sortBy, sortOrder]);

  const handleSort = (column) => {
    // Toggle sorting order if the same column is clicked again
    if (sortBy === column) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(column);
      setSortOrder("asc");
    }
  };

  const createService = () => {
    // Here you can send the data (category, serviceName, servicePrice, selectedCars, carPrices) to your server or perform any desired actions
    console.log("Category:", category);
    console.log("Service Name:", serviceName);
    console.log("Service Price:", servicePrice);
    console.log("Selected Cars:", selectedCars);
    console.log("Car Prices:", carPrices);
  };

  return (
    <div className="container mx-auto mt-10 px-4 md:px-0">
      <h1 className="mb-4 text-3xl font-semibold">Create New Service</h1>
      <div className="mb-4">
        <label className="block text-gray-600">Category:</label>
        <input type="text" value={category} onChange={handleCategoryChange} className="w-full rounded-md border px-3 py-2 focus:border-blue-500 focus:outline-none" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-600">Service Name:</label>
        <input type="text" value={serviceName} onChange={handleServiceNameChange} className="w-full rounded-md border px-3 py-2 focus:border-blue-500 focus:outline-none" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-600">Service Price:</label>
        <input type="text" value={servicePrice} onChange={handleServicePriceChange} className="w-full rounded-md border px-3 py-2 focus:border-blue-500 focus:outline-none" />
      </div>
      <div className="mb-4">
        <h2 className="mb-2 text-xl font-semibold">Available Cars:</h2>
        <input
          type="text"
          placeholder="Search by make, model, or year"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
          className="w-full rounded-md border px-3 py-2 focus:border-blue-500 focus:outline-none"
        />
        <div className="overflow-x-auto">
          <table className="mt-2 w-full">
            <thead>
              <tr>
                <th></th>
                <th className="text-left">
                  <button className="text-blue-500 hover:text-blue-700" onClick={() => handleSort("make")}>
                    Make
                  </button>
                </th>
                <th className="text-left">
                  <button className="text-blue-500 hover:text-blue-700" onClick={() => handleSort("model")}>
                    Model
                  </button>
                </th>
                <th className="text-left">
                  <button className="text-blue-500 hover:text-blue-700" onClick={() => handleSort("year")}>
                    Year
                  </button>
                </th>
                <th className="text-left">Price</th>
              </tr>
            </thead>
            <tbody>
              {sortedCars.map((car) => (
                <tr key={car.id}>
                  <td className="text-left">
                    <input type="checkbox" checked={selectedCars.includes(car.id)} onChange={() => handleCarSelection(car.id)} />
                  </td>
                  <td className="text-left">{car.make}</td>
                  <td className="text-left">{car.model}</td>
                  <td className="text-left">{car.productionYears}</td>
                  <td className="text-left">
                    <input
                      type="text"
                      placeholder="Price"
                      value={carPrices[car.id] || ""}
                      onChange={(e) => handleCarPriceChange(car.id, e.target.value)}
                      className={`w-20 rounded-md border px-2 py-1 ${!selectedCars.includes(car.id) ? "bg-gray-200" : ""}`}
                      disabled={!selectedCars.includes(car.id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <button onClick={createService} className="mt-4 rounded-md bg-green-500 px-4 py-2 text-white hover:bg-green-600">
        Create Service
      </button>
    </div>
  );
};

export default CreateNewService;
