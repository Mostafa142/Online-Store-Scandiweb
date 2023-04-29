
import { useDispatch, useSelector } from "react-redux";
import { IProducts } from "../../models/interfaces/categories";
import CartItems from "../../components/CartItems/CartItems";
import {
  decrementCartCounter,
  decrementItemCount,
  incrementCartCounter,
  incrementItemCount,
} from "../../slices/Cart.slice";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartList, cartCounter } = useSelector(
    (state: { cart: { cartList: IProducts[]; cartCounter: number } }) =>
      state.cart
  );
  const IncrementItemInCart = (cartItem: IProducts) => {
    dispatch(incrementItemCount({ cartItem }));
    dispatch(incrementCartCounter());
  };
  const DecrementCartInCart = (cartItem: IProducts) => {
    if (cartCounter > 1 && cartItem.itemCount > 1) {
      dispatch(decrementItemCount({ cartItem }));
      dispatch(decrementCartCounter());
    }
  };

  return (
    <div className="font-raleway">
      <div className="mb-32">
        <h2 className="uppercase font-bold text-3xl my-10">Cart</h2>
        <div className="w-full border border-gray"></div>
        <CartItems
          cartList={cartList}
          IncrementItemInCart={IncrementItemInCart}
          DecrementCartInCart={DecrementCartInCart}
        />
        {cartList.length > 0 ? (
          <div className="my-10 flex flex-col gap-2">
            <div className="flex gap-5">
              <span className="text-xl w-20">Tax 21%: </span>
              <span className="font-bold text-xl">$42.00</span>
            </div>
            <div className="flex gap-5">
              <span className="text-xl w-20">Quantity: </span>
              <span className="font-bold text-xl">{cartCounter}</span>
            </div>
            <div className="flex gap-5">
              <span className="text-xl  font-semibold w-20">Total: </span>
              <span className="font-extrabold text-xl">$200.00</span>
            </div>
            <div>
              <button className="uppercase text-center py-2 w-52 bg-green text-white text-xs font-semibold">
                order
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Cart;
