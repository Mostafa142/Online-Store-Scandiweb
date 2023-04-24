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
        prices {
          currency {
            label
            symbol
          }
          amount
        }
      }
    }
  }
`;

// Tech Query
export const TECH_PRODUCTS = gql`
  query {
    category(input: { title: "tech" }) {
      products {
        id
        name
        inStock
        gallery
        description
        brand
        prices {
          currency {
            label
            symbol
          }
          amount
        }
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
        prices {
          currency {
            label
            symbol
          }
          amount
        }
      }
    }
  }
`;

// Get Certain Product
export const GET_CERTAIN_PRODUCT = gql`
  query Product($id: String!) {
    product(id: $id) {
      name
      brand
      gallery
      inStock
      description
      category
      attributes {
        name
        type
        items {
          value
          displayValue
        }
      }
      prices {
        currency {
          label
          symbol
        }
        amount
      }
    }
  }
`;
