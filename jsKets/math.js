const arr = [
    9,8,7,6,5,4,3,2,1,10,11,15,14,13,12,
    9,8,7,6,5,4,3,2,1,10,11,15,14,13,12,
    9,8,7,6,5,4,3,2,1,10,11,15,14,13,12
];

const stringArray = "hello";

function printArray(arr) {
    console.log("Logging array:")
    for(i in arr) {
        console.log(arr[i]);
    }
}

function mergeSort(arr) {
    for(i = 0; i < arr.length; i++) {
        for(j = i + 1; j < arr.length; j++) {
            if(arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
}

mergeSort(arr);
mergeSort(stringArray);
console.time();
printArray(arr);
printArray(stringArray);
console.timeEnd();