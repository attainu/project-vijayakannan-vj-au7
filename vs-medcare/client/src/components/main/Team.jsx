import React from "react";
import TeamCard from "./TeamCard";
import TeamTitle from "./TeamTitle";

const Team = () => {
  return (
    <>
      <div id="team">
        <section className="team mt-5">
          <div className="container">
            <div className="row">
              <TeamTitle />
              <div className="col-lg-8">
                <div className="row">
                  <TeamCard />
                  <TeamCard />
                  <TeamCard />
                  <TeamCard />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Team;
