
// variable used to get HTML id of display time
var nowDisplay = $('#currentDay');

// variable used to get HTML cass of hour block
var timeBlock = $(".hour");

// variable used to get the current hour
var nowHour = parseInt(moment().format("H"));

// function used to display the time
function displayNow() {
    var rightNow = moment().format('DD MMM YYYY [at] hh:mm:ss a');
    nowDisplay.text(rightNow);
}

//text area, class = "event"; if Save button clicked, set item to local storage and persist; upon refresh, need to get item from local storage too
$(".saveBtn").on("click", function (event) {
    var calendarItem =
        event.target.parentElement.previousElementSibling.children[0].value;
    localStorage.setItem(event.target.attributes[0].value, calendarItem);
});

$(document).ready(function () {
    if (localStorage["9am"] !== null && localStorage["9am"] !== undefined) {
        var t9 = $("<p>" + localStorage["9am"] + "</p>");
        $("#t9").append(t9[0].innerText);
    } else {
        ("");
    }
    if (localStorage["10am"] !== null && localStorage["10am"] !== undefined) {
        var t10 = $("<p>" + localStorage["10am"] + "</p>");
        $("#t10").append(t10[0].innerText);
    } else {
        ("");
    }
    if (localStorage["11am"] !== null && localStorage["11am"] !== undefined) {
        var t11 = $("<p>" + localStorage["11am"] + "</p>");
        $("#t11").append(t11[0].innerText);
    } else {
        ("");
    }
    if (localStorage["12pm"] !== null && localStorage["12pm"] !== undefined) {
        var t12 = $("<p>" + localStorage["12pm"] + "</p>");
        $("#t12").append(t12[0].innerText);
    } else {
        ("");
    }
    if (localStorage["1pm"] !== null && localStorage["1pm"] !== undefined) {
        var t13 = $("<p>" + localStorage["1pm"] + "</p>");
        $("#t13").append(t13[0].innerText);
    } else {
        ("");
    }
    if (localStorage["2pm"] !== null && localStorage["2pm"] !== undefined) {
        var t14 = $("<p>" + localStorage["2pm"] + "</p>");
        $("#t14").append(t14[0].innerText);
    } else {
        ("");
    }
    if (localStorage["3pm"] !== null && localStorage["3pm"] !== undefined) {
        var t15 = $("<p>" + localStorage["3pm"] + "</p>");
        $("#t15").append(t15[0].innerText);
    } else {
        ("");
    }
    if (localStorage["4pm"] !== null && localStorage["4pm"] !== undefined) {
        var t16 = $("<p>" + localStorage["4pm"] + "</p>");
        $("#t16").append(t16[0].innerText);
    } else {
        ("");
    }
    if (localStorage["5pm"] !== null && localStorage["5pm"] !== undefined) {
        var t17 = $("<p>" + localStorage["5pm"] + "</p>");
        $("#t17").append(t17[0].innerText);
    } else {
        ("");
    }
});

//check each hour block and change the background to the relative colour
$.each(timeBlock, function () {
    var hourId = parseInt($(this).attr("id"));
    //console.log(parseInt($(this).attr("id")));
    if (hourId === nowHour) {
        $(this).next().addClass("present");
    } else if (hourId < nowHour) {
        $(this).next().addClass("past");
    } else if (hourId > nowHour) {
        $(this).next().addClass("future");
    }
});

//display the current time & date
setInterval(displayNow, 1000);