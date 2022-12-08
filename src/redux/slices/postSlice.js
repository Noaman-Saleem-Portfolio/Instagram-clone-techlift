import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

const postSlice = createSlice({
  name: "postData",
  initialState: {
    data: [],
    status: STATUSES.IDLE,
  },
  reducers: {
    setPosts(state, action) {
      state.data = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
  //   extraReducers: (builder) => {
  //     builder
  //       .addCase(fetchProducts.pending, (state, action) => {
  //         state.status = STATUSES.LOADING;
  //       })
  //       .addCase(fetchProducts.fulfilled, (state, action) => {
  //         state.data = action.payload;
  //         state.status = STATUSES.IDLE;
  //       })
  //       .addCase(fetchProducts.rejected, (state, action) => {
  //         state.status = STATUSES.ERROR;
  //       });
  //   },
});

export const { setPosts, setStatus } = postSlice.actions;
export default postSlice.reducer;

// Thunks
// export const fetchProducts = createAsyncThunk("products/fetch", async () => {
//   const res = await fetch("https://fakestoreapi.com/products");
//   const data = await res.json();
//   return data;
// });

export function fetchPosts() {
  return async function fetchPostThunk(dispatch, getState) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      //   const res = await fetch("http://localhost:8000/posts");
      // const data = await res.json();
      const response = await axios.get("http://localhost:8000/posts");
      //   console.log(response.data);
      dispatch(setPosts(response.data));
      dispatch(setStatus(STATUSES.IDLE));
    } catch (err) {
      console.log(err);
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}
