import { createContext } from "react";
export const TodoItemsCOntext=createContext({});
import { useReducer } from "react";
const todoItemReducer=(currState,action)=>{
    let newTodoitems=currState;
    if(action.type==='NEW_ITEM'){
      newTodoitems=[...currState,{name:action.payload.itemName,
        date:action.payload.itemDate
      }];
    }
    else if(action.type==='DELETE_ITEM'){
      newTodoitems=currState.filter((item)=>item.name!==action.payload.todoName);
    }
    return newTodoitems;
  }
const TodoItemsContextProvider=(props)=>{
  
      const [todoitem,dispatchItems]=useReducer(todoItemReducer,[]);
      
      const addItem=(itemName,itemDate)=>{
        //this creates a action item which is passed to reducer;
        const newItemAction={
          type:"NEW_ITEM",
          payload:{
            itemName,itemDate
          }
        };
        dispatchItems(newItemAction);
      
      //  let newTodoItems=[...todoitem,{name:itemName,date:itemDate}];
      //  setItem(newTodoItems);
      };
      const DeleteItem=(todoName,todoDate)=>{
      
        const newItemAction={
          type:"DELETE_ITEM",
          payload:{
            todoName,todoDate
          }
        };
        dispatchItems(newItemAction);
          // const newitems=todoitem.filter((item)=>item.name!==todoName);
          // setItem(newitems);
      };

      return (
        <TodoItemsCOntext.Provider value={{todoitems:todoitem,addItem:addItem, deleteItem:DeleteItem }}>
            {props.children}
        </TodoItemsCOntext.Provider>
      );
}
export default TodoItemsContextProvider;