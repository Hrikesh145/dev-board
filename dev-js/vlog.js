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
    window.location.href = "./index.html";
    // window.history.back();
    // alert("hi");
    event.stopPropagation();
  });
  