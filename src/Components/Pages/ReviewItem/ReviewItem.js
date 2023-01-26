import React from 'react';
import './ReviewItem.css';
import { FaTrashAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ReviewItem = ({ product, handleRemoveItem }) => {
    const { id, name, price, quantity, shipping, img } = product;
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="review-details-container">
                <div className="review-details">
                    <p>{name}</p>
                    <p><small>Price: ${price}</small></p>
                    <p><small>Shipping: ${shipping}</small></p>
                    <p><small>Quantity: {quantity}</small></p>
                </div>
                <div className="delete-container">
                    <Link to='/checkout'>
                        <button className='btn-primary px-2 py-1 rounded mr-3'>Checkout</button>
                    </Link>
                    <button onClick={() => handleRemoveItem(id)} className='btn-delete'>
                        <FaTrashAlt className='delete-icon mx-auto'></FaTrashAlt>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;