#include <iostream>
#include <vector>

using namespace std;

vector<int> const commonElements(vector<int> v1, vector<int> v2){
  vector<int> common;
  int i = 0;
  int j = 0;
  
  while(i < static_cast<int>(v1.size()) || j < static_cast<int>(v2.size())){
    if(v1[i] ==  v2[j]){
      common.push_back(v1[i]);
      i++, j++;
    } else if (v1[i] > v2[j]){
      j++;
    } else {
      i++;
    }

  }
  
  return common;
}

int main() {
  vector<int> arr1{1,3,4,6,7,9};
  vector<int> arr2{1,2,4,5,9,10};
  vector<int> result = commonElements(arr1, arr2);
  for(int i = 0; i < static_cast<int>(result.size()); i++){
    cout <<result[i] << endl;   
      
  }
  cout <<"=========================" << endl;
  
  vector<int> arr3{1,3,4,6,7,9, 11,12,13,16,20};
  vector<int> arr4{1,2,4,5,9,10,11,16,20};
  vector<int> result2 = commonElements(arr3, arr4);
  for(int i = 0; i < static_cast<int>(result2.size()); i++){
    cout <<result2[i] << endl;   
      
  }
  return 0;

}
