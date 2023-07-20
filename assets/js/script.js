 
  var eventsData;

function setHourColors() {
   

    for (var i =9; i < 18; i++) {
        $("#hour-" + i + "textarea").removeClass("future");
        if (i < now.hour()) {
            $("#hour-" + i + "textarea").addClass("past")
        } else if (i == now.hour()) {
            $("hour-" + i + "textarea").addClass("present");
        }
    }
}

function loadStoredData() {
    eventsData = JSON.parse(localStorage.getItem("calenderEvents"));
    if (!eventsData) {
        eventsData = {
            hour9: "",
            hour10: "",
            hour11: "",
            hour12: "",
            hour13: "",
            hour14: "",
            hour15: "",
            hour16: "",
            hour17: "",
        }
    }
    //TODO Load existing data from local storage
    window.addEventListener('load', () => {
        const name = document.querySelector('#name');
    })
}

function handleSaveClick(event) {
    //grab data from HTML
    var hourBlock = $(event.target);
    var value = hourBlock.children("textarea")
    var hour = hourBlock.attr("id").split("-")[1];
    
    //modify our data object
    eventsData["hour" + hour] = value;

    //store in local storage
    localStorage.setItem("calenderEvents", JSON.stringify(eventsData));
}
$('.saveBtn').on('click', handleSaveClick);

$(function() {
    loadStoredData();
});


