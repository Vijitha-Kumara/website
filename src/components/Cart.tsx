type Props = {
  cart: any[];
  removedItem: (id: number) => void;
};
function Cart({ cart, removedItem }: Props) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cart.map((item, index) => (
        <div key={index}>        
          {item.name} ${item.price}
          <button onClick={() => removedItem(item.id)}>Remove</button>
        </div>
      ))}
      <h3>Total: ${total}</h3>
    </div>
  );
}

export default Cart;
