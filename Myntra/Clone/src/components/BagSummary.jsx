import { useSelector } from "react-redux";

const Bagsummary=()=>{

  const bagitems=useSelector((store)=>store.bag);
  const items=useSelector((store)=>store.items);
 const filteritems=items.filter(item=>{
  const itemIndex=bagitems.indexOf(item.id);
  return itemIndex>=0;
 });

    let totalItem=bagitems.length;
   let  totalMRP=0;
    let totalDiscount=0;
   let  totalPayment=0;

console.log(filteritems);
  filteritems.forEach(item => {
     totalMRP+=(item.original_price);
     totalDiscount+=(item.original_price)-(item.current_price);
    
  });
  console.log(filteritems);
  totalPayment=totalMRP-totalDiscount+99;
  
    return (
      <div className="bag-summary">
        <div className="bag-details-container">
    <div className="price-header">PRICE DETAILS ({totalItem} Items) </div>
    <div className="price-item">
      <span className="price-item-tag">Total MRP</span>
      <span className="price-item-value">₹{totalMRP}</span>
    </div>
    <div className="price-item">
      <span className="price-item-tag">Discount on MRP</span>
      <span className="price-item-value priceDetail-base-discount">-₹{totalDiscount}</span>
    </div>
    <div className="price-item">
      <span className="price-item-tag">Convenience Fee</span>
      <span className="price-item-value">₹99</span>
    </div>
    <hr/>
    <div className="price-footer">
      <span className="price-item-tag">Total Amount</span>
      <span className="price-item-value">₹{totalPayment}</span>
    </div>
  </div>
  <button className="btn-place-order">
    <div className="css-xjhrni">PLACE ORDER</div>
  </button>
 
  </div> 

  );

};
export default Bagsummary;