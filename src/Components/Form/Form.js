import React,{useState} from 'react'
// import HeaderCartButton from './HeaderCartButton';

function Form(props) {

    const [name,SetName] = useState("");
    const [desc,SetDesc] = useState("");

    const [price,SetPrice] = useState("");



    const [products, setProducts] = useState([]);
    const [totalValue, setTotalValue] = useState(0);



   

    // const [name,SetName] = useState("");

    // const [name,SetName] = useState("");



    function nameHandler(event){
SetName(event.target.value);
    }

    function descHandler(event){
        SetDesc(event.target.value);
            }


                      
        

          function priceHandler(event){
            SetPrice(event.target.value);
                }

 

      const formSubmitHandler = event => {
        event.preventDefault();

        const newProduct = { name, desc,price };


    setProducts([...products, newProduct]);
    const newTotalValue = totalValue + Number(price);
    setTotalValue(newTotalValue);
   
    SetName("");
    SetPrice("");
 

      
        // props.onAddProduct();
      };


    //   function deleteProduct(index) {

    //     const deletedProductPrice = products[index].price;

    //     const newTotalValue = totalValue - Number(deletedProductPrice);
    //     setTotalValue(newTotalValue);
  
    //     const updatedProducts = products.filter((_, i) => i !== index);
    
     
    //     setProducts(updatedProducts);
    //   }
  return (
    <div>
        <form onSubmit={formSubmitHandler}> 

        <label>Medicine Name</label>
            <input type='text' 
            value={name}
             onChange={nameHandler}></input>

<label>Description</label>
            <input type='text' 
            value={desc}
             onChange={descHandler}></input>
         

<label> Price</label>
            <input type='number' 
            value={price}
             onChange={priceHandler}></input>







<button type='submit'>Add Product</button>

<button type='button' onClick={props.onShowCart}>Cart</button>

        </form>

{/* <HeaderCartButton/> */}


        <div>

          <h1>Product</h1>
          <ul>
          {products.map((product, index) => (
            <li key={index}>
              {product.name} - {product.desc} -{product.price} 
              {/* {product.id} */}
              {/* <button onClick={() => deleteProduct(index)}>Delete</button> */}
            </li>
          ))}
          </ul>

          {/* <p>Total Value: {totalValue}</p> */}

        </div>
    </div>
  )
}

export default Form