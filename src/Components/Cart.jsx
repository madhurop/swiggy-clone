import React from 'react'
import { useSelector } from 'react-redux'
import RestaurantMenuCards from './RestaurantMenuCards'
import { useDispatch } from 'react-redux'
import { clearItems } from '../utils/cartSlice'

function Cart() {
    const cartItems = useSelector((store)=>store.cart.items)
    // console.log(cartItems)
    const dispatch=useDispatch()
    const handleClear=()=>{
      dispatch(clearItems())
    }
    
  return (
    <div className="w-sreen h-screen bg-gray-200 flex justify-center items-center">
        <div className="w-10/12 h-full bg-white">
          <button className="" onClick={handleClear}>Claer Cart</button>{
          
            cartItems.map((menu,index)=>(
                <RestaurantMenuCards key={index}   menu={menu} toggle={true}/>
            ))
        }

        </div>
        
      
    </div>
  )
}

export default Cart
