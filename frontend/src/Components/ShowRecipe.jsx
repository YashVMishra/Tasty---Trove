import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const ShowRecipe = () => {

    const { id } = useParams();

    const [userData, setUserData] = useState({});

    const fetchUserData = async () => {
        const res = await fetch("https://react-tasty-trove.onrender.com/recipe/getbyid/" + id);
        console.log(res.status);
    
        const data = await res.json();
        console.log(data);
        setUserData(data);
    };

    useEffect(() => {
        fetchUserData();
    }, []);

  return (
    <div style={{backgroundImage : "url(https://media.istockphoto.com/id/1182393436/vector/fast-food-seamless-pattern-with-vector-line-icons-of-hamburger-pizza-hot-dog-beverage.jpg?s=612x612&w=0&k=20&c=jlj-n_CNsrd13tkHwC7MVo0cGUyyc8YP6wJQdCvMUGw=)", minHeight : "100vh"}}>
        <div className="container" style={{backgroundImage : "url(https://media.istockphoto.com/id/1182393436/vector/fast-food-seamless-pattern-with-vector-line-icons-of-hamburger-pizza-hot-dog-beverage.jpg?s=612x612&w=0&k=20&c=jlj-n_CNsrd13tkHwC7MVo0cGUyyc8YP6wJQdCvMUGw=)", minHeight : "100vh"}}>
      <div className="row d-flex justify-content-center align-items-center">
      <div className="card my-3 w-75">
                  <div className='card-body'>
                    <span className="text-center fw-bold d-block display-5 mb-3">😋 {userData.title} 😋</span>
                  <img src={'https://react-tasty-trove.onrender.com/'+userData.image} alt="" className="card-img-top img-fluid" style={{objectFit : "cover", height: 550}}/> 
                  </div>

                  <div className="card-footer">
                      <h4 className="display-5 fw-bold text-center">👉 {userData.title} - {userData.category} 👈</h4>
                      <p><span className="fw-bold fs-4">Ingredients - </span> {userData.ingredients}</p>
                      <p><span className="fw-bold fs-4">Process - </span>{userData.method}</p>
                  </div>
              </div>
    </div>
    </div>
    </div>
    
  )
}

export default ShowRecipe