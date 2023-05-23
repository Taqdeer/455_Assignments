


var initialItems = '[{"name": "Sunrise", "description": "Beautiful Sunrise", "price": 10, "image": "https://www.surfertoday.com/images/jamp/page/sunrisesunsettime.jpg"}, {"name": "Sky", "description": "Pink Sky", "price": 20, "image": "https://www.photopills.com/sites/default/files/tutorials/2020/sunrise-cover.jpg"}]';


var items = JSON.parse(initialItems);


class Item {
  constructor(name, description, price, image) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.image = image;
  }
}


function addItem() {

  var itemName = document.getElementById("itemName").value;
  var itemDescription = document.getElementById("itemDescription").value;
  var itemPrice = document.getElementById("itemPrice").value;
  var itemImage = document.getElementById("itemImage").value;

  var item = new Item(itemName, itemDescription, itemPrice, itemImage);

  items.push(item);

  const jsonString = JSON.stringify(item);

  initialItems += jsonString;

  printCards();
}

function clearForm() {
  document.getElementById("itemName").value = "";
  document.getElementById("itemDescription").value = "";
  document.getElementById("itemPrice").value = "";
  document.getElementById("itemImage").value = "";
}

function deleteAllCards() {
    items = [];
    printCards();
}
  
function printCards(){
    console.log(items);
    document.getElementById("cardsCount").innerHTML = items.length;
    var cardContainer = document.getElementById("cardContainer");
    cardContainer.innerHTML = "";
    for (let i = 0; i < items.length; i++) {
        console.log(items[i].name);
        var card = document.createElement("div");
        card.className = "card";
        var cardContent =
        '<h3 class="card-title">' + items[i].name + '</h3>' +
        '<p class="card-description">' + items[i].description + '</p>' +
        '<p class="card-price">$' + items[i].price + '</p>' +
        '<img class="card-image" src="' + items[i].image + '" alt="' + items[i].name + '">';

        card.innerHTML = cardContent;
        cardContainer.appendChild(card);
    }
}

printCards();
