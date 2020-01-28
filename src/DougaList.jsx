import React from "react";
import DougaPlayer from "./DougaPlayer";

export const DougaList = props => (
  <div>
    {props.ddata.map(douga => (
      <DougaPlayer key={douga.id} name={douga.name} url={douga.url} />
    ))}
  </div>
);
