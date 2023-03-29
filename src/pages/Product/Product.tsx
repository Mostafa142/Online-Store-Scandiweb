import Navbar from "../../components/Navbar/Navbar";
import { GetAllCategories } from "../../middlewares/GetAllCategories";
import { useDispatch } from "react-redux";
import { GetAllProducts } from "../../middlewares/Products/GetAllProducts";
import product1 from "../../assets/images/product1.png";

const Product = () => {
  const dispatch = useDispatch();
  const getAll = () => {
    // dispatch(GetAllProducts());
  };
  return (
    <div className="font-raleway">
      <div className="grid lg:grid-cols-3 py-5">
        <div className="lg:col-span-2 flex ">
          <div className="flex flex-col gap-5 py-5 pr-5">
            <img
              src={product1}
              alt="product6"
              className="lg:w-16 md:w-14 w-10 cursor-pointer"
            />
            <img
              src={product1}
              alt="product6"
              className="lg:w-16 md:w-14 w-10 cursor-pointer"
            />
            <img
              src={product1}
              alt="product6"
              className="lg:w-16 md:w-14 w-10 cursor-pointer"
            />
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
            {/* Sizes */}
            <div>
              <p className="uppercase font-bold pb-2 text-lightBlack">size:</p>
              <div className="flex gap-3">
                <p className="uppercase w-14 text-center py-2 border text-sm  cursor-pointer">
                  xs
                </p>
                <p className="uppercase w-14 text-center py-2 border text-sm cursor-pointer bg-lightBlack text-gray">
                  s
                </p>
                <p className="uppercase w-14 text-center py-2 border text-sm  cursor-pointer">
                  m
                </p>
                <p className="uppercase w-14 text-center py-2 border text-sm  cursor-pointer">
                  l
                </p>
              </div>
            </div>
            {/* Colors */}
            <div className="py-6">
              <p className="uppercase font-bold pb-2 text-lightBlack">color:</p>
              <div className="flex gap-2">
                <p className="uppercase border text-sm w-8 h-8 border-none bg-darkGary cursor-pointer "></p>
                <p className="uppercase border text-sm w-8 h-8 border-none bg-lightBlack cursor-pointer"></p>
                <p className="uppercase border text-sm w-8 h-8 border-none bg-darkGreen  cursor-pointer"></p>
              </div>
            </div>
            <div>
              <p className="uppercase font-bold pb-2 text-lightBlack">price:</p>
              <p className="uppercase  font-bold text-xl font-raleway">
                $50.00
              </p>
            </div>
            <div className="py-6">
              <button className="uppercase bg-green text-gray font-raleway w-64 py-2 text-center font-semibold">
                Add To Cart
              </button>
            </div>
            <div className="pt-4">
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
