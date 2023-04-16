import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_CERTAIN_PRODUCT } from "../../Queries/Queries";
import { useState } from "react";
const Product = () => {
  const params = useParams();
  // console.log(params)
  const { loading, error, data } = useQuery(GET_CERTAIN_PRODUCT, {
    variables: { id: params.id },
  });
  const [selectedProduct, setSelectedProduct] = useState("");
  console.log(data);
  if (loading) return null;
  if (error) return <>{`Error! ${error}`}</>;
  return (
    <div className="font-raleway">
      <div className="grid lg:grid-cols-3 py-5">
        <div className="lg:col-span-2 flex ">
          <div className="flex flex-col gap-5 py-5 pr-5">
            <img
              src={
                data.product.gallery.length === 1
                  ? data.product.gallery[0]
                  : data.product.gallery[1]
              }
              alt="product6"
              className="lg:w-16 md:w-14 w-10 cursor-pointer"
              onClick={(e) => setSelectedProduct(data.product.gallery[1])}
            />
            <img
              src={
                data.product.gallery.length === 1
                  ? data.product.gallery[0]
                  : data.product.gallery[2]
              }
              alt="product6"
              className="lg:w-16 md:w-14 w-10 cursor-pointer"
              onClick={(e) => setSelectedProduct(data.product.gallery[2])}
            />
            <img
              src={
                data.product.gallery.length === 1
                  ? data.product.gallery[0]
                  : data.product.gallery[3]
              }
              alt="product6"
              className="lg:w-16 md:w-14 w-10 cursor-pointer"
              onClick={(e) => setSelectedProduct(data.product.gallery[3])}
            />
          </div>

          <div className="py-5 w-5/6 ">
            <img
              src={selectedProduct ? selectedProduct : data.product.gallery[0]}
              alt="product1"
              className="h-5/6 w-full"
            />
          </div>
        </div>

        <div className="py-5 ">
          <div>
            <h2 className="font-bold text-2xl text-lightBlack ">
              {data.product.name}
            </h2>
            <p className="text-3xl text-lightBlack">{data.product.brand}</p>
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
            {/* Prices */}
            <div>
              <p className="uppercase font-bold pb-2 text-lightBlack">price:</p>
              <p className="uppercase  font-bold text-xl font-raleway">
                {`${data.product.prices[0].currency.symbol} ${data.product.prices[0].amount}`}
              </p>
            </div>
            <div className="py-6">
              <button className="uppercase bg-green text-gray font-raleway w-64 py-2 text-center font-semibold">
                Add To Cart
              </button>
            </div>
            <div
              className="pt-4"
              dangerouslySetInnerHTML={{
                __html: data.product.description,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
