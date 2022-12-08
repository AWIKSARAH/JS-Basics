var age=prompt("How old are you");
document.getElementById('age').value=age;
document.getElementById("validate").addEventListener("click",function(){

if (age > 18) {
  alert("you are over 18");
}
else{
  alert("you are under 18" );
}
  //alert(Fnum%Snum)

if (age > 18) {
    alert("you are over 18");
  }
  else{
    alert("you are under 18" );
  }
});
