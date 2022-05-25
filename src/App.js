import logo from './logo.svg';
import './App.css';
import OrderDetails from './components/OrderDetails/OrderDetails';
import OrdersList from './components/OrdersList/OrdersList';
import Register from './components/Register/Register';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import UserPage from './components/UserPage/UserPage';
import UserStatistics from './components/UserStatiatic/UserStatistics';
import UserOrders from './components/UserOrders/UserOrders';
import UserProfile from './components/UserProfile/UserProfile';


function App() {
  return (
    <div className="App">

      <Navbar />
      <Routes>
        <Route path="register" element={<Register />} />
        <Route path="orders-list" element={<OrdersList />} />
        <Route path="order-details" element={<OrderDetails />} />
        <Route path="user-page" element={<UserPage />} >
                <Route path="orders" element={<UserOrders />}/>
                <Route path="statistics" element={<UserStatistics />}/>
                <Route path="profile" element={<UserProfile />}/>

        </Route>

      </Routes>

    </div>
  );
}

export default App;
