import React from "react";
import { Routes, Route } from "react-router-dom";

import Index from "../pages/Index";
import Page404 from "../pages/Page404";
import Create from "../pages/Create";
import Edit from "../pages/Edit";
import Delete from "../pages/Delete";

export default function Rout() {
  return (
    <Routes>
      <Route exact path="/" element={<Index />} />
      <Route exact path="/insert" element={<Create />} />
      <Route exact path="/edit/:id" element={<Edit />} />
      <Route exact path="/delete/:id" element={<Delete />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}
