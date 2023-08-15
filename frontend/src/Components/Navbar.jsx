import React, { useState } from "react";
import { NavLink, useNavigate } from 'react-router-dom'
import useUserContext from "../UserContext";

const Navbar = () => {

  const { loggedIn, logout } = useUserContext();
  console.log(loggedIn);

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );

  console.log(currentUser);

  const showLoginOption = () => {
    if(loggedIn===true){
      return (
        <>
          <div className="d-flex align-items-center">
              <button type="button" className="btn btn-info fs-5 me-1 fw-bold" onClick={logout}>
                LogOut
              </button>

              <img width={40} className="ms-4 rounded-circle" src={"http://localhost:5000/"+currentUser.avatar} alt="" />
          </div>
        </>
      )
    } else {
      return (
        <>
          <div className="d-flex align-items-center">
              <button type="button" className="btn btn-info fs-5 me-1 fw-bold" onClick={navigateLogin}>
                Login
              </button>

              <button type="button" className="btn btn-dark fs-5 ms-1 fw-bold" onClick={navigateSignUp}>
                <i class="fa-solid fa-right-to-bracket"></i> SignUp
              </button>
          </div>
        </>
      )
    }
  }

  const navigate = useNavigate();
  const navigateHome = () => {
    // navigate to home
    navigate('/home');
  };

  const navigateLogin = () => {
    // navigate to home
    navigate('/login');
  };

  const navigateSignUp = () => {
    // navigate to home
    navigate('/signup');
  };

  return (
    <div>
        <>
          {/* Navbar */}
          <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-6-strong" style={{color: 'yellowgreen'}}>
            {/* Container wrapper */}
            <div className="container">
              {/* Navbar brand */}
                  <button type="button" className="btn btn-dark fs-5 fw-bold" onClick={navigateHome}>
                  <i class="fa-solid fa-burger"></i> Tasty - Trove
                  </button>
              {/* Toggle button */}
              <button
                className="navbar-toggler"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#navbarButtonsExample"
                aria-controls="navbarButtonsExample"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="fas fa-bars" />
              </button>
              {/* Collapsible wrapper */}
              <div className="collapse navbar-collapse" id="navbarButtonsExample">
                {/* Left links */}
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                  <li className="nav-item">
                    <NavLink className="nav-link fs-5" to="/home">
                      Home
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink className="nav-link fs-5" aria-current="page" to="/browse">
                      Browse
                    </NavLink>
                  </li>

                  <li className="nav-item dropdown">
                    <NavLink className="nav-link fs-5" to="/addrecipe">
                      Add Recipe
                    </NavLink>
                  </li>
                </ul>
                {/* Left links */}
                {/* <div className="d-flex align-items-center">
                  <button type="button" className="btn btn-secondary fs-5 me-1" onClick={navigateLogin}>
                   Login
                  </button>

                  <button type="button" className="btn btn-dark fs-5 ms-1" onClick={navigateSignUp}>
                  <i class="fa-solid fa-right-to-bracket"></i> SignUp
                  </button>
                </div> */}
                {showLoginOption()}
              </div>
              {/* Collapsible wrapper */}
            </div>
            {/* Container wrapper */}
          </nav>
          {/* Navbar */}
        </>

    </div>
  )
}

export default Navbar