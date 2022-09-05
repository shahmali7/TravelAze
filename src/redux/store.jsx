import { createStore } from "redux";
import reducer from './reducer'
import { initialState } from "./reducer/reducer";

const store = createStore(reducer,initialState)
export default store