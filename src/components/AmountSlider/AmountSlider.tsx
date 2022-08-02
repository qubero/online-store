import ReactSlider from 'react-slider';
import { setActiveFilters } from '../../features/filters/filtersSlice';
import { FiltersPayload } from '../../features/filters/types';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

const AmountSlider = () => {
  const dispatch = useAppDispatch();
  const activeAmount = useAppSelector(
    (state) => state.filters.activeFilters.amount,
  );

  const handleChange = (value: [number, number]) => {
    const payload: FiltersPayload = {
      type: 'amount',
      value,
    };

    dispatch(setActiveFilters(payload));
  };

  return (
    <div>
      <ReactSlider
        pearling
        max={500}
        value={activeAmount}
        onChange={handleChange}
        onAfterChange={handleChange}
        className="horizontal-slider"
        thumbClassName="thumb"
        trackClassName="track"
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
      />
    </div>
  );
};

export default AmountSlider;
