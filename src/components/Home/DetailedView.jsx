import React from 'react';



export default function DetailedView(props) {

    return (
        <div key={props.item.itemPrice}>
            <h3>{props.item.itemName}</h3>
            <p>{props.item.itemDescription}</p>
            <p>{props.item.itemPrice}</p>
            <img src={props.item.itemURL} alt={props.item.itemDescription} height={250} width={250}/>
        </div>
      );
}
