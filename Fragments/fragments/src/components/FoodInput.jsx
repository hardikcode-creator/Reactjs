import styles from "./FoodInput.module.css";

const FoodInput=({handleEvent})=>{
    return <input type="text" placeholder="Enter here" className={styles.foodinput} 
    onKeyDown={handleEvent}/>;

};
export default  FoodInput;