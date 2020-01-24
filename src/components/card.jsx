import React from "react";
import "./card.scss";

export const Card = props => (
  <div class="flex_area">
    <section class="box_area">
      <h4>小見出し</h4>
      <div class="box_inner">
        <p class="box_img">
          <img src="./img01.png" alt="no image"></img>
        </p>
        <p class="box_txt">テキストテキスト</p>
      </div>
    </section>
  </div>
);
