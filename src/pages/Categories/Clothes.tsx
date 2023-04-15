import Card from "../../components/Card/Card";
import product1 from "../../assets/images/product1.png";
import product2 from "../../assets/images/product2.png";
import product4 from "../../assets/images/product4.png";
import product5 from "../../assets/images/product5.png";
import product6 from "../../assets/images/product6.png";
import { IProduct } from "../../models/interfaces/Product";

const Clothes = () => {
  const data: IProduct[] = [
    {
      id: 1,
      img: product1,
    },
    {
      id: 2,
      img: product2,
    },
    {
      id: 3,
      img: product6,
    },
    {
      id: 4,
      img: product4,
    },
    {
      id: 5,
      img: product5,
    },
  ];
  return (
    <>
      <h1 className="font-raleway  text-4xl my-16">Clothes' Category</h1>
      {/* <Card data={data} /> */}
    </>
  );
};

export default Clothes;
