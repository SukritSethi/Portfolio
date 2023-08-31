import React from "react";

import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Certificates from "./container/Certificates/Certificates";

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/certificates" element={<Certificates />} />
    <Route path="/certificates/*" element={<Certificates />} />
  </Routes>
);

export default App;
