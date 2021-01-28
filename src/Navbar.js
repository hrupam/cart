const Navbar = (props) => {
  return (
    <div className="navbar">
      <div className="cart-icon">
        <img
          src="https://t4.ftcdn.net/jpg/00/97/00/05/240_F_97000552_d8RwiZAnFewznisQphPtjyxxRNAAZQ92.jpg"
          alt=""
        />
        {props.count > 0 && <div className="cart-count">{props.count}</div>}
      </div>
      <div className="add-product">
        <button onClick={() => props.onAddProduct()}>Add a Product</button>
      </div>
    </div>
  );
};

export default Navbar;
