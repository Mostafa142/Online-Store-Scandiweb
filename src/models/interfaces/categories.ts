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
  prices: { currency: { label: string; symbol: string }; amount: number }[];
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
