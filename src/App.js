import './App.css';
import Product from './product';
import { useState } from "react";

function App() {

  const [products, setProducts] = useState([
    {
      productname: "Item One",
      price: 100,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!"
    },
    {
      productname: "Item Two",
      price: 90,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!"
    },
    {
      productname: "Item Three",
      price: 40,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!"
    },
    {
      productname: "Item Four",
      price: 20,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!"
    }
  ])

  const [cartItems, setcartItem] = useState([])
  const [total, setTotal] = useState(0)

  function handleAddtoCart(product) {
    setcartItem([...cartItems, product])
    let newTotal = parseInt(total) + parseInt(product.price);
    console.log(newTotal)
    setTotal(newTotal.toFixed(2))
    let prodIndex = products.findIndex((obj) => {
      return obj.productName === product.productName
    });
    products[prodIndex].isDisabled = true;
    console.log(products)
    setProducts([...products])
  }

  function handleRemoveCart(index) {
    let newTotal = Math.floor(total - cartItems[index].price)
    setTotal(newTotal.toFixed(2))
    cartItems.splice(index, 1)
    setcartItem([...cartItems])
  }
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-3">

            <h1 class="my-4">E-Kart</h1>
            <div class="list-group">
              <ul class="list-group">
                {
                  cartItems.map((product, index) => {
                    return <li class="list-group-item d-flex justify-content-between align-items-center">
                      {product.productName} - Rs.{product.price}
                      <button className="btn" onClick={() => handleRemoveCart(index)}><span class="badge bg-primary rounded-pill">X</span></button>
                    </li>
                  })
                }
              </ul>
              <h3>Total : ${total}</h3>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="row">
              {
                products.map((product) => {
                  return <Product data={product} handleAddtoCart={handleAddtoCart}></Product>
                })
              }
            </div>
          </div>

        </div>

      </div>
    </>
  );
}

export default App;
