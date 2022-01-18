import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchPopularPosts } from "../../utils/api";

export const loadPosts = createAsyncThunk("allPosts/getAllPosts", async () => {
  const data = await fetchPopularPosts();
  return data
});

export const allPostsSlice = createSlice({
  name: "allPosts",
  initialState: {
    posts: [],
    isLoading: true,
    hasError: false,
  },
  reducers: {},
  extraReducers: {
    [loadPosts.pending]: (state,action) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [loadPosts.fulfilled]: (state,action) => {
      state.posts = action.payload
      state.isLoading = false;
      state.hasError = false;
    },
    [loadPosts.rejected]: (state,action) => {
      state.isLoading = false;
      state.hasError = true;
    }
  }
});

export default allPostsSlice.reducer;