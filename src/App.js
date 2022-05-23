import logo from './logo.svg';
import './App.css';
import OrderDetails from './components/OrderDetails/OrderDetails';
import OrdersList from './components/OrdersList/OrdersList';
import Register from './components/Register/Register';


function App() {
  return (
    <div className="App">     
      <h1>My-App</h1>
      <OrderDetails />
      <OrdersList />
      <Register />
    </div>
  );
}

export default App;
