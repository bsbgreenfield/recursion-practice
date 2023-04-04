const answer = []
function gatherStrings(obj){
    for (let item in obj){
        if (!(obj[item] instanceof Object)){
            if (typeof obj[item] == 'string') answer.push(obj[item])
        }
        else gatherStrings(obj[item])
    }
    return answer
}
let nestedObj = {
    firstName: "Lester",
    favoriteNumber: 22,
    moreData: {
      lastName: "Testowitz"
    },
    funFacts: {
      moreStuff: {
        anotherNumber: 100,
        deeplyNestedString: {
          almostThere: {
            success: "you made it!"
          }
        }
      },
      favoriteString: "nice!"
    }
  };
  
  console.log(gatherStrings(nestedObj))