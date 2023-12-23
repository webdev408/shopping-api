/* eslint-disable react/prop-types */
const Cart = ({ cart, removeFromCart, updateQuantity }) => {
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  return (
    <div className="container">
      <h2 className="my-4 text-center">Items in Cart</h2>
      <div className="row">
        {cart.map((item, index) => (
          <div className="col-4" key={index}>
            <div className="card">
              <img src={item.image} className="card-img-top" alt={item.title} />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>
                <p className="card-text">${item.price}</p>
              </div>
            </div>
            <input
              type="number"
              value={item.quantity}
              onChange={(e) => updateQuantity(index, e.target.value)}
            />
            <button
              className="btn btn-danger ms-2"
              onClick={() => removeFromCart(index)}
            >
              Remove from Cart
            </button>
          </div>
        ))}
        <h3>Total: ${total.toFixed(2)}</h3>
      </div>
    </div>
  );
};
export default Cart;
