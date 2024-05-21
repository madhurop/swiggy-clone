import React from 'react'
import { useSelector } from 'react-redux'
import RestaurantMenuCards from './RestaurantMenuCards'
import { useDispatch } from 'react-redux'
import { clearItems } from '../utils/cartSlice'
import EmptyCart from './EmptyCart'

function Cart() {
    const cartItems = useSelector((store)=>store.cart.items)
    console.log(cartItems.length)
    const dispatch=useDispatch()
    const handleClear=()=>{
      dispatch(clearItems())
    }
    if(cartItems.length==0){
      return(
        <EmptyCart/>
      )
    }
    
  return (
    <div className="w-sreen h-screen  flex justify-center items-center">
        <div className="w-10/12 h-full bg-white">
          <button className="bg-black  p-2 text-white rounded-xl" onClick={handleClear}>Clear Cart</button>
          <div className="border border-red-400 flex flex-col overflow-hidden oveflow-y-auto">{
          
            cartItems.map((menu,index)=>(
                <RestaurantMenuCards key={index}   menu={menu} toggle={true}/>
            ))
        }
        </div>

        </div>
        
      
    </div>
  )
}

export default Cart
