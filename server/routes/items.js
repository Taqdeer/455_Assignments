const express = require('express');
const router = express.Router();
const { v4: uuid } = require('uuid');
const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const dbName = 'database_455';

var collection;

function connectToMongoDB() {
  return new Promise((resolve, reject) => {
    MongoClient.connect(url)
      .then((client) => {
        console.log('Connected to MongoDB');
        const db = client.db(dbName);
        collection = db.collection('database_455');
        
        collection.find().toArray()
          .then((items) => {
            console.log(items);
            resolve(db);
          })
          .catch((err) => {
            console.log('Error retrieving collection items:', err);
            reject(err);
          });
      })
      .catch((err) => {
        console.log('Failed to connect to MongoDB:', err);
        reject(err);
      });
  });
}
connectToMongoDB()

router.get('/', function (req, res, next) {
	collection.find().toArray()
		.then((items) => {
		console.log(items);
		res.status(200).send(items);
	})
	.catch((err) => {
		console.log('Error retrieving collection items:', err);
		reject(err);
	});
});


router.get('/items', function (req, res, next) {
	const filterName = req.query.filter;
	if (filterName === '')
		return res.send(defaultItems)
	let filterArray = defaultItems.filter(item => item.itemName === filterName);
	return res.status(200).send(filterArray);
  });

router.post('/', function (req, res, next) {
	if (!req.body.item.itemName) {
		return res.status(400).send({ message: 'Item name must be there!' })
	}
	const item = { 
		id: uuid(), 
		itemName: req.body.item.itemName,
		itemDescription: req.body.item.itemDescription,
		itemPrice: req.body.item.itemPrice,
		itemURL: req.body.item.itemURL,
	};
	defaultItems.push(item);
	return res.status(200).send(item);
  });

router.delete('/', function (req, res, next){
	const index = defaultItems.findIndex(item => item.id === req.body.item);
	if (index !== -1) {
		defaultItems.splice(index, 1);
	}
	return res.status(200).send(defaultItems);
})

module.exports = router;
