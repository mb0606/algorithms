public class Sorting {
    public static int[] insertionSort(int[] list) {
        System.out.println("in here");
        int i, j, key, temp;
        for (i = 1; i < list.length; i++) {
            key = list[i];
            j = i - 1;
            while (j >= 0 && key < list[j]) {
                temp = list[j];
                list[j] = list[j + 1];
                list[j + 1] = temp;
                j--;
            }
        }
        return list;
    }

    public static int[] bubbleSort(int[] list) {
        int i, j, temp = 0;
        for (i = 0; i < list.length - 1; i++) {
            for (j = 0; j < list.length - 1 - i; j++) {
                if (list[j] > list[j + 1]) {
                    temp = list[j];
                    list[j] = list[j + 1];
                    list[j + 1] = temp;
                }
            }
        }

        return list;
    }

    public static void main(String[] args) {
        int[] arrInsertion = { 1, 6, 2, 9, 4 };
        insertionSort(arrInsertion);
        for (int i : arrInsertion) {
            System.out.println(i);

        }
        System.out.println("------------------");
        int[] arrBubble = { 1, 6, 2, 9, 4 };
        bubbleSort(arrBubble);
        for (int i : arrBubble) {
            System.out.println(i);

        }
    }
}