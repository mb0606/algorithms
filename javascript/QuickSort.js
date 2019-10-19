quickSort = (array) => {
    if (array.length < 2) {
        return array;
    }
    const pivot = array[0];
    const low = array.filter(value => {
        return value < pivot;
    })
    const high = array.filter(value => {
        return value > pivot;
    })
    console.log(low);
    console.log(high)

    return [...quickSort(low), pivot, ...quickSort(high)];
}
console.log(quickSort([4, 2, 7, 1, 44, 222, 99]));