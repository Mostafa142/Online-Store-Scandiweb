import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IProducts } from "../../models/interfaces/categories";
import CartItems from "../../components/CartItems/CartItems";
import {
  decrementCartCounter,
  decrementItemCount,
  incrementCartCounter,
  incrementItemCount,
} from "../../slices/Cart.slice";
import { RootState } from "../../store";
interface Props {
  type: String;
}
const NavCart: React.FC<Props> = ({ type }) => {
  const dispatch = useDispatch();
  const { cartList, cartCounter } = useSelector(
    (state: { cart: { cartList: IProducts[]; cartCounter: number } }) =>
      state.cart
  );
  const { currentCurrency } = useSelector((state: RootState) => state.products);
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

  let TotalPrice: number = 0;
  cartList.map((item) => {
    return (TotalPrice += +(item.prices[0].amount * item.itemCount).toFixed(2));
  });

  return (
    <div
      className={`absolute font-raleway right-10 overflow-x-hidden ${
        cartCounter === 0
          ? "h-auto"
          : cartCounter === 1
          ? "h-auto"
          : "h-[85vh]  overflow-scroll"
      }  ${
        type === "SmallScreen" ? "top-44 w-5/6" : "top-16"
      } px-5 py-5 z-20 bg-white shadow-lg border border-r-0 border-green rounded-3xl `}
    >
      <h2 className=" font-bold text-base  mb-8">
        My Bag ,{" "}
        <span className="normal-case  font-semibold">{cartCounter}</span>
      </h2>
      <CartItems
        cartList={cartList}
        IncrementItemInCart={IncrementItemInCart}
        DecrementCartInCart={DecrementCartInCart}
        type="NavbarCart"
      />
      <div className="flex flex-col gap-5">
        <div className="flex justify-between mt-2 font-Roboto font-semibold text-base">
          <p>Total</p>
          <p className="font-raleway font-bold">
            {currentCurrency.symbol + TotalPrice.toFixed(2)}
          </p>
        </div>

        <div className="grid grid-cols-2 font-raleway font-semibold text-sm gap-5">
          <NavLink
            to="/Cart"
            className="uppercase border border-1 border-lightBlack py-2 text-center hover:bg-black hover:text-white"
          >
            view bag
          </NavLink>
          <button className="uppercase border border-1 border-transparent bg-green py-2 text-white hover:bg-white hover:text-green hover:border-green">
            check out
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavCart;
