const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const dbName = 'database_455';
var collection

function connectToMongoDB() {
  return new Promise((resolve, reject) => {
    MongoClient.connect(url)
      .then((client) => {
        console.log('Connected to MongoDB');
        const db = client.db(dbName);
        collection = db.collection('database_455');
        resolve(collection)
        
        // collection.find().toArray()
        //   .then((items) => {
        //     console.log(items);
        //     resolve(db);
        //   })
        //   .catch((err) => {
        //     console.log('Error retrieving collection items:', err);
        //     reject(err);
        //   });
      })
      .catch((err) => {
        console.log('Failed to connect to MongoDB:', err);
        reject(err);
      });
  });
}


module.exports = connectToMongoDB();
