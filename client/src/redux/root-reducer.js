import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./user/user-reducer";
import cartReducer from "./cart/cart-reducer";
import directoryReducer from "./directory/directoy-reducer";
import shopReducer from "./shop/shop-reducer";
import scrollbarReducer from "./scrollbar/scrollbar-reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
  scrollbar: scrollbarReducer,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);
