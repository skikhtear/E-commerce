import React from 'react';
// import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const ProductCard = ({ product, handleAddToCart }) => {
    const { name, img, seller, price, ratings } = product;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt=""></img>
            </figure>
            <div className="card-body items-center text-center">
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
                <p><small>Seller: {seller}</small></p>
                <p><small>Ratings: {ratings} stars</small></p>
                <div className="card-actions">
                    <button onClick={() => handleAddToCart(product)} className='btn-cart'>
                        <p className='btn-primary px-2 py-1 rounded'>Add to Cart</p>
                        {/* <faShoppingCart icon={faShoppingCart}></faShoppingCart> */}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;