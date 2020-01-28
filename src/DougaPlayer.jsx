import React from "react";
import ReactPlayer from "react-player";

const DougaPlayer = props => {
  return (
    <div>
      <h2>{props.name}</h2>
      <ReactPlayer controls url={props.url} />,
    </div>
  );
};

export default DougaPlayer;
