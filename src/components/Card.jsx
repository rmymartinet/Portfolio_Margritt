import { FaRegComment, FaRegHeart } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa6";
import { TbSend } from "react-icons/tb";
import instagramProfile from "../assets/images/about/about2.jpg";

import "./Card.scss";

const Card = ({
  img,
  comName,
  comText,
  comName2,
  comText2,
  comName3,
  comText3,
}) => {
  return (
    <div className="card">
      <div className="card-infos">
        <div className="card-infos-content">
          <div className="card-logo">
            <img src={instagramProfile} alt="" />
          </div>
          <p>Margritt</p>
        </div>
      </div>
      <div className="card-img">
        <img src={img} alt="" />
      </div>
      <div className="card-banner-bottom">
        <div className="logos">
          <div className="like-logo">
            <FaRegHeart />
          </div>
          <div className="comment-logo">
            <FaRegComment />
          </div>
          <div className="send-message-logo">
            <TbSend />
          </div>
          <div className="bookmark-logo">
            <FaRegBookmark />
          </div>
        </div>
        <div className="like-number"> 350 likes</div>
        <div className="comments">
          <div className="com-1">
            <span>{comName}</span>
            <p>{comText}</p>
          </div>
          <div className="com-2">
            <span>{comName2}</span>
            <p>{comText2}</p>
          </div>
          <div className="com-3">
            <span>{comName3}</span>
            <p>{comText3}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
