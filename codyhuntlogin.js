function validateForm() {
  var username = document.forms["Papaisinthehouse"]["fname"].value;
  var password = document.forms["Papaisinthehouse"]["fpassword"].value;
  if (username.toLowerCase() == "jazzonfleek" && password.toLowerCase() == "kirkland") {
    alert("The clap of his cheeks rifted space and time");
    return false;
  } else {
    alert("I don't rickroll. Instead I...");
    window.open("https://www.youtube.com/watch?v=y2GYh0bpxd8");
  }
}
