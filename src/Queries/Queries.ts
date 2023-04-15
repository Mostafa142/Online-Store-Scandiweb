import { gql } from "@apollo/client";


// ALL Query 
export const ALL_CATEGORY = gql`
query {
    category(input: { title: "all" }) {
      products {
        id
        name
        inStock
        gallery
        description
        brand
      }
    }
  }
  
`;

// Tech Query 
export const TECH_PRODUCTS = gql`
query{
  category (input:{title:"tech"}){
   products{
     id
     name
     inStock
     gallery
     description
     brand
   }
 }
}
`;

// Clothes Query 
export const CLOTHES_PRODUCTS = gql`
query {
    category(input: { title: "clothes" }) {
      products {
        id
        name
        inStock
        gallery
        description
        brand
      }
    }
  }
  
`;
