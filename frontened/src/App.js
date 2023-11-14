import Header from './Components/Header';
import Footer from './Components/Footer';
import Login from './Pages/LOGIN/Login';
import Signup from './Pages/SIGNUP/Signup';
import HomePage from './Pages/HomePage/HomePage';
import{BrowserRouter,Route,Routes} from "react-router-dom"
function App() {
  return (
    <div>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' Component={HomePage} />
      <Route path='/login' Component={Login} />
      <Route path='/signup' Component={Signup} />
    </Routes>
    <Footer />
    </BrowserRouter>  
    </div>
  );
}

export default App;
