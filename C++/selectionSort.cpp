#include <iostream>
#include <string>

using namespace std;

void selectionSort(int arr[], int arr_size){
    int temp;    
    for(int i = 0; i < arr_size - 1; i++){
        int min_index = i;
        for(int j = i + 1; j < arr_size; j++){
          if(arr[min_index] > arr[j]){
            min_index = j;
          }  
        }
        if( min_index != i){
           temp = arr[min_index];
           arr[min_index] = arr[i];
           arr[i] = temp;
        }      
    }
}


int main()
{
    int arr[6] = {11,10,4,55,8,12};  
    int arr_size = sizeof(arr)/sizeof(arr[0]);
    
    selectionSort(arr, arr_size);
    
    for(int m = 0; m < arr_size; m++){
        cout << arr[m] << endl;
    }
    

}
