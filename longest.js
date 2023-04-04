function findLongest(arr){
    if (arr.length === 0) return [];
    console.log(arr)
    return Math.max(arr[0].length, findLongest(arr.slice(1)))
}
console.log(findLongest(["hello", "hi", "hola"]))