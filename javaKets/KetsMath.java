package javaKets;

public class KetsMath {

    private static void printArray(int[] arr) {
        for (int i : arr) {
            System.out.println(i);
        }
    }

    private static void bubbleSort(int[] arr) {
        for (int i = 0; i < arr.length; i++) {
            for (int j = i+1; j < arr.length; j++) {
                if (arr[i] > arr[j]) {
                    int temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }
    }

    public static void main(String[] args) {

        long startTime = System.currentTimeMillis();
        int[] arr = {
            9,8,7,6,5,4,3,2,1,10,11,15,14,13,12,
            9,8,7,6,5,4,3,2,1,10,11,15,14,13,12,
            9,8,7,6,5,4,3,2,1,10,11,15,14,13,12
        };
        bubbleSort(arr);
        printArray(arr);
        long endTime = System.currentTimeMillis();
        System.out.println("default: " + (endTime - startTime));
    }

}