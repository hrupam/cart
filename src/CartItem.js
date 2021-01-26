const CartItem = (props) => {
  const { price, title, qty, img, img_alt } = props.product;
  return (
    <div className="cart-item">
      <div className="left-block">
        <img className="image" src={img} alt={img_alt} />
      </div>
      <div className="right-block">
        <div style={{ fontSize: 25 }}>{title}</div>
        <div style={{ fontSize: 16, color: "#777" }}>Price: {price}</div>
        <div style={{ fontSize: 16 }}>Qty: {qty}</div>
        <div className="cart-item-actions">
          {/* Buttons */}
          <img
            alt="increase"
            className="action-icons"
            src="https://t4.ftcdn.net/jpg/01/07/62/07/240_F_107620769_UwNVSoXnKS4VNcOKoZjPohlEPn83oE38.jpg"
            onClick={() => props.onIncreaseQuantity(props.product)}
          />
          <img
            alt="decrease"
            className="action-icons"
            src="https://t3.ftcdn.net/jpg/03/73/49/86/240_F_373498649_nBxauQ0ipBSVrVcMpWWVmTpXu3BLvRyY.jpg"
            onClick={() => props.onDecreaseQuantity(props.product)}
          />
          <img
            alt="delete"
            className="action-icons"
            src="https://t4.ftcdn.net/jpg/01/90/89/15/240_F_190891550_N7uKp2aHE3mOc20dmtDytj7atgvbhdOu.jpg"
            onClick={() => props.onDeleteProduct(props.product.id)}
          />
        </div>
      </div>
    </div>
  );
};

// const styles = {
//   image: {
//     height: 110,
//     width: 110,
//     borderRadius: 4,
//     backgroundColor: "#ccc",
//   },
// };
// can be passed it in img tag style={styles.image}

export default CartItem;
