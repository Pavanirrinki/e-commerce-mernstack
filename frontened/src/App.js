import Header from './Components/Header';
import Footer from './Components/Footer';
import Login from './Pages/LOGIN/Login';
import Signup from './Pages/SIGNUP/Signup';
import HomePage from './Pages/HomePage/HomePage';
import{BrowserRouter,Route,Routes} from "react-router-dom"
import MyOrders from './Components/MyOrders/MyOrders';
import { useSelector,useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Cart from './Components/Cart/Cart';
function App() {
//  const dispatch = useDispatch();
  const userdata = useSelector(state=>state.userReducer)
//  const fetchdata = () => {
//   return async (dispatch) => {
//     try {
//       let response = await fetch("https://jsonplaceholder.typicode.com/todos");
//       let data = await response.json();
//       dispatch({ type: "SIGNUP_SUCCESS", payload: data });
//     } catch (error) {
//       // Handle error if needed
//       console.error('Error fetching data:', error);
//     }
//   };
// };
// useEffect(() => {
//   dispatch(fetchdata());
// }, [dispatch]);

console.log(userdata)
  return (
    <div>
 
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' Component={HomePage} />
      <Route path='/login' Component={Login} />
      <Route path='/signup' Component={Signup} />
      <Route path='/Myorders' Component={MyOrders} />
      <Route path='/Cart' Component={Cart} />
    </Routes>
    <Footer />
    </BrowserRouter>  
    </div>
  );
}

export default App;
