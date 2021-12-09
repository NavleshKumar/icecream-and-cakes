// import { useEffect } from "react";
import Navbar from "./components/Navbar";
import ItemCard from "./components/Itemcard";
import AddCakes from "./components/AddCakes";
import AddIcecreams from "./components/AddIcecreams";
import { connect } from "react-redux";
import {
  addcake,
  addicecream,
  cakeQuantity,
  icecreamQuantity
} from "./components/redux/items/actionContainer";
import { useState } from "react";

const mapStateToProps = (state) => {
  return {
    cakes: state.cakes,
    iceCreams: state.icecreams
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addcake: (value) => dispatch(addcake(value)),
    addIceCream: (value) => dispatch(addicecream(value)),
    cakeQuantity: (value) => dispatch(cakeQuantity(value)),
    icecreamQuantity: (value) => dispatch(icecreamQuantity(value))
  };
};

function App(props) {
  console.log(props.cakes);

  const [showCakeForm, setCakeForm] = useState(false);
  const [showIceCreamForm, setIceCreamForm] = useState(false);

  return (
    <div className="App">
      <Navbar setCakeForm={setCakeForm} setIceCreamForm={setIceCreamForm}/>
      {showCakeForm ===true ? <AddCakes addcake={props.addcake} setCakeForm={setCakeForm}/>: null}
      {showIceCreamForm && <AddIcecreams addicecream={props.addIceCream} setIceCreamForm={setIceCreamForm}/>}
      {props.cakes.map((cake) => {
        console.log(cake.quantity);
        return <ItemCard cake={cake} cakeQuantity={props.cakes.quantity} updatecakeQuantity={props.cakeQuantity} addcake={props.addcake}/>;
      })}
      {props.iceCreams.map((icecream) => {
        return <ItemCard cake={icecream}  updatecakeQuantity={props.icecreamQuantity} addicecream={props.addicecream} />;
      })}
    
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

