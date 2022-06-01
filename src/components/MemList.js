import { Mem } from "./Mem";

export const MemList = (props) => {
  return (
    <div>
      {props.mems.map((mem) => (
        <Mem
          mem={mem}
          onUpvoteClick={() => props.onUpvoteClick(mem)}
          onDownvoteClick={() => props.onDownvoteClick(mem)}
          onFavouriteClick={() => props.onFavouriteClick(mem)}
        />
      ))}
    </div>
  );
};
