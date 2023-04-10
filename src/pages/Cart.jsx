import {useSelector} from "react-redux"
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Cart = () => {

  const {cart} = useSelector ((state) =>state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( ()=>{
    setTotalAmount( cart.reduce( (acc, curr )=>acc+curr.price , 0 ));
  },[cart])

  return(<div>
{
  cart.length > 0 ?

  (<div>
    <div>
    {

    cart.map( (item, index)=>{
   return  <CartItem key={item.id} item={item} itemIndex={index}/>
     } )
    
    }
  </div>
 
 <div>
 <div>Your Cart</div>
  <div>Summary</div>
  <p>
    <span>
      Total Items: {cart.length}
    </span>
  </p>
 </div>

  <div>
    <p>
      Total Amount: ${totalAmount}
    </p>

    <button>
      CheckOut Now
    </button>
  </div>
  </div>) :

  (<div className="flex justify-center items-center relative  ">
  <h1 className="" >
    Cart Is Empty!
  </h1>
  
  <Link to={"/"}/>
  <button>
    Shop Now
  </button>
   </div>)
}
  </div>) 
};

export default Cart;
