import { setSearchString } from '../../features/sort/sortSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import Search from '../ui/search';

const SearchFilter = () => {
  const dispatch = useAppDispatch();
  const searchString = useAppSelector((state) => state.sort.searchString);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchString(e.target.value));
  };

  return (
    <div>
      <Search
        onChange={handleSearchChange}
        label="Search"
        placeholder="low cut socks"
        autoComplete="off"
        // eslint-disable-next-line jsx-a11y/no-autofocus
        autoFocus
        value={searchString}
      />
    </div>
  );
};

export default SearchFilter;
