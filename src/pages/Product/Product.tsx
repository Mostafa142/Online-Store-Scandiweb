import Navbar from "../../components/Navbar/Navbar";
import product1 from "../../assets/images/product1.svg";

const Product = () => {
  return (
    <div className="md:px-32 px-10 font-raleway">
      <Navbar />
      <div className="grid lg:grid-cols-3 py-5">
        <div className="lg:col-span-2 flex">
          <div className="flex flex-col gap-5 py-5">
            <img src={product1} alt="product6" className="lg:w-16 md:w-14 w-10" />
            <img src={product1} alt="product6" className="lg:w-16 md:w-14 w-10" />
            <img src={product1} alt="product6" className="lg:w-16 md:w-14 w-10" />
          </div>

          <div className="py-5 w-5/6 ">
            <img src={product1} alt="product1" className="h-5/6 w-full" />
          </div>
        </div>

        <div className="py-5 ">
          <div>
            <h2 className="font-bold text-2xl text-lightBlack ">Apollo</h2>
            <p className="text-3xl text-lightBlack">Running Short</p>
          </div>
          <div className="py-10 font-Roboto">
            <div>
              <p className="uppercase font-bold pb-2 text-lightBlack">size:</p>
              <div className="flex gap-3">
                <p className="uppercase w-14 text-center py-2 border text-sm ">
                  xs
                </p>
                <p className="uppercase w-14 text-center py-2 border text-sm bg-lightBlack text-gray">
                  s
                </p>
                <p className="uppercase w-14 text-center py-2 border text-sm ">
                  m
                </p>
                <p className="uppercase w-14 text-center py-2 border text-sm ">
                  l
                </p>
              </div>
            </div>
            <div className="py-5">
              <p className="uppercase font-bold pb-2 text-lightBlack">color:</p>
              <div className="flex gap-2">
                <p className="uppercase border text-sm w-8 h-8 border-none bg-darkGary"></p>
                <p className="uppercase border text-sm w-8 h-8 border-none bg-lightBlack"></p>
                <p className="uppercase border text-sm w-8 h-8 border-none bg-darkGreen"></p>
              </div>
            </div>
            <div>
              <p className="uppercase font-bold pb-2 text-lightBlack">price:</p>
              <p className="uppercase  font-bold text-xl font-raleway">
                $50.00
              </p>
            </div>
            <div className="py-5">
              <button className="uppercase bg-green text-gray font-raleway w-64 py-2 text-center font-semibold">
                Add To Cart
              </button>
            </div>
            <div>
              <p className="w-64">
                Find stunning women's cocktail dresses and party dresses. Stand
                out in lace and metallic cocktail dresses and party dresses from
                all your favorite brands.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
