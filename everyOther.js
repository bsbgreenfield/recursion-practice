function everyOtherChar(str, idx){
    if (idx  >= str.length) return ''
    return str[idx] + everyOtherChar(str, idx+2)
}
console.log(everyOtherChar('hello', 0))