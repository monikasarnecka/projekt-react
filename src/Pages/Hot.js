import { useEffect } from "react";
import { MemList } from "../components/MemList";

export const Hot = (props) => {
  useEffect(() => {
    document.title = "Memy - Hot";
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
