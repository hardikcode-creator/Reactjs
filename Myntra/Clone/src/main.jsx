import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import  {RouterProvider,createBrowserRouter } from "react-router-dom";
import Bags from "./components/Bags.jsx";
import App from './routes/App.jsx'
import Home from "./routes/Home.jsx"
import myntraStore from './store/index.js';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
const router=createBrowserRouter([
  {
    path:"/", 
    element :<App/>,
    children :[
      {
        path:"/", element:<Home/>
      },
      {
        path:"/bag",
        element:<Bags/>,
      },
    ]
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={myntraStore}>
    <RouterProvider router={router}>
    </RouterProvider>
   </Provider> 
   
  </StrictMode>,
)
