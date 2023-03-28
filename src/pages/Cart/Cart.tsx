import Navbar from "../../components/Navbar/Navbar";
import product1 from "../../assets/images/product8.png";
import product2 from "../../assets/images/product7.png";
import plus from "../../assets/images/plus.svg";
import minus from "../../assets/images/minus.svg";
import leftArrow from "../../assets/images/leftArrow.svg";
import rightArrow from "../../assets/images/rightArrow.svg";

const Cart = () => {
  const Products = [
    {
      id: 1,
      title: "Apollo",
      name: "Running Short",
      currency: "$",
      price: "50.00",
      AvailableSizes: ["XS", "S", "M", "L"],
      ChosenSize: "S",
      AvailableColors: ["darkGary", "lightBlack", "darkGreen"],
      ChosenColor: "darkGary",
      img: product1,
      amount: 1,
    },
    {
      id: 2,
      title: "Jupiter",
      name: "Wayfarer",
      currency: "$",
      price: "75.00",
      AvailableSizes: ["S", "M"],
      ChosenSize: "M",
      AvailableColors: ["lightBlack", "darkBlue", "darkOrange"],
      ChosenColor: "lightBlack",
      img: product2,
      amount: 2,
    },
  ];
  return (
    <div className="md:px-32 px-10 font-raleway">
      <Navbar />
      <div className="mb-32">
        <h2 className="uppercase font-bold text-3xl my-10">Cart</h2>
        <div className="w-full border border-gray"></div>
        {Products.map((item) => {
          return (
            <>
              <div key={item.id} className="flex justify-between py-5">
                <div>
                  <div>
                    {/* Header */}
                    <h3 className="font-bold text-2xl">{item.title}</h3>
                    <p className="text-2xl">{item.name}</p>
                  </div>
                  {/* Price */}
                  <p className="font-bold text-lg my-2">
                    {item.currency}
                    {item.price}
                  </p>
                  {/* Size */}
                  <div>
                    <p className="uppercase font-bold pb-2 text-lightBlack font-Roboto text-sm">
                      size:
                    </p>
                    <div className="flex gap-3">
                      {item.AvailableSizes.map((size) => {
                        return (
                          <p
                            className={`uppercase w-14 text-center py-2 border text-sm cursor-pointer ${
                              size === item.ChosenSize
                                ? "bg-lightBlack text-white"
                                : `border-${size} `
                            }`}
                          >
                            {size}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                  {/* Color */}
                  <div className="py-3">
                    <p className="uppercase font-bold pb-1 text-lightBlack font-Roboto text-sm">
                      color:
                    </p>
                    <div className="flex gap-2">
                      {item.AvailableColors.map((color) => {
                        return (
                          <>
                            <p
                              className={`p-px border border-1 ${
                                color === item.ChosenColor
                                  ? "border-green"
                                  : "border-transparent"
                              } cursor-pointer`}
                            >
                              <p
                                className={`uppercase text-sm w-8 h-8   bg-${color} `}
                              ></p>
                            </p>
                          </>
                        );
                      })}
                    </div>
                  </div>
                </div>
                {/* Amount */}
                <div className="flex gap-5 font-raleway font-medium text-3xl">
                  <div className="flex flex-col items-center justify-between">
                    <img src={plus} alt="Plus" className="cursor-pointer" />
                    <p>{item.amount}</p>
                    <img src={minus} alt="Minus" className="cursor-pointer" />
                  </div>
                  <div className="relative">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="h-64 w-[200px]"
                    />
                    <div className="flex gap-3 absolute bottom-4 right-4">
                      <img
                        src={leftArrow}
                        alt="leftArrow"
                        className="cursor-pointer"
                      />
                      <img
                        src={rightArrow}
                        alt="rightArrow"
                        className="cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full border border-gray"></div>
            </>
          );
        })}
        <div className="my-10 flex flex-col gap-2">
          <div className="grid grid-cols-12">
            <span className="text-xl ">Tax 21%: </span>
            <span className="font-bold text-xl">$42.00</span>
          </div>
          <div className="grid grid-cols-12">
            <span className="text-xl ">Quantity: </span>
            <span className="font-bold text-xl">3</span>
          </div>
          <div className="grid grid-cols-12">
            <span className="text-xl  font-semibold">Total: </span>
            <span className="font-extrabold text-xl">$200.00</span>
          </div>
          <div>
            <button className="uppercase text-center py-2 w-52 bg-green text-white text-xs font-semibold">
              order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
