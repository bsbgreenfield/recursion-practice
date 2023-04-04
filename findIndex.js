function findIndex(arr, val){
    if (arr[0] == val) return (startingLength - arr.length)
    return findIndex(arr.slice(1), val)
}
let array = ['cat', 'dog', 'fish', 'tree']
const startingLength = array.length
console.log(findIndex(array, 'tree'))