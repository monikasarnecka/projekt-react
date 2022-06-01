import {
  faCircleArrowDown,
  faCircleArrowUp,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import Badge from "@mui/material/Badge";

library.add(faStar, faStarRegular);

export const Mem = (props) => {
  const favouriteIcon = props.mem.favourite ? ["fas", "star"] : ["far", "star"];

  return (
    <div class="MemContainer">
      <div class="MemTitle">{props.mem.title}</div>
      <img key={props.mem.img} src={props.mem.img} />
      <div class="iconMenu">
        <div class="iconArrow">
          <div class="iconArrowUp">
            <Badge badgeContent={props.mem.upvotes} color="primary">
              <FontAwesomeIcon
                icon={faCircleArrowUp}
                onClick={props.onUpvoteClick}
                size="2x"
                color="#485f6f"
              />
            </Badge>
          </div>
          <div class="iconArrowDown">
            <Badge badgeContent={props.mem.downvotes} color="primary">
              <FontAwesomeIcon
                icon={faCircleArrowDown}
                onClick={props.onDownvoteClick}
                size="2x"
                color="#485f6f"
              />
            </Badge>
          </div>
        </div>
        <div class="iconFavourite">
          <FontAwesomeIcon
            icon={favouriteIcon}
            onClick={props.onFavouriteClick}
            size="2x"
            color="#485f6f"
          />
        </div>
      </div>
    </div>
  );
};
