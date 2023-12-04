import { createStore,applyMiddleware,combineReducers } from "redux";
import userReducer from "./Reducers/SignupReducers.js";
import CategoriesReducer from "./Reducers/CategoriesReducer.js";
import ProductsReducer from "./Reducers/ProductReducer.js";
import ParticularCategoryReducer from "./Reducers/ParticularCategoryReducer.js";
import thunk from 'redux-thunk';
const rootreducer = combineReducers({
    userReducer,
    CategoriesReducer,
    ProductsReducer,
    ParticularCategoryReducer
})
const store = createStore(rootreducer,applyMiddleware(thunk))

export default store