import React from "react";
import { MemList } from "../components/MemList";

export const Regular = (props) => {
  return (
    <div>
      <div>REGULAR</div>
      <MemList
        mems={props.mems}
        onUpvoteClick={props.onUpvoteClick}
        onDownvoteClick={props.onDownvoteClick}
      />
    </div>
  );
};
