import Post from "./Cart";
import { PostLst} from "../store/post-list-store";
import { useContext, useEffect, useState } from "react";
import Welcome from "../components/Welcome";
import Loading from "./Loading"
import { useLoaderData } from "react-router-dom";
const PostList=()=>{

        // const [datafetched,setdatafetched]=useState(false);---->instead of this we could useEffect
       const postlist=useLoaderData();
       
           
        

        //now we dont need to create button for fetching posts from server as we createsd a useState to handle that
        const onGetPost=()=>{
        //     fetch("https://dummyjson.com/posts")
        //     .then((res)=>res.json())
        //     .then(data=>{
        //        addInitalPosts(data.posts);
        //     })
         }
    return (
        <>
        
       { postlist.length===0 && <Welcome onGetPost={onGetPost}/>}
        {  postlist.map((post)=>(
             <Post key={post.id} post={post}/>
        ))}
        </>
   
    );
}

export const postloader=()=>{
   return  fetch("https://dummyjson.com/posts")
    .then((res)=>res.json())
    .then(data=>{
       return (data.posts);
    });
}
export default PostList;