// buttons
document
  .getElementById("button-container")
  .addEventListener("click", function (event) {
    if (event.target.tagName == "BUTTON") {
      const date = new Date();
      let hours = date.getHours();
      let minutes = date.getMinutes();
      let seconds = date.getSeconds();
      let shift;

      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
      if (hours >= 12) {
        shift = "pm";
        hours = ((date.getHours() - 1) % 12) + 1;
      } else {
        shift = "am";
      }

      const timeList = hours + ":" + minutes + ":" + seconds + " " + shift;

      //send notification section

      const notificationContainer = document.getElementById(
        "notification_container"
      );

      notificationContainer.classList.add(
        "flex",
        "flex-col",
        "items-center",
        "justify-center",
        "p-2"
      );

      const newP = document.createElement("p");
      const text = "You have completed the task " + " at " + timeList;
      newP.innerText = text;
      newP.classList.add(
        "text-center",
        "mb-4",
        "bg-custom",
        "p-2",
        "rounded-lg",
        "text-sm"
      );
      notificationContainer.appendChild(newP);

      //button disable section

      alert("Board Updated Successfully");
    }
  });



