import { useState } from 'react'

// CONST GLOBAL COMPONENT
const SOCKS_PRICE = 10
const TSHIRT_PRICE = 8

const App = () => {

  // States
  // socks
  const [socksInCart, setSocksInCart] = useState(0)
  // t-shirts
  const [tshirtsInCart, setTshirtsInCart] = useState(0)
  
  // Functions
  // socks
  function buySocks() {
    setSocksInCart(socksInCart + 1)
  }
  // t-shirts
  function buyTshirt() {
    setTshirtsInCart(tshirtsInCart + 1)
  }

  // reset cart
  function resetCart() {
    setSocksInCart(0)
    setTshirtsInCart(0)
  }

  // total price
  const productCost =  (SOCKS_PRICE * socksInCart) + (TSHIRT_PRICE * tshirtsInCart)

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      {/*cotton socks price*/}
      <h1 className="text-2xl font-bold mb-4">Cotton socks</h1>
      <p className="text-lg text-gray-700">Price: {SOCKS_PRICE}$</p>
      <button onClick={buySocks} className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Buy Now</button>

      {/*t-shirt price*/}
      <h1 className="text-2xl font-bold mt-10 mb-4">T-shirt</h1>
      <p className="text-lg text-gray-700">Price: {TSHIRT_PRICE}$</p>
      <button onClick={buyTshirt} className="mt-6 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition">Buy Now</button>

      {/*total price*/}
      <h2 className="text-xl font-semibold mt-10">Total Price: {productCost}$</h2>
      <button onClick={resetCart} className="mt-6 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition">Reset Cart</button>
    </div> 
  )
};

export default App
