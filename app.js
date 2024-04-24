let ans = document.querySelector('.answer')

function toss(btn){
    let tossValue = Math.floor(Math.random()*2)
    if(tossValue===0  && btn==='head' || tossValue===1  && btn==='tail' ){
      console.log("you win")
      ans.innerHTML=("you win")
}else{
    console.log("You Lose")
    ans.innerHTML=("You Lose")
}
// console.log(`${btn}`)
}



