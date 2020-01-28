import React from "react";
import "./CardList.scss";
import Card from "./Card";

export const CardList = props => (
  <div id="wrapper">
    <section id="sub_1">
      <div class="sub_area">
        <div class="inner">
          <h3>ライフプランカード</h3>
          <div class="flex_area">
            {props.cdata.map(card => (
              <Card
                key={card.id}
                name={card.name}
                url={card.url}
                url2={card.url2}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  </div>
);
