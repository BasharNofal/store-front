import superagent from "superagent";

export const getProducts = (api) => {
	return (dispatch) => {
		return superagent.get(api).then((data) => {
			dispatch(getInitialProducts({ results: data.body.results }));
		}).catch(error => {
            throw new Error(error);
        });
	};
};

export const addRemoteItem = (item, api) => {
	return (dispatch) => {
		return superagent
			.put(api)
			.set("Content-Type", "application/json")
			.send({
				_id: item._id,
				name: item.name,
				category: item.category,
				inStock: item.inStock - 1,
				price: item.price,
				description: item?.description,
			})
			.then((result) => {
				console.log("ADD ============ result.body", result.body);
				dispatch(addItem({ result: result.body }));
			}).catch(error => {
                throw new Error(error);
            });
	};
};

export const deleteRemoteItem = (item, api) => {
	return (dispatch) => {
		return superagent
			.put(api)
			.set("Content-Type", "application/json")
			.send({
				_id: item._id,
				name: item.name,
				category: item.category,
				inStock: item.inStock + 1,
				price: item.price,
				description: item?.description,
			})
			.then((result) => {
				console.log("DELETE ============ result.body", result.body);
				dispatch(deleteItem(item, result.body));
			}).catch(error => {
                throw new Error(error);
            });
	};
};

const getInitialProducts = (products) => {
	return {
		type: "GET-ALL-PRODUCTS",
		payload: products.results,
	};
};

export const selectCategory = (category) => {
	return {
		type: "SELECT-CATEGORY",
		payload: category,
	};
};

export const addItem = (item) => {
	return {
		type: "ADD-ITEM",
		payload: item,
	};
};

export const deleteItem = (item,result) => {
	return {
		type: "DELETE-ITEM",
		payload: {item, result},
	};
};
