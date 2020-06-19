"use strict";

// obtain reference to checkboxes named sports[]
var list = document.forms["checklist"].elements["list"];


for (var i = 0; i < list.length; i++) {
  list[i].addEventListener("click", check);
}

function check() {
  if (this.checked === true) {
    this.labels[0].style.textDecorationLine = "line-through";
  }else{
    this.labels[0].style.textDecorationLine = "none";
}
}
