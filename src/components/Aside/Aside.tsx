import {
  clearFilters,
  resetFilters,
} from '../../features/filters/filtersSlice';
import {
  clearProducts,
  resetProducts,
} from '../../features/products/productsSlice';
import { clearSort, resetSort } from '../../features/sort/sortSlice';
import { useAppDispatch } from '../../hooks/redux';
import AmountSlider from '../AmountSlider';
import BrandsFilter from '../BrandsFilter';
import ColorsFilter from '../ColorsFilter';
import PairsFilter from '../PairsFilter';
import PopularFilter from '../PopularFilter';
import PriceSlider from '../PriceSlider';
import Accordion from '../ui/accordion';

const Aside = () => {
  const dispatch = useAppDispatch();

  const handleResetFilters = () => {
    dispatch(resetFilters());
    setTimeout(() => dispatch(clearFilters()), 0);
  };

  const handleResetSort = () => {
    dispatch(resetSort());
    setTimeout(() => {
      dispatch(clearSort());
      dispatch(resetProducts());
      dispatch(clearProducts());
      setTimeout(() => handleResetFilters(), 0);
    }, 0);
  };

  return (
    <aside className="aside">
      <Accordion label="New">
        <PopularFilter />
      </Accordion>

      <Accordion label="Brand">
        <BrandsFilter />
      </Accordion>

      <Accordion label="Color">
        <ColorsFilter />
      </Accordion>

      <Accordion label="Pairs">
        <PairsFilter />
      </Accordion>

      <Accordion label="Price">
        <PriceSlider />
      </Accordion>

      <Accordion label="Amount">
        <AmountSlider />
      </Accordion>

      <div
        style={{
          display: 'flex',
          gap: '10px',
          marginTop: 50,
          marginBottom: 50,
        }}
      >
        <button
          style={{
            background: 'transparent',
            border: 0,
            cursor: 'pointer',
          }}
          onClick={handleResetFilters}
          type="button"
          tabIndex={0}
        >
          Reset Filters
        </button>

        <button
          style={{
            background: 'transparent',
            border: 0,
            cursor: 'pointer',
          }}
          onClick={handleResetSort}
          type="button"
          tabIndex={0}
        >
          Reset All
        </button>
      </div>
    </aside>
  );
};

export default Aside;
