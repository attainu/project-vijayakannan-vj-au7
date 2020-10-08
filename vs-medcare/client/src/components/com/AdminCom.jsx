import React from "react";
import { useSelector } from "react-redux";
import PasswordUpdateBtn from "../admin/PasswordUpdate";
import AdminViewAppo from "../admin/AdminViewAppo";

const AdminCom = () => {
  const store = useSelector((store) => store.homeRoot);
  return (
    <>
      <div className="container m-1">
        <div className="row">
          <div className="col-sm-3">
            <img src="" />
          </div>
          <div className="col-sm-6">
            <h6 className="text-white">Name :{store.admin.name}</h6>
            <h6 className="text-white">Department :{store.admin.department}</h6>
            <h6 className="text-white">Email :{store.admin.email} </h6>
            <h6 className="text-white">Contact :{store.admin.contact}</h6>
          </div>
        </div>
        <div className="row">
          <div className="m-5 p-2 border">
            <div className="col">
              <PasswordUpdateBtn />
              <AdminViewAppo />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminCom;
