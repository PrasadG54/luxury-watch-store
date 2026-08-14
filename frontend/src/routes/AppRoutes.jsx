import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import Services from "../pages/Services";
import CollectionsPage from "../pages/Collections";
import VerifyEmail from "../pages/VerifyEmail";
import WatchDetails from "../pages/WatchDetails";
import Products from "../pages/Products";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Account from "../pages/Account";
import ProtectedRoute from "./ProtectedRoute";
import PointOfSale from "../pages/PointOfSale";
import AppointmentConfirmation from "../pages/AppointmentConfirmation";
import MyAppointments from "../pages/MyAppointments";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/collections" element={<CollectionsPage />} />
          <Route path="/collections/:reference" element={<WatchDetails />} />
          <Route path="/verify-email/:token" element={<VerifyEmail />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/point-of-sale" element={<PointOfSale />} />
          <Route path="/appointment-confirmation" element={<AppointmentConfirmation />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/account" element={<Account />} />
          <Route path="/appointments" element={<MyAppointments />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;