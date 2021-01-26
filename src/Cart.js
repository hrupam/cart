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
          qty: 0,
          img: "",
          img_alt: "",
          id: 1,
        },
        {
          price: 999,
          title: "Camera",
          qty: 0,
          img: "",
          img_alt: "",
          id: 2,
        },
        {
          price: 999,
          title: "Laptop",
          qty: 0,
          img: "",
          img_alt: "",
          id: 3,
        },
        {
          price: 999,
          title: "Headphone",
          qty: 0,
          img: "",
          img_alt: "",
          id: 4,
        },
      ],
    };
  }
  handleIncreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qty += 1;
    this.setState({ products: products });
  };
  handleDecreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qty !== 0 && (products[index].qty -= 1);
    this.setState({ products: products });
  };
  handleDeleteProduct = (prod) => {
    const items = this.state.products.filter((product) => product !== prod);
    this.setState({ products: items });
  };
  render() {
    const { products } = this.state;
    // console.log(products);
    return (
      <div className="cart">
        {products.map((product) => {
          return (
            <CartItem
              product={product}
              key={product.id}
              onIncreaseQuantity={this.handleIncreaseQuantity}
              onDecreaseQuantity={this.handleDecreaseQuantity}
              onDeleteProduct={this.handleDeleteProduct}
            />
          );
        })}
      </div>
    );
  }
}

export default Cart;
