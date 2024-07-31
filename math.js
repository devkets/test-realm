const arr = [4,3,5,7,1,9,4,2,8,10,11,1,2,6,42,9,32];

// Basic addition that returns a sum
function sumOfTwoNums(x, y) {
    return x + y;
}

function printArray(arr) {
    for(i in arr) {
        console.log(arr[i]);
    }
}

function sortArray(arr) {
    for(i = 0; i < arr.length - 1; i++) {
        for(j = 0; j < arr.length - 1; j++) {
            if(arr[j] > arr[j+1]) {
                let x = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = x;
            }
        }
    }
    return arr;
}

printArray(sortArray(arr));
