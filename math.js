const arr = [4,3,5,7,1,9,4,2,8,10,11,1,2,6,42,9,32];
const arr2 = [4,3,5,7,1,9,4,2,8,10,11,1,2,6,42,9,32];


// Basic addition that returns a sum
function sumOfTwoNums(x, y) {
    return x + y;
}

function printArray(arr) {
    for(i in arr) {
        console.log(arr[i]);
    }
}

function mergeSort(arr) {
    for(i = 0; i < arr.length; i++) {
        for(j = 1; j < arr.length; j++) {
            if(arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
}

console.time("Merge Sort")
printArray(mergeSort(arr2));
console.timeEnd("Merge Sort")
