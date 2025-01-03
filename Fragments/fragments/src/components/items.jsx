import  styles from "./Items.module.css";
const Items=({foodItem, bought,handleEvent})=>{
    
    const handleClick=(e,foodItem)=>{
        console.log(e);
        console.log(`${foodItem}  button clicked`)
    }
        return (
            <li  className={`${styles["kg-item"]} list-group-item ${bought && 'active'}`}>
                <span className={styles["kg-span"]}>{foodItem}</span>
                <button className={`${styles.button} btn btn-info`} /*onClick={(e)=>handleClick(e,foodItem)} */onClick={handleEvent}>Buy</button>
                </li>
        );

}
export default Items;