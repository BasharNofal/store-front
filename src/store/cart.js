import { v4 as uuidV4 } from "uuid";

const initialState = [];

const cartList = (state = initialState, action) => {
	const { type, payload } = action;
	let arrOfCartList = [];
	switch (type) {
		case "ADD-ITEM":
			let item = { ...payload.result, key: uuidV4() };
			arrOfCartList = state;
			arrOfCartList.push(item);
			return arrOfCartList.map((product) => {
				if (product._id === item._id) {
					return {
						_id: product._id,
						name: product.name,
						category: product.category,
						inStock: item.inStock,
                        key: product.key,
						price: product.price,
						description: product?.description,
					};
				} else {
                    return product;
                }
			});

		case "DELETE-ITEM":
			
			return state.filter((item) => item.key !== payload.item.key).map(item => {
                if (item._id === payload.item._id) {
					return {
						_id: item._id,
						name: item.name,
						category: item.category,
						inStock: payload.result.inStock,
                        key: item.key,
						price: item.price,
						description: item?.description,
					};
				} else {
                    return item;
                }
            });

		default:
			return state;
	}
};

export default cartList;
