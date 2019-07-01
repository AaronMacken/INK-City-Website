// =========================================  TAB =========================================  //
function openTab(evt, tabName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and select it

document.getElementById("defaultOpen").click();

// =========================================  MODAL =========================================  //
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
var editBtn = document.querySelector(".fa-user-edit");
if(editBtn) {
  btn.onclick = function() {
  modal.style.display = "block";
  };
}


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// =========================================  TOGGLE HIDE SHOW DEL FRIEND BTN =========================================  //

function myFunction() {
  var delBtn = document.querySelectorAll(".delfrbtn");
  for (var i = 0; i < delBtn.length; i++) {
    if (delBtn[i].style.display === "none") {
      delBtn[i].style.display = "inline";
    } else {
      delBtn[i].style.display = "none";
    }
  }
}

// ========================================= Style  =========================================  //

var alert = document.querySelector(".alert");
var profileSection = document.querySelector("#profileSection");

if(alert) {
  alert.style.marginTop = "60px";
  profileSection.style.paddingTop = "0";
}
