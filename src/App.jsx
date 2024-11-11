import React from "react";
import RegisterPage from "./components/RegisterPage";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const gradientStyle = {
    minHeight: "100vh",
    background: "linear-gradient(#2b1055, #7597de)",
    backgroundAttachment: "fixed",
  };

  return (
    <>
      <div style={gradientStyle} className="h-full">
        <Page1 />

        {/* Assign an id to Page2 */}
        <div id="Page2">
          <Page2 />
        </div>  

        <Footer />
      </div>
    </>
  );
}

export default App;
