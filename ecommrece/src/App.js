
import './App.css';
import Home from './pages/Home';
import SingleProduct from './pages/SingleProduct'
import Checkout from './pages/Checkout'
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import PaymentPage from './pages/PaymentPage';
import SuccessPage from './pages/SuccessPage';
import CategoriesList from './pages/CategorieList'
import Login from './pages/Login'
import Register from './pages/Register'
import { useEffect } from 'react';
import CategoriesListItem from './components/catergoeisList/CategoriesListItem';
import CreateProduct from './pages/CreateProduct';

import OrderDetails from './pages/OrderDetails';
import { useSelector } from 'react-redux';

function App() {
  
  let user=useSelector(state=>state.userReducer.user)
  return (
   
       <BrowserRouter >
           <Routes >
            
            
            <Route path='/createProduct' element={user?<CreateProduct/>:<Navigate replace to={'/login'} />} ></Route>
            <Route path='/categorylist/:category' element={user?<CategoriesList/>:<Navigate replace to={'/login'} />} ></Route>
            <Route path='/singleproduct/:id' element={user?<SingleProduct/>:<Navigate replace to={'/login'} />} ></Route>
            <Route path='/checkout' element={user?<Checkout/>:<Navigate replace to={'/login'} />} ></Route>
            <Route path='/success' element={user?<SuccessPage/>:<Navigate replace to={'/login'} />} ></Route>
            <Route path='/login' element={!user?<Login/>:<Navigate replace to='/'/>} ></Route>
            <Route path='/register' element={!user?<Register/>:<Navigate replace to={'/'} />} ></Route>
            <Route path='/paymentpage' element={user?<PaymentPage/>:<Navigate replace to={'/login'} />} ></Route>
            <Route path='/order' element={user?<OrderDetails/>:<Navigate replace to={'/login'} />} ></Route>
            <Route path='/' element={user?<Home/>:<Navigate replace to={'/login'} />} ></Route>
           </Routes>
       </BrowserRouter>
      
  );
}

export default App;
