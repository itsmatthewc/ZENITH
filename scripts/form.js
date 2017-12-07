function checkForm() {
  var name = document.getElementsByName("name")[0],
      email = document.getElementsByName("email")[0],
      state = document.getElementsByName("state")[0],
      concerns = document.getElementsByName("concerns")[0];

  document.getElementById("contact-form").style.display = "none";


  var response = document.createElement("div");
  response.class = "response";
  response.innerHTML = "<h2>Hey, " + name.value + "!</h2>\n" +
                       "<p>Unfortunately, our email system is not set up yet, so " +
                       "we will not be receiving your email. We are sorry about the " +
                       "trouble.</p>\n" +
                       "<p>Below you see your submitted concern; see if you can find " +
                       "a solution on your own.</p>\n" +
                       "<p id=\"code-concern\">" + concerns.value + "</p>\n";
  document.getElementsByTagName("main")[0].append(response);

  return false;
}
