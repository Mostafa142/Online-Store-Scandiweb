import React from "react";
import { IProducts } from "../../models/interfaces/categories";
import ProductAttributes from "../ProductAttributes/ProductAttributes";
import ImageGallery from "../ImageGallery/ImageGallery";

interface Props {
  cartList: IProducts[];
  IncrementItemInCart: (cartItem: IProducts) => void;
  DecrementCartInCart: (cartItem: IProducts) => void;
}
const CartItems: React.FC<Props> = ({
  cartList,
  IncrementItemInCart,
  DecrementCartInCart,
}) => {
  return (
    <div>
      {cartList.length > 0 ? (
        <>
          {cartList?.map((item) => {
            return (
              <div key={item.id}>
                <div className="flex sm:flex-row flex-col sm:items-center gap-10 justify-between py-5">
                  <div>
                    <div>
                      {/* Header */}
                      <h3 className="font-bold text-2xl">{item.name}</h3>
                      <p className="text-2xl">{item.brand}</p>
                    </div>
                    {/* Price */}
                    <p className="font-bold text-lg my-2">
                      {item.prices[0].currency.symbol}
                      {(item.prices[0].amount * item.itemCount).toFixed(2)}
                    </p>
                    {/* ATTRIBUTES  */}
                    <ProductAttributes attributes={item.attributes} />
                  </div>
                  <div className="flex gap-5 font-raleway font-medium text-3xl">
                    <div className="flex flex-col items-center justify-between">
                      <p
                        onClick={() => IncrementItemInCart(item)}
                        className="uppercase w-10 h-10  border text-4xl text-center cursor-pointer flex content-center justify-center hover:bg-black hover:text-white"
                      >
                        +
                      </p>
                      <p>{item.itemCount}</p>
                      <p
                        onClick={() => DecrementCartInCart(item)}
                        className="uppercase w-10 h-10  border text-4xl text-center cursor-pointer flex content-center justify-center hover:bg-black hover:text-white"
                      >
                        -
                      </p>
                    </div>
                    <ImageGallery gallery={item.gallery} />
                  </div>
                </div>
                <div className="w-full border border-gray"></div>
              </div>
            );
          })}
        </>
      ) : (
        <p className="text-center p-12">There were no selected items...</p>
      )}
    </div>
  );
};

export default CartItems;
