import { SortTypes } from '../constants';
import { Filters } from '../features/filters/types';
import { Product } from '../features/products/types';

export const applyMultiFilters = <T extends Product>(
  entities: T[],
  filters: Filters,
): T[] => {
  const filter = Object.keys(filters) as (keyof Filters)[];

  return entities.filter((entity) =>
    filter.every((key) => {
      if (key === 'price' || key === 'amount') {
        const [cur, min, max] = [entity[key], ...filters[key]];
        return cur >= min && cur <= max;
      }

      if (!filters[key].length) return true;

      return filters[key].includes(entity[key].toString());
    }),
  );
};

export const applySearchString = <T extends Product>(
  entities: T[],
  searchString: string,
) => {
  const keyword = searchString.trim().toLowerCase();
  return entities.filter((entity) =>
    entity.name.toLowerCase().includes(keyword),
  );
};

export const ProductComparators = {
  [SortTypes.BRAND_A]: (a: Product, b: Product) =>
    a.brand.localeCompare(b.brand),
  [SortTypes.BRAND_Z]: (a: Product, b: Product) =>
    b.brand.localeCompare(a.brand),
  [SortTypes.PRICE_UP]: (a: Product, b: Product) => a.price - b.price,
  [SortTypes.PRICE_DOWN]: (a: Product, b: Product) => b.price - a.price,
};
