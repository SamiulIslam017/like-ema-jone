import React from 'react';
import "./Cart.css"
const Cart = ({cart}) => {
// const Cart = ({cart}) => {  // option 3
    // const cart = props.cart; //option 1
    // const {cart} = props;  //option 2
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for(const product of cart){
        //easy way
        // product.quantity = product.quantity || 1;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
        quantity = quantity + product.quantity;
    }
    const tax = total*5/100;
    const grandTotal = total + shipping + tax;
    return (
        <div className='cart'>
            <p>Selected Items: <span>{quantity}</span></p>
            <p>Total Price: <span>$ {total}</span></p>
            <p>Shipping Cost: <span>$ {shipping}</span></p>
            <p>Tax: <span>$ {tax.toFixed(2)}</span></p>
            <h6>Grand Total: <span>$ {grandTotal.toFixed(2)}</span></h6>
        </div>
    );
};

export default Cart;