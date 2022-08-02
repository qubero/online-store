import { SortTypes } from '../../constants';
import { setActiveSort } from '../../features/sort/sortSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import Dropdown from '../ui/dropdown';

const SortDropdown = () => {
  const dispatch = useAppDispatch();
  const activeSort = useAppSelector((state) => state.sort.activeSort);
  const label = `Sort by:`;

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setActiveSort(e.target.value));
  };

  return (
    <div>
      <label htmlFor={label}>
        <b>{label}</b>{' '}
      </label>
      <Dropdown
        id={label}
        value={activeSort}
        options={Object.values(SortTypes)}
        onChange={handleSortChange}
      />
    </div>
  );
};

export default SortDropdown;
