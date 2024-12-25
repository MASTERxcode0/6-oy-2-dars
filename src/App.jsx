import React from "react";
import "./App.css";
import FamousCities from "./component/FamousCities";
import HelloWorld from "./component/HelloWorld";
import Card from "./component/Card";
import Colors from "./component/Colors";
import WeekDays from "./component/WeekDays ";
import GreetingCard from "./component/GreetingCard";
import SeasonColors from "./component/SeasonColors";
import SimpleMenu from "./component/SimpleMenu";

function App() {
  return (
    <div className="div">
      <HelloWorld />
      <Card />
      <Colors />
      <WeekDays />
      <GreetingCard />
      <FamousCities />
      <SeasonColors />
      <SimpleMenu />
    </div>
  );
}

export default App;
