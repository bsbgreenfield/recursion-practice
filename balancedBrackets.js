function balanceBracket(str){
    // base case end of string
    if (str.length < 2) return true
    // base case no match found for open bracket - false
    else if (")}]".includes(str[0])) return false
    // recursive case
    else if ("([{".includes(str[0])){
        // if the last value is a letter, slice down str, else mistmatch found - return false
        if (str[str.length - 1] != matcher[str[0]]){
            if (")}]".includes(str[str.length -1])) return false
            else return balanceBracket(str.slice(0,str.length - 1))
        }
        // match found, clear to continue recursing
        else return balanceBracket(str.slice(1, str.length - 1))
    }
    else return balanceBracket(str.slice(1))
}

const matcher = {
    '(':')',
    '[':']',
    '{':'}'
}
console.log(balanceBracket('(+ string [and])'))