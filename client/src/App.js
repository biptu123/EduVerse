// import Home from "./components/home";
import Header from "./components/Header";
import Login from "./pages/Signin/login";
import Register from "./pages/Signup/register";
import Home from "./pages/Home/home";
import Profile from "./pages/Profile/profile";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/courses" Component={Courses} />
        <Route path="/dashboard" Component={Dashboard}/>
      </Routes>{" "}
    </>
  );
}

export default App;
