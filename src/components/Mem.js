import {
  faArrowDown,
  faArrowUp,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faStar, faStarRegular);

export const Mem = (props) => {
  const favouriteIcon = props.mem.favourite ? ["fas", "star"] : ["far", "star"];

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
        <div>
          <FontAwesomeIcon icon={favouriteIcon} color="grey" onClick={props.onFavouriteClick} />
        </div>
      </div>
    </div>
  );
};
