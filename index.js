function validate() {
  var userUsername = document.getElementById("username").value;
  var userPassword = document.getElementById("password").value;
  if (userUsername == "iconplatforms" && userPassword == "P@s$w0rD") {
    // var element = (document.getElementById("wrong").innerHTML =
    //   "You enter wrong credentials");
    window.location.href = "index2.html";
  } else {
    document.getElementById("wrongcredentials").innerHTML =
      "You Entered Wrong Credentials";
    document.getElementById("wrongcredentials").classList.add("redstyle");
  }

  if (userUsername.length < 5) {
    document.getElementById("morecharacters").innerHTML =
      "Please Add More Characters";
    document.getElementById("morecharacters").classList.add("redstyle");
  }
}
