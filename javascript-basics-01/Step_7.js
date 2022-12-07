var shoe_size = prompt("How match size");
var birth_year = prompt("What is your birth year");

function myFunction() {
    var cal = shoe_size*2;
    cal=cal+5;
    cal=cal*50
    cal=cal-birth_year;
    cal=cal+1766;
    return cal;
  }
  alert (myFunction());