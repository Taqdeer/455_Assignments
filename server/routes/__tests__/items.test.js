const request = require('supertest');
const app = require('../server'); // Assuming your server file is named server.js

describe('GET /', () => {
  it('should return all items from the database', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(2);
  });
});

describe('POST /', () => {
  it('should create a new item', async () => {
    const newItem = {
      item: {
        itemName: 'New Item',
        itemDescription: 'This is a new item.',
        itemPrice: 10.99,
        itemURL: 'https://example.com/new-item',
      },
    };

    const response = await request(app).post('/').send(newItem);
    expect(response.status).toBe(200);
    expect(response.body.itemName).toBe('New Item');
  });

  it('should return 400 if item name is missing', async () => {
    const newItem = {
      item: {
        itemDescription: 'This is a new item.',
        itemPrice: 10.99,
        itemURL: 'https://example.com/new-item',
      },
    };

    const response = await request(app).post('/').send(newItem);
    expect(response.status).toBe(400);
  });
});
