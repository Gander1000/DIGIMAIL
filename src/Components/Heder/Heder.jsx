import scss from "./Heder.module.scss";
import Group from "../../assets/Group.svg";

function Heder() {
  return (
    <section className={scss.Heder}>
      <div className={scss.Group}>
        <img src={Group} alt="" />
      </div>
      <hr />
    </section>
  );
}

export default Heder;
