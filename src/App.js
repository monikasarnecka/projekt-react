import { Routes, Route, Link, BrowserRouter, useLocation, matchPath } from "react-router-dom";
import { Hot } from "./Pages/Hot";
import React from "react";
import { Regular } from "./Pages/Regular";
import { MemStore } from "./store/memStore";
import { Favourite } from "./Pages/Favourite";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { AppBar } from "@mui/material";

export default function App() {
  const [memsRegular, setMemsRegular] = React.useState(
    MemStore.filter(isRegularMem)
  );
  const [memsHot, setMemsHot] = React.useState(MemStore.filter(isHotMem));
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

  function useRouteMatch(patterns) {
    const { pathname } = useLocation();
  
    for (let i = 0; i < patterns.length; i += 1) {
      const pattern = patterns[i];
      const possibleMatch = matchPath(pattern, pathname);
      if (possibleMatch !== null) {
        return possibleMatch;
      }
    }
  
    return null;
  }

  const routeMatch = useRouteMatch(['/', '/hot', '/favourite']);
  const currentTab = routeMatch?.pattern?.path;

  return (
    <div className="App">
      <div class="navigation">
        <Box sx={{ width: "100%", bgcolor: "#a5b6c4" }}>
          <Tabs value={currentTab} centered>
            <Tab label="Regular" value="/" to="/" component={Link}/>
            <Tab label="Hot" value="/hot" to="/hot" component={Link}/>
            <Tab label="Favourite" value="/favourite" to="/favourite" component={Link}/>
          </Tabs>
        </Box>
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
          path="/favourite"
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
