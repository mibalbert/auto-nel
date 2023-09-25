/**
 * car/[carId]/page.jsx
 */

const getData = async (id) => {
  const curedId = id.split("%")[0];
  const data = await fetch("http://localhost:3000/api/user/get-customer-car", {
    method: "POST",
    headers: {
      // Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    // body: JSON.stringify(email)
    body: JSON.stringify({ carId: curedId })
  });

  return await data.json();
};

const CustomerCar = async ({ params }) => {
  const data = await getData(params.carId);

  return <section className="max-w-2xl overflow-hidden">{JSON.stringify(data)}</section>;
};

export default CustomerCar;
