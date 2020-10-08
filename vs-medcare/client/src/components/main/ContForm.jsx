import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { publicFeedback } from "../../redux/actions/publicAction";

//
const ContForm = () => {
  const dispatch = useDispatch();
  //form
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  //form handler
  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log(name, email, feedback);
    dispatch(publicFeedback({ name, email, feedback }));
  };

  return (
    <>
      <form onSubmit={formSubmitHandler}>
        <div className="form-group">
          <div className="col-md-12 form-group">
            <input
              type="text"
              name="name"
              className="form-control"
              id="name"
              placeholder="Your Name"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="col-md-12 form-group">
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              placeholder="Your Email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="col-md-12 form-group">
            <textarea
              className="form-control"
              name="message"
              rows="5"
              required
              onChange={(e) => setFeedback(e.target.value)}
            ></textarea>
          </div>
        </div>
        <div className="text-center">
          <button type="submit">Send Message</button>
        </div>
      </form>
    </>
  );
};

export default ContForm;
