import React from "react";
import "./card.scss";

const Card = props => {
  return (
    <div class="box_area">
      <h4>{props.name}</h4>
      <div class="box_inner">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img alt="lcard" src={`${props.url}?size=10x10`} />
            </div>
            <div className="flip-card-back">
              <img alt="lcard" src={`${props.url2}?size=10x10`} />
            </div>
          </div>
        </div>
        <p class="box_txt">テキストテキスト</p>
      </div>
    </div>
  );
};

export default Card;
