export interface ICategories {
  name: string;
  products: IProducts[];
}

export interface IProducts {
  id: string;
  name: string;
  inStock: boolean;
  description: string;
  gallery: string[];
  attributes: {
    id: string;
    name: string;
    type: string;
    items: { id: string; displayValue: string; value: string }[];
  }[];
  prices: { currency: { label: string; symbol: string }; amount: number }[];
}
