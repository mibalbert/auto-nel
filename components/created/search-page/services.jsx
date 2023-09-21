/**
 * services.jsx
 */

const services = [
  { id: 1, name: "Oil Change", price: 50 },
  { id: 2, name: "Brake Inspection and Repair", price: 100 },
  { id: 3, name: "Tire Rotation and Balancing", price: 60 }
  // Add more services from your list here
];

const Services = () => {
  return (
    <div>
      {services.map((el, idx) => {
        return (
          <div key={idx}>
            <div>{el.name}</div>
            <div>{el.price}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Services;
