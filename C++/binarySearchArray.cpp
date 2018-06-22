// Example program
#include <iostream>
#include <string>
#include <algorithm>

using namespace std;

int const CAPACITY = 19;

void binarySearch(int values[], int search_value, int size);

int main()
{
int array[8] = {9,12,14,17,22,25,36,45};
binarySearch(array, 22, 8);


}

void binarySearch(int values[], int search_value, int size){
    
    bool found = false;
    int low = 0; 
    int high = size - 1;
    int pos = 0;
    
    while (low <= high && !found) {
        pos = (high + low) / 2;
        if (values[pos] == search_value) {found = true;}
        else if(values[pos] < search_value) { low = pos + 1;}
        else { high = pos - 1;}       
    }
    if(found){
        cout << "The number " << search_value << " was found at position " << pos << "." << endl;
    } else {
        cout << "The number " << search_value << " is not in the array." << endl;
    
    }
    
    
}
