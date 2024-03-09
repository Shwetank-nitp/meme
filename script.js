function isThala(str) {
  if (str.length === 7) {
    return true;
  }
  let arthem = /[\d\s\/*+\-.]+/;
  let ditch1 = /^[\/*]/;
  let ditch2 = /[\/*]$/;
  let arr = str.match(arthem);
  if(arr===null) return false;
  for (let a of arr) {
    let sum = 0;
    if (!ditch1.test(a) && !ditch2.test(a)) {
      let expression = a.split(/\s*([\+\-\*\/])\s*/).filter(Boolean);
      sum = parseFloat(expression[0]);
      for (let i = 1; i < expression.length; i += 2) {
        if (expression[i] === "/") {
          sum /= parseFloat(expression[i + 1]);
        } else if (expression[i] === "*") {
          sum *= parseFloat(expression[i + 1]);
        } else if (expression[i] === "+") {
          sum += parseFloat(expression[i + 1]);
        } else {
          sum -= parseFloat(expression[i + 1]);
        }
      }
      if (sum === 7) {
        return true;
      }
    }
  }
  return false;
}

var audio = document.getElementById("bg-song");
document.getElementById("close").addEventListener("click", () => {
  audio.pause();
  document.querySelector(".pop-up").setAttribute("style", "display: none");
});

document.querySelector(".btn").addEventListener("click", () => {
  let str = document.querySelector(".input").value;
  if (isThala(str)) {
    audio.setAttribute("src", "./1.mp3");
    audio.play();
    document.getElementById("para").innerText = "you got thala";
    document.querySelector(".img").setAttribute("src", "./1.gif");
    document.querySelector(".pop-up").setAttribute("style", "display: flex");
  } else {
    audio.setAttribute("src", "./0.mp3");
    audio.play();
    document.getElementById("para").innerText = "No thala for you";
    document.querySelector(".img").setAttribute("src", "./0.gif");
    document.querySelector(".pop-up").setAttribute("style", "display: flex");
  }
});
