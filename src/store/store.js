import {
  configureStore,
} from "@reduxjs/toolkit";
import allPostsReducer from "./posts/postSlice";

export default configureStore({
  reducer: {
    allPosts: allPostsReducer
  },
})