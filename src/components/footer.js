import React from "react";

const Footer = () => {
  const fullYear = new Date().getFullYear();

  return (
    <div className="footer-alt">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="float-left">
              <p className="copy-rights text-muted mb-3 mb-sm-0">
                {fullYear} © Seth White - Personal website
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
