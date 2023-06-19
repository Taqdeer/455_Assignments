import React, { useState, useEffect } from 'react';
import Nav from "../Nav/Nav";
import Form from "../Form/Form";
import { useSelector } from 'react-redux';
import {useDispatch} from 'react-redux';

import DetailedView from './DetailedView';

import styled from 'styled-components';
import { getItemsAsync, removeItemAsync, filterItemsAsync } from '../../items/thunks';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Popup = styled.div`
  background-color: white;
  padding: 20px;
  max-width: 400px;
  border-radius: 4px;
`;

const Home = () => {

  const [popupStates, setPopupStates] = useState([]);

  const handleImageClick = (index) => {
    const updatedPopupStates = [...popupStates];
    updatedPopupStates[index] = true;
    setPopupStates(updatedPopupStates);
  };

  const handleClosePopup = (index) => {
    const updatedPopupStates = [...popupStates];
    updatedPopupStates[index] = false;
    setPopupStates(updatedPopupStates);
  };

  const items = useSelector(state => state.items.list);
  const dispatch = useDispatch();

  const handleDelete = (item) => {
    dispatch(removeItemAsync(item.id));
  };

  useEffect(() => {
    dispatch(getItemsAsync());
  }, []);

  const [filterItem, setFilterItem] = useState('');

  const handleFilterChange = (event) => {
    setFilterItem(event.target.value);
  };

  const handleFilterButtonClick = () => {
    dispatch(filterItemsAsync(filterItem));
  };

    return (
        <div>
          <Nav />
          <main className='overlay'>
            <h1>Hola!</h1>
            <Form />
            <div>
                <input type="text" value={filterItem} onChange={handleFilterChange} />
                <br />
                <button onClick={handleFilterButtonClick}>Filter</button>
              </div>
            <div>
              <div id="numberOfCards">Number of cards at display: <span id="cardsCount">{items.length}</span></div>
              <div id="cardContainer">
                {items.map((item, index) => (
                  <div key={item.id}>
                    <h3>{item.itemName}</h3>
                    <img src={item.itemURL} 
                      alt={item.itemDescription} 
                      height={250} 
                      width={250}
                      onClick={() => handleImageClick(index)}
                      />
                    {popupStates[index] && (
                      <Overlay>
                        <Popup>
                          <DetailedView item={item} />
                          <button onClick={() => handleClosePopup(index)}>Close</button>
                        </Popup>
                      </Overlay>
                    )}
                    <br />
                    <br />
                    <button onClick={() => handleDelete(item)}>Delete</button>
                  </div>
                ))}
              </div>
            </div>
          </main>
        </div>
      );
  }
  
export default Home;