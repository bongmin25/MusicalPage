import React from "react";
import Navbar from "./components/Navbar";
import SubscriptionForm from "./components/SubscriptionForm";
import Shows from "./components/Shows";

const App = () => {
  return (
    <>
      <Navbar />
      <SubscriptionForm />
      <Shows />
    </>
  );
};

export default App;
