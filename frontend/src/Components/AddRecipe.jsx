import React, {useState} from 'react'
import { useFormik } from 'formik';
import Swal from "sweetalert2";

const AddRecipe = () => {

  const [setImage, setSetImage] = useState('');

  const recipeForm = useFormik({
    initialValues : {
      title : "",
      category : "",
      ingredients : "",
      method : "",
      image : ""
    },

    onSubmit : async (values, { resetForm }) => {
      console.log(values);
      values.image = setImage;
      const res = await fetch('https://react-tasty-trove.onrender.com/recipe/add', {
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
          title:'Recipe Added Successfully!'
        })

        // Reset the form values after a successful submission
        resetForm();
      } else if(res.status===401){
        Swal.fire({
          icon:'error',
          title:"Invalid Credentials!",
          text:'Plz Try Again'
        })
      } else {
        Swal.fire({
          icon:'error',
          title:'Something went wrong'
        })
      }

      
    },
  });

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
        "url(https://img.freepik.com/free-vector/restaurant-mural-wallpaper_23-2148694555.jpg?w=2000)"
    }}
  >
    <div className="container-fluid w-100">
      <div className="row justify-content-center align-items-center d-flex-row text-center h-100">
        <div className="col-12 col-md-4 col-lg-3 h-50 w-50">
          <div className="card shadow">
            <div className="card-body mx-auto w-100">
              <h4 className="card-title mt-1 mb-4 text-center fw-bold fs-2">Add Recipe</h4>
              <form className='' onSubmit={recipeForm.handleSubmit}>
  <div className="mb-3">
    <label htmlFor="title" className="form-label fw-bold fs-5">
      Food Title
    </label>
    <input
      placeholder='Recipe Name'
      type="text"
      className="form-control w-100"
      id="title"
      name='title' onChange={recipeForm.handleChange}  value={recipeForm.values.title}
      required=""
    />
  </div>
  <div className="mb-3">
    <label htmlFor="category" className="form-label fw-bold fs-5">
      Category
    </label>
    <input
      placeholder='Veg - Non-Veg - Vegan'
      type="text"
      className="form-control w-100"
      id="title"
      name='category' onChange={recipeForm.handleChange}  value={recipeForm.values.category}
      required=""
    />
  </div>
  <div className="mb-3">
    <label htmlFor="ingredients" className="form-label fw-bold fs-5">
      Ingredients
    </label>
    <textarea
      placeholder='Onions, Tomato and so on'
      className="form-control"
      id="ingredients"
      name="ingredients" onChange={recipeForm.handleChange}  value={recipeForm.values.ingredients}
      rows={4}
      required=""
      defaultValue={""}
    />
  </div>
  <div className="mb-3">
    <label htmlFor="method" className="form-label fw-bold fs-5">
      Method
    </label>
    <textarea
      placeholder='Process...'
      className="form-control"
      id="method"
      name='method' onChange={recipeForm.handleChange}  value={recipeForm.values.method}
      rows={6}
      required=""
      defaultValue={""}
    />
  </div>

  <div className="mb-3">
    <label htmlFor="title" className="form-label fw-bold fs-5">
      Upload Photo
    </label>
    <input
      type="file"
      className="form-control w-100"
      id="image"
      name='image'
      onChange={uploadFile}
      required=""
    />
  </div>
  <button type="submit" className="btn btn-dark">
    Submit
  </button>
</form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>

  )
}

export default AddRecipe