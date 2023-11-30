import React from "react";
import {Tile} from "../tile/Tile";

export const TileList = ({props}) => {
  return (
    <div>
      <ul>
        {props.map(({name, ...rest}) => {
          return <Tile name={name} description={rest} />
        })}
      </ul>
    </div>
  );
};
