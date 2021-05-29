import { useDispatch, useSelector } from "react-redux";
import { deleteRemoteItem } from "../store/actionWithThunk";

const api = 'https://api-js401.herokuapp.com/api/v1/products';
const Cart = (props) => {
  const state = useSelector((state) => {
    return { cart: state.cartList };
  });

  const dispatch = useDispatch();
  return (
    <div id="cartItems">
      <ul>
        {state?.cart.map((item) => {
          return (
            <li
              key={item.key}
            >
              <p>{item.name}</p>
              <span onClick={() => dispatch(deleteRemoteItem(item,`${api}/${item._id}`))}>X</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Cart;
