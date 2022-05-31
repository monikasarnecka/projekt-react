import { useEffect } from "react";
import { MemList } from "../components/MemList";

export const Favourite = (props) => {
  useEffect(() => {
    document.title = "Memy - Favourite";
  });

  return (
    <div>
      <div>FAVOURITE</div>
      <MemList 
      mems={props.mems} 
      onUpvoteClick={props.onUpvoteClick} 
      onDownvoteClick={props.onDownvoteClick}
      onFavouriteClick={props.onFavouriteClick} 
      />
    </div>
  );
};


