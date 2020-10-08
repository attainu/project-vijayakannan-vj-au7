import React from "react";
import { useSelector } from "react-redux";
import AppoCancel from "../user/appo/AppoCancel";
import PaitentDataBtn from "../user/appo/Paitent/Paitent";
import AppoCheck from "../user/appo/AppoCheck";
import ContactUpdateBtn from "../user/user/ContactUpdate";
import DeleteAccount from "../user/user/DeleteAccount";
import PasswordUpdateBtn from "../user/user/PasswordUpdate";

const UserCom = () => {
  const store = useSelector((store) => store.homeRoot);
  console.log(store);
  return (
    <>
      <div className="container m-1">
        <div className="row">
          <div className="col-sm-3 ml-4">
            <img src={store.user.avatar} />
          </div>
          <div className="col-sm-6 justify-content-center">
            <h6 className="text-white">Name : {store.user.name}</h6>
            <h6 className="text-white">Email : {store.user.email}</h6>
            <h6 className="text-white">Contact : {store.user.contact}</h6>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="m-3 p-2">
            <div className="col p-1 ">
              <ContactUpdateBtn />
              <PasswordUpdateBtn />
              <DeleteAccount />
              <AppoCheck />
              <PaitentDataBtn />
              <AppoCancel />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserCom;
