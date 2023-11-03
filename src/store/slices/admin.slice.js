import React from 'react'

import { createSlice } from "@reduxjs/toolkit";//
import blogApi from "../../api/blog"; //

const adminSlice = createSlice({
  name: 'myPosts',
  initialState: 'myPosts',
  reducers: {
    setMyPost: (state, action) => action.payload
  }
})

export const { setMyPost } = myPostsSlice.actions

export default adminSlice









