
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Cart } from './display/cart/Cart';
import { Category } from './display/category/category';
import { Header } from './display/header/header';
import { HomePage } from './display/HomePage/homepage';
import { ItemDetail } from './display/itemsDetail/ItemDetail';
import { LoginPage } from './display/LoginPage/LoginPage';
import { StripeContainer } from './display/payment/stripeContainer';
import { Profile } from './display/Profile/profile';
import { SignUp } from './display/signUp/SignUp';
import { FireStoreContextProvider, useAuth } from './fireStoreContext/fireStoreContext';
function App() {
  return (
    <>
      <FireStoreContextProvider>
        <BrowserRouter>
        <Header/>
          <Routes>
            <Route path='/' element={ <HomePage/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/products/:id' element={<ItemDetail/>}/>
            <Route path='/category/:type' element={<Category/>}/>
            <Route path='/payment' element={<StripeContainer/>}/>
          </Routes>
        </BrowserRouter>
      </FireStoreContextProvider>
    </>
  );
}

export default App;
