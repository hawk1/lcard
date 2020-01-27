import React from "react";
import "./card.scss";

export const Card = ({ cdata }) => {
  return (
    <div class="flex_area">
      <section class="box_area">
        <h4>小見出し{cdata.name}</h4>
        <div class="box_inner">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img alt="lcard" src={`${cdata.url}?size=10x10`} />
              </div>
              <div className="flip-card-back">
                <img alt="lcard" src={`${cdata.url2}?size=10x10`} />
              </div>
            </div>
          </div>
          <p class="box_txt">テキストテキスト</p>
        </div>
      </section>
    </div>
  );
};
