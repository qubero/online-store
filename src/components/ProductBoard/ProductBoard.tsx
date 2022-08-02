import { useMemo } from 'react';
import { useAppSelector } from '../../hooks/redux';
import {
  applyMultiFilters,
  ProductComparators,
  applySearchString,
} from '../../utils';
import ProductCard from '../ProductCard';

const ProductBoard = () => {
  const activeSort = useAppSelector((state) => state.sort.activeSort);
  const activeFilters = useAppSelector((state) => state.filters.activeFilters);
  const searchString = useAppSelector((state) => state.sort.searchString);
  const stateProducts = useAppSelector((state) => state.products.products);

  const filteredProducts = useMemo(
    () => applyMultiFilters([...stateProducts], activeFilters),
    [stateProducts, activeFilters],
  );

  const sortedProducts = useMemo(
    () => [...filteredProducts].sort(ProductComparators[activeSort]),
    [filteredProducts, activeSort],
  );

  const products = useMemo(
    () => applySearchString([...sortedProducts], searchString),
    [sortedProducts, searchString],
  );

  return (
    <div className="product-board">
      {products.length ? (
        products.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))
      ) : (
        <b>No results.</b>
      )}
    </div>
  );
};

export default ProductBoard;
