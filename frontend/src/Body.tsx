import React from "react";
import Home from "./Home";
import Admin from "./Admin";
import BurialSummary from "./BurialSummary";

function Body(props: any) {
  switch (props.dest) {
    case "Home":
      return <Home />;
    case "BurialSummary":
      return <BurialSummary />;
    case "Admin":
      return <Admin />;
    default:
      return <Home />;
  }
}

export default Body;
