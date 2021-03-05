import './App.css';
import NavbarComponent from './components/navBar/index';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

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
    <BrowserRouter>
      <NavbarComponent />
      <Switch>
        <Route exact path='/Patines'>
          <ItemListContainer />
        </Route>
        <Route exact path='/Detail'>
          <ItemDetailContainer />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;