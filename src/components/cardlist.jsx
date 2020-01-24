import React from "react";
import "./cardlist.scss";

export const CardList = props => (
  <div id="wrapper">
    <section id="sub_1">
      <div class="sub_area">
        <div class="inner">
          <h3>ライフプランカード</h3>
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
        </div>
      </div>
    </section>
  </div>
);
