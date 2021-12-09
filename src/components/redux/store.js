import { createStore } from "redux";

import reducer from "./items/reducers";

const store = createStore(reducer);

export default store;
