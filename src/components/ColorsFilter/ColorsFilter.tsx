import { Colors } from '../../constants';
import { setActiveFilters } from '../../features/filters/filtersSlice';
import { FiltersPayload } from '../../features/filters/types';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import Checkbox from '../ui/checkbox';

const ColorsFilter = () => {
  const dispatch = useAppDispatch();
  const activeColors = useAppSelector(
    (state) => state.filters.activeFilters.color,
  );
  const colors = new Set([...activeColors]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;

    if (checked) {
      colors.add(value);
    } else {
      colors.delete(value);
    }

    const payload: FiltersPayload = {
      type: 'color',
      value: Array.from(colors),
    };

    dispatch(setActiveFilters(payload));
  };

  return (
    <fieldset>
      <legend>Choose colors</legend>
      {Object.entries(Colors).map(([key, value]) => (
        <Checkbox
          key={key}
          value={value}
          label={value}
          onChange={handleChange}
          name={'colors'}
          checked={colors.has(value)}
        />
      ))}
    </fieldset>
  );
};

export default ColorsFilter;
