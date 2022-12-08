// var a=;
console.log("im here")
window.onload = function () {
    
document.getElementById("hide").addEventListener("click", function(){
  
    document.getElementById("texte").style = 'display: none';
});

document.getElementById("show").addEventListener("click", function(){
  
    document.getElementById("texte").style = 'display: block';
});

}