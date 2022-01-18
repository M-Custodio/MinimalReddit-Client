import React from "react";
import numbro from "numbro";

export const Upvotes = ({ upvotes }) => {
  return (
    <div>
      <p>
        {numbro(upvotes).format({
          average: true,
          totalLength: 2,
        })}
      </p>
    </div>
  );
};
