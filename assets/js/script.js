var nowDisplay = $('#currentDay');

// handle displaying the time
function displayNow() {
    var rightNow = moment().format('DD MMM YYYY [at] hh:mm:ss a');
    nowDisplay.text(rightNow);
  }


setInterval(displayNow, 1000);