import CartItem from "./CartItem";

const Cart = (props) => {
  // console.log(props);
  const { products } = props;
  // console.log(products);
  return (
    <div className="cart-container">
      <h1>Cart</h1>
      <div className="cart">
        {products.map((product) => {
          return (
            <CartItem
              product={product}
              key={product.id}
              onIncreaseQuantity={props.onIncreaseQuantity}
              onDecreaseQuantity={props.onDecreaseQuantity}
              onDeleteProduct={props.onDeleteProduct}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
