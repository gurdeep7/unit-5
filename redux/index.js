const action = { type:"INC_", payload:""};//
class Store{
    constructor(reducer, init){
        this.reducer = reducer;
        this.state = init;
    }

    getState(){
        return this.state;
    }
}


const reducer = (store,action) =>{
    return store
}

const init = { count: 10}

const store = new Store(reducer, init); //Fixed

console.log(store.getState())

