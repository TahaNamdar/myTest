import { USER } from "./type";

const initialState = {
  userList: [],
};

export const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER:
      return { ...state, userList: action.payload };

    default:
      return state;
  }
};
