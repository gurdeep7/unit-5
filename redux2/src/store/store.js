import {combineReducers, createStore} from "redux"
import { reducer as TodosReducer } from "./reducer";
import {reducer as CounterREducer} from "../counter/reducer"

const rootReducer = combineReducers({
    counterState: CounterREducer,
    todosState:TodosReducer
})
export const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():"");

console.log("entire Stare", store.getState())
