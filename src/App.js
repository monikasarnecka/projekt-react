import { Routes, Route, Link } from "react-router-dom";
import { Hot } from "./Pages/Hot";
import React, { useEffect, useState } from "react";
import { Regular } from "./Pages/Regular";
import { MemStore } from "./store/memStore";

export default function App() {

  const handleClickUpvote = (mem) => {
    console.log("kliknięto Upvotes:" + mem.title);
  }

  const handleClickDownvote = (mem) => {
    console.log("kliknięto Dawnvotes" + mem.title);
  }

  return (
    <div className="App">
      <div>
        <Link to="/">Regular</Link>
        <Link to="/hot">Hot</Link>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <Regular
              mems={MemStore}
              onUpvoteClick={handleClickUpvote}
              onDownvoteClick={handleClickDownvote}
            />
          }
        />
        <Route
          path="/hot"
          element={
            <Hot
              mems={MemStore}
              onUpvoteClick={handleClickUpvote}
              onDownvoteClick={handleClickDownvote}
            />
          }
        />
      </Routes>
    </div>
  );
}
