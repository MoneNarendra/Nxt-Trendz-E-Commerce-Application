import CartContext from '../../context/CartContext'
import './index.css'

const cartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let amount = 0
      cartList.forEach(eachProduct => {
        amount += eachProduct.price * eachProduct.quantity
      })

      return (
        <div className="cart-summary-container">
          <div className="price-container">
            <h1 className="price-heading">Order Total:</h1>
            <h1 className="price-amount">Rs {amount}/-</h1>
          </div>
          <p className="items-text">{cartList.length} items in cart</p>
          <button className="checkout-btn" type="button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default cartSummary
