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
  attributes: IAttribute[];
  prices: { currency: { label: string; symbol: string }; amount: number }[];
}

export interface IAttribute {
  id: string;
  name: string;
  type: string;
  items: IItem[];
}

export interface IItem {
  id: string;
  displayValue: string;
  value: string;
}
