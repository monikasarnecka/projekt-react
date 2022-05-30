import { MemList } from "../components/MemList";

export const Favourite = (props) => {
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


