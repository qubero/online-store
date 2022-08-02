export enum SortTypes {
  PRICE_UP = 'Price (High - Low)',
  PRICE_DOWN = 'Price (Low - High)',
  BRAND_A = 'Brand (a - z)',
  BRAND_Z = 'Brand (z - a)',
}

export const Colors = {
  WHITE: 'white',
  RED: 'red',
  GREEN: 'green',
  BLUE: 'blue',
  BLACK: 'black',
  ORANGE: 'orange',
};

type KeysOfColors = keyof typeof Colors;
export type ValueOfColors = typeof Colors[KeysOfColors];

export const Brands = {
  ADIDAS: 'Adidas',
  NIKE: 'Nike',
  NEW_BALANCE: 'New Balance',
  DR_MARTENS: 'Dr. Martens',
};

type KeysOfBrands = keyof typeof Brands;
export type ValueOfBrands = typeof Brands[KeysOfBrands];

export const Pairs = {
  ONE: 'one',
  TWO: 'two',
  THREE: 'three',
};

type KeysOfPairs = keyof typeof Pairs;
export type ValueOfPairs = typeof Pairs[KeysOfPairs];
