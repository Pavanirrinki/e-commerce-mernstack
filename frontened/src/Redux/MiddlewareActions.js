import { API } from "../API/API.js";
import axios from "axios"

export const signupActions = (payload)=>{
    return async (dispatch) =>{
        dispatch({ type: 'SIGNUP_REQUEST' });

       await axios
          .post(API+"signup", payload)
          .then((response) => {
           
            dispatch({
                type:"SIGNUP_SUCCESS",
                payload:response.data
            });
          })
          .catch((error) => {
             dispatch({
                type:'SIGNUP_FAILURE',
                payload:error.message
            });
            console.log(error.message,"pavan kumar")
          });
    }
}

export const categoriesActions = ()=>{
  return async (dispatch) =>{
      dispatch({ type: 'CATEGORIES_REQUEST' });

     await axios
        .get(API+"all_catgories")
        .then((response) => {
         console.log("response.data",response.data)
          dispatch({
              type:"CATEGORIES_SUCCESS",
              payload:response.data
          });
        })
        .catch((error) => {
           dispatch({
              type:'CATEGORIES_FAILURE',
              payload:error.message
          });
          console.log(error.message,"pavan kumar")
        });
  }
}

export const ProductsActions = ()=>{
  return async (dispatch) =>{
      dispatch({ type: 'PRODUCTS_REQUEST' });

     await axios
        .get(API+"get_all_product")
        .then((response) => {
         console.log("response.data",response.data)
          dispatch({
              type:"PRODUCTS_SUCCESS",
              payload:response.data
          });
        })
        .catch((error) => {
           dispatch({
              type:'PRODUCTS_FAILURE',
              payload:error.message
          });
          console.log(error.message,"pavan kumar")
        });
  }
}