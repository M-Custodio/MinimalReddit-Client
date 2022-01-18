import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadPosts } from "../../store/posts/postSlice";
import { Post } from "./postComponent";

export const Posts = () => {
  const dispatch = useDispatch();
  const { posts, isLoading } = useSelector((state) => state.allPosts);

  useEffect(() => {
    dispatch(loadPosts());
  }, [dispatch]);

  if (isLoading) return <p>Loading</p>;
  return (
    <div>
      {posts.map((post, index) => (
        <Post 
          key={`post-${index}`} 
          data={post}
        >
        </Post>
      ))}
    </div>
  );
};
