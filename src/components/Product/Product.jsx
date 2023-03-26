import React from 'react'
import "./Product.css"
import star from "../../images/star-solid.svg"
import cart from "../../images/cart-plus-solid.svg"

const Product = (props) => {

    const {img , name, seller, price, ratings, quantity} = props.product;
    return (
        <div className='product'>
            <div className="wrapper">
                <img src={img} alt="" />
                <div className="product-details">
                    <div className="name-price">
                        <h3 className="product-name">{name}</h3>
                        <h4 className="price">Price: ${price}</h4>
                    </div>
                    <div className="seller-rating">
                        <p>Manufacturer: {seller}</p>
                        <p className='icons'>Rating: {ratings} <img src={star} /></p>
                    </div>
                </div>
            </div>
            <button className='btnIcons'>Add To Cart <img src={cart} /></button>
        </div>
    );
};

export default Product;