import React, { useEffect} from "react";
import { useSelector, useDispatch} from 'react-redux'
import CartContainer from "./Components/CartContainer";
import { calculateTotals, getCartItems } from "./features/cart/Cart";
import Navbar from "./Components/Navbar/Navbar";
import Modal from './Components/Modal'

function App() {
  const { cartItems, isLoading } = useSelector((state) => state.cart)
  const { isOpen } = useSelector((state) => state.modal)

  const dispatch = useDispatch()

   useEffect(() => {
     dispatch(calculateTotals())
   }, [cartItems])
  
   useEffect(() => {
     dispatch(getCartItems())
   }, [])

  if (isLoading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  )
}
export default App;
