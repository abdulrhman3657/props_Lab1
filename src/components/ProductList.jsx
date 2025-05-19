import Product from "./Product"
import { Button } from 'react-bootstrap';

function ProductList(props) {


    let products =  [
        { name: 'Product 1', price: 29.99, description: 'Description for Product 1'},
        { name: 'Product 2', price: 39.99, description: 'Description for Product 2'},
        { name: 'Product 3', price: 49.99, description: 'Description for Product 3'},
        { name: 'Product 4', price: 59.99, description: 'Description for Product 4'},
        { name: 'Product 5', price: 69.99, description: 'Description for Product 5'},
     ]


  return (
    <>
    
    <ul style={{listStyle:"none"}} className="d-flex gap-3 flex-wrap">
        <li ><Product name="Product 1" price="29.99" description="Description for Product 1" /></li>
        <li ><Product name="Product 2" price="39.99" description="Description for Product 2" /></li>
        <li ><Product name="Product 3" price="49.99" description="Description for Product 3" /></li>
        <li ><Product name="Product 4" price="59.99" description="Description for Product 4" /></li>
    </ul>
    
    </>
  )
}

export default ProductList