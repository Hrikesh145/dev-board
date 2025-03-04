document
  .getElementById("discover")
  .addEventListener("click", function name(event) {
    event.preventDefault();
    window.location.href = "./vlog.html";
    event.stopPropagation();
  });

document
  .getElementById("btmain")
  .addEventListener("click", function name(event) {
    console.log('yo');
    window.location.href = "./index.html";
    event.stopPropagation();
  });

