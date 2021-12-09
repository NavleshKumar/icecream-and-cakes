import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import "./Itemcard.css";
function ItemCard(props) {
  console.log("re-rendered from cakes: ", props);

  const handleBuyNow = () => {
    props.updatecakeQuantity({
      id: props.cake.id,
      title: props.cake.title,
      quantity: props.cake.quantity - 1
    });
    alert("order successfully")
    // props.updateicecreamQuantity({
    //   id: props.icecream.id,
    //   title: props.icecream.title,
    //   quantity: props.icecream.quantity - 1
    // });
  };

  // useEffect(() => {}, [props.cake]);
  return (
    <div className="itemCard">
      <img
        src="https://media.istockphoto.com/photos/vanilla-ice-cream-cake-with-frozen-berries-picture-id831559854?b=1&k=20&m=831559854&s=170667a&w=0&h=_UmtQQ3t8693dw7Mwdkfz2Sy9l0aExxLd_848ugtTaI="
        alt=""
      />
      {/* <img src=""/> */}
      <div className="itemCard-bottom">
        <div className="itemCard-details">
          <p>{props.cake.title}</p>
          <div>
            <span> {props.cake.quantity}</span>
          </div>
        </div>
        {/* <div className="itemCard-details">
          <p>{props.icecream.title}</p>
          <div>
            <span> {props.icecream.quantity}</span>
          </div>
        </div> */}
        <Button variant="success" size="sm" onClick={handleBuyNow}>
          Buy Now
        </Button>
      </div>
    </div>
  );
}

export default ItemCard;
