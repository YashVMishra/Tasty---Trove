import React from 'react'

const About = () => {
  return (
    <>
        <div className="d-flex justify-content-start" style={{backgroundImage : "url(462927.jpg)", backgroundSize : "cover", minHeight : "100vh"}}>
            <div className="row">
                <div className="col-md-6">
                    <p className='fs-5 fw-bold ms-3 mt-4' style={{color : "#FAF3E0"}}>
                        <h3 className='text-center fw-bold display-5'>😋 Tasty - Trove 😋</h3>
                        "<span className='display-6 fw-bold'>T</span>asty Trove is your culinary companion, 
                        empowering users to share their kitchen creativity with a community of food 
                        enthusiasts. This web app provides a platform for users to curate a collection 
                        of their innovative home-tested recipes, fostering a treasure trove of flavors 
                        that inspire and delight."
                    </p>

                    <p className=''>
                        <h3 className='ms-3 mt-4 fs-2 text-center fw-bold' style={{color : "#FAF3E0"}}>👉 Features 👈</h3>  
                        <ul className='mt-2' style={{color : "#FAF3E0"}}>
                            <li><span className='fs-4 fw-bolder'>Create & Share :</span> <span className='fs-5'> Craft, upload, and share your unique recipes.</span></li>
                            <li><span className='fs-4 fw-bolder'>Discover Delights :</span> <span className='fs-5'> Explore diverse recipes for culinary inspiration.</span></li>
                            <li><span className='fs-4 fw-bolder'>Interactive Cooking :</span> <span className='fs-5'> Step-by-step guides for seamless cooking experiences.</span></li>
                        </ul>
                    </p> 
                </div>
            </div>
        </div>
    </>
  )
}

export default About