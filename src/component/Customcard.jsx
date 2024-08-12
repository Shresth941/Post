import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import {  PostList } from "../store/post"; 

const  Post= ({post}) => {
    const { deletePost } = useContext(PostList);  // Use PostContext

    return (
        
            <div className="card" style={{ width: "30rem" }}>
                <div className="card-body" >
                    <MdDelete className="delete" onClick={() => deletePost(post.id)}/>
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text">{post.body}</p>
                    {post.tags.map(tag => (
                        <span key={tag} className="badge rounded-pill text-bg-primary hastag">{tag}</span>
                    ))}
                    <div className="alert alert-success reaction" role="alert">
                        {post.reactions} have reacted to your post
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            {post.reactions}
                            <span className="visually-hidden">unread messages</span>
                        </span>
                    </div>
                </div>
            </div>
        
    );
};

export default Post;
