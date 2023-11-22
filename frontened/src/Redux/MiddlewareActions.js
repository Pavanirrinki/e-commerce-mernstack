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