// Linear Search Algo

// function linearSearch(arr, target) {
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] === target) {
//         return i; // Return the index of the target element if found
//       }
//     }
//     return -1; // Return -1 if the target element is not found
//   }
  
//   // Example usage:
//   const numbers = [5, 2, 9, 1, 5, 6];
//   const targetElement = 9;
//   const index = linearSearch(numbers, targetElement);
  
//   if (index !== -1) {
//     console.log(`Element ${targetElement} found at index ${index}.`);
//   } else {
//     console.log(`Element ${targetElement} not found in the array.`);
//   }

  

  /////////////////////////////////////////////////////////////////////////////////////////////

// Binary Search 

// function binarySearch(arr, target) {
//     let left = 0;
//     let right = arr.length - 1;
  
//     while (left <= right) {
//       const mid = Math.floor((left + right) / 2);
  
//       if (arr[mid] === target) {
//         return mid; // Return the index of the target element if found
//       } else if (arr[mid] < target) {
//         left = mid + 1; // Search the right half of the array
//       } else {
//         right = mid - 1; // Search the left half of the array
//       }
//     }
  
//     return -1; // Return -1 if the target element is not found
//   }
  
//   // Example usage:
//   const sortedNumbers = [1, 2, 3, 5, 6, 9];
//   const targetElement = 6;
//   const index = binarySearch(sortedNumbers, targetElement);
  
//   if (index !== -1) {
//     console.log(`Element ${targetElement} found at index ${index}.`);
//   } else {
//     console.log(`Element ${targetElement} not found in the array.`);
//   }
  

///////////////////////////////////////////////////////////////////////////////////////////////////


// Hash Table Search

// function HashTable() {
//     const table = {};
  
//     function hash(key) {
//       let hashValue = 0;
//       for (let i = 0; i < key.length; i++) {
//         hashValue += key.charCodeAt(i);
//       }
//       return hashValue;
//     }
  
//     this.insert = function (key, value) {
//       const hashedKey = hash(key);
//       table[hashedKey] = value;
//     };
  
//     this.search = function (key) {
//       const hashedKey = hash(key);
//       return table[hashedKey];
//     };
//   }
  
//   // Example usage:
//   const myHashTable = new HashTable();
//   myHashTable.insert("name", "John");
//   myHashTable.insert("age", 30);
//   myHashTable.insert("city", "New York");
  
//   console.log(myHashTable.search("name")); // Output: "John"
//   console.log(myHashTable.search("age")); // Output: 30
//   console.log(myHashTable.search("city")); // Output: "New York"
//   console.log(myHashTable.search("country")); // Output: undefined (not found)
  