import Header from './Components/Header';
import Footer from './Components/Footer';
import Login from './Pages/LOGIN/Login';
import Signup from './Pages/SIGNUP/Signup';
import HomePage from './Pages/HomePage/HomePage';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import MyOrders from './Components/MyOrders/MyOrders';
import { useSelector } from 'react-redux';
import Cart from './Components/Cart/Cart';
import Singleproduct from './Pages/SingleProduct/Singleproduct';
import AdminHomePage from './Components/Admin_panel/AdminHomePage';

function App() {
  const userdata = useSelector((state) => state.userReducer);
 const noHeaderFooterRoutes = ['/login', '/signup','/admin_panel'];
console.log(userdata);


  const shouldDisplayHeaderFooter = () => {
    return !noHeaderFooterRoutes.includes(window.location.pathname);
  };

  return (
    <div>
      <BrowserRouter>
   
        {shouldDisplayHeaderFooter() && <Header />}
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/Myorders' element={<MyOrders />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/product/:id' element={<Singleproduct />} />
          <Route path='/admin_panel' element={<AdminHomePage />} />
        </Routes>
        {shouldDisplayHeaderFooter() && <Footer />}
      </BrowserRouter>
    </div>
  );
}

export default App;
