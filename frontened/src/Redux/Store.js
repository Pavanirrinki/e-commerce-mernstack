import { createStore,applyMiddleware,combineReducers } from "redux";
import userReducer from "./Reducers";
import thunk from 'redux-thunk';
const rootreducer = combineReducers({
    userReducer,
})
const store = createStore(rootreducer,applyMiddleware(thunk))

export default store