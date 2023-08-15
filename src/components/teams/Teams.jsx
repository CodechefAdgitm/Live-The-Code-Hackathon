import React from "react";
import "./Teams.css";
import img1 from "../../assets/images/anveshan.png";
import img2 from "../../assets/images/Codechef_MAIT.png";
import img3 from "../../assets/images/csi_ipec.png";
import img4 from "../../assets/images/gfg dce.png";
import img5 from "../../assets/images/IEEE BPIT.png";



export default function Teams() {
  return (
    <section className="team">
      <div className="heading">
        <h2>
          {" "}
          <div class="container">
            <p class="glitch">
              <span aria-hidden="true">Collaborators</span>
              Collaborators
              <span aria-hidden="true">Collaborators</span>
            </p>
          </div>
        </h2>
      </div>
      <div class="logos">
      <div class="logos-slide">
        <img src={img1} />
        <img src={img2} />
        <img src={img3} />
        <img src={img4} />
        <img src={img5} />
      </div>

      <div class="logos-slide">
        <img src={img1} />
        <img src={img2} />
        <img src={img3} />
        <img src={img4} />
        <img src={img5} />
      </div>
    </div>
      
      
    </section>
  );
}
