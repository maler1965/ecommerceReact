import React from "react";//
import ProfileInfo from "../../components/profile/ProfileInfo";//
//import { setPost } from "./../../store/slices/posts.slice";//
//import { getMyPostsThunk } from "../../store/slices/myPosts.slice";//
//import { useDispatch } from "react-redux";//
import PostUserCard from "./../../components/userId/PostUserCard";//
import { useSelector } from "react-redux";//


export const Profile = () => {
  //const dispatch = useDispatch();
  //dispatch(getMyPostsThunk())

  const { user, myPosts } = useSelector((state) => state);
 // const { user} = useSelector((state) => state);

  //const { myPosts } = useSelector((setPost) => state);
   /*
  const myPosts = {
    posts: ["Pedro Cev",  "Cristobal Cev"]
   } */

  console.log({ user })
  console.log({ myPosts})

  return (
    <div className="postid_content">
      <ProfileInfo user={user} />

      <div className="postid__history bg_grey">
        {myPosts?.posts?.map((post) => (
          <PostUserCard post={post} key={post.id} />
        ))}
      </div>

    </div>
  );
};
