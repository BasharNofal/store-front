const initialState = {
  categories: [
    {
      name: "FOOD",
      displayName: "Food",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur perspiciatis minima earum vero delectus .",
    },
    {
      name: "ELECTRONICS",
      displayName: "Electronics",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur perspiciatis minima earum vero delectus .",
    },
  ],
  activeCategory: null,
};

const categoriesList = (state, action) => {
    console.log('categories store', state);

    state = initialState;
    let activeCategory,
        categories = [];
  const { type, payload } = action;
  switch (type) {
    case "FOOD":
      activeCategory = payload;
      categories = state.categories.filter(category => {
        return category.name === payload;
      });
      return { categories, activeCategory };
    case "ELECTRONICS":
      activeCategory = payload;
      categories = state.categories.filter(category => {
        return category.name === payload;
      });
      return { categories, activeCategory };
    default:
      return null;
  }
};

export default categoriesList;

// export const food = (category) => {
//   return {
//     type: "FOOD",
//     payload: category,
//   };
// };

// export const electronics = (category) => {
//   return {
//     type: "ELECTRONICS",
//     payload: category,
//   };
// };