import { useState } from 'react';
import Items from './items';

function Fooditems({items})
{
   let [activeItems,setactiveItems]=useState([]);
    let onBuyButton=(item,event)=>{
        let newItems=[...activeItems,item];
        setactiveItems(newItems);
    }
    return (
    <ul className="list-group">
    {items.map((item)=>(<Items key={item} foodItem={item} bought={activeItems.includes(item)} handleEvent={(event)=>onBuyButton(item,event)}></Items>))}
</ul>
    );

}
export default Fooditems;