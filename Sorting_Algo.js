// Bubble Sort

// function bubbleSort(arr) {
//     const n = arr.length;
  
//     for (let i = 0; i < n - 1; i++) {
//       let swapped = false;
  
//       for (let j = 0; j < n - i - 1; j++) {
//         if (arr[j] > arr[j + 1]) {
//           // Swap elements arr[j] and arr[j + 1]
//           [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//           swapped = true;
//         }
//       }
  
//       // If no two elements were swapped in the inner loop, the array is already sorted
//       if (!swapped) {
//         break;
//       }
//     }
  
//     return arr;
//   }
  
//   // Example usage:
//   const numbers = [64, 34, 25, 12, 22, 11, 90];
//   console.log("Original array:", numbers);
  
//   const sortedNumbers = bubbleSort(numbers);
//   console.log("Sorted array:", sortedNumbers);
  

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Selection Sort 

// function selectionSort(arr) {
//     const n = arr.length;
  
//     for (let i = 0; i < n - 1; i++) {
//       let minIndex = i;
  
//       // Find the index of the minimum element in the unsorted part
//       for (let j = i + 1; j < n; j++) {
//         if (arr[j] < arr[minIndex]) {
//           minIndex = j;
//         }
//       }
  
//       // Swap the minimum element with the first element of the unsorted part
//       if (minIndex !== i) {
//         [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
//       }
//     }
  
//     return arr;
//   }
  
//   // Example usage:
//   const numbers = [64, 34, 25, 12, 22, 11, 90];
//   console.log("Original array:", numbers);
  
//   const sortedNumbers = selectionSort(numbers);
//   console.log("Sorted array:", sortedNumbers);
  


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Insertion sort 

// function insertionSort(arr) {
//     const n = arr.length;
  
//     for (let i = 1; i < n; i++) {
//       const currentElement = arr[i];
//       let j = i - 1;
  
//       // Move elements of the sorted portion that are greater than the current element
//       // to one position ahead of their current position
//       while (j >= 0 && arr[j] > currentElement) {
//         arr[j + 1] = arr[j];
//         j--;
//       }
  
//       // Insert the current element into its correct position in the sorted portion
//       arr[j + 1] = currentElement;
//     }
  
//     return arr;
//   }
  
//   // Example usage:
//   const numbers = [64, 34, 25, 12, 22, 11, 90];
//   console.log("Original array:", numbers);
  
//   const sortedNumbers = insertionSort(numbers);
//   console.log("Sorted array:", sortedNumbers);
  

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Merge sort

// function mergeSort(arr) {
//     if (arr.length <= 1) {
//       return arr;
//     }
  
//     const mid = Math.floor(arr.length / 2);
//     const left = arr.slice(0, mid);
//     const right = arr.slice(mid);
  
//     return merge(mergeSort(left), mergeSort(right));
//   }
  
//   function merge(leftArr, rightArr) {
//     const mergedArr = [];
//     let leftIndex = 0;
//     let rightIndex = 0;
  
//     while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
//       if (leftArr[leftIndex] < rightArr[rightIndex]) {
//         mergedArr.push(leftArr[leftIndex]);
//         leftIndex++;
//       } else {
//         mergedArr.push(rightArr[rightIndex]);
//         rightIndex++;
//       }
//     }
  
//     // Add remaining elements from the left and right arrays (if any)
//     return mergedArr.concat(leftArr.slice(leftIndex)).concat(rightArr.slice(rightIndex));
//   }
  
//   // Example usage:
//   const numbers = [64, 34, 25, 12, 22, 11, 90];
//   console.log("Original array:", numbers);
  
//   const sortedNumbers = mergeSort(numbers);
//   console.log("Sorted array:", sortedNumbers);
  


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Quick sort

