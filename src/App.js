import "./App.css";
import { DoFetch } from "./API/Fetch";

import { useDispatch } from "react-redux";
import User from "./Screen/User";

function App() {
  const url = "https://jsonplaceholder.typicode.com/users";

  const disptach = useDispatch();

  const handleClick = () => {
    disptach(DoFetch(url));
  };

  return (
    <div className="App">
      <br />
      <button onClick={handleClick}>Get User</button>
      <br />
      <br />
      <User />
    </div>
  );
}

export default App;
