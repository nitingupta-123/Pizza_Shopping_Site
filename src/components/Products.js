
import Product from './Product'
import {useState, useEffect} from 'react';
import ProductData from '../props/data';
const Products = () => {

    // const {name}=useContext(CartContext);

    const [products,setProducts]=useState([]);

    useEffect(()=>{
        console.log('component mounted...');
        // fetch('/api/products')
        // .then(response=>response.json())
        // .then(products=>{
        //     console.log(products);
        // })
        setProducts(ProductData);
        //console.log(ProductData);
    },[]);

    return (
        <div className="container mx-auto pb-24">
            <h1 className="text-lg font-bold my-8">Products </h1>
            <div className="grid grid-cols-5 my-8 gap-24">
                {
                    products.map(product=><Product key={product._id} product={product}/>)
                }
            </div>
        </div>
    )
}

export default Products;