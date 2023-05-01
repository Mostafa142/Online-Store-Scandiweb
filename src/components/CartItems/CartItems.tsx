import React, { useState } from "react";
import { ICURRENCIES, IProducts } from "../../models/interfaces/categories";
import ProductAttributes from "../ProductAttributes/ProductAttributes";
import ImageGallery from "../ImageGallery/ImageGallery";
import { useDispatch, useSelector } from "react-redux";

import { deleteFromCart } from "../../slices/Cart.slice";
import DeleteConfirmation from "../DeleteConfimation/DeleteConfirmation";

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
  const [confirmDelete, setConfirmDelete] = useState({
    message: "",
    isLoading: false,
  });

  const { currentCurrency } = useSelector(
    (state: {
      cart: { cartList: IProducts[]; cartCounter: number };
      products: { products: IProducts[]; currentCurrency: ICURRENCIES };
    }) => state.products
  );
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
      message: `Are you sure you want to delete ${item.name}?`,
      isLoading: true,
    });
    setDeletedProduct(item);
  };

  const confirmedDelete = () => {
    dispatch(deleteFromCart({ cartItem: deletedProduct }));
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
                <div className="flex sm:flex-row flex-col sm:items-center gap-10 justify-between py-5 relative">
                  <div
                    className="absolute top-5 right-0 rounded-full  text-center text-sm cursor-pointer z-10"
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
                      <h3 className="font-bold text-2xl">{item.name}</h3>
                      <p className="text-2xl">{item.brand}</p>
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
