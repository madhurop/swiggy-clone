import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import RestaurantMenuCards from './RestaurantMenuCards';
import { clearItems } from '../utils/cartSlice';
import EmptyCart from './EmptyCart';
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function Cart() {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    const clearToast = ()=>toast(`items removed from cart`)

    const handleClear = () => {
        dispatch(clearItems());
        if (cartItems.length > 0) {
            clearToast();
        }
    };

    if (cartItems.length === 0) {
        return <EmptyCart />;
    }

    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <div className="w-10/12 h-full bg-white">
            <ToastContainer />
                <button className="bg-black p-2 text-white rounded-xl" onClick={handleClear}>
                    Clear Cart
                </button>
                
                <div className="flex flex-col overflow-hidden oveflow-y-auto">
                    {cartItems.map((menu, index) => (
                        <RestaurantMenuCards key={index} menu={menu} toggle={true} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Cart;
