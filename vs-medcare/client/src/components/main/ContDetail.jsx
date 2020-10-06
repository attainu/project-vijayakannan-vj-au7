import React from "react";
import { Link } from "react-router-dom";

const ContDetail = () => {
  return (
    <>
      <div class="col-lg-6">
        <div class="row">
          <div class="col-md-12">
            <div class="contact-box">
              <i class="fas fa-map-signs"></i>
              <h3>Address</h3>
              <p>Lorem Brasilia Pin code: 000000 </p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="contact-box mt-4">
              <i class="fas fa-envelope"></i>
              <h3>Email Us</h3>
              <p>
                contact@vjmedcare.com
                <br />
                info@vjmedcare.com
              </p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="contact-box mt-4">
              <i class="fas fa-phone"></i>
              <h3>Call Us</h3>
              <p>
                +91 99999-99999 <br />
                +91 99999-99999
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContDetail;
