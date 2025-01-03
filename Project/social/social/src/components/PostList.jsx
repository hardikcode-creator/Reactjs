import Post from "./Cart";
import { PostLst} from "../store/post-list-store";
import { useContext, useEffect, useState } from "react";
import Welcome from "../components/Welcome";
import Loading from "./Loading"
const PostList=()=>{

        // const [datafetched,setdatafetched]=useState(false);---->instead of this we could useEffect
        const {postlist, fetching }=useContext(PostLst);
       
           
        

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
        {fetching && <Loading></Loading>}
       {!fetching && postlist.length===0 && <Welcome onGetPost={onGetPost}/>}
        { !fetching && postlist.map((post)=>(
             <Post key={post.id} post={post}/>
        ))}
        </>
   
    );
}
export default PostList;