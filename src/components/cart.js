import { useDispatch, useSelector } from "react-redux";
import { deleteItem } from "../store/action";

const Cart = (props) => {
  const state = useSelector((state) => {
    // console.log(state)
    return { cart: state.cartList };
  });

  const dispatch = useDispatch();
  console.log({ state });
  return (
    <div id="cartItems">
      <ul>
        {state?.cart?.cart.map((item) => {
          return (
            <li
              key={item?.id}
            >
              <p>{item.name}</p>
              <span onClick={() => dispatch(deleteItem(item))}>X</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Cart;
