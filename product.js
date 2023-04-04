function findProduct(arr){
    if (arr.length === 0) return 1;
    return arr[0] * findProduct(arr.slice(1))
}
console.log(findProduct([1, 2, 3, 0]))