
import { BrowserRouter as Router, 
         Routes, 
         Route, 
         Link } from 'react-router-dom';

import Home from './components/home';
import LoginForm from './components/Login_form';
import SignUp from './components/Sign_up';
import Cart from "./components/cart";


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<LoginForm/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
