var istatus = document.querySelector("h4")

var add = document.querySelector("#Buy")

var noo = document.querySelector("#Not-like")

add.addEventListener("click", function(){
    istatus.innerHTML = "Order Confirmed";
    istatus.style.color = "green"
})

noo.addEventListener("click", function(){
    istatus.innerHTML = "Order it"
    istatus.style.color = "red"
})
