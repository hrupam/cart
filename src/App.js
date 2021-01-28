import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";
import Footer from "./Footer";
// import products from "./products";
import firebase from "firebase/app";
import "firebase/firestore";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      // products: products,
      products: [], //this will now get data from fiebase
      loading: true,
    };
    // console.log("CONSTRUCTOR CALLED");
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
  componentDidMount() {
    // console.log("COMPONENT MOUNTED");
    firebase
      .firestore()
      .collection("products")
      .get()
      .then((snapshot) => {
        const products = snapshot.docs.map((doc) => {
          // console.log(doc.data());
          const data = doc.data();
          data.id = doc.id;
          return data;
        });
        this.setState({ products: products, loading: false });
      });
  }
  render() {
    // console.log("RENDER CALLED");
    return (
      <div className="App">
        <Navbar count={this.countQuantity()} />
        <Cart
          products={this.state.products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        {this.state.loading && <h1>Loading Products...</h1>}
        <Footer price={this.calcPrice()} />
      </div>
    );
  }
}

export default App;
