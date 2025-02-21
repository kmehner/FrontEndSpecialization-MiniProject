
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { removeFromCart, clearCart, selectCartItemsCount } from '../redux/cartSlice';



const ShoppingCart = () => {
    const cartItemsCount = useSelector((state: RootState) => selectCartItemsCount(state)); 
    const cart = useSelector((state: RootState) => state.cart.items);
    const dispatch = useDispatch();

    console.log("shopping cart", cartItemsCount)

    const totalPrice = cart.reduce((acc, item) => acc + item.price, 0).toFixed(2);

    return (
        <div className='container'>
            <h1>Shopping Cart</h1>
            {cartItemsCount === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <>
                    <ul>
                        {cart.map((item) => (
                            <li key={item.id}>
                                <img src={item.image} alt={item.title} />
                                <div>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                    <p>Price: ${item.price.toFixed(2)}</p>
                                    <button onClick={() => dispatch(removeFromCart(item.id))}>
                                        Remove
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <h3>Total: ${totalPrice}</h3>
                    <button onClick={() => dispatch(clearCart())}>Checkout</button>
                </>
            )}
        </div>
    );
};

export default ShoppingCart;