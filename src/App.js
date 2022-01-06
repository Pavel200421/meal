import React from 'react'
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import Product from "./components/Product/product";
import NotFound from "./components/NotFound/notFound";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './style.css'
import Category from "./components/Category/category";
import Meal from "./components/Meal/meal";
import SignUp from "./components/SignUp/signUp";
import Layout from "./components/Layout/layout";




function App() {
  return (
    <div className="App">

            <Routes>
                <Route path='/signUp' element={<SignUp/>}/>
                <Route path='/' element={<Layout/>}>
                    <Route path='' element={<Home/>}/>
                    <Route path='cart' element={<Cart/>}/>
                    <Route path='product' element={<Product/>}/>
                    <Route path='category/:name' element={<Category/>}/>
                    <Route path={'category/:name/:id'} element={<Meal/>}/>
                    <Route path='*' element={<NotFound/>}/>
                </Route>

            </Routes>
    </div>
  );
}

export default App;
