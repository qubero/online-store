import { Pairs } from '../../constants';
import { setActiveFilters } from '../../features/filters/filtersSlice';
import { FiltersPayload } from '../../features/filters/types';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import Checkbox from '../ui/checkbox';

const PairsFilter = () => {
  const dispatch = useAppDispatch();
  const activePairs = useAppSelector(
    (state) => state.filters.activeFilters.pairs,
  );
  const pairs = new Set([...activePairs]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;

    if (checked) {
      pairs.add(value);
    } else {
      pairs.delete(value);
    }

    const payload: FiltersPayload = {
      type: 'pairs',
      value: Array.from(pairs),
    };

    dispatch(setActiveFilters(payload));
  };

  return (
    <fieldset>
      <legend>Choose number of pairs</legend>
      {Object.entries(Pairs).map(([key, value]) => (
        <Checkbox
          key={key}
          value={value}
          label={value}
          onChange={handleChange}
          name={'pairs'}
          checked={pairs.has(value)}
        />
      ))}
    </fieldset>
  );
};

export default PairsFilter;
