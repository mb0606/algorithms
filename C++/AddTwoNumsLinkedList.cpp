// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example:

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

class Solution {
public:
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
      ListNode *head = new ListNode(0);
      ListNode *interator = head; 
        
        while(l1 != nullptr || l2 != nullptr){
          if(l1 != nullptr){
            interator->val += l1->val;
            l1 = l1->next;
          }
          if(l2 != nullptr){
            interator->val += l2->val;
            l2 = l2->next;
          }
            
          if(interator->val > 9 ){
            interator->next = new ListNode(0);
            interator->next->val = 1;
            interator->val -= 10;
            interator = interator->next;  
          } else if (l1 != nullptr || l2 != nullptr) {
            interator->next = new ListNode(0); 
            interator = interator->next;  
          }

        }
        
        return head;
    }
};
