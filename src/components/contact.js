import React from 'react';

const Contact = () => {

    return (
        <section className="section" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <h1 className="section-title text-center">Get In Touch</h1>
              <div className="section-title-border margin-t-20"></div>
              <p className="section-subtitle text-muted text-center font-secondary padding-t-30">
              “Simple' does not mean 'easy'. I have learned that the things that seem the simplest 
              are often the most powerful of all.” -Thrall
              </p>
              <div className="section-subtitle text-muted text-center font-secondary padding-t-30">
                <span className="h5">Contact me through</span>
                <br/>
                <div className="row-direction">
                  <ul className="list-inline social m-0">
                    <li className="list-inline-item">
                      <a title="email" href="mailto:white3se@mail.uc.edu" target="_blank" className="social-icon" rel="noopener noreferrer">
                        <i className="fas fa-envelope"></i>  
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a title="linkedIn" href="https://www.linkedin.com/in/sethwhite1/" target="_blank" className="social-icon" rel="noopener noreferrer">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a title="github" href="https://github.com/sethwhite3" target="_blank" className="social-icon" rel="noopener noreferrer">
                        <i className="fab fa-github"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Contact;