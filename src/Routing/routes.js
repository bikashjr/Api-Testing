import {Routes, Route } from "react-router-dom";
import { CardDetails } from "../components/CardDetails";
import { CardApi } from "../components/Card";

export const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<CardApi />}  />
        <Route path="/card/:id" element={<CardDetails />} />
      </Routes>
    </>
  );
};
