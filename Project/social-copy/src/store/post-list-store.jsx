import { createContext, useCallback, useReducer , useState , useEffect } from "react";
const DEFAULT_CONTEXT={
    
        postlist:[],
        addPost:()=>{},
        deletePost:()=>{},
       
    
};
 export const PostLst =createContext(DEFAULT_CONTEXT);
const postlistReducer=(currPostList,action)=>{
    let newPossList=currPostList;
    if(action.type==='Delete_Post')
    {
      newPossList=currPostList.filter((post)=>post.id!==action.payload.id);
    }
    else if(action.type==='Add_Post'){
      newPossList=[action.payload, ...currPostList];
    }
    else{
  
      newPossList=action.payload.posts;
    }
    console.log(newPossList);
    return newPossList;
}
const PostListProvider=({children})=>{

    const [postlist,dispatchPostList]=useReducer(postlistReducer,[]);
    const [fetching,setfetching]=useState(true);
   

    const addPost=(Id,postTitle,postBody,Reactions,Tags)=>{
     dispatchPostList({
      type:"Add_Post",
      payload:{
        id:Date.now(),
        title:postTitle,
        body:postBody,
        reactions:Reactions,
        userId:Id,
        tags:Tags
      }
    
    });
  }


const addInitalPosts=(posts)=>{
  dispatchPostList({
    type:"Add_INITIAL_POSTS",
    payload:{
     posts,
    }
  })
}
    const deletePost=useCallback((id)=>{
     dispatchPostList({
      type:"Delete_Post",
      payload:{
        id,
      }
     })
    }, [dispatchPostList]);


    // useEffect(()=>{
    //   const controller=new AbortController();
    //   const signal=controller.signal;
    //  setfetching(true);
    // fetch("https://dummyjson.com/posts",{signal})
    // .then((res)=>res.json())
    // .then(data=>{
    //    addInitalPosts(data.posts);
    //     setfetching(false);
     
    //     return ()=>{
    //      console.log("used for cleanup when components dies");
    //      controller.abort();
    //     };
    //  }, []);
         
    return (
        <PostLst.Provider value={{ postlist, addPost, deletePost}}>
          {children}
        </PostLst.Provider>
      );

};
// const DEFAULT_POST=[{
//   id:"1",
//   title:"Going to Mumbai",
//   body:"Mumbai is beautiful town and i am going",
//   reactions:2,
//   userId:"user-22",
//   tags:["Travel","Mumbai", "friends"]
// },{
//   id:"2",
//   title:"Going to Mumbai",
//   body:"Mumbai is beautiful town and i am going",
//   reactions:2,
//   userId:"user-22",
//   tags:["Travel","Mumbai", "friends"]
// }]
export default PostListProvider;