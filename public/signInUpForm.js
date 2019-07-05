// ========================================= Style  =========================================  //

var alert = document.querySelector(".alert");
var myForm = document.querySelector("form");

if (alert && screen.width < 650) {
  myForm.style.margin = "0";
} else {
  if (alert) {
    myForm.style.marginTop = "-55px";
  }
}
