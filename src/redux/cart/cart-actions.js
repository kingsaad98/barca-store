export const toggleCart = () => ({
  type: "TOGGLE_CART",
});

export const addItem = (item) => ({
  type: "ADD_ITEM",
  payload: item,
});

export const removeItem = (item) => ({
  type: "REMOVE_ITEM",
  payload: item,
});

export const removeItemWithArrow = (item) => ({
  type: "REMOVE_ITEM_WITH_ARROW",
  payload: item,
});
