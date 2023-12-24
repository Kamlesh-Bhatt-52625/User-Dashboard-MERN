import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Headers from "./components/Header/Headers.jsx";
import Home from "./pages/Home/Home.jsx";
import Register from "./pages/Register/Register.jsx";
import Edit from "./pages/Edit/Edit.jsx";
import Profile from "./pages/Profile/Profile.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Headers />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/edit/:id' element={<Edit />} />
        <Route path='/userprofile/:id' element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
