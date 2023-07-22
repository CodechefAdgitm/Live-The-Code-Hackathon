import React from "react";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import img5 from "../../assets/img5.png";
import img6 from "../../assets/img6.png";
import img7 from "../../assets/img7.png";
import img8 from "../../assets/img8.png";

export default function Teams() {
  return (
    <div className="body">
      <div className="container-teams">
        <div className="imgBx">
          <img src={img1} />
        </div>
        <div className="imgBx">
          <img src={img2} />
        </div>
        <div className="imgBx">
          <img src={img3} />
        </div>
        <div className="imgBx">
          <img src={img4} />
        </div>
        <div className="imgBx">
          <img src={img5} />
        </div>
        <div className="imgBx">
          <img src={img6} />
        </div>
        <div className="imgBx">
          <img src={img7} />
        </div>
        <div className="imgBx">
          <img src={img8} />
        </div>
      </div>
    </div>
  );
}
