import React from "react";
import { Link } from "react-router-dom";
import TeamCard from "./TeamCard";
import TeamTitle from "./TeamTitle";

const Team = () => {
  return (
    <>
      <div id="team">
        <section class="team mt-5">
          <div class="container">
            <div class="row">
              <TeamTitle />
              <div class="col-lg-8">
                <div class="row">
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
