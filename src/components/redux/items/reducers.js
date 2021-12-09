import { ADD_CAKE, ADD_ICE_CREAM, CAKE_QUANTITY, ICE_CREAM_QUANTITY } from "./actionTypes";

const initialState = {
  cakes: [
    {
      id: 1,
      title: "The cake",
      quantity: 12
    },
    {
      id: 2,
      title: "The cake",
      quantity: 11
    }
  ],
  icecreams: [
    {
      id: 200,
      title: "The icecream",
      quantity: 12
    },
    {
      id: 400,
      title: "The icecream",
      quantity: 8
    }
  ]
};
const CakeQuantity = (cakes, id) => {
  for (let i = 0; i < cakes.length; i++) {
    if (cakes[i].id === id) {
      let temp = cakes[i].quantity;
      cakes[i].quantity = temp - 1;
      console.log(cakes[i]);
    }
  }

  return cakes;
};

const IceCreamQuantity = (icecreams, id) => {
  for (let i = 0; i < icecreams.length; i++) {
    if (icecreams[i].id === id) {
      let temp = icecreams[i].quantity;
      icecreams[i].quantity = temp - 1;
      console.log(icecreams[i]);
    }
  }

  return icecreams;
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CAKE:
      return {
        ...state,
        cakes: [...state.cakes, action.payload]
      };

    case ADD_ICE_CREAM:
      return {
        ...state,
        icecreams: [...state.icecreams, action.payload]
      };

    case CAKE_QUANTITY:
      return {
        ...state,
        cakes: state.cakes.map((cake) =>
          cake.id === action.payload.id ? action.payload : cake
        )
      };

    case ICE_CREAM_QUANTITY:
        return {
          ...state,
          icecreams: state.icecreams.map((icecream) =>
            icecream.id === action.payload.id ? action.payload : icecream
          )
        };
    default:
      return state;
  }
};

export default reducer;
