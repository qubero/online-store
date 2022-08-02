import { setActiveFilters } from '../../features/filters/filtersSlice';
import { FiltersPayload } from '../../features/filters/types';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import Checkbox from '../ui/checkbox';

const PopularFilter = () => {
  const dispatch = useAppDispatch();
  const activeBrands = useAppSelector(
    (state) => state.filters.activeFilters.onlyNew,
  );
  const brands = new Set([...activeBrands]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;

    if (checked) {
      brands.add(value)
    } else {
      brands.delete(value);
    }

    const payload: FiltersPayload = {
      type: 'onlyNew',
      value: Array.from(brands),
    };

    dispatch(setActiveFilters(payload));
  };

  return (
    <fieldset>
      <Checkbox
        value={'onlyNew'}
        label={'Only new'}
        onChange={handleChange}
        name={'brands'}
        checked={brands.has('onlyNew')}
      />
    </fieldset>
  );
};

export default PopularFilter;
