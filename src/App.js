import React from "react";
import "./styles/app.scss";
import "./data";

import Song from "./components/Song";
import Controls from "./components/Controls";

function App() {
  return (
    <div className="App">
      <Song />
      <Controls />
    </div>
  );
}

export default App;
