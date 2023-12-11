const box = document.getElementById("box");
const eye = document.getElementById("eye");

{
  /* <i class="fa-solid fa-eye-slash"></i> */
}
function showPass() {
  if (box.type === "password") {
    box.type = "text";
    eye.classList.remove("fa-eye");
    eye.classList.add("fa-eye-slash");
  } else {
    box.type = "password";
    eye.classList.add("fa-eye");
    eye.classList.remove("fa-eye-slash");
  }
}
