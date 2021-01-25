import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 999,
          title: "Phone",
          qty: 1,
          img: "",
          img_alt: "",
          id: 1,
        },
        {
          price: 999,
          title: "Camera",
          qty: 1,
          img: "",
          img_alt: "",
          id: 2,
        },
        {
          price: 999,
          title: "Laptop",
          qty: 1,
          img: "",
          img_alt: "",
          id: 3,
        },
      ],
    };
  }
  render() {
    const { products } = this.state;
    // console.log(products);
    return (
      <div className="cart">
        {products.map((product) => {
          return <CartItem product={product} key={product.id} />;
        })}
      </div>
    );
  }
}

export default Cart;
