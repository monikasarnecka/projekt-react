import { render, screen } from "@testing-library/react";
import { Routes, Route, Link } from "react-router-dom";
import { Hot } from "./Pages/Hot";
import React, { useEffect, useState } from "react";
import { Mem } from "./Pages/Regular";
import { MemList } from "./components/MemList";

export default function App() {
  return (
    <div>
      Lista memów
      <MemList mems={Mem} />
    </div>
  );
}
