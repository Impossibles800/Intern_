import {Route, Routes} from "react-router-dom";
import Home from "./page/home/Home";
import Login from "./page/login/login";
import Signup from "./page/signup/signup";
import {getItem} from "./utils/localStorage";

function App() {
    // const email = getItem("email");

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </div>
  );
}

export default App;
