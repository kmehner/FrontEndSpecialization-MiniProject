
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { removeFromCart } from "../redux/cartSlice";




const ShoppingCart = () => {
    const cart = useSelector((state: RootState) => state.cart.items);
    const dispatch = useDispatch();

    const totalPrice = cart.reduce((acc, item) => acc + item.price, 0).toFixed(2);

    return (
        <div>
            <h1>Shopping Cart</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <ul>
                    {cart.map((item) => (
                        <li key={item.id}>
                            <img src={item.image} alt={item.title}/>
                            <div>

                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                                <p>Price: ${item.price?.toFixed(2)}</p>
                                <button onClick={() => dispatch(removeFromCart(item.id))}>
                                    Remove
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
            <p>Total: ${totalPrice}</p>
        </div>
    );  
}

export default ShoppingCart;