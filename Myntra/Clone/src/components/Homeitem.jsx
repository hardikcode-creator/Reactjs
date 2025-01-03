import {useDispatch, useSelector} from "react-redux";
import {bagActions} from "../store/bagitem";

const Homeitem=({item})=>{
    const dispatch=useDispatch();
    const bagItems=useSelector((store)=>store.bag);
    const handleAdd=()=>{
        dispatch(bagActions.addToBag(item.id));
    };
    const handleRemove=()=>{
        dispatch(bagActions.removeFromBag(item.id));
    }
    const elementAdded=bagItems.indexOf((item.id))>=0;
    return (
        <div className="item-container">
      <img className="item-image" src={item.image} alt="item image"/>
      <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {elementAdded ?      <button type="button" className=" btn-add-bag btn btn-danger" onClick={handleRemove}>Remove</button>
:      <button className="btn-add-bag" onClick={handleAdd}>Add to Bag</button>
}
    </div>

    );

}
export default  Homeitem;