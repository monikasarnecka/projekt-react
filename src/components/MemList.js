import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Mem } from "./Mem";

export const MemList = (props) => {
  return (
    <div>
      {props.mems.map((mem) => (
        <Mem mem={mem} />
      ))}
    </div>
  );
};
