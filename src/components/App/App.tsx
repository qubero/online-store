import Aside from '../Aside';
import Cart from '../Cart';
import ProductBoard from '../ProductBoard';
import SearchFilter from '../SearchFilter';
import SortDropdown from '../SortDropdown';
import '../../style.css';

const App = () => {
  return (
    <>
      <div
        className="container layout"
        style={{ marginBottom: 20, alignItems: 'center' }}
      >
        <h1 style={{ marginRight: 'auto' }}>SOCKS</h1>
        <SearchFilter />
        <SortDropdown />
        <Cart />
      </div>

      <div className="container layout">
        <Aside />
        <ProductBoard />
      </div>
    </>
  );
};

export default App;
