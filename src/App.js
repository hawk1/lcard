import React from "react";
import "./App.scss";
import { Card } from "./card";
import { CardList } from "./cardlist";
import { carddata } from "./carddata.js";

function App() {
  return (
    <div className="App">
      {/* <Card cdata={carddata[0]} />
      <Card cdata={carddata[1]} />
      <Card cdata={carddata[2]} /> */}
      <CardList cdata={carddata} />>
    </div>
  );
}

export default App;
