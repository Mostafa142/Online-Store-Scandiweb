import { client } from "../graphql/client";
import { ALL_CATEGORIES } from "../utils/category";
export const GetAllCategories = () => {
  client.query({ query: ALL_CATEGORIES }).then((res) => {
    console.log("====================================");
    console.log(res);
    console.log("====================================");
  });
};
