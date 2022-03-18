import axios from "axios";
import { getUsers } from "../Redux/Actions";
export const DoFetch = (url) => async (dispatch) => {
  try {
    const { data } = await axios.get(url);
    dispatch(getUsers(data));
  } catch (error) {
    console.log(error);
  }
};
