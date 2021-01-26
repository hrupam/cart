const Footer = (props) => {
  return (
    <div className="footer">
      {props.price > 0 && (
        <div className="price">Total Price={props.price}</div>
      )}
    </div>
  );
};

export default Footer;
