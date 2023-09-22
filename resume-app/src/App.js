import React from "react";
import {Routes , Route } from "react-router-dom"
import Resumescore1  from './Components/Resumescore1';
import Resumescore2 from "./Components/Resumescore2";
import Resumescore3  from './Components/Resumescore3';


function App() {
  return (
    <div className="App">
    <Routes>
    <Route path="/" element={<Resumescore1/> } />
    <Route path="/resumescore2" element={<Resumescore2 />}/>
    <Route path="/resumescore3" element={<Resumescore3 />}/>
    </Routes>
    </div>
  );
}
export default App;
