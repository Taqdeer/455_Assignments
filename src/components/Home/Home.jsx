import React, { useEffect } from 'react';
import Nav from "../Nav/Nav";
import Form from "../Form/Form";
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems } from '../../actions/index.js'

import "../styles.module.css"

const Home = () => {
  const items = useSelector(state => state.imageItems);
  console.log(items);

    return (
        <div>
          <Nav />
          <main>
            <h1>Hola!</h1>
            <Form />
            <div>
              <div id="numberOfCards">Number of cards at display: <span id="cardsCount">{items.length}</span></div>
              <div id="cardContainer">
              {items.map((item) => (
                <div key={item.itemPrice}>
                  <h3>{item.itemName}</h3>
                  <p>{item.itemDescription}</p>
                  <p>{item.itemPrice}</p>
                  <img src={item.itemURL} alt={item.itemDescription} height={250} width={250}/>
                </div>
              ))}
              </div>
            </div>
          </main>
        </div>
      );
  }
  
export default Home;