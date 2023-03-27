import Navbar from "../../components/Navbar/Navbar";
import Card from "../../components/Card/Card";
const Home = () => {
  return (
    <div className="md:px-32 px-10 pb-16">
      <Navbar />
      <div>
        <h1 className="font-raleway  text-4xl my-16">Category name</h1>
      </div>
      <Card />
    </div>
  );
};

export default Home;
