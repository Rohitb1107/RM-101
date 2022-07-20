import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

const _DEV_ = document.domain === "localhost";

function App() {
  const [name, setName] = useState("Rohit");

  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load, Are you online?");
      return;
    }

    const options = {
      key: _DEV_ ? "rzp_test_4EbhRhsODRi47M" : "PRODUCTION_KEY",
      amount: "50000",
      currency: "INR",
      name: "Payment",
      description: "Thank you",
      image: "http://localhost:8080/logo.svg",
      order_id: "order_9A33XWu170gUtm",
      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      },
      prefill: {
        name,
        email: "stylishrb711@gmail.com",
        contact: "7999999999",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>Checkout page</h2>
        <button className="App-link" onClick={displayRazorpay} target="_blank">
          Payment
        </button>
      </header>
    </div>
  );
}

export default App;
