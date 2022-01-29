function validateForm() {
  var username = document.forms["Papaisinthehouse"]["fname"].value;
  var password = document.forms["Papaisinthehouse"]["fpassword"].value;
  if (username.toLowerCase() == "jazzonfleek" && password.toLowerCase() == "kirkland") {
    alert("You have passed <3");
    window.open("https://ashchu.github.io/fifth")
  } else {
    alert("I don't rickroll. Instead I...");
    window.open("https://www.youtube.com/watch?v=y2GYh0bpxd8");
  }
}
