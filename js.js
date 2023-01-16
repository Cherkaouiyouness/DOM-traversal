let btn = document.querySelector("button")
let main = document.getElementById("box1")


let i = 0
btn.onclick = function plus(){

    if ( i == 6 ){
        i = 0
        
        Array.from(btn.parentElement.parentElement.children[0].children).forEach(eleme => {
            eleme.style.backgroundColor="chartreuse"
        });
    }
    else {
        btn.parentElement.parentElement.children[0].children[i].style.backgroundColor="red"
    i++
    }
    }


















