import { v4 as uuidV4 } from 'uuid';

const initialState = [];

const cartList = (state = initialState, action) => {
    const {type, payload} = action;
    let arrOfCartList = [];
    switch(type) {
        case "ADD-ITEM":
            let item = {...payload, id:uuidV4()}
            arrOfCartList = state;
            arrOfCartList.push(item);
            return arrOfCartList;

        case "DELETE-ITEM":
            arrOfCartList = state.filter(item => item.id !== payload.id );
            return arrOfCartList;

        default:
            return state;
    }
}

export default cartList;