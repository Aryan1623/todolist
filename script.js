let inputbar = document.querySelector(".searchsection input");
let button = document.querySelector(".searchsection button");
let item = document.querySelector(".item");
let item1 = document.querySelector("#item1");
let item11 = document.querySelector(".firstitem");
let item11img = document.querySelector(".firstitem img");
let item2 = document.querySelector("#item2");
let item22 = document.querySelector(".seconditem");
let item22img = document.querySelector(".seconditem img");
let item3 = document.querySelector("#item3");
let item33 = document.querySelector(".thirditem");
let item33img = document.querySelector(".thirditem img");
let item4 = document.querySelector("#item4");
let item44 = document.querySelector(".fourthitem");
let item44img = document.querySelector(".fourthitem img");
let item5 = document.querySelector("#item5");
let item55 = document.querySelector(".fifthitem");
let item55img = document.querySelector(".fifthitem img");
let item6 = document.querySelector("#item6");
let item66 = document.querySelector(".sixthitem");
let item66img = document.querySelector(".sixthitem img");
let counter = 0;
button.addEventListener("click", () =>{
    if(inputbar.value === ''){
        alert("Write something");
    }
    else if(counter === 0){
    item1.innerText = inputbar.value;
 item.classList.remove("hide1");
 counter++;
    }

    else if(counter === 1){
        item2.innerText = inputbar.value;
    item22.classList.remove("hide2");
    counter++
    }
    else if(counter === 2){
        item3.innerText = inputbar.value;
    item33.classList.remove("hide3");
    counter++
    }
    else if(counter === 3){
        item4.innerText = inputbar.value;
    item44.classList.remove("hide4");
    counter++
    }
    else if(counter === 4){
        item5.innerText = inputbar.value;
    item55.classList.remove("hide5");
    counter++
    }
 
})

item11.addEventListener("click",()=>{
    item11img.src = "checked.png";
    document.getElementById("item1").style.textDecoration = "line-through";
})
item22.addEventListener("click",()=>{
    item22img.src = "checked.png";
    document.getElementById("item2").style.textDecoration = "line-through";
})
item33.addEventListener("click",()=>{
    item33img.src = "checked.png";
    document.getElementById("item3").style.textDecoration = "line-through";
})
item44.addEventListener("click",()=>{
    item44img.src = "checked.png";
    document.getElementById("item4").style.textDecoration = "line-through";
})
item55.addEventListener("click",()=>{
    item55img.src = "checked.png";
    document.getElementById("item5").style.textDecoration = "line-through";
})
item66.addEventListener("click",()=>{
    item66img.src = "checked.png";
    document.getElementById("item6").style.textDecoration = "line-through";
})
