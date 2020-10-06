import React from "react";
import { Link } from "react-router-dom";
import MedCard from "./MedCard";
import MedTitle from "./MedTitle";

const MedCamp = () => {
  return (
    <>
      <section class="camp">
        <MedTitle />
        <div class="camp-grid">
          <div class="row">
            <MedCard />
            <MedCard />
            <MedCard />
            <MedCard />
            <MedCard />
            <MedCard />
            <MedCard />
            <MedCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default MedCamp;
