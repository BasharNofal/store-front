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

  state = initialState;
  let activeCategory,
      categories = [];
  const { type, payload } = action;
  switch (type) {
    case "SELECT-CATEGORY":
      activeCategory = payload;
      categories = state.categories.filter(category => {
        return category.name === payload;
      });
      return { categories, activeCategory };
    
    case "ADD-ITEM":
      activeCategory = payload.category;
      categories = state.categories.filter(category => {
        return category.name === payload.category;
      });
      return { categories, activeCategory };

    case "DELETE-ITEM":
      activeCategory = payload.category;
      categories = state.categories.filter(category => {
        return category.name === payload.category;
      });
      return { categories, activeCategory };

    default:
      return null;

  }
};

export default categoriesList;