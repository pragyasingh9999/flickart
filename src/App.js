
import { BrowserRouter as Router, 
         Routes, 
         Route, 
         Link } from 'react-router-dom';

import Home from './components/home';
import LoginForm from './components/Login_form';
import SignUp from './components/Sign_up';
import Cart from "./components/cart";
import { MenProduct, WomenProduct, Jewellery, NewArrivals } from './components/product';


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<LoginForm/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/menproduct" element={<MenProduct/>}/>
        <Route path="/womenproduct" element={<WomenProduct/>}/>
        <Route path="/jewellery" element={<Jewellery/>}/>
        <Route path="/newarrivals" element={<NewArrivals/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
