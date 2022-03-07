import axios from "axios";

export const increment = () => {
    return {
      type: "INCREMENT",
    };
};
  
export const decrement = () => {
    return {
      type: "DECREMENT",
    };
};
  
export const reset = () => {
    return {
      type: "RESET",
    };
};
  
export const logIn = () => {
    return {
      type: "LOG_IN",
    };
};
  
export const logOut = () => {
    return {
      type: "LOG_OUT",
    };
};
  
export const getData = () => {
    try {
      return async dispatch => {
        const user = await fetch("").then(res => {
          return res.json()
        }).then(data => {
          dispatch({
            type: "GET_USERS",
            payload: data
          })
        })
      }
    } catch (error) {
      console.log(error)
    }
};