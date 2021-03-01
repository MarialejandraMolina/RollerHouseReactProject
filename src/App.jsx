import './App.css';
import NavbarComponent from './components/navBar/index';
import ItemListContainer from './containers/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

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
    <>
      <NavbarComponent />
      <ItemListContainer />
      <ItemCount onAdd = {handleAdd} stock = {stock} inicial = {0}/>
    </>
  );
}

export default App;