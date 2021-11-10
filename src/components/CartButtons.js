import React from "react";
import { FaShoppingCart, FaUserCheck, FaUserTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useProductsContext } from "../context/products_context";
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";

const CartButtons = () => {
  const { closeSideBar } = useProductsContext();
  const { total_items } = useCartContext();
  const { loginWithRedirect, myUser, logout } = useUserContext();
  return (
    <Wrapper className="cart-btn-wrapper">
      <Link to="/cart" className="cart-btn" onClick={closeSideBar}>
        Cart{" "}
        <span className="cart-container">
          <FaShoppingCart />
          <span className="cart-value">{total_items}</span>
        </span>
      </Link>
      {myUser ? (
        <div className="cart-container">
          <button
            type="button"
            className="auth-btn"
            onClick={() =>
              logout({
                returnTo: window.location.origin,
              })
            }
          >
            Logout
          </button>
          <img src={myUser.picture} alt={myUser.nickname} className="image" />
        </div>
      ) : (
        <button type="button" className="auth-btn" onClick={loginWithRedirect}>
          Login <FaUserCheck />
        </button>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 90px 90px;
  align-items: center;
  width: 225px;

  .cart-btn {
    color: #654e49;
    font-size: 1.1rem;
    letter-spacing: var(--spacing);
    color: #654e49;
    display: flex;

    align-items: center;
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 1.6rem;
      margin-left: 5px;
    }
  }
  .cart-value {
    position: absolute;
    top: -10px;
    right: -16px;
    background: var(--clr-primary-5);
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.75rem;
    color: var(--clr-white);
    padding: 12px;
  }
  .auth-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    font-size: 1.1rem;
    cursor: pointer;
    color: #654e49;
    letter-spacing: var(--spacing);
    font-family: "Lato", serif;

    svg {
      margin-left: 5px;
    }
  }
  .image {
    max-width: 30px;
    border-radius: 1rem;
    height: auto;
  }
`;
export default CartButtons;
