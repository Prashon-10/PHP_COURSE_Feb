// function getHTTP() {
//   // let http = new XMLHttpRequest();
//   // http.onreadystatechange = function(){
//   //     if(http.readyState == 4 && http.status == 200){
//   //         console.log(JSON.parse(http.responseText))
//   //     }
//   // }

//   // http.open("GET", "https://jsonplaceholder.typicode.com/users", true);
//   // http.send();

//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((res) => {
//       return res.json();
//     })
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }

// getHTTP();

// Important Question
$(document).ready(function () {
  $("#hide").click(function () {
    $("p").hide(100);
  });

  $("#show").click(function () {
    $("p").show(100);
  });

  // Hide and Show Both in one button
  $("#hs").click(function () {
    $("p").toggle(100)//time in ms;
  });
});
