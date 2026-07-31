import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home/Home";
import MainLayout from "../layout/MainLayout";

import Cart from "../pages/cart/Cart";
import Wishlist from "../pages/wishlist/Wishlist";
import ProductDetails from "../pages/ProductDetails/ProductDetails";

import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";

import ProtectedRoute from "./ProtectedRoute";

const AppRoute = () => {
   return (
      <Routes>

         {/* Public Routes */}
         <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
         </Route>


         {/* Protected Routes */}
         <Route element={<ProtectedRoute />}>
            <Route element={<MainLayout />}>

               <Route
                  path="/product/:id"
                  element={<ProductDetails />}
               />

               <Route
                  path="/cart"
                  element={<Cart />}
               />

               <Route
                  path="/wishlist"
                  element={<Wishlist />}
               />

            </Route>
         </Route>

      </Routes>
   );
};

export default AppRoute;