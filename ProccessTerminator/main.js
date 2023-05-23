function enlargeImage(image) {
    image.classList.toggle("enlarged");
  }

  document.addEventListener("click", function(event) {
    var image = document.getElementById("app-screenshot");
    if (image.classList.contains("enlarged") && !image.contains(event.target)) {
      image.classList.remove("enlarged");
    }
  });
  