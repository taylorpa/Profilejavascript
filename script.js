console.log("page loaded...");

//Gear
function changeName(element) {
    document.querySelector("#name").innerHTML = "Spongbob Squarepants";
} 

//Remove button
var connectionSpan = document.querySelector(".badge");

function removal1(element) {
    document.querySelector(".card-list-item1").remove();  
    count()--;
    newCount.innerHTML = count() + " Connection Requests"
}

function removal2(element) {
    document.querySelector(".card-list-item2").remove(); 
}