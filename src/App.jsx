import './App.css';
// import {useState} from 'react';
import NavbarComponent from './components/navBar/index';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import CartContext from './context/CartContext';
import CartComponent from './components/cart/Cart';

const App = () => {

  let stock = 20

  const handleAdd = (counter) => {
      return () => {
          if(stock <= 0){
              alert('No hay stock')
          }else{
              alert(`Se van a agregar ${counter} items`)
          }
      }
  }
  
  return (
    <CartContext>
    <BrowserRouter>
      <NavbarComponent />
      <Switch>
        <Route exact path='/Patines'>
          <ItemListContainer />
        </Route>
        <Route exact path='/Detail'>
          <ItemDetailContainer />
        </Route>        
        <Route exact path='/Cart'>
          <CartComponent />
        </Route>
      </Switch>
    </BrowserRouter>
    </CartContext>
  );
}

export default App;





// video min 1:18