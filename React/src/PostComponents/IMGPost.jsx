import React from "react";
import "./IMGPostStyle.css";
import {useNavigate} from "react-router-dom";

import contentIMG from "./image 33.png"
import { useLinkClickHandler } from "react-router-dom";

const IMGPost = (props) => {

  const navigate = useNavigate();

  const clickHandler = (e) => {
    navigate(`/postreview/${props.id}`)
  }

  return (
    <div className="IMG-frame" onClick={clickHandler}>
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <div className="text-wrapper">By {props.owner}</div>
          <div className="div">{props.description}</div>
          <div className="text-wrapper-2">{props.title}</div>
          <div className="resource-IMG" style={{backgroundImage: 'url(' + props.image + ')'}} /> 
        </div>
      </div>
    </div>
  );
};

export default IMGPost;