import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => { console.error('putDb not implemented');
// create connection to database
const jateDb = await openDB('jate', 1);
// create a new transaction and specify database and permissions
const tx = jateDb.transaction('jate', 'readwrite');
// open up object store
const store = tx.objectStore('jate');
// use .add to pass in the content
const request = store.add(content);
// get confirmation of the result
const result = await request;
console.log(`Data saved to the database.`, result);
}


// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {console.error('getDb not implemented');
console.log('GET from the database');
// create a connection to the database and the version to use
const jateDb = await openDB('jate', 1);
//creat a new transaction and specify the database and data priveleges
const tx= jateDb.transaction('jate', 'readonly');
//open up the desire object store
const store = tx.objectStore('jate');
// use the .getAll method to et all data in the database
const request = store.getAll();
// get confirmation of the request
const result = await request;
console.log('result.value', result);
return result;
};


initdb();
