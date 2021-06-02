import React from "react";
import Medical from "../../images/mds.jpg";

const TeamTitle = () => {
  return (
    <>
      <div className="col-lg-4">
        <div className="section-title">
          <h2>Team</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem
            praesentium vel officiis soluta placeat suscipit earum quae iusto.
            Officiis iusto impedit exercitationem numquam. Neque dolor dolores
            voluptate porro suscipit sed.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem
            praesentium vel officiis soluta placeat suscipit earum quae iusto.
            Officiis iusto impedit exercitationem numquam. Neque dolor dolores
            voluptate porro suscipit sed.
          </p>
          <img className="mds-img" src={Medical} alt="" />
        </div>
      </div>
    </>
  );
};

export default TeamTitle;
