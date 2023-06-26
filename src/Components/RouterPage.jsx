import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Login from "./users/Login"

import Dashboard from "./users/Dashboard"
import Registration from "./users/Registration"
import Orders from "./users/Orders"
import Profile from "./users/Profile"
import Cart from "./users/Cart"
import Products from "./users/Medicine"



import AdminDashbord from "./admin/AdminDashbord"
import AdminOrders from "./admin/AdminOrders"
import CustomerList from "./admin/CustomerList"
import Medicine from "./admin/Medicine"



function RouterPage() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<Products />} />


        <Route path="/admindashboard" element={<AdminDashbord />} />
        <Route path="/adminorders" element={<AdminOrders />} />
        <Route path="/customerlist" element={<CustomerList />} />
        <Route path="/medicine" element={<Medicine />} />


      </Routes>

    </Router>


  )
}

export default RouterPage