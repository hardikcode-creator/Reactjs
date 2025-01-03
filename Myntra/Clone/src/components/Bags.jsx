import Header from "./Header";
import Footer from "./Footer";
import Bagsummary from "./BagSummary";
import Bagitem from "./Bagitem";
import { useSelector } from "react-redux";
const Bags=()=>{

  const bagitems=useSelector((store)=>store.bag);
  const items=useSelector((store)=>store.items);
 const filteritems=items.filter(item=>{
  const itemIndex=bagitems.indexOf(item.id);
  return itemIndex>=0;
 })
    return (
        <>

<main>
  <div className="bag-page">
    <div className="bag-items-container">
      {filteritems.map((item)=><Bagitem item={item}/>)}
    </div>
   
      <Bagsummary/>


  </div>
</main>

</>
);
}

export default Bags;