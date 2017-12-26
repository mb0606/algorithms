// Linked List Cycles
// Write a function that returns true if a linked list contains a cycle, or false if it terminates somewhere.

// Explanation:

// Generally, we assume that a linked list will terminate in a null next pointer, as follows:

//  A -> B -> C -> D -> E -> null
// A ‘cycle’ in a linked list is when traversing the list would result in visiting the same nodes over and over.

// This is caused by pointing a node in the list to another node that already appeared earlier in the list. Example:

//  A -> B -> C
//       ^    |
//       |    v
//       E <- D
// 'Constraint 1: Do this in linear time'

// 'Constraint 2: Do this in constant space'

// 'Constraint 3: Do not mutate the original nodes in any way'

var hasCycle = function(linkedList){
 // Your beautiful code here
    if(linkedList.value == null) return false;
     
     var skip1 = linkedList;
     var skip2  = linkedList;

     while(skip1 !== null && skip2 !== null && skip2.next !== null ){
       console.log("skip1", skip1.value)
        console.log("skip2", skip2.value, "_____________")
       skip1 = skip1.next;
       skip2 = skip2.next.next;
      
       
       if(skip1 == skip2 ){
         return true;
       }

     }
    return false;
};


