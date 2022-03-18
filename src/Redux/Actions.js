import { USER } from "./type";
export const getUsers = (users) => {
  return {
    type: USER,
    payload: users,
  };
};
