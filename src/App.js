import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './page/Home';
import Navigation from './components/Navigation';
import ProductsPage from './page/ProductsPage'
import Cart from './page/Cart'
import SingleProduct from './page/SingleProduct';
import { CartContext } from './CartContext';
import {useEffect,useState} from 'react';

function App(){
    const [cart, setCart]=useState({});

    useEffect(()=>{
        const cart=window.localStorage.getItem('cart');
        setCart(JSON.parse(cart));
    },[]);


    useEffect(() => {
        window.localStorage.setItem('cart',JSON.stringify(cart));
        
    }, [cart]);
    

    return(
        <>
            <Router>
            <CartContext.Provider value={{cart,setCart}}>
                <Navigation/>
                <Switch>

                    <Route path="/" component={Home} exact></Route>
                    <Route path="/products" exact component={ProductsPage} exact></Route>
                    <Route path="/products/:_id" component={SingleProduct} ></Route>
                    <Route path="/cart" component={Cart} exact></Route>
                </Switch>
            </CartContext.Provider>
            </Router>
        </>
    );
}

export default App;