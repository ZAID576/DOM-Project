const num = document.querySelector("#num");
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const reset = document.querySelector("#reset");


let count = 0;

plus.addEventListener("click",() => {
    count++
    num.innerText = count;
    // console.log(count)
});


minus.addEventListener("click",()=>{
    if (count > 0){
        count--;
        num.innerHTML=count;
    }
    // console.log(count)
});


reset.addEventListener("click", ()=>{
    count = 0;
    num.innerHTML=count;
    // console.log(count)
});