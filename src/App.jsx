import React, { useEffect } from "react";
import "./App.css";
import { Nav } from "./components/navComponent/navComponent";
import { Posts } from "./components/postsComponent/postsComponent";
import { Subreddits } from "./components/subredditsComponent/subredditsComponent";
import { useDispatch, useSelector } from "react-redux";
import { loadPosts } from "./store/posts/postSlice";

export const App = () => {
  return (
    <div className="App">
      <Nav></Nav>
      <div className="container-fluid">
        <div className="row">
          <div className="col-8">
            <Posts />
          </div>
          <div className="col-4">
            <Subreddits></Subreddits>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
