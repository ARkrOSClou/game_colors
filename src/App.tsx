import React from "react";
import "./App.css";
import ColorField from "./colorGame/jsx/colorField";
import { fieldColors } from "./colorGame/utils";

function App() {
  const colors = fieldColors();

  return (
    <div className="App">
      <ColorField colors={colors} />
    </div>
  );
}

export default App;
