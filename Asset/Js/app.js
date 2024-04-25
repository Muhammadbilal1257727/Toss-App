let ans = document.querySelector('.answer')
const image = document.querySelector('img');

function toss(btn){
    let tossValue = Math.floor(Math.random()*2)
    if(tossValue===0  && btn==='head' || tossValue===1  && btn==='tail' ){
      console.log("you win")
      ans.innerHTML=("You Win 🥳 The Toss")
}else{
    console.log("You Lose")
    ans.innerHTML=("You Lose 😭 The Toss")
}
// console.log(`${btn}`)

    if(tossValue === 1){
        image.src = './Asset/Image/head.png'
    }else{
        image.src = './Asset/Image/tail.png'
    }
}




