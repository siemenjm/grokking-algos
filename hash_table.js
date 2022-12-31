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

    if (this.table[index]) {
      // Checking to see if key:value pair already exists at this index
      for (let i = 0; i < this.table[index].length; i++) {
        // Update the key:value pair if key exists
        if (this.table[index][i][0] === key) {
          this.table[index][i][1] = value;

          return;
        }
      }

      // If key doesn't exist at this index, push new key:value pair
      this.table[index].push([key, value]);
    } else {
      // This is hit if there are no key:value pairs at this index
      this.table[index] = [];
      this.table[index].push([key, value]);
    }

    this.size++; // Increment size
  }

  // Search method
  get(key) {
    const target = this._hash(key); // Finds the index of the key in the hash table

    if (this.table[target]) {
      for (let i = 0; i < this.table[target].length; i++) {
        if (this.table[target][i][0] === key) {
          return this.table[target][i][1];
        }
      }
    }

    return undefined;
  }

  // Delete method
  remove(key) {
    const index = this._hash(key);

    if (this.table[index] && this.table[index].length) {
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i][0] === key) {
          this.table[index].splice(i, 1);
          this.size--;
          return true;
        }
      }
    }

    return false;
  }

  // Display method
  display() {
    this.table.forEach((values, index) => {
      const chainedValues = values.map(
        ([key, value]) => `[ ${key}: ${value} ]`
      );
      console.log(`${index}: ${chainedValues}`);
    });
  }
}

const prices = new HashTable(10);

prices.set('Apple', 5);
prices.set('Banana', 1);
prices.set('Pizza', 15);

console.log(prices.get('Apple'));
console.log(prices.get('Banana'));
console.log(prices.get('Pizza'));

console.log(prices.remove('Banana'));
console.log(prices.get('Banana'));

prices.set('Spain', 110);
prices.set('ǻ', 192);
console.log(prices.get('Spain'));
console.log(prices.get('ǻ'));

console.log(prices.display());
