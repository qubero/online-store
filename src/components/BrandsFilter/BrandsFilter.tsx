import { Brands } from '../../constants';
import { setActiveFilters } from '../../features/filters/filtersSlice';
import { FiltersPayload } from '../../features/filters/types';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import Checkbox from '../ui/checkbox';

const BrandsFilter = () => {
  const dispatch = useAppDispatch();
  const activeBrands = useAppSelector(
    (state) => state.filters.activeFilters.brand,
  );
  const brands = new Set([...activeBrands]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    checked ? brands.add(value) : brands.delete(value);

    const payload: FiltersPayload = {
      type: 'brand',
      value: Array.from(brands),
    };

    dispatch(setActiveFilters(payload));
  };

  return (
    <fieldset>
      <legend>Choose brands</legend>
      {Object.entries(Brands).map(([key, value]) => (
        <Checkbox
          key={key}
          value={value}
          label={value}
          onChange={handleChange}
          name={'brands'}
          checked={brands.has(value)}
        />
      ))}
    </fieldset>
  );
};

export default BrandsFilter;
