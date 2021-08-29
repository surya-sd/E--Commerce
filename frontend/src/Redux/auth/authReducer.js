import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "./authActionTypes";

const initState = {
  isAuth: false,
  token: "",
};

export const authReducer = (state = initState, action) => {
  switch (action?.type) {
    case LOGIN_SUCCESS: {
      return {
        ...state,
        isAuth: action.payload.auth,
        token: action.payload.token,
      };
    }
    case LOGOUT_SUCCESS: {
      return {
        ...state,
        isAuth: action.payload.user,
      };
    }
    default:
      return state;
  }
};
