import React from "react";
import { sections } from "./App.constants";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <div className="App">
      <Header sections={sections} />
      <LandingPage />
      <Footer />
    </div>
  );
}

export default App;
