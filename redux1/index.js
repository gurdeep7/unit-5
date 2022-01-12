const action = {type:"", payload:""} //Fixed , Payload optional

class Store{
    contructor(reducer, init){
        this.reducer = reducer;
        this.state = init;
    }

getState(){
    
    return this.state
}
}

const reducer = (store, action) =>{
    return store
}

const init = {count : 0};

const store = new Store(reducer,init)

console.log(store.getState())