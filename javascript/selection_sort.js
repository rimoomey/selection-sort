function selectionSort(arr) {

  // const temp = arr[0];
  // arr[0] = arr[minIndex];
  // arr[minIndex] = temp;

  for (let counter = 0; counter < arr.length - 1; counter++) {
    const searchArray = arr.slice(counter + 1);
    const minIndex = getIndexOfMinimumValue(searchArray) + counter + 1;

    const curr = arr[counter];
    const min = arr[minIndex];

    if( min < curr) {
      arr[counter] = min;
      arr[minIndex] = curr;
    }
  }

  return arr;
}

function getIndexOfMinimumValue(arr) {
  let minValue = Number.MAX_VALUE;
  let minValueIndex = 0;

  for (i = 0; i < arr.length; i++) {
    if (arr[i] < minValue) {
      minValue = arr[i];
      minValueIndex = i;
    }
  }

  return minValueIndex;
}

if (require.main === module) {
  console.log(getIndexOfMinimumValue([3, 5, 2]));

  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("");

  // BENCHMARK HERE, and print the average runtime
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }
}

module.exports = selectionSort;

// Please add your pseudocode to this file
// And a written explanation of your solution
