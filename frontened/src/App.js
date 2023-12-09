import { useEffect } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Login from './Pages/LOGIN/Login';
import Signup from './Pages/SIGNUP/Signup';
import HomePage from './Pages/HomePage/HomePage';
import { Route, Routes, useNavigate } from 'react-router-dom';
import MyOrders from './Components/MyOrders/MyOrders';
import { useSelector,useDispatch } from 'react-redux';
import Cart from './Components/Cart/Cart';
import Singleproduct from './Pages/SingleProduct/Singleproduct';
import AdminHomePage from './Components/Admin_panel/AdminHomePage';
import Dashboard from './Components/Admin_panel/Dashboard';
import CreateProduct from './Components/Admin_panel/Products/CreateProduct';
import CreateNewproduct from './Components/Admin_panel/Products/CreateNewproduct';
import Categories from './Components/Admin_panel/Products/Categories';
import EditProduct from './Components/Admin_panel/Products/EditProduct';


function App() {
  const userdata = useSelector((state) => state);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const noHeaderFooterRoutes = ['/login', '/signup', '/admin_panel'];
console.log()
const shouldDisplayHeaderFooter = () => {

  return (!noHeaderFooterRoutes.some(route => window.location.pathname.includes(route)))

};
useEffect(() => {
  shouldDisplayHeaderFooter();
}, [navigate])

  return (
    <div>
      {shouldDisplayHeaderFooter() &&<div> 
        <Header />
        </div>}

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/Myorders' element={<MyOrders />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/product/:id' element={<Singleproduct />} />
        <Route path='/admin_panel' element={<AdminHomePage />} >
          <Route path='Dashboard' element={<Dashboard />} />
          <Route path='CreateProduct' element={<CreateProduct />} />
          <Route path='CreateNewproduct' element={<CreateNewproduct />} />
          <Route path='Categories' element={<Categories />} />
          <Route path='Edit_product/:id' element={<EditProduct />} />
        </Route>
      </Routes>
      {shouldDisplayHeaderFooter() && <Footer />}

    </div>
  );
}

export default App;
