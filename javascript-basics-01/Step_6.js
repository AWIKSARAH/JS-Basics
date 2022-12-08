var Fnum=prompt("please enter the number");
var Snum=prompt("please enter the number");
 document.getElementById('first_number').value=Fnum;
document.getElementById('second_number').value=Snum;
document.getElementById("validate").addEventListener("click",function(){
alert(Fnum%Snum)
}
)

