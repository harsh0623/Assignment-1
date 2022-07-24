let current_value = 0;
      let saved_value = "People Registered are:";
      function increase() {
        current_value = document.getElementById("value").innerHTML =
          current_value + 1;
      }
      function decrease() {
        if (current_value <= 0) {
          alert("Already Registered people is 0");
          current_value = 0;
        } else {
          current_value = document.getElementById("value").innerHTML =
            current_value - 1;
        }
      }
      function save() {
        if (current_value <= 0) {
          alert("No one is Registered Yet!!!For saving it.");
          saved_value = saved_value;
        } else {
          saved_value = document.getElementById("saved").innerHTML =
            saved_value + "" + current_value + ",";
        }
      }
      function reset() {
        current_value = document.getElementById("value").innerHTML = 0;
        saved_value = document.getElementById("saved").innerHTML =
          "People Registered are:";
      }