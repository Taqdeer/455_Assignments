import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import { addItem } from '../../actions/index.js'

const Form = () => {

    const [formData, setFormData] = useState({
        itemName: '',
        itemDescription: '',
        itemPrice: 0,
        itemURL: '',
    });
    
    const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value,
    });
    };
    
    
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('You have submitted');
        dispatch(addItem(formData));
    }

    return (
        <div>
            <form className='form' onSubmit={handleSubmit}>
                <div className='form-control'>
                    <label htmlFor='itemName'>Name: </label>
                    <input
                        type='text'
                        id='itemName'
                        name='itemName'
                        value={formData.itemName}
                        onChange={handleChange}
                    />
                    <label htmlFor='itemDescription'>Description: </label>
                    <input
                        type='text'
                        id='itemDescription'
                        name='itemDescription'
                        value={formData.itemDescription}
                        onChange={handleChange}
                    />
                    <label htmlFor='itemPrice'>Price: </label>
                    <input
                        type='text'
                        id='itemPrice'
                        name='itemPrice'
                        value={formData.itemPrice}
                        onChange={handleChange}
                    />
                    <label htmlFor='itemURL'>URL: </label>
                    <input
                        type='text'
                        id='itemURL'
                        name='itemURL'
                        value={formData.itemURL}
                        onChange={handleChange}
                    />
                </div>
                <button type='submit'>Add Item</button>
            </form>
        </div>
  );
};

export default Form;