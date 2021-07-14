import { createStore } from "redux";
import reducer from "./reducer"

const intialStore = {
  products:[]
}

const store = createStore(reducer, intialStore, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store