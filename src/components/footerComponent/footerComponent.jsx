import React from "react";
import numbro from "numbro";

export const Footer = ({ author, date, commentCount }) => {
  return (
    <div className="row">
      <p className="col-4 text-start">{author}</p>
      <p className="col-4 text-center">{date}</p>
      <p className="col-4 text-end">
        {numbro(commentCount).format({
          average: true,
          totalLength: 2,
        })}
      </p>
    </div>
  );
};
