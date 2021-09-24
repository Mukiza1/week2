function myFunction() {
  var txt;
  var r = confirm("Press add button!");
  if (r === true) {
    txt = ".Drink";
  } else {
    txt = "You pressed Cancel!";
  }
  document.getElementById("demo").innerHTML = txt;
}
