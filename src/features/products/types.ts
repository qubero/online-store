import { ValueOfBrands, ValueOfColors, ValueOfPairs } from '../../constants';

export interface Product {
  id: string;
  brand: ValueOfBrands;
  name: string;
  color: ValueOfColors;
  price: number;
  amount: number;
  favourite: boolean;
  pairs: ValueOfPairs;
  onlyNew: string;
}

export interface ActiveProducts {
  products: Product[];
  cart: string[];
}
