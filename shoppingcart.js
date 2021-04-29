var buttonsPlus = Array.from(document.getElementsByClassName("add"));
// console.log(buttonsPlus);

for (let btnPlus of buttonsPlus) {
  btnPlus.addEventListener("click", function () {
    btnPlus.nextElementSibling.innerHTML++;
    sum();
  });
}

var buttonsMinus = Array.from(document.getElementsByClassName("minus"));

for (let i = 0; i < buttonsPlus.length; i++) {
  buttonsMinus[i].addEventListener("click", function () {
    if (buttonsMinus[i].previousElementSibling.innerText > 0)
      buttonsMinus[i].previousElementSibling.innerText--;
    sum();
  });
}

function sum() {
  let prices = document.getElementsByClassName("price");
  let qtes = document.getElementsByClassName("qte");
  let s = 0;

  console.log(prices[0].innerHTML);
  console.log(qtes[0].innerHTML);
  for (let i = 0; i < prices.length; i++) {
    s += prices[i].innerHTML * qtes[i].innerHTML;
  }

  return (document.getElementById("totalp").innerText = "$ " + s);
}

let trash = document.getElementsByClassName("fa-trash-alt");

for (let btnTrash of trash) {
  btnTrash.addEventListener("click", function () {
    btnTrash.parentNode.remove();
    sum();
  });
}

let hearts = document.getElementsByClassName("fa-heart");

for (let heart of hearts) {
  heart.addEventListener("click", function () {

    // heart.classList.toggle("red");

    if (heart.style.color === "grey") {
      heart.style.color = "red";
    } else {
      heart.style.color = "grey";
    }
  });
}

console.log('node ')