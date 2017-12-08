setInterval(function() {
   var hT = document.getElementById("bottom").offsetTop, // distance from top of element to window top
       wH = window.innerHeight,
       windowScroll = window.scrollY,
       article = document.getElementsByTagName("article")[0],
       fixed = article.style.position == "fixed";

   if (windowScroll > (hT-wH)){
     // we see the bottom yet article is still fixed
     // article can't be fixed anymore
     article.style.position = "absolute";
     article.style.top = hT-wH + "px";
   } else if (windowScroll < (hT-wH) && !fixed) {
     article.style.position = "fixed";
     article.style.top = "";
   }
}, 1);

var b = function() {
  var buttons = document.getElementsByTagName("button");
  for (i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
      var s = document.getElementById("size");
      var m = document.createElement("div");
      m.id = "added-to-cart";
      if (s.value == "medium") {
        m.innerHTML = "<div style=\"left: 44%;\">\n" +
                      "<img style=\"width: 100px; height: 100px\" src=\"../../loading.gif\"/>\n" +
                      "</div>";
        setTimeout(function(){
          m.innerHTML = "<div style=\"left: 35%;\"><h1>Uh oh!</h1>\n" +
                               "<p>This item cannot be added to your cart because the<br>" +
                               "medium button-down shirt <i>just</i> sold out.</p>\n" +
                               "<p>We are so sorry about that.</p></div>";
        }, 2000);

      } else if (s.value == "default") {
        m.innerHTML = "<div style=\"left: 38%;\"><h1>No shirt selected.</h1>\n" +
                             "<p>Please select a shirt.</p></div>\n";
      } else {
        m.innerHTML = "<div style=\"left: 40%\"><h1>Out of stock.</h1>\n" +
                             "<p>Nice try. That shirt is out of stock.</p>\n" +
                             "<p>Check out one of our other luxury shirts.</p></div>\n";
      }
      document.getElementsByTagName("body")[0].prepend(m);
      m.addEventListener("click", function() {
        document.getElementsByTagName("body")[0].removeChild(m);
      })
    })
  }
}

window.onload = b;
