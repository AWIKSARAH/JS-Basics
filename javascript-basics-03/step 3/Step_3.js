// // var a=;
// console.log("im here")

// document.getElementsByClassName(".green").addEventListener("click",function(){
//   console.log("hiiiiiii")
//       document.getElementById("text").style.color ='green';
// });

// document.getElementsByName("show").addEventListener("click", function(){
  
//     document.getElementById("text").style = 'display: block';
// });
// var closeIcon=document.getElementsByClassName('.green');  

//     function closeBigImgAndContainer()
// {
//     MoniqueDiv.style.display= "none";
//     currentBigImageToDisplay.style.display="none";
// };

// closeIcon.addEventListener("click", closeBigImgAndContainer);
const boxes = document.getElementsByClassName('box');

for (const box of boxes) {
    box.addEventListener('click', function onClick() {
      console.log('box clicked');
    });

    const element = document.getElementById("myDIV");
    if (element.className == "myStyle") {
      element.className = "newStyle";
    } else {
      element.className = "myStyle";
    }