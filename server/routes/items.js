const express = require('express');
const router = express.Router();
const { v4: uuid } = require('uuid');
const { MongoClient } = require('mongodb');

const url = process.env.MONGODB_URI;
const dbName = 'database_455';

var items_collection;
var users_collection;

function connectToMongoDB() {
  return new Promise((resolve, reject) => {
    MongoClient.connect(url)
      .then((client) => {
        console.log('Connected to MongoDB');
        const db = client.db(dbName);
        items_collection = db.collection('database_455');
		users_collection = db.collection('users');
        
        items_collection.find().toArray()
          .then((items) => {
            console.log(items);
            resolve(db);
          })
          .catch((err) => {
            console.log('Error retrieving items_collection items:', err);
            reject(err);
          });
		  users_collection.find().toArray()
          .then((items) => {
            console.log(items);
            resolve(db);
          })
          .catch((err) => {
            console.log('Error retrieving users_collection items:', err);
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
	items_collection.find().toArray()
		.then((items) => {
		res.status(200).send(items);
	})
	.catch((err) => {
		console.log('Error retrieving items_collection items:', err);
		return next(err);
	});
});


router.get('/items', function (req, res, next) {
	const filterName = req.query.filter;
	const query = filterName ? { itemName: filterName } : {};

	items_collection.find(query).toArray()
	.then((items) => {
		res.status(200).send(items);
	})
	.catch((err) => {
		console.log('Error retrieving items_collection items:', err);
		return next(err);
	});
  });

router.get('/details', async function (req, res, next) {
	const user_id = req.query.user_id;
	try{
		const userFilter = { id: user_id };
	  	const user = await users_collection.findOne(userFilter);

		res.status(200).send(user);
	}catch(err){
		console.error('Error finding user:', err);
	  	return next(err);
	}
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
	items_collection.insertOne(item)
        .then(() => {
          return res.status(200).send(item);
        })
        .catch((err) => {
          return next(err);
    });
});

router.put('/update', async function (req, res, next) {
	const query_item = req.query.item_id;
	const user_name = req.query.user_name;
	if (!query_item || !user_name) {
	  return res.status(400).send({ message: 'Item ID and user name must be provided!' });
	}
  
	try {
	  const itemFilter = { id: query_item };
	  const item = await items_collection.findOne(itemFilter);
  
	  const userFilter = { name: user_name };
	  const user = await users_collection.findOne(userFilter);
  
	  if (item && user) {
		item.user_id = user.id;
  
		await items_collection.updateOne(itemFilter, { $set: item });
  
		return res.status(200).send({ message: 'Item updated successfully' });
	  } else {
		return res.status(404).send({ message: 'Item or user not found' });
	  }
	} catch (error) {
	  console.error('Error updating item:', error);
	  return next(error);
	}
  });

router.delete('/', function (req, res, next){
	const query = { id: req.body.item };
	items_collection.deleteOne(query)
	.then(() => {
		return res.status(200).send({ message: 'Item deleted successfully' });
	})
	.catch((err) => {
		return next(err);
	});
})

module.exports = router;
