import React from 'react';

import myPic from '../static/images/seth.jpg'

const Summary = () => {

    return (
        <section className="section" id="about">
        <div className="container container-about">
          <div className="row align-items-center">
            <div className="col-lg-5 order-2 order-lg-1">
              <div className="features-box mt-5 mt-lg-0">
                <h3 className="text-center">- Quick summary - </h3>
                <p className="text-muted web-desc">I consider myself more of a front end web developer. Mostly focusing on the creation of web applications and websites using JavaScript and ReactJS. I also have experience using Angular & PHP with responsive libraries like Bootstrap and Material UI.</p>
                <p className="text-muted web-desc">Currently, I'm working as a <strong>web developer</strong> for Siemens Digital Industries Software. Formally known as Siemens PLM Software, which is apart of Siemens AG. Primary fixing front end bugs or implementing new features. Sometimes these issues may have me diving into the back end working in C#. Sometimes task even has me learning some MySql.</p>
                <p className="text-muted web-desc">In my free time, I'm currently working on a React website for my brothers personal remodeling/painting company. Below is a list of some things I'm always up to:</p>
                <ul className="text-muted list-unstyled margin-t-30 features-item-list">
                  <li>Preparing for Shadowlands...</li>
                  <li>Watching programming videos on Udemy.com or lessons on LinkedIn Learning.</li>
                  <li>Full time class work, while working an internship full time.</li>
                  <li>Taking care of my new aussie puppy.</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-7 order-1 order-lg-2"> 
              <div className="features-img mx-auto mr-lg-0">
                <img src={myPic} alt="profile pic" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Summary