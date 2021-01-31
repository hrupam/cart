import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";
import Footer from "./Footer";
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
    const docRef = firebase.firestore().collection("products").doc(product.id);
    docRef
      .update({
        qty: product.qty + 1,
      })
      .then(() => console.log("Product updated"))
      .catch((error) => console.log(error));
    this.getProductsAndSetState();
  };
  handleDecreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    if (products[index].qty === 0) return;
    else {
      const docRef = firebase
        .firestore()
        .collection("products")
        .doc(product.id);
      docRef
        .update({
          qty: product.qty - 1,
        })
        .then(() => console.log("Product updated"))
        .catch((error) => console.log(error));
      this.getProductsAndSetState();
    }
  };
  handleDeleteProduct = (id) => {
    // const { products } = this.state;
    // const items = products.filter((product) => product.id !== id);
    // this.setState({ products: items });
    const docRef = firebase.firestore().collection("products").doc(id);
    docRef
      .delete()
      .then(() => console.log("product deleted"))
      .catch((error) => console.log(error));
    this.getProductsAndSetState();
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
  handleAddProduct = () => {
    firebase
      .firestore()
      .collection("products")
      .add({
        img:
          "https://www.lg.com/in/images/washing-machines/md07512155/gallery/FHT1065HNL-Washing-Machines-Right-View-D-06.jpg",
        img_alt: "washing machine",
        title: "Washing Machine",
        price: "34999",
        qty: 0,
      })
      .then((docRef) => {
        console.log(docRef);
      })
      .catch((error) => {
        console.log(error);
      });
    this.getProductsAndSetState();
  };
  getProductsAndSetState() {
    firebase
      .firestore()
      .collection("products")
      .orderBy("price", "desc")
      .onSnapshot((snapshot) => {
        const products = snapshot.docs.map((doc) => {
          // console.log(doc.data());
          const data = doc.data();
          data.id = doc.id;
          return data;
        });
        this.setState({ products: products, loading: false });
      });
  }

  componentDidMount() {
    // console.log("COMPONENT MOUNTED");
    //componentDidMount method is called after 1st render
    this.getProductsAndSetState();
  }
  render() {
    // console.log("RENDER CALLED");
    return (
      <div className="App">
        <Navbar
          count={this.countQuantity()}
          onAddProduct={this.handleAddProduct}
        />
        <Cart
          products={this.state.products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        {this.state.loading && <h1>Loading Products...Please wait!</h1>}
        <Footer price={this.calcPrice()} />
      </div>
    );
  }
}

export default App;
