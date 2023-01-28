import React from "react";
import { Route, Routes } from "react-router-dom";
import Certificates from "./Certificates";
import Landing from "./Landing";
import Error from "./Error";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Landing />} />
      <Route path="/certificates" element={<Certificates />} />
      <Route path="/certificates/*" element={<Certificates />} />
      <Route path="/*" element={<Error />} />
    </Routes>
  );
};

export default App;
