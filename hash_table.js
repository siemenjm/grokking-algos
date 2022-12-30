// Hash Tables
// Similar to object in JS, as in they are built of key:value pairs
// Average Big O time of O(1) for search, insert, delete
// Worst case Big O time of O(n) for search, insert, delete (if lots of collisions)
//
// Objects (and Maps) in JS are hash tables/maps that unfortunately overwrite data in collisions. You also don't know the size of the Object
// Need to build own Hash table/map class with search, insert, and delete methods

// Create HashTable class
class HashTable {
  constructor(maxSize) {
    this.table = new Array(maxSize);
    this.size = 0;
  }

  // Hash method. Accepts key and turns it into an index
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i); // Sums the ASCI code of all the characters to make unique hash
    }

    return hash % this.table.length; // Makes sure the value returned is less than the max size/length of the hash table
  }

  // Insertion method
  set(key, value) {
    const index = this._hash(key); // Generates the index where the key:value pair will be placed
    this.table[index] = [key, value]; // Stores the key:value pair in the hash table at the previously generated index
    this.size++; // Increments size every time a value is inserted
  }

  // Search method
  get(key) {
    const index = this._hash(key); // Finds the index of the key in the hash table

    return this.table[index]; // Returns the key:value pair at that index
  }

  // Delete method
  remove(key) {
    const index = this._hash(key);

    if (this.table[index] && this.table[index].length) {
      // Checking to see if the hash table has a truthy value and length greater than 0 at this index
      this.table[index] = undefined;
      this.size--; // Decrement the size property when key:value pair is removed
      return true;
    }

    return false;
  }
}

const prices = new HashTable(10);

prices.set('Apple', 5);
prices.set('Banana', 1);
prices.set('Pizza', 15);

console.log(prices.get('Apple'));
console.log(prices.get('Banana'));
console.log(prices.get('Pizza'));

prices.remove('Banana');
console.log(prices.get('Banana'));
