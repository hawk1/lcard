import React from "react";
import "./App.scss";
import { CardList } from "./CardList";
import { carddata } from "./carddata.js";
import { DougaList } from "./DougaList";
import { dougadata } from "./dougadata.js";

function App() {
  return (
    <div className="App">
      <CardList cdata={carddata} />
      <DougaList ddata={dougadata} />
    </div>
  );
}

export default App;
