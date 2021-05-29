const initialState = {
	categories: [
		{
			name: "food",
			displayName: "Food",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur perspiciatis minima earum vero delectus .",
		},
		{
			name: "electronics",
			displayName: "Electronics",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur perspiciatis minima earum vero delectus .",
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
			categories = state.categories.filter((category) => {
				return category.name === payload;
			});
			return { categories, activeCategory };

		case "ADD-ITEM":
			activeCategory = payload.result.category;
			categories = state.categories.filter((category) => {
				return category.name === activeCategory;
			});
			return { categories, activeCategory };

		case "DELETE-ITEM":
			activeCategory = payload.item.category;
			categories = state.categories.filter((category) => {
				return category.name === activeCategory;
			});
			return { categories, activeCategory };

		default:
			return null;
	}
};

export default categoriesList;
