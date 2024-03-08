var dayLists = document.querySelectorAll("ul");

dayLists.forEach(function (dayList) {
  var days = dayList.querySelectorAll("#day");
  days.forEach(function (day) {
    day.addEventListener("click", function () {
      debugger;
      days.forEach(function (d) {
        d.classList.remove("today");
      });
      this.classList.add("today");
    });
  });
});
