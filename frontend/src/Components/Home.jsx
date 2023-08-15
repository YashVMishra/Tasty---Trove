import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../Styling/home.css'

const Home = () => {

  const navigate = useNavigate();

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
        <header>
          {/* Background image */}
          <div
            id="intro-example"
            className="p-5 text-center bg-image"
            style={{
              backgroundImage:
                'url("https://static.vecteezy.com/system/resources/previews/003/823/542/original/spices-for-use-as-cooking-ingredients-on-a-wooden-background-with-fresh-vegetables-healthy-food-herbs-organic-vegetables-on-the-table-raw-materials-of-cooking-preparation-tom-yum-free-photo.jpg")'
            }}
          >
            <div className="d-flex justify-content-center align-items-center h-100">
              <div className="text-white mb-6">
                <h1 className="mb-3 display-5 fw-bold">Welcome to your Personal Chef App</h1>
                <h5 className="mb-4 display-6 fw-bold">Add and Create something new</h5>
                <button className="btn btn-outline-light btn-lg m-2 fw-bold" onClick={navigateLogin}>
                  LOGIN
                </button>
                <button className="btn btn-outline-light btn-lg m-2 fw-bold" onClick={navigateSignUp}>
                  SIGNUP
                </button>
              </div>
            </div>
          </div>
          {/* Background image */}
        </header>

    </div>
  )
}

export default Home