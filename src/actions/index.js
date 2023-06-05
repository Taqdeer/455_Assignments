export const addItem = item => {
	return {
		type: 'ADD_ITEM',
		payload: item
	};
};

export const fetchItems = () => {
	return {
		type: 'FETCH_ITEMS',
	};
};

export const deleteItem = item => {
	return {
		type: 'DELETE_ITEM',
		payload: item
	};
};