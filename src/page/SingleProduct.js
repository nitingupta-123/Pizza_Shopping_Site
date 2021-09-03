import { useEffect, useState , useContext} from 'react';
import { useParams, useHistory } from 'react-router-dom';
import ProductData from '../props/data';
import { CartContext } from "../CartContext";

const SingleProduct = () => {

    const [product, setProduct] = useState({});
    const params = useParams();
    const history = useHistory();

    const [isAdding, setIsAdding]=useState(false);
    const { cart, setCart } = useContext(CartContext);

    useEffect(() => {
        //API call
        const product = ProductData.find(({ _id }) => (_id === params._id));
        setProduct(product);
    }, [params._id]);

    const addToCart = (event, product) => {
        event.preventDefault();
        let _cart = {...cart}; // { items: {}}
        if (!_cart.items) {
            _cart.items = {}
        }
        if (_cart.items[product._id]) {
            _cart.items[product._id] += 1;
        } else {
            _cart.items[product._id] = 1;
        }

        if(!_cart.totalItems) {
            _cart.totalItems = 0;
        }
        _cart.totalItems += 1;
        setCart(_cart);
        
       
        setIsAdding(true);
        setTimeout(()=>{
            setIsAdding(false);
        },1000)
    }

    
    return (
        <>
            <div className="container mx-auto mt-12">
                <button className="mb-12 font-bold" onClick={() => { history.goBack() }}>Back</button>
                <div className="flex">
                    <img src="/images/peproni.png" alt="pizza" />
                    <div className="ml-16">
                        <h1 className="text-xl font-bold">{product.name}</h1>
                        <div className="text-md">{product.size}</div>
                        <div className="font-bold mt-2">₹ {product.price}</div>
                        <button disabled={isAdding} onClick={(e)=>{addToCart(e,product)}} className={`${isAdding?'bg-green-500':'bg-yellow-500'}  py-1 px-4 rounded-full font-bold`}>ADD{isAdding?'ED':''}</button>
                    </div>
                </div>
            </div>
        </>
    );
}



export default SingleProduct;
