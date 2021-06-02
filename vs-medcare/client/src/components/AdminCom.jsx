import React from "react";
import AddAdminBtn from "../components/super/admin/AddAdminBtn";
import DelAdminBtn from "../components/super/admin/DelAdminBtn";

const AdminCom = () => {
  return (
    <>
      <div className="col-lg-4 text-lg-left">
        <AddAdminBtn />
        <DelAdminBtn />
      </div>
    </>
  );
};

export default AdminCom;
