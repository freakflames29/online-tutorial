const img = document.getElementById("img");

const h1 = document.getElementById("h1");

const btn = document.getElementById("btn");
let toggle = false;

function changePic() {
  if (toggle == true) {
    img.src =
      "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg";

    h1.innerText="This is a cat !"

    h1.classList.add("red")
    h1.classList.remove("blue")

    toggle = !toggle;   


  } else {
    img.src =
      "https://i.pinimg.com/originals/2c/ba/bf/2cbabfbe523180ac534952d17a1b07a2.png";

      h1.innerText="This is a Dog !"
      h1.classList.remove("red")

      toggle = !toggle;
  }
}

btn.addEventListener("click", changePic);
