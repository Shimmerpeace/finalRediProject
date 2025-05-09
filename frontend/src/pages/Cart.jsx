import React from "react";
import { useCart } from "../contextProvider/CartContext";
import { AiOutlineDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cart, dispatch } = useCart();
  const navigate = useNavigate();

  const handleUpdate = (id, quantity) => {
    if (quantity < 1) return;
    dispatch({ type: "UPDATE", id, quantity });
  };

  let total = 0;
  for (const item of cart) {
    total += item.price * item.quantity;
  }
  /*
//// OR Using a Traditional for Loop

let total = 0;
for (let i = 0; i < cart.length; i++) {
  total += cart[i].price * cart[i].quantity;
}

//// OR Using forEach

let total = 0;
cart.forEach(item => {
  total += item.price * item.quantity;
});

//// OR Using map and reduce Separately

 const total = cart
 .map(item => item.price * item.quantity)
 .reduce((sum, value) => sum + value, 0);

//// OR
const total = cart.reduce((sum, item) 
  => sum + item.price * item.quantity, 0);
  
*/

  //if (cart.length === 0) return <div>Empty Cart.</div>;
  if (cart.length === 0) return <div className="empty-cart">Empty Cart.</div>;


  return (
    <>
      <div className="cart">
        <h3>
          Subtotal: <b>${total.toFixed(2)}</b>
        </h3>

        <div className="checkout-btn">
          <button>Proceed to checkout!</button>
        </div>

        {cart.map((item) => (
          <div key={item.id} className="cart-card">
            <div className="cart-item">
              <img src={item.image} alt={item.title} />
              <div>
                <p>{item.title}</p>
                <p className="cart-price">${item.price}</p>
              </div>
            </div>

            <div className="qty-del-container">
              <input
                type="number"
                value={item.quantity}
                min={1}
                className="cart-qty"
                onChange={(e) =>
                  handleUpdate(item.id, parseInt(e.target.value))
                }
              />
              <button
                onClick={() => dispatch({ type: "REMOVE", id: item.id })}
                className="Delete-Btn"
              >
                <AiOutlineDelete />
              </button>

              <button onClick={() => navigate("/")} className="return-btn">
                Continue Shopping
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
/*


import { useContext } from "react";
import { ShopContext } from "../context/storeContext";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cart, removeFromCart, updateCartItemCount, addToCart, getTotalCartAmount } = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();
    const navigate = useNavigate();

  return (
    <>
      {cart && cart.length > 0 && (

        /////////////
        <div className="cart-section">
          <div>
            <h1>Cart Items</h1>
          </div>

          <div className="cartItems">
            {cart.map((item) => {
              if (cart[item.id] !== 0) {
                return (
                  <div key={item.id} className="cart-item">
                    <img src={item.image} alt={item.title} width="50" />
                    <span>{item.title}</span>
                    <p>${item.price}</p>

                    <button onClick={() => removeFromCart(item.id)}>-</button>
                    <input
                      value={cart[item.id]}
                      onChange={(event) =>
                        updateCartItemCount(Number(event.target.value), item.id)
                      }
                    />
                    <button onClick={() => addToCart(item.id)}>+</button>
                  </div>
                );
              }
            })}
          </div>

          {totalAmount > 0 ? (
        <div className="checkout">
          <p>Subtotal: ${totalAmount}</p>
          <button onClick={() => navigate("/")}>Continue Shopping</button>
          <button>Checkout</button>
        </div>
      ) : (
        <div>
          <h1>Empty Cart!</h1>
        </div>
      )}  

        </div>

        //////////////
      )}
    </>
  );
}

export default Cart;

/**


import { useContext } from "react";
import { ShopContext } from "../context/storeContext";

function Cart() {
  const { cart, removeFromCart } = useContext(ShopContext);

  return (
    <>
    
      {cart && cart.length > 0 && (
        <div className="cart-section">
          <h2>Your Cart</h2>


          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} width="50" />
              <span>{item.title}</span>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}

          
        </div>
      )}
    </>
  );
}

export default Cart;


 */
