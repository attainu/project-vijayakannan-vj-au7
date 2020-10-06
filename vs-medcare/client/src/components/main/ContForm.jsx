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
        <div class="form-group">
          <div class="col-md-12 form-group">
            <input
              type="text"
              name="name"
              class="form-control"
              id="name"
              placeholder="Your Name"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div class="col-md-12 form-group">
            <input
              type="email"
              class="form-control"
              name="email"
              id="email"
              placeholder="Your Email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div class="col-md-12 form-group">
            <textarea
              class="form-control"
              name="message"
              rows="5"
              required
              onChange={(e) => setFeedback(e.target.value)}
            ></textarea>
          </div>
        </div>
        <div class="text-center">
          <button type="submit">Send Message</button>
        </div>
      </form>
    </>
  );
};

export default ContForm;
