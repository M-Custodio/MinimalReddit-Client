import React, { useEffect } from "react";
import { Upvotes } from "../upvotesComponent/upvotesComponent";
import { Footer } from "../footerComponent/footerComponent";

export const Post = ({ data }) => {

  const{ups,url,title,author,created_utc,num_comments} = data.data

  return (
    <div className="row p-5">
      <div className="col-2">
        <Upvotes
          upvotes={ups}
        ></Upvotes>
      </div>
      <div className="col-10">
        <h2>{title}</h2>
        <img src={url} alt="" />
        <hr />
        <Footer
          author={author}
          date={created_utc}
          commentCount={num_comments}
        ></Footer>
      </div>
    </div>
  );
};
