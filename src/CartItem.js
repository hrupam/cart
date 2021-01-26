import React from "react";

class CartItem extends React.Component {
  // INITIAL EVENT HANDLINGS

  // increaseQuantity = () => {
  //   // setState method 1 - when we dont need previous state
  //   // this.setState({ qty: this.state.qty + 1 });
  //   // console.log(this.state);

  //   // setState method 2 - when we require previous state
  //   this.setState((prevState) => {
  //     return {
  //       qty: prevState.qty + 1,
  //     };
  //   });
  // };

  // decreaseQuantity = () => {
  //   this.setState(
  //     (prevState) => {
  //       if (prevState.qty === 1) return {};
  //       else
  //         return {
  //           qty: prevState.qty - 1,
  //         };
  //     },
  //     () => console.log(this.state) //callback executed when state updation is finished
  //   );
  // };
  render() {
    // console.log(this.props.product);
    const { price, title, qty, img, img_alt } = this.props.product;
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} src={img} alt={img_alt} />
        </div>
        <div className="right-block">
          <div style={{ fontSize: 25 }}>Title: {title}</div>
          <div style={{ fontSize: 16, color: "#777" }}>Price: {price}</div>
          <div style={{ fontSize: 16 }}>Qty: {qty}</div>
          <div className="cart-item-actions">
            {/* Buttons */}
            <img
              alt="increase"
              className="action-icons"
              src="https://t4.ftcdn.net/jpg/01/07/62/07/240_F_107620769_UwNVSoXnKS4VNcOKoZjPohlEPn83oE38.jpg"
              onClick={() => this.props.onIncreaseQuantity(this.props.product)}
            />
            <img
              alt="decrease"
              className="action-icons"
              src="https://t3.ftcdn.net/jpg/03/73/49/86/240_F_373498649_nBxauQ0ipBSVrVcMpWWVmTpXu3BLvRyY.jpg"
              onClick={() => this.props.onDecreaseQuantity(this.props.product)}
            />
            <img
              alt="delete"
              className="action-icons"
              src="https://t4.ftcdn.net/jpg/01/90/89/15/240_F_190891550_N7uKp2aHE3mOc20dmtDytj7atgvbhdOu.jpg"
              onClick={() => this.props.onDeleteProduct(this.props.product)}
            />
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    backgroundColor: "#ccc",
  },
};

export default CartItem;
