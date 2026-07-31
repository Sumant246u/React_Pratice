import React from 'react'
import './Navbar.css'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from "react-toastify";

import { clearUser } from '../../redux/slices/AuthSlice'
import { logout } from '../../services/authService';


const Navbar = ({ search, setSearch }) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth)

  const cartItems = useSelector(state => state.cart.cartItems);
  console.log(cartItems);

  const handleLogout = async () => {
    try {
      await logout;
      dispatch(clearUser());
      toast.success('Logout successfully')
      navigate("/login")
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
        "Logout failed"
      );
    }
  }
  return (
    <nav className="navbar">

      {/* Logo */}
      <div className="logo">
        <Link to="/">
          <h2>ShopEasy</h2>
        </Link>
      </div>

      {/* Search */}
      <div className="search">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search products..."
        />
      </div>

      {/* Menu */}
      <div className="menu">

        <Link to="/">Home</Link>

        {user ? (
          <>
            <span>
              Hello, {user.name}
            </span>

            <Link to="/profile">
              Profile
            </Link>

            <button onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">
              Login
            </Link>

            <Link to="/register">
              Register
            </Link>
          </>
        )}

        <Link to="/cart">
          Cart ({cartItems.length})
        </Link>

      </div>

    </nav>
  )
}

export default Navbar