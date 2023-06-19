const addUser = async (item) => {
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

const removeUser = async (item) => {
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

const getUsers = async () => {
  const response = await fetch('http://localhost:3003/users', {
    method: 'GET'
  });
  return response.json();
};

export default {
  addUser,
  getUsers,
  removeUser
};
