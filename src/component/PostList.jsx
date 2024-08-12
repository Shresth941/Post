import { useContext } from "react";
import Post from "./Customcard";
import { PostList as PostListData } from "../store/post";

const PostList = () => {
  const { postList } = useContext(PostListData);
  return (
    <>
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostList;
