import { Routes, Route, Link } from "react-router-dom";
import { Hot } from "./Pages/Hot";
import React from "react";
import { Regular } from "./Pages/Regular";
import { MemStore } from "./store/memStore";
import { Favourite } from "./Pages/Favourite";

export default function App() {
  const [memsRegular, setMemsRegular] = React.useState(
    MemStore.filter(isRegularMem)
  );
  const [memsHot, setMemsHot] = React.useState(
    MemStore.filter(isHotMem)
    );
  const [memsFavourite, setMemsFavourite] = React.useState(
    MemStore.filter(isFavouriteMem)
  );

  const handleClick = (clickedMem, updateMem) => {
    let newMems = memsRegular.concat(memsHot);
    const memIndex = newMems.findIndex((m) => m.title == clickedMem.title);
    updateMem(newMems[memIndex]);

    setMemsRegular(newMems.filter(isRegularMem));
    setMemsHot(newMems.filter(isHotMem));
    setMemsFavourite(newMems.filter(isFavouriteMem));
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

  const favouriteClick = (clickedMem) => {
    handleClick(clickedMem, (mem) => {
      mem.favourite = !mem.favourite;
    });
  };

  return (
    <div className="App">
      <div>
        <Link to="/">Regular</Link>
        <Link to="/hot">Hot</Link>
        <Link to="/favourite">Favourite</Link>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <Regular
              mems={memsRegular}
              onUpvoteClick={handleClickUpvote}
              onDownvoteClick={handleClickDownvote}
              onFavouriteClick={favouriteClick}
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
              onFavouriteClick={favouriteClick}
            />
          }
        />
        <Route
          path="favourite"
          element={
            <Favourite
              mems={memsFavourite}
              onUpvoteClick={handleClickUpvote}
              onDownvoteClick={handleClickDownvote}
              onFavouriteClick={favouriteClick}
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

function isFavouriteMem(mem) {
  return mem.favourite;
}
