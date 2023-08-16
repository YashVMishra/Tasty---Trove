import React, {useState} from 'react'
import { useNavigate} from 'react-router-dom'
import { useFormik } from 'formik';
import Swal from "sweetalert2";  
import useUserContext from "../UserContext";

const UpdateUser = () => {

  const { setLoggedIn } = useUserContext();

  const navigate = useNavigate();

  const [setImage, setSetImage] = useState('');

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );

  console.log(currentUser);

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
      const res = await fetch('http://localhost:5000/user/update/'+currentUser._id, {
        method: 'PUT',
        body : JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log(res.status);

      if(res.status === 200){
        Swal.fire({
          icon : 'success',
          title : 'Update Success!!',
          text: 'User Updated Successfully'
        });
        {fetchUserData()}
        navigate('/addrecipe');
      }else{
        Swal.fire({
          icon : 'error',
          title : 'Oops!!',
          text: 'Some Error Occured'
        });
      }
    }
  })

  const fetchUserData = async () => {
    const res = await fetch("http://localhost:5000/user/getbyid/" + currentUser._id);
    console.log(res.status);

    const data = await res.json();
    console.log(data);
    sessionStorage.setItem('user', JSON.stringify(data));
    setLoggedIn(true);
  };

  const uploadFile = async (e) => {
    let file = e.target.files[0];
    setSetImage(file.name);
    const fd = new FormData();
    fd.append('myfile', file);

    const res = await fetch('http://localhost:5000/util/uploadfile', {
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
      <div className="row  justify-content-center align-items-center d-flex-row text-center h-100">
        <div className="col-12 col-md-4 col-lg-3   h-50 ">
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
                    Update{" "}
                  </button>
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

export default UpdateUser