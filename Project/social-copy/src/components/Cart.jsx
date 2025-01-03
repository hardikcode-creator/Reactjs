import { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { PostLst } from "../store/post-list-store";
const Post=({ post })=>{
  const {deletePost}=useContext(PostLst);
    return (
    <div className="card post-card" >

  <div className="card-body">
    <h5 className="card-title">{post.title}
    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
    onClick={()=>deletePost(post.id)}>
    <TiDelete/>
  </span>
    </h5>
    <p className="card-text">{post.body}</p>
    {post.tags.map((tag)=>( <span key={tag} className="badge text-bg-primary hash-tag">{tag}</span>))}
 
  <div className="alert alert-success reactions" role="alert">
    Reacted by:{post.reactions.likes}
    </div>
  </div>
</div>
);
}
export default Post;