setInterval(function() {
   var hT = document.getElementById("bottom").offsetTop, // distance from top of element to window top
       wH = window.innerHeight,
       windowScroll = window.scrollY,
       article = document.getElementsByTagName("article")[0],
       fixed = article.style.position == "fixed";

       if (windowScroll > (hT-wH)){
         // we see the bottom yet article is still fixed
         // article can't be fixed anymore
         article.style.position = "none";
         article.style.top = hT-wH + "px";
       } else if (windowScroll < (hT-wH) && !fixed) {
         article.style.position = "none";
         article.style.top = "";
       }
}, 1);
