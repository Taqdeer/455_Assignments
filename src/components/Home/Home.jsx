import React from 'react';
import Nav from "../Nav/Nav";

export default function Home() {

    return (
        <div>
          <Nav />
          <main>
            <h1>Hola!</h1>
            <form id="itemForm">
            <label for="itemName">Item Name:</label>
            <input type="text" id="itemName" name="itemName" required />
    
            <label for="itemDescription">Description:</label>
            <textarea id="itemDescription" name="itemDescription" required></textarea>
    
            <label for="itemPrice">Price:</label>
            <input type="number" id="itemPrice" name="itemPrice" required></input>
    
            <label for="itemImage">Image URL:</label>
            <input type="url" id="itemImage" name="itemImage" required></input>
    
            <br />
            <br />
            <button type="button" onclick="addItem()">Add Item</button>
            <button type="button" onclick="clearForm()">Clear Form</button>
            <button type="button" onclick="deleteAllCards()">Delete All Cards</button>
    
            </form>
            <div>
              <div id="numberOfCards">Number of cards at display: <span id="cardsCount"></span></div>
              <div id="cardContainer"></div>
            </div>
          </main>
        </div>
      );
  }
  