import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Swal from "sweetalert2";
import useUserContext from "../UserContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock } from '@fortawesome/free-solid-svg-icons'

const Login = () => {

  const { setLoggedIn, setCurrentUser } = useUserContext();

  const navigate = useNavigate();

  const navigateSignUp = () => {
    // navigate to home
    navigate('/signup');
  };

  const loginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password : Yup.string().required('Required')
  });

  const loginForm = useFormik({
    initialValues : {
      email: "",
      password: ""
    },

    onSubmit : async (values) => {
      console.log(values);
      const res = await fetch('https://react-tasty-trove.onrender.com/user/authenticate', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log(res.status);
      if(res.status===200){
        Swal.fire({
          icon:'success',
          title:'Login Success!'
        })

        const data = await res.json();
        sessionStorage.setItem('user', JSON.stringify(data));
        setCurrentUser(data);
        setLoggedIn(true);
        console.log(setLoggedIn);
        navigate('/addrecipe');
      } else if(res.status===401){
        Swal.fire({
          icon:'error',
          title:"Invalid Credentials!",
          text:'Email or Password is Incorrect'
        })
      } else {
        Swal.fire({
          icon:'error',
          title:'Something went wrong'
        })
      }
    },

    validationSchema : loginSchema
  });

  return (
    <section
    className="pt-5 pb-5 mt-0 align-items-center d-flex bg-dark"
    style={{
      minHeight: "100vh",
      backgroundSize: "cover",
      backgroundImage:
        "url(https://img.freepik.com/free-vector/restaurant-mural-wallpaper-concept_23-2148671802.jpg)"
    }}
  >
    <div className="container-fluid">
      <div className="row justify-content-center align-items-center d-flex-row text-center h-100">
        <div className="col-12 col-md-6 col-lg-3 h-50">
          <div className="card shadow">
            <div className="card-body mx-auto">
            <h4 className="card-title fs-2 text-center fw-bold fs-3"><FontAwesomeIcon icon={faLock} /></h4>
              <h4 className="card-title mb-3 text-center fw-bold fs-3">Login</h4>
              <form onSubmit={loginForm.handleSubmit} className=''>
                <div className="form-group input-group my-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      {" "}
                      <i className="fa fa-envelope" />{" "}
                    </span>
                  </div>
                  <input
                    name='email' onChange={loginForm.handleChange}  value={loginForm.values.email}
                    className="form-control"
                    placeholder="Email Address"
                    type="email"
                  />
                </div>
                <div className="form-group input-group my-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      {" "}
                      <i className="fa fa-lock" />{" "}
                    </span>
                  </div>
                  <input
                    name='password' onChange={loginForm.handleChange}  value={loginForm.values.password}
                    className="form-control"
                    placeholder="Enter Password"
                    type="password"
                  />
                </div>
                <div className="form-group my-3">
                  <button type="submit" className="btn btn-dark btn-block fw-bold fs-6">
                    {" "}
                    Login{" "}
                  </button>
                </div>
                <div className="text-center">
                  <p className='fw-bold'> Don't have an account?</p>
                  <button className='btn btn-dark fw-bold fs-6' onClick={navigateSignUp}>SignUp</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>

  )
}

export default Login