let defaultItems = [
	{
		name: "sunset", 
		description: "sunset",
		price: 1234,
		URL: "https://www.almanac.com/sites/default/files/styles/or/public/images/dscn1114.jpg?itok=093ZK43D"
	},
	{
		name: "sunrise", 
		description: "sunrise",
		price: 4567,
		URL: "https://www.almanac.com/sites/default/files/styles/or/public/images/dscn1114.jpg?itok=093ZK43D"
	},
]

const addItem = (items = defaultItems, action) => {
	switch(action.type) {
        case 'ADD_ITEM':
            return [...items, action.payload];
		case 'FETCH_ITEM':
			console.log(defaultItems)
			return items;
		default:
			return items;
	}
};

export default addItem;