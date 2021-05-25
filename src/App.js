import './App.scss';
import Categories from './components/categories';
import Products from './components/products';
import Header from './components/header';
import Cart from './components/cart';

function App() {
  return (
    <>
    <header>
      <Header/>
    </header>
    <div  >
      <Categories/>
      <Cart/>
      <Products />
    </div>
    </>
  );
}

export default App;
