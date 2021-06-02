import React from "react";
import ContDetail from "./ContDetail";
import ContForm from "./ContForm";
import ContTitle from "./ContTitle";

const Contact = () => {
  return (
    <>
      <div id="contact">
        <section className="contact">
          <div className="container">
            <ContTitle />
            <div className="row">
              <ContDetail />
              <div className="col-lg-6 mt-5">
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
