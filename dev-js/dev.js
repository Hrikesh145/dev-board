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

      event.target.disabled = true;

      alert("Board Updated Successfully");
    }

    document
      .getElementById("clear")
      .addEventListener("click", function (event) {
        event.preventDefault();
        document.getElementById("notification_container").innerHTML = "";
      });

    const taskNumber = document.getElementById("taskNumber").innerText;

    const taskNumberRemain = parseInt(taskNumber);
    let remain = taskNumberRemain - 1;
    document.getElementById("taskNumber").innerText = parseInt(remain);

    const taskDone = document.getElementById("taskDone").innerText;
    const done = parseInt(taskDone) + 1;
    document.getElementById("taskDone").innerText = done;

    if (remain === 0) {
      alert("Congratulations you have completed all the tasks.");
    }
    event.stopPropagation();
  });

// colorchange

document
  .getElementById("btnColorChange")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const body = document.getElementById("body");
    let randomColor = Math.random().toString(16);
    randomColor = randomColor.slice(2, 8);

    if (randomColor.length < 6) {
      while (randomColor.length !== 6) {
        randomColor = randomColor + "0";
      }
    }
    randomColor = "#" + randomColor;

    body.classList.remove("bg-slate-100");
    body.style.backgroundColor = randomColor;
  });
