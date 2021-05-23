import './App.scss';
import Categories from './components/categories';
import Products from './components/products';
import Header from './components/header';

function App() {
  return (
    <>
    <header>
      <Header/>
    </header>
    <div style={{marginTop:"4rem"}} >
      <Categories/>
      <Products/>
    </div>
    </>
  );
}

export default App;
