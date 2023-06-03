import React, { useEffect } from 'react';
import Nav from "../Nav/Nav";
import Form from "../Form/Form";
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems } from '../../actions/index.js'

import "../styles.module.css"

export default function Home() {
  const dispatch = useDispatch();
  const items = useSelector((items) => items.items);

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  console.log(items)

    return (
        <div>
          <Nav />
          <main>
            <h1>Hola!</h1>
            <Form />
            <div>
              <div id="numberOfCards">Number of cards at display: <span id="cardsCount"></span></div>
              <div id="cardContainer">
              {items.map((item) => (
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <p>{item.price}</p>
                  <img src={item.url} alt={item.description}/>
                </div>
              ))}
              </div>
            </div>
          </main>
        </div>
      );
  }
  