import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import { addItemAsync } from '../../items/thunks';

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
        dispatch(addItemAsync(formData));
    }

    const clearForm = () => {
        setFormData({
            itemName: '',
            itemDescription: '',
            itemPrice: 0,
            itemURL: '',
        });
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
                        type='number'
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
            <br />
            <button type='clear' onClick={clearForm}>Clear Items</button>
        </div>
  );
};

export default Form;