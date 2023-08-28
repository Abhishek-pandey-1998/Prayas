import './App.css';
import Header from './Components/Layout/Header';
import Footer from './Components/Layout/Footer';
import MealsMenu from './Components/Meals/MealsMenu';
import Cart from './Components/Cart/Cart';
import { useState } from 'react';
import CartProvider from './Store/CartProvider';

function App() {

  const[clicked,setClicked] = useState(false);

  function showCartHandler(){
    setClicked(true);
  }

  function hideCartHandler(){
    setClicked(false);
  }

  return (
    <CartProvider>
      <Header onShow={showCartHandler}/>
      {clicked && <Cart onClose={hideCartHandler}/>}
      <MealsMenu />
      <Footer />
    </CartProvider>
  );
}

export default App;
