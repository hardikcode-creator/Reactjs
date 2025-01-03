import { useState } from 'react'
import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import CreatePost from "../components/CreatePost";
import PostList from "../components/PostList";
import PostListProvider from '../store/post-list-store';
import { Outlet } from 'react-router-dom';
function App() {

  
  return (
     
      <PostListProvider>
         <div className="app-container">
       <Sidebar></Sidebar>
        <div className='content'>
           <Header></Header>
           <Outlet></Outlet>
          
        <Footer></Footer></div>
        
       
        </div>
      </PostListProvider>
       
     
  );
}

export default App
