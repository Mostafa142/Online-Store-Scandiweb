import Card from "../../components/Card/Card";
import { useQuery } from "@apollo/client";
import { CLOTHES_PRODUCTS } from "../../Queries/Queries";

const Clothes = () => {
  const { data, loading, error } = useQuery(CLOTHES_PRODUCTS);
  console.log(data);
  if (loading) return <>Loading...</>;
  if (error) return <>Error! ${error.message}</>;
  return (
    <>
      <h1 className="font-raleway  text-4xl my-16">Clothes' Category</h1>
      <Card data={data.category.products} />
    </>
  );
};

export default Clothes;
