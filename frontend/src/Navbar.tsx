//This is my navbar that uses handleButtonClick to set dest value to the value of the button clicked, which then changes the Body component

import Body from "./Body";
import { useState } from "react";

function Navbar() {
  const [dest, setDest] = useState("");

  const handleButtonClick = (value: string) => {
    setDest(value);
  };

  return (
    <>
      <div className="col-4 align-self-center">
        <button
          className={
            dest === "Home"
              ? "btn btn-secondary margin-left mx-2"
              : "btn btn-primary margin-left mx-2"
          }
          onClick={() => handleButtonClick("Home")}
        >
          Home
        </button>

        <button
          className={
            dest === "BurialSummary"
              ? "btn btn-secondary margin-left mx-2"
              : "btn btn-primary margin-left mx-2"
          }
          onClick={() => handleButtonClick("BurialSummary")}
        >
          Burial Summary
        </button>

        <button
          className={
            dest === "SupervisedAnalysis"
              ? "btn btn-secondary margin-left mx-2"
              : "btn btn-primary margin-left mx-2"
          }
          onClick={() => handleButtonClick("SupervisedAnalysis")}
        >
          Supervised Analysis
        </button>

        <button
          className={
            dest === "UnsupervisedAnalysis"
              ? "btn btn-secondary margin-left mx-2"
              : "btn btn-primary margin-left mx-2"
          }
          onClick={() => handleButtonClick("UnsupervisedAnalysis")}
        >
          Unsupervised Analysis
        </button>
        <button
          className={
            dest === "Admin"
              ? "btn btn-secondary margin-left mx-2"
              : "btn btn-primary margin-left mx-2"
          }
          onClick={() => handleButtonClick("Admin")}
        >
          Admin
        </button>
      </div>
      <Body dest={dest} />
    </>
  );
}
export default Navbar;
