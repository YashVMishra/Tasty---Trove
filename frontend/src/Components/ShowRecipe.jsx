import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const ShowRecipe = () => {

    const { id } = useParams();

    const [userData, setUserData] = useState({});

    const fetchUserData = async () => {
        const res = await fetch("http://localhost:5000/recipe/getbyid/" + id);
        console.log(res.status);
    
        const data = await res.json();
        console.log(data);
        setUserData(data);
    };

    useEffect(() => {
        fetchUserData();
    }, []);

  return (
    <div className="row d-flex justify-content-center align-items-center" style={{backgroundColor : "black"}}>
        <h1 className="text-center display-3 mt-4 fw-bold text-white">{userData.title}</h1>
        <div className='col-md-3 mb-4 w-50' style={{backgroundColor : "black"}}>
              <div className="card">
                  <div className='card-body'>
                  <img src={'http://localhost:5000/'+userData.image} alt="" className="card-img-top img-fluid"/> 
                  </div>

                  <div className="card-footer">
                      <h4 className="display-5 fw-bold text-center">{userData.title} - {userData.category}</h4>
                      <p><span className="fw-bold fs-4">Ingredients - </span> {userData.ingredients}</p>
                      <p><span className="fw-bold fs-4">Process - </span>{userData.method}</p>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default ShowRecipe