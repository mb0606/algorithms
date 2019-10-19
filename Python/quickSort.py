def quickSort(array):
    if len(array) < 2: return array
    else:
        # choose a pivot
        pivot = array[0];
        less = [i for i in array[1:] if i <=pivot]
        greater = [i for i in array[1:] if i > pivot]

        return quickSort(less) + [pivot] + quickSort(greater)

print(quickSort([6,4,99,12,1]))
