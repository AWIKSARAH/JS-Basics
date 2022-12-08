var shoe_size = prompt("How match size");
var birth_year = prompt("What is your birth year");
document.getElementById('shoe_size').value=shoe_size;
document.getElementById('year').value=birth_year;
function myFunction() {
    var cal = shoe_size*2;
    cal=cal+5;
    cal=cal*50
    cal=cal-birth_year;
    cal=cal+1766;
    return cal;
  }
  //alert (myFunction());
  document.getElementById("validate").addEventListener("click",function(){
    alert(myFunction())
    }
    )