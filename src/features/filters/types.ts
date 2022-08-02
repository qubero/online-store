import { ValueOfBrands, ValueOfColors, ValueOfPairs } from '../../constants';

export interface Filters {
  name: string[];
  favourite: string[];
  price: [number, number];
  amount: [number, number];
  pairs: ValueOfPairs[];
  brand: ValueOfBrands[];
  color: ValueOfColors[];
  onlyNew: string[];
}

export interface ActiveFilters {
  activeFilters: Filters;
}

export type FiltersPayload = {
  type: keyof Filters;
  value: Filters[keyof Filters];
};
