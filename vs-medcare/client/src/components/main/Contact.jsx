import React from "react";
import { Link } from "react-router-dom";
import ContDetail from "./ContDetail";
import ContForm from "./ContForm";
import ContTitle from "./ContTitle";

const Contact = () => {
  return (
    <>
      <div id="contact">
        <section class="contact">
          <div class="container">
            <ContTitle />
            <div class="row">
              <ContDetail />
              <div class="col-lg-6 mt-5">
                <ContForm />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
