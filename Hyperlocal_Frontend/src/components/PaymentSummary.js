import React from "react";

function PaymentSummary() {
  const payment = { service: "Plumbing Service", amount: 500, status: "Paid" };

  return (
    <div className="container mt-5">
      <h2>Payment Summary</h2>
      <div className="card p-3">
        <h5>Service: {payment.service}</h5>
        <h5>Amount: ₹{payment.amount}</h5>
        <h5>Status: {payment.status}</h5>
      </div>
    </div>
  );
}

export default PaymentSummary;
