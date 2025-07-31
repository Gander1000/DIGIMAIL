import scss from "./Cart.module.scss";
import img43 from "../../assets/image 43.svg";
import img39 from "../../assets/image 39.svg";
import img36 from "../../assets/image 36.svg";
import img38 from "../../assets/image 38.svg";

const Bloc = [
  {
    img: img43,
    h1: "RubIcon",
    p: "$100",
    button: "Buy",
  },
  {
    img: img39,
    h1: "Сamera",
    p: "$200",
    button: "Buy",
  },
  {
    img: img36,
    h1: "G Generator",
    p: "$1000",
    button: "Buy",
  },
  {
    img: img38,
    h1: "Invoice Creator",
    p: "$100",
    button: "Buy",
  },
];

function Cart() {
  return (
    <section className={scss.Cart}>
      <h1 className={scss.h1}>Popular wordpress plugins</h1>
      <div className={scss.container}>
        {Bloc.map((item, index) => (
          <div className={scss.bloc} key={index}>
            <img src={item.img} alt="" />
            <div className={scss.title}>
              <h1>{item.h1}</h1>
              <p>{item.p}</p>
              <button>{item.button}</button>
            </div>
          </div>
        ))}
      </div>
      <hr />
    </section>
  );
}

export default Cart;
