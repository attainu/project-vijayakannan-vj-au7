import React from "react";
import { useSelector } from "react-redux";

const PublicDocCom = (props) => {
  const doc = Array.from(props.doc);
  //console.log(store.doctor);
  console.log(typeof props.doc);
  return (
    <>
      {doc.map((doc) => (
        <div class="col mb-4">
          <div className="card">
            <img
              src={doc.imgUrl}
              style={{ width: "100%", height: "100%" }}
              className="card-img-top"
              alt="doc-img"
            />
            <div className="card-body">
              <h5 className="card-title">{doc.name}</h5>
              <p className="card-text">{doc.department}</p>
              <p className="card-text">
                <small className="text-muted">{doc.description}</small>
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default PublicDocCom;
