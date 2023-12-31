import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from "./Components/Navbar";
import Browse from "./Components/Browse";
import AddRecipe from "./Components/AddRecipe";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Home from "./Components/Home";
import { UserProvider } from "./UserContext";
import ShowRecipe from "./Components/ShowRecipe";
import UpdateUser from "./Components/UpdateUser";
import UserAuth from "./UserAuth";
import About from "./Components/About";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <UserProvider>
          <Navbar/>
          <Routes>
            <Route path='/' element={ <Navigate to="/home" /> } />
            <Route path='home' element={ <Home /> } />
            <Route path='browse' element={ <Browse/>} />
            <Route path='addrecipe' element={<UserAuth><AddRecipe/></UserAuth>} />
            <Route path='login' element={<Login/>} />
            <Route path='signup' element={<SignUp/>} />
            <Route path='showrecipe/:id' element={<UserAuth><ShowRecipe/></UserAuth>} />
            <Route path='updateuser' element={<UpdateUser/>} />
            <Route path='about' element={<About/>} />
          </Routes>
          </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
