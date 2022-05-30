import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Mem = (props) => {

  return (
    <div class="MemContainer">
      <div class="MemTitle">{props.mem.title}</div>
      <img key={props.mem.img} src={props.mem.img} />
      <div>
        <div>
          Upvotes: {props.mem.upvotes}{" "}
          <FontAwesomeIcon icon={faArrowUp} onClick={props.onUpvoteClick} />
        </div>
        <div>
          Downvotes: {props.mem.downvotes}{" "}
          <FontAwesomeIcon icon={faArrowDown} onClick={props.onDownvoteClick} />
        </div>
      </div>
    </div>
  );
};