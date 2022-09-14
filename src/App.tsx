import React, { useEffect } from "react";
import './App.css';

//-------------------------------------------------#
//import the clas you are currently working on here#
//-------------------------------------------------#
//import { BasicScene } from "./BabylonExamples/BasicScene";

function App() {
  useEffect(() => {
    // Update the document title using the browser API
    const canvas = document.querySelector('canvas')!;

    //create instance of the class as follows
    //new BasicScene(canvas);
  },[]); 
  return (
    <div className="App">
      <h3>
        Babylon Examples
      </h3>
      <canvas className="babylon-canvas"></canvas>
    </div>
  );
}

export default App;
