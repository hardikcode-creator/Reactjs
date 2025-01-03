// import { useContext , useRef } from "react";
// import { PostLst} from "../store/post-list-store";

import { redirect } from "react-router-dom";
import { Form } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
const CreatePost=()=>{
//   const {addPost}=useContext(PostLst);
//   const userId=useRef();
//   const title=useRef();
//   const body=useRef();
//   const reactions=useRef();
//   const tags=useRef();

// const navigate=useNavigate();
//   const handlSubmit=(event)=>{
//     event.preventDefault();
//     const Id=userId.current.value;
//     const postTitle=title.current.value;
//     const postBody=body.current.value;
//     const Reactions=reactions.current.value;
//     const Tags=tags.current.value.split(" ");
//     addPost(Id,postTitle,postBody,Reactions,Tags);
//   navigate("/");
//     userId.current.value="";
//     title.current.value="";
//     body.current.value="";
//     reactions.current.value="";
//     tags.current.value=(" ");
//   }


    return (
      <Form method="POST" className="create-post" /*onSubmit={handlSubmit}*/>
          <div class="form-group">
        <label htmlFor="id">User Id</label>
        <input type="text" class="form-control" id="title" placeholder="enter userid"
        name="userId"/>
      </div>
      <div class="form-group">
        <label htmlFor="title">title</label>
        <input name="title" type="text" class="form-control" id="title" placeholder="enter title"/>
      </div>
      <div class="form-group">
        <label htmlFor="body">Post Content</label>
        <textarea name="body" type="text" rows="4" class="form-control" id="body" placeholder="enter content"/>
      </div>
      <div class="form-group">
        <label htmlFor="reactions">Reactions</label>
        <input name="reactions" type="text" class="form-control" id="reactions" placeholder="reactions"/>
      </div>
      <div class="form-group">
        <label htmlFor="tags">Tags</label>
        <input name="tags" type="text" class="form-control" id="tags" placeholder="Enter tags sep by spaces"/>
      </div>
     
     
      <button type="submit"  class="btn btn-primary">
        Post
      </button>
    </Form>

    );
}
export default CreatePost;
export async function createPostAction(data) {
  const formData=await data.request.formData();
  const postData=Object.fromEntries(formData);
  postData.tags=postData.tags.split(" ");
  console.log(postData);
  return redirect("/");
  
}