import React from "react";
import { IAttribute } from "../../models/interfaces/categories";
import { ATTRIBUTES } from "../../models/enums/attributes";
interface Props {
  attributes: IAttribute[];
  type: String;
}
const ProductAttributes: React.FC<Props> = ({ attributes, type }) => {
  return (
    <div>
      {attributes.map((attr, index) => (
        <div key={attr.id}>
          {attr.id === ATTRIBUTES.Size ? (
            <div>
              <p className="uppercase font-bold pb-2 text-lightBlack font-Roboto text-sm">
                {attr.name}:
              </p>
              <div className="flex gap-3">
                {attr.items.map((size, index) => {
                  return (
                    <p
                      key={index}
                      className={`uppercase ${
                        type === "NavbarCart" ? "w-8 py-1" : " w-14  py-2"
                      } text-center border text-sm cursor-pointer  
                       ${
                         size.id === attr?.selected
                           ? "bg-black text-white "
                           : ""
                       } `}
                    >
                      {size.value}
                    </p>
                  );
                })}
              </div>
            </div>
          ) : attr.id === ATTRIBUTES.Color ? (
            <div className="py-3">
              <p className="uppercase font-bold pb-1 text-lightBlack font-Roboto text-sm">
                {attr.name}:
              </p>
              <div className="flex gap-2">
                {attr.items.map((color, index) => {
                  return (
                    <div
                      key={index}
                      className={`p-px border border-1 cursor-pointer ${
                        color.id === attr?.selected ? "border-green " : ""
                      }`}
                    >
                      <p
                        className={`uppercase text-sm ${
                          type === "NavbarCart" ? "w-6 h-6" : "w-8  h-8"
                        }    bg-${color} `}
                      ></p>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : attr.id === ATTRIBUTES.Capacity ? (
            <div>
              <p className="uppercase font-bold pb-2 text-lightBlack font-Roboto text-sm">
                {attr.name}:
              </p>
              <div className="flex gap-3">
                {attr.items.map((capacity, index) => {
                  return (
                    <p
                      key={index}
                      className={`uppercase ${
                        type === "NavbarCart"
                          ? "w-10 text-xs py-1"
                          : "w-14 text-sm py-2"
                      }  text-center py-2 border cursor-pointer  
                     ${
                       capacity.id === attr?.selected
                         ? "bg-black text-white "
                         : ""
                     } `}
                    >
                      {capacity.value}
                    </p>
                  );
                })}
              </div>
            </div>
          ) : attr.id === ATTRIBUTES.WithPorts ? (
            <div>
              <p className="uppercase font-bold pb-2 text-lightBlack font-Roboto text-sm">
                {attr.name}:
              </p>
              <div className="flex gap-3">
                {attr.items.map((ports, index) => {
                  return (
                    <p
                      key={index}
                      className={`uppercase ${
                        type === "NavbarCart"
                          ? "w-10 text-xs py-1"
                          : "w-14 text-sm py-2"
                      } text-center  border cursor-pointer  
                   ${
                     ports.id === attr?.selected ? "bg-black text-white " : ""
                   } `}
                    >
                      {ports.value}
                    </p>
                  );
                })}
              </div>
            </div>
          ) : attr.id === ATTRIBUTES.TouchKeyboard ? (
            <div>
              <p className="uppercase font-bold pb-2 text-lightBlack font-Roboto text-sm">
                {attr.name}:
              </p>
              <div className="flex gap-3">
                {attr.items.map((keyboard, index) => {
                  return (
                    <p
                      key={index}
                      className={`uppercase ${
                        type === "NavbarCart"
                          ? "w-10 text-xs py-1"
                          : "w-14 text-sm py-2"
                      } text-center border cursor-pointer  
                   ${
                     keyboard.id === attr?.selected
                       ? "bg-black text-white "
                       : ""
                   } `}
                    >
                      {keyboard.value}
                    </p>
                  );
                })}
              </div>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default ProductAttributes;
