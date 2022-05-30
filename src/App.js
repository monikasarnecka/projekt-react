import { Routes, Route, Link } from "react-router-dom";
import { Hot } from "./Pages/Hot";
import React from "react";
import { Regular } from "./Pages/Regular";
import { MemStore } from "./store/memStore";

export default function App() {
  const [memsRegular, setMemsRegular] = React.useState(MemStore.filter(isRegularMem));
  const [memsHot, setMemsHot] = React.useState(MemStore.filter(isHotMem));

  const handleClick = (clickedMem, updateMem) => {
    let newMems = memsRegular.concat(memsHot);
    const memIndex = newMems.findIndex((m) => m.title == clickedMem.title);
    updateMem(newMems[memIndex]);

    setMemsRegular(newMems.filter(isRegularMem));
    setMemsHot(newMems.filter(isHotMem));
  };
  
  const handleClickUpvote = (clickedMem) => {
    handleClick(clickedMem, (mem) => {
      mem.upvotes = mem.upvotes + 1;
    });
  };

  const handleClickDownvote = (clickedMem) => {
    handleClick(clickedMem, (mem) => {
      mem.downvotes = mem.downvotes + 1;
    });
  };

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
              mems={memsRegular}
              onUpvoteClick={handleClickUpvote}
              onDownvoteClick={handleClickDownvote}
            />
          }
        />
        <Route
          path="/hot"
          element={
            <Hot
              mems={memsHot}
              onUpvoteClick={handleClickUpvote}
              onDownvoteClick={handleClickDownvote}
            />
          }
        />
      </Routes>
    </div>
  );
}

function isRegularMem(mem) {
  return mem.upvotes - mem.downvotes <= 5;
}

function isHotMem(mem) {
  return mem.upvotes - mem.downvotes > 5;
}
