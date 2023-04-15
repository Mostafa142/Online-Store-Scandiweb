import Card from "../../components/Card/Card";
import { useQuery } from "@apollo/client";
import { ALL_CATEGORY } from "../../Queries/Queries";

const Home = () => {
  const { loading, error, data } = useQuery(ALL_CATEGORY);

  if (loading) return <>Loading...</>;
  if (error) return <>Error! ${error.message}</>;
  return (
    <div>
      <div className="font-raleway text-4xl my-16">All Products</div>
      <Card data={data.category.products} />
    </div>
  );
};

export default Home;
