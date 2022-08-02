import { SortTypes } from '../constants';
import { Filters } from '../features/filters/types';
import {
  applyMultiFilters,
  applySearchString,
  ProductComparators,
} from '../utils';

const initialData = [
  {
    id: '1',
    brand: 'Nike',
    name: 'Trefoil Ankle Socks 3 Pack',
    color: 'white',
    price: 11.99,
    pairs: 'three',
    favourite: false,
    amount: 123,
    onlyNew: 'onlyNew',
  },
  {
    id: '2',
    brand: 'Dr. Martens',
    name: 'Solid Crew Sock 3 Pack',
    color: 'blue',
    price: 14.99,
    pairs: 'three',
    favourite: false,
    amount: 193,
    onlyNew: 'onlyNew',
  },
  {
    id: '3',
    brand: 'Adidas',
    name: 'Low Cut Socks 3 Pack',
    color: 'white',
    price: 14.99,
    pairs: 'three',
    favourite: false,
    amount: 223,
    onlyNew: '',
  },
  {
    id: '4',
    brand: 'Adidas',
    name: 'Low Cut Socks 2 Pack',
    color: 'white',
    price: 14.99,
    pairs: 'two',
    favourite: false,
    amount: 223,
    onlyNew: '',
  },
];

const result = [
  {
    id: '4',
    brand: 'Adidas',
    name: 'Low Cut Socks 2 Pack',
    color: 'white',
    price: 14.99,
    pairs: 'two',
    favourite: false,
    amount: 223,
    onlyNew: '',
  },
];

describe('apply filters, sort and search string', () => {
  it('applies multi filters to data', () => {
    const filters: Filters = {
      color: [],
      price: [14, 15],
      name: [],
      amount: [200, 500],
      pairs: ['two'],
      favourite: [],
      brand: [],
      onlyNew: [],
    };

    const filteredDataA = applyMultiFilters(initialData, filters);
    const filteredDataB = applyMultiFilters(initialData, {
      ...filters,
      brand: ['NotExisting'],
    });

    expect(filteredDataA).toEqual(result);
    expect(filteredDataB.length).toBe(0);
  });

  it('search in data names by keyword', () => {
    const filteredData = applySearchString(initialData, 'Cut Socks');

    expect(filteredData).toHaveLength(2);
    expect(filteredData).toContainEqual(result[0]);
  });

  it('sort by name asc', () => {
    const sortedByNameAsc = [...initialData].sort(
      ProductComparators[SortTypes.BRAND_A],
    );

    expect([
      initialData[2],
      initialData[3],
      initialData[1],
      initialData[0],
    ]).toStrictEqual(sortedByNameAsc);
  });

  it('sort by name desc', () => {
    const sortedByNameDesc = [...initialData].sort(
      ProductComparators[SortTypes.BRAND_Z],
    );

    expect([
      initialData[0],
      initialData[1],
      initialData[2],
      initialData[3],
    ]).toStrictEqual(sortedByNameDesc);
  });

  it('sort by price asc', () => {
    const sortedByPriceAsc = [...initialData].sort(
      ProductComparators[SortTypes.PRICE_UP],
    );

    expect([
      initialData[0],
      initialData[1],
      initialData[2],
      initialData[3],
    ]).toStrictEqual(sortedByPriceAsc);
  });

  it('sort by price desc', () => {
    const sortedByPriceDesc = [...initialData].sort(
      ProductComparators[SortTypes.PRICE_DOWN],
    );

    expect([
      initialData[1],
      initialData[2],
      initialData[3],
      initialData[0],
    ]).toStrictEqual(sortedByPriceDesc);
  });
});
