import { client } from "../graphql/client";
import { GetProduct } from "../utils/category";

export const GetProductDetails = (id: string) => {
  client.query({ query: GetProduct(id) }).then((res) => {
    console.log("====================================");
    console.log(res);
    console.log("====================================");
  });
};
