function binarySearch(arr, val){
    let middleVal = Math.floor((arr.length -1)  / 2) 
    console.log(arr, middleVal)
    if (arr.length < 1) answer = -1 
    else if (arr[middleVal] == val){
        answer += middleVal
        return
    } 
    else if (arr[middleVal] > val){
        binarySearch(arr.slice(0, middleVal), val)
    } 
    else if (arr[middleVal] < val){
        answer += (middleVal + 1)
        binarySearch(arr.slice(middleVal + 1), val)
    }
    return answer 
}
let answer = 0
console.log(binarySearch([1,4,8,10,15, 20 , 30],1))