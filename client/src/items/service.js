const addItem = async (item) => {
  const response = await fetch('http://localhost:3003/items', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(item)
  });

  const data = await response.json();
  if (!response.ok) {
    const errorMsg = data?.message;
    throw new Error(errorMsg)
  }
  return data;
};

const removeItem = async (item) => {
  const response = await fetch('http://localhost:3003/items', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(item)
  });

  const data = await response.json();
  if (!response.ok) {
    const errorMsg = data?.message;
    throw new Error(errorMsg)
  }
  const items = await fetch('http://localhost:3003/items', {
    method: 'GET'
  });
  return items.json();
}

const getItems = async () => {
  const response = await fetch('http://localhost:3003/items', {
    method: 'GET'
  });
  return response.json();
};

const filterItems = async (item) => {
  const endpoint = '/items';
  const queryParams = new URLSearchParams({ filter: item.item });
  const url = `http://localhost:3003/items${endpoint}?${queryParams}`;
  const response = await fetch(url, {
    method: 'GET',
  });
  const data = await response.json();
  if (!response.ok) {
    const errorMsg = data?.message;
    throw new Error(errorMsg)
  }
  return data;
}

const updateItem = async(item) => {
  const endpoint = '/update';
  const queryParams = new URLSearchParams({ item_id: item.item.item.id,  user_name: item.item.user_name});
  const url = `http://localhost:3003/items${endpoint}?${queryParams}`;
  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
  });
  const data = await response.json();
  if (!response.ok) {
    const errorMsg = data?.message;
    throw new Error(errorMsg)
  }
  const items = await fetch('http://localhost:3003/items', {
    method: 'GET'
  });
  return items.json();
}

export default {
  addItem,
  getItems,
  removeItem,
  filterItems,
  updateItem,
};
