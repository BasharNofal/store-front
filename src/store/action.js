export const selectCategory = (category) => {
  return {
    type: "SELECT-CATEGORY",
    payload: category,
  };
};

export const addItem = (item) => {
  return {
    type: "ADD-ITEM",
    payload: item
  }
}

export const deleteItem = (item) => {
  return {
    type: "DELETE-ITEM",
    payload: item
  }
}