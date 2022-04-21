// var a = document.querySelector(".all_section");

// a.addEventListener("click",()=>{
//     console.log("click");
//     let id = null;
//     const elem = document.getElementById("animate1");
//     let pos = 0;
//   clearInterval(id);
//   id = setInterval(frame, 5);
//   function frame() {
//     if (pos == 350) {
//       clearInterval(id);
//     } else {
//       pos++; 
//       elem.style.top = pos + "px"; 
//       elem.style.left = pos + "px"; 
//     }
//   }
// })

function myFunction() {
var aud1 = document.getElementById("aud1").autoplay;
document.getElementById("demo").innerHTML = aud1;
}