export const increment = amount => {
	return {
		type: 'INCREMENT_COUNTER',
		payload: amount
	};
};

export const decrement = amount => {
	return {
		type: 'DECREMENT_COUNTER',
		payload: amount
	};
};