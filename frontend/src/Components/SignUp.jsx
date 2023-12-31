import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Swal from "sweetalert2";  

const SignUp = () => {

  const navigate = useNavigate();

  const [setImage, setSetImage] = useState('');

  const navigateLogin = () => {
    // navigate to home
    navigate('/login');
  };

  const loginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password : Yup.string().required('Required')
  });

  const signupForm = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      avatar: ''
    },

    onSubmit: async (values) => { 
      values.avatar = setImage;
      console.log(values);

      // sending request to backend
      const res = await fetch('https://react-tasty-trove.onrender.com/user/add', {
        method: 'POST',
        body : JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log(res.status);

      if(res.status === 200){
        Swal.fire({
          icon : 'success',
          title : 'SignUp Success!!',
          text: 'Now Login to Continue'
        });
        navigate('/login');
      }else{
        Swal.fire({
          icon : 'error',
          title : 'Oops!!',
          text: 'Some Error Occured'
        });
      }
    }
  })

  const uploadFile = async (e) => {
    let file = e.target.files[0];
    setSetImage(file.name);
    const fd = new FormData();
    fd.append('myfile', file);

    const res = await fetch('https://react-tasty-trove.onrender.com/util/uploadfile', {
      method: 'POST',
      body: fd
    });

    console.log(res.status);
  };

  return (
    <section
    className="pt-5 pb-5 mt-0 align-items-center d-flex bg-dark"
    style={{
      minHeight: "100vh",
      backgroundSize: "cover",
      backgroundImage:
        "url(https://img.freepik.com/free-vector/restaurant-mural-wallpaper_23-2148703851.jpg?w=2000)"
    }}
  >
    <div className="container-fluid">
      <div className="row justify-content-center align-items-center d-flex-row text-center h-100">
        <div className="col-12 col-md-4 col-lg-3 h-50 ">
          <div className="card shadow">
            <div className="card-body mx-auto">
              <h4 className="card-title mt-3 text-center fw-bold">Create Account</h4>
              <p className="text-center fw-bold">Get started with your free account</p>
              <form onSubmit={signupForm.handleSubmit}>
                <div className="form-group input-group my-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      {" "}
                      <i className="fa fa-user" />{" "}
                    </span>
                  </div>
                  <input
                    className="form-control"
                    placeholder="Full name"
                    type="text"
                    name='name' onChange={signupForm.handleChange}  value={signupForm.values.name}
                  />
                </div>
                <div className="form-group input-group my-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      {" "}
                      <i className="fa fa-envelope" />{" "}
                    </span>
                  </div>
                  <input
                    name='email' onChange={signupForm.handleChange}  value={signupForm.values.email}
                    className="form-control"
                    placeholder="Email address"
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
                    name='password' onChange={signupForm.handleChange}  value={signupForm.values.password}
                    className="form-control"
                    placeholder="Create password"
                    type="password"
                  />
                </div>
                <div className="form-group input-group my-3">
                <div className="input-group-prepend">
                    <span className="input-group-text">
                      {" "}
                      <i class="fa-solid fa-image"></i>{" "}
                    </span>
                  </div>
                  <input
                    name='avatar'
                    className="form-control"
                    type="file"
                    onChange={uploadFile}
                  />
                </div>
                <div className="form-group my-3">
                  <button type="submit" className="btn btn-dark btn-block fs-6 fw-bold">
                    {" "}
                    Create Account{" "}
                  </button>
                </div>
                <div className="text-center">
                  <p className='fw-bold'>Have an account?</p>
                  <button className='btn btn-dark mt-0 fw-bold fs-6' onClick={navigateLogin}>Login</button>
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

export default SignUp