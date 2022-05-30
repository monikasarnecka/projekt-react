import { Routes, Route, Link } from "react-router-dom";
import { Hot } from "./Pages/Hot";
import React, { useEffect, useState } from "react";
import { Regular } from "./Pages/Regular";
import { MemStore } from "./store/memStore";


export default function App() {
  return (
    <div className="App">
      <div>
        <Link to="/">Regular</Link>
        <Link to="/hot">Hot</Link>
      </div>
      <Routes>
        <Route path="/" element={<Regular mems={MemStore} />} />
        <Route path="/hot" element={<Hot mems={MemStore} />} />
      </Routes>
    </div>
  );
}
