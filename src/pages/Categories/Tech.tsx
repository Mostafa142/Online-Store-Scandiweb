import Card from "../../components/Card/Card";
import { useQuery } from "@apollo/client";
import { TECH_PRODUCTS } from "../../Queries/Queries";

const Tech = () => {
  const { data, loading, error } = useQuery(TECH_PRODUCTS);
  console.log(data);
  if (loading) return <>Loading...</>;
  if (error) return <>Error! ${error.message}</>;
  return (
    <>
      <h1 className="font-raleway  text-4xl my-16">Tech's Category</h1>
      <Card data={data.category.products} />
    </>
  );
};

export default Tech;
