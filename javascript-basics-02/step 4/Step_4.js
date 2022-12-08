var button = document.querySelector("button");
var tname = document.getElementById("name");
var sname = document.getElementById("surname");
var city = document.getElementById("city");
button.addEventListener("click",function(){
    if (confirm("Do you want to Rest ?")) {
    tname.value = "";
    sname.value = "";
    city.value = "";
}
else {
    console.log("Cancel");
}
});


