import React, { useState } from "react";
function AddCakes(props) {
  const [title, setTitle] = useState("");
  const [quantity, setQuantity] = useState(0);

  const handleSubmit = () => {
    props.addcake({ id: 901, title: title, quantity: quantity});
    alert("cake added");
    props.setCakeForm(false);
  };
  return (
    <div className="addProduct">
      <h2>Add Cake</h2>
      <div className="addProduct-form">
        <div className="addProduct-form-row">
          <div className="addProduct-formItem rightMargin">
            <i class="fas fa-heading"></i>
            <div className="addProduct-formItem-right">
              <span>Title *</span>
              <input
                type="text"
                className="addProduct-formItem-right-textInput"
                value={title}
                onChange={e => setTitle(e.target.value)}
              />
            </div>
          </div>
          <div className="addProduct-formItem">
            <i class="fas fa-rupee-sign"></i>
            <div className="addProduct-formItem-right">
              <span>Flavour *</span>
              <input
                type="text"
                className="addProduct-formItem-right-textInput"

              />
            </div>
          </div>
        </div>
        <div className="addProduct-form-row">
          <div className="addProduct-formItem rightMargin">
            <i class="fas fa-sort-amount-up-alt"></i>
            <div className="addProduct-formItem-right">
              <span>Quantity *</span>
              <input
                type="number"
                className="addProduct-formItem-right-textInput"
                value={quantity}
                onChange={e => setQuantity(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
export default AddCakes;
