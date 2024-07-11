console.log("I am popup.js");

//document.addEventListener('DOMContentLoaded', function(){ //popup.html 에서 script 태그가 head 에 있는 경우
  const button = document.querySelector('#button');
  //const button = document.getElementById("button");
  button.addEventListener("click", async () => {
    document.body.style.backgroundColor = 'red';
  });
//});
