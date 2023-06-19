const addItem = async (item) => {
  const response = await fetch('http://localhost:3003/users', {
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
  console.log("*******************")
  console.log(data)
  return data;
};

const removeItem = async (item) => {
  const response = await fetch('http://localhost:3003/users', {
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
  return data;
}

const getItems = async () => {
  const response = await fetch('http://localhost:3003/users', {
    method: 'GET'
  });
  return response.json();
};

export default {
  addItem,
  getItems,
  removeItem
};
