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



// Clothes Query 