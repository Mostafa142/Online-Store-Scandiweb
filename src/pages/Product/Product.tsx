import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_CERTAIN_PRODUCT } from "../../Queries/Queries";
import { useState, useEffect } from "react";
import { IAttribute, IProducts } from "../../models/interfaces/categories";
import { toast } from "react-toastify";
import { ATTRIBUTES } from "../../models/enums/attributes";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, incrementCartCounter } from "../../slices/Cart.slice";
import Alert from "../../components/Alert/Alert";
import { RootState } from "../../store";

const Product = () => {
  const dispatch = useDispatch();
  const { cartList } = useSelector(
    (state: { cart: { cartList: IProducts[]; cartCounter: number } }) =>
      state.cart
  );
  const { currentCurrency } = useSelector((state: RootState) => state.products);

  const [selectedProduct, setSelectedProduct] = useState("");
  const [product, setProduct] = useState<IProducts>({
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
  const params = useParams();
  const { loading, error, data } = useQuery(GET_CERTAIN_PRODUCT, {
    variables: { id: params.id },
  });

  // it takes itemId that referes to what user choose like(40 or 41)
  // and attributeId referes to what attribute i want to change like (size or color)

  const updateAttributes = (itemId: string, attrId: string) => {
    setProduct({
      ...product,
      // check if the attribute is already existe or not and if it is exist it will
      // check if it is the same of the attribute that i want to update
      attributes: product.attributes.map((attr: IAttribute) =>
        attr && attr.id === attrId ? { ...attr, selected: itemId } : attr
      ),
    });
  };

  const addToCartList = () => {
    const filteredProducts = cartList.filter(
      (el) =>
        el.id === product.id &&
        el.attributes.every((selec, i) => {
          return selec.selected === product.attributes[i]?.selected;
        })
    );

    if (filteredProducts.length === 0) {
      dispatch(incrementCartCounter());
      dispatch(addToCart({ cartItem: { ...product, itemCount: 1 } }));
      toast.success(
        `${product.name} Added with  ${product.attributes.map(
          (ele) => ele.name + " " + ele.selected
        )}`
      );
    }
  };
  useEffect(() => {
    // making copy of data with initial attributes values
    if (data) {
      setProduct({
        ...data.product,
        attributes: data.product.attributes.map((attr: any) =>
          attr
            ? {
                ...attr,
                selected:
                  attr.items[0].id ||
                  attr.items.map((i: any) => i.id === attr.selected),
              }
            : attr
        ),
        itemCount: 0,
      });
    }
  }, [data]);
  if (loading) return null;
  if (error) return <>{`Error! ${error}`}</>;
  return (
    <div className="font-raleway">
      <div className="grid lg:grid-cols-3 py-5">
        <div className="lg:col-span-2 flex ">
          <div className="flex flex-col gap-5 py-5 pr-5">
            {product.gallery.map((item: any, idx: any) => {
              return (
                <img
                  key={idx}
                  src={item}
                  alt="product6"
                  className="lg:w-16 md:w-14 w-10 cursor-pointer"
                  onClick={(e) => setSelectedProduct(item)}
                />
              );
            })}
          </div>

          <div className="py-5">
            <img
              src={selectedProduct ? selectedProduct : product.gallery[0]}
              alt="product1"
              className="h-5/6 w-full"
            />
          </div>
        </div>

        <div className="py-5 ">
          <div>
            <h2 className="font-bold text-2xl text-lightBlack ">
              {product.name}
            </h2>
            <p className="text-3xl text-lightBlack">{product.brand}</p>
          </div>
          <div className="py-10 font-Roboto">
            {/* ATTRIBUTES  */}

            {product.attributes.map((attr: IAttribute) => {
              return (
                <div
                  className="uppercase font-bold pb-2 text-lightBlack"
                  key={attr.id}
                >
                  {/* Colors  */}
                  {attr.name === ATTRIBUTES.Color ? (
                    <div className="pb-3">
                      <h3>{attr.name}</h3>
                      <div className="flex gap-3">
                        {attr.items.map((color) => (
                          <p
                            key={color.id}
                            onClick={() => {
                              updateAttributes(color.id, attr.id);
                            }}
                            id={color.id}
                            className={`uppercase border text-sm w-8 h-8  bg-[${
                              color.value
                            }] cursor-pointer border-2 border-[#eee]   ${
                              color.id === attr.selected ? "border-green" : ""
                            }`}
                          ></p>
                        ))}
                      </div>
                    </div>
                  ) : null}
                  {/* Capacity */}
                  {attr.name === ATTRIBUTES.Capacity ? (
                    <div className="pb-3">
                      <h3>{attr.name}</h3>
                      <div className="flex gap-3">
                        {attr.items.map((Capacity) => (
                          <div key={Capacity.id}>
                            <p
                              onClick={() => {
                                updateAttributes(Capacity.id, attr.id);
                              }}
                              className={`uppercase w-14 text-center py-2 border text-sm  cursor-pointer ${
                                Capacity.id === attr.selected
                                  ? "bg-black text-white"
                                  : ""
                              }`}
                            >
                              {Capacity.value}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : null}
                  {attr.name === ATTRIBUTES.WithPorts ? (
                    <div className="pb-3">
                      <h3>{attr.name}</h3>
                      <div className="flex gap-3">
                        {attr.items.map((withPorts) => (
                          <div key={withPorts.id}>
                            <p
                              onClick={() => {
                                updateAttributes(withPorts.id, attr.id);
                              }}
                              className={`uppercase w-14 text-center py-2 border text-sm  cursor-pointer ${
                                withPorts.id === attr.selected
                                  ? "bg-black text-white"
                                  : ""
                              } `}
                            >
                              {withPorts.value}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : null}
                  {attr.name === ATTRIBUTES.TouchKeyboard ? (
                    <div className="pb-3">
                      <h3>{attr.name}</h3>
                      <div className="flex gap-3">
                        {attr.items.map((touchKeyBoard) => (
                          <div key={touchKeyBoard.id}>
                            <p
                              onClick={() => {
                                updateAttributes(touchKeyBoard.id, attr.id);
                              }}
                              className={`uppercase w-14 text-center py-2 border text-sm  cursor-pointer ${
                                touchKeyBoard.id === attr.selected
                                  ? "bg-black text-white"
                                  : ""
                              } `}
                            >
                              {touchKeyBoard.value}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : null}
                  {attr.name === ATTRIBUTES.Size ? (
                    <div className="pb-3">
                      <h3>{attr.name}</h3>
                      <div className="flex gap-3">
                        {attr.items.map((size) => (
                          <div key={size.id}>
                            <p
                              onClick={() => {
                                updateAttributes(size.id, attr.id);
                              }}
                              className={`uppercase w-14 text-center py-2 border text-sm  cursor-pointer ${
                                size.id === attr.selected
                                  ? "bg-black text-white"
                                  : ""
                              }`}
                            >
                              {size.value}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              );
            })}

            {/* Prices */}
            <div>
              <p className="uppercase font-bold pb-2 text-lightBlack">price:</p>
              <p className="uppercase  font-bold text-xl font-raleway">
                {(data.product as IProducts).prices.map(
                  ({ currency, amount }) =>
                    currency.label === currentCurrency.label ? (
                      <>{currency.symbol + " " + amount}</>
                    ) : null
                )}
              </p>
            </div>
            <div className="py-6">
              {data.product.inStock ? (
                <button
                  onClick={addToCartList}
                  className="uppercase border-2 border-green text-green rounded hover:bg-green hover:text-white font-raleway w-64 py-2 text-center font-semibold"
                >
                  Add To Cart
                </button>
              ) : (
                <Alert message="Out Of Stock" />
              )}
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
