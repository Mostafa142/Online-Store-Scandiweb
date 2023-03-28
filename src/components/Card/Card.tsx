import product1 from "../../assets/images/product1.png";
import product2 from "../../assets/images/product2.png";
import product3 from "../../assets/images/product3.png";
import product4 from "../../assets/images/product4.png";
import product5 from "../../assets/images/product5.png";
import product6 from "../../assets/images/product6.png";
import greenCart from "../../assets/images/greenCart.svg";

const data = [
  {
    id: 1,
    img: product1,
  },
  {
    id: 2,
    img: product2,
  },
  {
    id: 3,
    img: product3,
  },
  {
    id: 4,
    img: product4,
  },
  {
    id: 5,
    img: product5,
  },
  {
    id: 6,
    img: product6,
  },
];
const Card = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1">
        {data.map((item) => {
          return (
            <div
              key={item.id}
              className="card p-3 font-raleway flex flex-col my-5 hover:shadow-2xl translate-y-5 transition  duration-300 cursor-pointer"
            >
              <img src={item.img} alt="Product Img" />

              <div className="cart relative cursor-pointer hidden transition duration-300">
                <img
                  src={greenCart}
                  alt="Cart"
                  className="absolute -bottom-10 right-0 md:w-16 md:h-16 md:-bottom-9"
                />
              </div>

              <div className="py-5">
                <h2 className="font-normal text-lg">Apollo Running Short</h2>
                <p className="font-semibold text-lg">$50.00</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Card;
