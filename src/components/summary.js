import React from "react";

import myPic from "../static/images/seth.jpg";

const Summary = () => {
  return (
    <section className="section" id="about">
      <div className="container container-about">
        <div className="row align-items-center">
          <div className="col-lg-5 order-2 order-lg-1">
            <div className="features-box mt-5 mt-lg-0">
              <h3 className="text-center">- Quick summary - </h3>
              <p className="text-muted web-desc">
                I currently consider myself more of a front-end web developer.
                I'm trying to improve my experience in the back-end. I'm Mostly
                focusing on the creation of web applications and websites using
                JavaScript and ReactJS. I also have experience using Angular &
                PHP with responsive libraries like Bootstrap and Material UI.
              </p>
              <p className="text-muted web-desc">
                Currently, I'm working as a <strong>web developer</strong> for
                Siemens Digital Industries Software. Formally known as Siemens
                PLM Software, which is apart of Siemens AG. Primary fixing front
                end bugs or implementing new features. A future team I'm
                joining, I will be improve my back-end skills working with
                Nodejs.
              </p>
              <p className="text-muted web-desc">
                In my free time, I'm currently working on a React website for my
                brothers personal remodeling/painting company. Below is a list
                of some things I'm always up to:
              </p>
              <ul className="text-muted list-unstyled margin-t-30 features-item-list">
                <li>Taking care of my beautiful daughter.</li>
                <li>
                  Watching programming videos on Udemy.com or lessons on
                  LinkedIn Learning.
                </li>
                <li>
                  Full time class work, while working an internship full time.
                </li>
                <li>Playing Ultimate Frisbee.</li>
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
  );
};

export default Summary;
