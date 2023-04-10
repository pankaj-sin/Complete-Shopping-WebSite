import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";
import {FcDeleteDatabase} from "react-icons/fc"

const CartItem = ({ item, itemIndex }) => {

const dispatch = useDispatch();

const removeFromCart = ()=>{

  dispatch(remove(item.id))
  toast.error("Item Removed")
}

  return (
    <div className="flex flex-col ">
      <div className="border-red-400">
        <img src={item.image} />
      </div>

      <h1>{item.title}</h1>
      <h1>{item.description}</h1>

      <div>
        <p>
          ${item.price}
        </p>

        <div onClick={removeFromCart}>
          <FcDeleteDatabase />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
