import React from 'react';

import myPic from '../static/images/seth.jpg';

const Summary = () => {
  return (
    <section className='section' id='about'>
      <div className='container container-about'>
        <div className='row align-items-center'>
          <div className='col-lg-7 order-2 order-lg-1'>
            <div className='features-box mt-5 mt-lg-0'>
              <h3 className='text-center'>- Quick summary - </h3>
              <p className='text-muted web-desc'>
                Hello there! I'm Seth White, a passionate and dedicated web
                developer with a strong foundation in HTML/CSS, JavaScript, and
                React. My journey into the world of programming began with a
                fascination for creating visually appealing and interactive web
                applications.
              </p>
              <p className='text-muted web-desc'>
                With a solid understanding of Node.js and expertise in
                implementing Redux for state management, I enjoy building robust
                and scalable applications that deliver seamless user
                experiences. My proficiency in version control using Git ensures
                efficient collaboration and streamlined development processes
                within teams.
              </p>
              <p className='text-muted web-desc'>
                Having extensive experience with various AWS services, including
                S3, DynamoDB, CDK/CloudFormation, API Gateway, Lambda, and Step
                Functions, I have honed my skills in deploying and managing
                cloud-based applications. My ability to leverage these services
                effectively enables me to deliver reliable and secure web
                solutions.
              </p>
              <p className='text-muted web-desc'>
                As a web developer, I believe in staying updated with the latest
                trends and technologies, constantly striving to enhance my skill
                set. I am deeply passionate about crafting elegant and efficient
                code and am committed to delivering high-quality, user-centric
                products that make a meaningful impact.
              </p>
              <p className='text-muted web-desc'>
                If you're looking for a dedicated and adaptable web developer
                for your next project, I would love to connect and discuss how I
                can contribute to your team's success.
              </p>
              <p className='text-muted web-desc'>
                Let's build something exceptional together!
              </p>
            </div>
          </div>
          <div className='col-lg-5 order-1 order-lg-2'>
            <div className='features-img mx-auto mr-lg-0'>
              <img src={myPic} alt='profile pic' className='img-fluid' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Summary;
