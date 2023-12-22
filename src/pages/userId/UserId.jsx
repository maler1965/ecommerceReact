import React from "react";//
import "./../postId/postId.css";//
import UserInfo from "../../components/postId/UserInfo";//
import postId from "../../devData/postId.json";
import PostUserCard from "./../../components/userId/PostUserCard";//

export const UserId = () => {

  console.log("estoy en inicio de  UserId.jsx  ")
  console.log("estoy en final de  UserId.jsx  ")

  return (

    <div className="postid_content">
      <UserInfo postId={postId} />

      <div className="postid__history">
        <PostUserCard post={postId} />
      </div>
      
    </div>
  );
};
