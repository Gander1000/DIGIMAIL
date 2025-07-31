import scss from "./Foter.module.scss";
import SOZ from "../../assets/SOZ.svg";

function Foter() {
  return (
    <section className={scss.Foter}>
      <div className={scss.contai}>
        <h1>© DUGIMAIL. All rights reserved. </h1>
        <span>
          If you have any questions please contact us
          <p> sabrihakuli@outlook.com</p>
        </span>
        <img src={SOZ} alt="" />
      </div>
    </section>
  );
}

export default Foter;
