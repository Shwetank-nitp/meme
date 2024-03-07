function isThala(str) {
  if (str.lenght === 7 || str === "7") {
    return true;
  }
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
    document.getElementById("song").setAttribute("src", "./0.mp3").play();
    document.getElementById("para").innerText = "No thala for you";
    document.querySelector(".img").setAttribute("src", "./0.gif");
    document.querySelector(".pop-up").setAttribute("style", "display: flex");
  }
});
