const arrBubble = [
    9,8,7,6,5,4,3,2,1,10,11,15,14,13,12,
    9,8,7,6,5,4,3,2,1,10,11,15,14,13,12
];

const arrSelect = [
    9,8,7,6,5,4,3,2,1,10,11,15,14,13,12,
    9,8,7,6,5,4,3,2,1,10,11,15,14,13,12
];

function printArray(arrayName, arr) {
    console.log(arrayName)
    for(i in arr) {
        console.log(arr[i]);
    }
}

function bubbleSort(arr) {
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

function selectSort(arr) {
    let minLocation, temp;

    for(i = 0; i < arr.length; i++) {
        minLocation = i;
        for(j = i + 1; j < arr.length; j++) {
            if(arr[j] < arr[minLocation]) {
                minLocation = j;
            }
        }
        temp = arr[minLocation];
        arr[minLocation] = arr[i];
        arr[i] = temp;
    }
}

console.time();
bubbleSort(arrBubble);
printArray("Bubble: ", arrBubble);
console.timeEnd();

console.time();
selectSort(arrSelect);
printArray("Select: ", arrSelect);
console.timeEnd();