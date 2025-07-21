import React from "react";

const services = [
  { id: 1, name: "Plumbing Service", price: 500 },
  { id: 2, name: "Electrician Service", price: 700 },
  { id: 3, name: "Cleaning Service", price: 400 },
];

function UserDashboard() {
  const handleBook = (service) => {
    alert(`Booked: ${service.name} for ₹${service.price}`);
  };

  return (
    <div className="container mt-5">
      <h2>User Dashboard</h2>
      <ul className="list-group">
        {services.map(service => (
          <li
            key={service.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            {service.name} - ₹{service.price}
            <button
              className="btn btn-primary btn-sm"
              onClick={() => handleBook(service)}
            >
              Book
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserDashboard;
