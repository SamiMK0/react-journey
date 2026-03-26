const Cart = () => {
  const items = ["Wireless Earbuds" , "Power Bank" , "New SSD" , "Hoddie"];

  return(
    <div>
      <h3>Cart Page</h3>
      {items.length>0 ? <h3>You have {items.length} items in your cart </h3>: <h3>Your cart is empty</h3>}

      <ul>
        <h3>Products list: </h3>
        {items.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}


export default function App(){
  return(
    <>
      <Cart/>
    </>
  )
}

