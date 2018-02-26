// Example program
#include <iostream>
#include <string>

using namespace std;

void mergeSort(int arr[], int l, int r);
void merge(int arr[], int l, int m, int r);


// l - left of the array
// r - right of the array
void mergeSort(int arr[], int l, int r){
    // Base case for recursion. If array length is less then one 
    // it is already sorted
    if (l < r)
       {
          int m = l+(r-l)/2; // Find the middle index of the array
          mergeSort(arr, l, m);
          mergeSort(arr, m+1, r);
          merge(arr, l, m, r);
       }
}

void merge(int arr[], int l, int m, int r) {
    // 
    int i, j, k;
    // set up length of both arrays
    int n1 = m - l + 1;
    int n2 =  r - m;
    
    // create temp arrays
    int L[n1], R[n2];
 
    //Copy data to temp arrays L[] and R[]
    for (i = 0; i < n1; i++)
        // copy left of the array to the temp array L[]
        L[i] = arr[l + i];
    for (j = 0; j < n2; j++)
        // copy right of the array to the temp array R[]
        R[j] = arr[m + 1+ j];
        
    // reset variables i and j 
    i = 0; // Counter for left sub-array
    j = 0; // Counter for right sub-array
    k = l; // Counter for original array
    
    // Merge the temp arrays back into arr[l..r] 
    // while right and left still have element
    while (i < n1 && j < n2)
    {
        if (L[i] <= R[j])
        {
            arr[k] = L[i];
            i++;
        }
        else
        {
            arr[k] = R[j];
            j++;
        }
        k++;
    }
    
    // Copy the remaining elements of L[], if there are any
    while (i < n1)
    {
        arr[k] = L[i];
        i++;
        k++;
    }
    while (j < n2){
      arr[k] = R[j];
      j++;
      k++;      
    }
    
}

int main()
{ 
    int arr[] = {12, 11, 13, 5, 6, 7};
    int arr_size = sizeof(arr)/sizeof(arr[0]);
 
    cout << arr_size << endl;
 
    mergeSort(arr, 0, arr_size - 1);
    
    for(int m = 0; m < arr_size -1; m++){
        cout << arr[m] << endl;
    }
    return 0;
}
