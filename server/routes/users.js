const express = require('express');
const router = express.Router();
const { v4: uuid } = require('uuid');

const users = [
  { id: uuid(), name: 'Stephanie' },
  { id: uuid(), name: 'Ian' },
  { id: uuid(), name: 'Danya' }
];

const defaultItems = [
	{
		id: uuid(),
		itemName: "sunset", 
		itemDescription: "sunset",
		itemPrice: 1234,
		itemURL: "https://www.momondo.ca/discover/wp-content/uploads/sites/254/2016/08/256803d1-aba2-3adc-970b-1fa9e326b190.jpg"
	},
	{
		id: uuid(),
		itemName: "sunrise", 
		itemDescription: "sunrise",
		itemPrice: 4567,
		itemURL: "https://i.ytimg.com/vi/2avT63Pjljg/maxresdefault.jpg"
	},
]

router.get('/', function (req, res, next) {
  return res.send(defaultItems);
});

router.get('/items', function (req, res, next) {
	const filterName = req.query.filter;
	if (filterName === '')
		return res.send(defaultItems)
	let filterArray = defaultItems.filter(item => item.itemName === filterName);
	return res.send(filterArray);
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
	return res.send(item);
  });

router.delete('/', function (req, res, next){
	const index = defaultItems.findIndex(item => item.id === req.body.item);
	if (index !== -1) {
		defaultItems.splice(index, 1);
	}
	return res.send(defaultItems);
})

module.exports = router;
