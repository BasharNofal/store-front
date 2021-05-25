import { v4 as uuidV4 } from 'uuid';

const initialState = {
    cart:[],
};

const cartList = (state, action) => {
    state = initialState;
    const {type, payload} = action;
    switch(type) {
        case "ADD-ITEM":
            let item = {...payload, id:uuidV4()}
            state.cart.push(item);
            return {...state};

        case "DELETE-ITEM":
            state.cart = state.cart.filter(item => item.id !== payload.id );
            return {...state};

        default:
            return state;
    }
}

export default cartList;