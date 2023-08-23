import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import ReactCounterApp from "./components/ReactCounterApp/ReactCounterApp";
import UseTimeOut from "./components/UseTimeOut/UseTimeOut";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="reactCounterApp" element={<ReactCounterApp />} />
        <Route path="useTimeOut" element={<UseTimeOut />} />
      </Route>
    </Routes>
  );
};

export default App;
