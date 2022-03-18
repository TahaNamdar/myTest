import { createStore, combineReducers, applyMiddleware } from "redux";
import { UserReducer } from "./UserReducer";
import thunk from "redux-thunk";

const reducer = combineReducers({
  userReducer: UserReducer,
});

const middlewere = [thunk];

const store = createStore(reducer, applyMiddleware(...middlewere));

export default store;
