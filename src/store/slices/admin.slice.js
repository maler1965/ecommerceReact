import React from 'react'

import { createSlice } from "@reduxjs/toolkit";//
import blogApi from "../../api/blog"; //

console.log(" estoy en inicio de admin.slice.js");

const adminSlice = createSlice({
  name: 'myPosts',
  initialState: 'myPosts',
  reducers: {
    setMyPost: (state, action) => action.payload
  }
})

export const { setMyPost } = myPostsSlice.actions

console.log(" estoy en final de admin.slice.js");

export default adminSlice









