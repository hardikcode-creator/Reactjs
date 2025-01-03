const redux=require('redux');
const INIT_VALUE={
    counter:0,
};
const reducer=(store=INIT_VALUE,action)=>{
    let  newStore=store;
    if(action.type==='INCREMENT')
    {
        newStore={counter:store.counter+1};
    }
    else if(action.type==='ADDITION')
    {
        
        newStore={counter:store.counter+action.payload.a}
        
    }
 
return newStore;
};
const store=redux.createStore(reducer);

//called when redux store updated
const subscriber=()=>{
    const state=store.getState();
    console.log(state);
};
store.subscribe(subscriber);
store.dispatch({
    type:'INCREMENT'
});

store.dispatch({
    type:'ADDITION',
    payload:{
        a:7,
    }
})

