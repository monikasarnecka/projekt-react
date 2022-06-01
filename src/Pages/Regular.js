import React, { useEffect } from "react";
import { MemList } from "../components/MemList";

export const Regular = (props) => {
  useEffect(() => {
    document.title = "Memy - Regular";
  });

  return (
    <div>
      <MemList
        mems={props.mems}
        onUpvoteClick={props.onUpvoteClick}
        onDownvoteClick={props.onDownvoteClick}
        onFavouriteClick={props.onFavouriteClick}
      />
    </div>
  );
};
