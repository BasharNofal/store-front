const initialState = [];

const productsList = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case "GET-ALL-PRODUCTS":
			return payload;

		case "ADD-ITEM":
			return state.map((product) => {
				if (product._id === payload.result._id) {
					return payload.result;
				} else {
					return product;
				}
			});

		case "DELETE-ITEM":
			return state.map((product) => {
				if (product._id === payload.result._id) {
					return payload.result;
				} else {
					return product;
				}
			});

		default:
			return state;
	}
};

export default productsList;
