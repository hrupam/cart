import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";
import Footer from "./Footer";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 5999,
          title: "Phone",
          qty: 0,
          img: "https://static.toiimg.com/photo/70072353.cms",
          img_alt: "phone",
          id: 1,
        },
        {
          price: 28599,
          title: "Camera",
          qty: 0,
          img: "https://cdn.mos.cms.futurecdn.net/mVEhQU5grHExywfQsDoAYj.jpg",
          img_alt: "camera",
          id: 2,
        },
        {
          price: 36000,
          title: "Laptop",
          qty: 0,
          img: "https://cdn.mos.cms.futurecdn.net/6t8Zh249QiFmVnkQdCCtHK.jpg",
          img_alt: "laptop",
          id: 3,
        },
        {
          price: 549,
          title: "Headphone",
          qty: 0,
          img:
            "https://i.gadgets360cdn.com/products/headphones-and-headsets/large/boat-rockerz-400-wireless-headphone-832X558-1598367902.jpg",
          img_alt: "headphone",
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
