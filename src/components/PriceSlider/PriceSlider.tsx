import ReactSlider from 'react-slider';
import { setActiveFilters } from '../../features/filters/filtersSlice';
import { FiltersPayload } from '../../features/filters/types';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

const PriceSlider = () => {
  const dispatch = useAppDispatch();
  const activePrice = useAppSelector(
    (state) => state.filters.activeFilters.price,
  );

  const handleChange = (value: [number, number]) => {
    const payload: FiltersPayload = {
      type: 'price',
      value,
    };

    dispatch(setActiveFilters(payload));
  };

  return (
    <div>
      <ReactSlider
        pearling
        max={20}
        value={activePrice}
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

export default PriceSlider;
