export interface ICategories {
  name: string;
  products: IProducts[];
}

export interface IProducts {
  id: string;
  name: string;
  inStock: boolean;
  description: string;
  brand: string;
  gallery: string[];
  attributes: IAttribute[];
  prices: IPrice[];
  itemCount: number;
}

export interface IAttribute {
  id: string;
  name: string;
  type: string;
  selected: string;
  items: IItem[];
}

export interface IItem {
  id: string;
  displayValue: string;
  value: string;
}

export interface ICURRENCIES {
  label: string;
  symbol: string;
}

export interface IPrice {
  currency: { label: string; symbol: string };
  amount: number;
}
