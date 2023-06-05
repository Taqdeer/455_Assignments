const defaultItems = [
	{
		itemName: "sunset", 
		itemDescription: "sunset",
		itemPrice: 1234,
		itemURL: "https://www.momondo.ca/discover/wp-content/uploads/sites/254/2016/08/256803d1-aba2-3adc-970b-1fa9e326b190.jpg"
	},
	{
		itemName: "sunrise", 
		itemDescription: "sunrise",
		itemPrice: 4567,
		itemURL: "https://i.ytimg.com/vi/2avT63Pjljg/maxresdefault.jpg"
	},
]

const imageItems = (items = defaultItems, action) => {
	switch(action.type) {
        case 'ADD_ITEM':
            return [...items, action.payload];
		case 'FETCH_ITEMS':
			return [...items];
		case 'DELETE_ITEM':
			const updatedItems = items.filter((item) => item !== action.payload);
      		return updatedItems;
		default:
			return items;
	}
};

export default imageItems;