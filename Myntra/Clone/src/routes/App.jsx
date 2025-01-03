import Header from "../components/Header";
import Footer from "../components/Footer";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from "react-router-dom";
import Fetchitems from "../components/fetchitems";
import { useSelector } from "react-redux";
import Loading from "../components/Loading";
function App() {
 
const fetchStatus=useSelector((store)=>store.fetchstatus);

  
 return (
    <>
    <Header/>
    <Fetchitems/>
    {fetchStatus.currentlyFetching ? <Loading/>:<Outlet></Outlet>}
    
   <Footer></Footer>
   
      </>
  );
}

export default App;
