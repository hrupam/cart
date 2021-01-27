import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";
import Footer from "./Footer";
import products from "./products";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: products,
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
  handleDeleteProduct = (id) => {
    const { products } = this.state;
    const items = products.filter((product) => product.id !== id);
    this.setState({ products: items });
  };
  countQuantity = () => {
    let count = 0;
    const { products } = this.state;
    products.forEach((product) => {
      count += product.qty;
    });
    console.log(products);
    return count;
  };
  calcPrice = () => {
    let price = 0;
    const { products } = this.state;
    products.forEach((product) => {
      price += product.price * product.qty;
    });
    return price;
  };
  render() {
    return (
      <div className="App">
        <Navbar count={this.countQuantity()} />
        <Cart
          products={this.state.products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        <Footer price={this.calcPrice()} />
      </div>
    );
  }
}

export default App;
