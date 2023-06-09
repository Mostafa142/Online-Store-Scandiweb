import React, { useState } from "react";
import { IProducts } from "../../models/interfaces/categories";
import ProductAttributes from "../ProductAttributes/ProductAttributes";
import ImageGallery from "../ImageGallery/ImageGallery";
import { useDispatch, useSelector } from "react-redux";

import { deleteFromCart } from "../../slices/Cart.slice";
import DeleteConfirmation from "../DeleteConfimation/DeleteConfirmation";
import { RootState } from "../../store";
import { toast } from "react-toastify";

interface Props {
  cartList: IProducts[];
  IncrementItemInCart: (cartItem: IProducts) => void;
  DecrementCartInCart: (cartItem: IProducts) => void;
  type: string;
}
const CartItems: React.FC<Props> = ({
  cartList,
  IncrementItemInCart,
  DecrementCartInCart,
  type,
}) => {
  const [confirmDelete, setConfirmDelete] = useState({
    message: "",
    isLoading: false,
  });

  const { currentCurrency } = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch();
  const [deletedProduct, setDeletedProduct] = useState<IProducts>({
    id: "",
    attributes: [],
    description: "",
    brand: "",
    gallery: [],
    inStock: false,
    itemCount: 0,
    name: "",
    prices: [],
  });
  const deletItem = (item: IProducts) => {
    setConfirmDelete({
      message: `${item.name}?`,
      isLoading: true,
    });
    setDeletedProduct(item);
  };

  const confirmedDelete = () => {
    dispatch(deleteFromCart({ cartItem: deletedProduct }));
    toast.success(`${deletedProduct.name} deleted succefully from Cart.`)
    CloseConfirmationComponent();
  };

  const CloseConfirmationComponent = () => {
    setConfirmDelete({ message: "close", isLoading: false });
  };
  console.log(confirmDelete);
  return (
    <div>
      {cartList.length > 0 ? (
        <>
          {cartList?.map((item) => {
            return (
              <div key={item.id}>
                <div
                  className={`flex sm:flex-row flex-col sm:items-center ${
                    type === "NavbarCart" ? "gap-3 py-2" : "gap-8 py-5"
                  }  justify-between  relative`}
                >
                  <div
                    className={`absolute ${
                      type === "NavbarCart" ? "top-2" : "top-5"
                    } right-0 rounded-full text-center text-sm cursor-pointer z-10`}
                    onClick={() => deletItem(item)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-8 h-8 text-red-800"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </div>
                  <div>
                    <div>
                      {/* Header */}
                      <h3
                        className={`font-bold ${
                          type === "NavbarCart" ? "text-lg" : "text-2xl"
                        }`}
                      >
                        {item.name}
                      </h3>
                      <p
                        className={`${
                          type === "NavbarCart" ? "text-lg" : "text-2xl"
                        }`}
                      >
                        {item.brand}
                      </p>
                    </div>
                    {/* Price */}
                    <p className="font-bold text-lg my-2">
                      {(item as IProducts).prices.map(({ currency, amount }) =>
                        currency.label === currentCurrency.label ? (
                          <>{currency.symbol + " " + amount}</>
                        ) : null
                      )}
                    </p>
                    {/* ATTRIBUTES  */}
                    <ProductAttributes
                      attributes={item.attributes}
                      type={type}
                    />
                  </div>
                  <div className="flex gap-5 font-raleway font-medium text-3xl">
                    <div className="flex flex-col items-center justify-between">
                      <p
                        onClick={() => IncrementItemInCart(item)}
                        className={`uppercase ${
                          type === "NavbarCart"
                            ? "w-8 h-8 text-2xl"
                            : "w-10 h-10 text-4xl"
                        }  border  text-center cursor-pointer flex content-center justify-center hover:bg-black hover:text-white`}
                      >
                        +
                      </p>
                      <p>{item.itemCount}</p>
                      <p
                        onClick={() => DecrementCartInCart(item)}
                        className={`uppercase ${
                          type === "NavbarCart"
                            ? "w-8 h-8 text-2xl"
                            : "w-10 h-10 text-4xl"
                        }  border  text-center cursor-pointer flex content-center justify-center hover:bg-black hover:text-white`}
                      >
                        -
                      </p>
                    </div>
                    <ImageGallery gallery={item.gallery} type={type} />
                  </div>
                </div>

                <div className="w-full border my-2 border-green rounded-xl"></div>
              </div>
            );
          })}
        </>
      ) : (
        <p className="text-center p-12">There were no selected items...</p>
      )}
      {confirmDelete.isLoading && (
        <DeleteConfirmation
          message={confirmDelete.message}
          confirmedDelete={confirmedDelete}
          CloseConfirmationComponent={CloseConfirmationComponent}
        />
      )}
    </div>
  );
};

export default CartItems;
