const monH1 = document.querySelector("h1");

const maDiv = document.querySelector("div");

const monBtn = document.querySelector("button");
monBtn.addEventListener("click", () => {
  monH1.style.color = "red";
  monH1.style.background = "#eee";
  maDiv.style.border = "10px solid black";
});

console.log(monBtn);
