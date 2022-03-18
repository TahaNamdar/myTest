import React from "react";
import { useSelector } from "react-redux";

export default function User() {
  const userReducer = useSelector((state) => state.userReducer);
  const { userList } = userReducer;
  return (
    <div>
      {userList.map((item) => {
        return <div className="user-list">{item.name}</div>;
      })}
    </div>
  );
}
