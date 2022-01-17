// const action = { type: "INC_COUNT", payload: 5 }; //Fixed , Payload optional
import { createStore } from "redux";
import { reducer } from "./reducer.js";
import { INC_COUNT, DEC_COUNT } from "./action.js";


// class Store {
//   constructor(reducer, init) {
//     this.reducer = reducer;
//     this.state = init;
//   }

//   getState() {
//     return this.state;
//   }

//   dispatch(action) {
//   this.state =  this.reducer(this.state, action);
//   }
// }


const init = { count: 10, todo:[] };

const store = createStore(reducer, init);

//console.log(store.getState());

store.dispatch({ type: INC_COUNT, payload: 1})

console.log(store.getState());

store.dispatch({type:DEC_COUNT, payload: 4})

store.dispatch({type:"ADD_TODO", 
payload:{title:"Learn REdux", status:"false"},
})

console.log(store.getState());


