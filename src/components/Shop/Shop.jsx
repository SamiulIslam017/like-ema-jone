import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./Shop.css";

const Shop = () => {
    const [products , setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);

    // db step
    useEffect(()=>{
        const storeCart = getShoppingCart();
        const savedCart = [];
        //step 1 get id
        for (const id in storeCart) {
            //step 2 get product from products state by using id
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                //step 3  add product
                const quantity = storeCart[id];
                addedProduct.quantity = quantity;
                // step 4 add the added product to th saved cart
                savedCart.push(addedProduct);
            }
            // step 5 saved data
            setCart(savedCart);
            }
    },[products])

    const handleAddToCart = (product) => {
        // easy way
        // const newCart = [...cart, product];
        // hard way
        let newCart = [];
        // if product doesn't  exist in the cart, then set quantity =1
        // if exist update the quantity by 1
        const exist = cart.find(pd => pd.id === product.id);
        if (!exist) {
            product.quantity = 1 ;
            newCart = [...cart, product];
        }
        else{
            exist.quantity = exist.quantity + 1;
            const remaining = cart.filter(pd => pd.id !== product.id);
            newCart = [...remaining, exist];
        }
        
        setCart(newCart);
        addToDb(product.id);
    };

    return (
        <div className='shop-container'> 
            <div className="products">
                {
                    products.map(product => <Product
                        product = {product}
                        key={product.id}
                        handleAddToCart = {handleAddToCart}>
                        </Product>)
                }
            </div>
            <div className="cart-container">
                <h1>Order Summary</h1>
                <Cart cart= {cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;