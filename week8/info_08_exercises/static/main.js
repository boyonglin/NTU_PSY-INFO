var currentTrial = 1;
var startTrialTime = 0;
var trialRunning = false;
var answer = ["diff", "diff", "same"];
var accuracy = 0;

$(document).ready(function () {
  $("#submitButton").hide();
  $("#accuracy").hide();
  $(document).keyup(function (e) {
    if (e.which === 32) { //space
      StartTrial();
    }
    if (e.which === 83) { //s
      PressedSame();
    }
    if (e.which === 68) { //d
      PressedDifferent();
    }
  });
});

function PressedSame() {
  if (!trialRunning) {
    return;
  }
  $("#response").val("same");
  NextTrial();
}

function PressedDifferent() {
  if (!trialRunning) {
    return;
  }
  $("#response").val("diff");
  NextTrial();
}

function NextTrial() {
  trialRunning = false;

  var currentTime = new Date().getTime();
  var RT = currentTime - startTrialTime;
  var response = $("#response").val();

  // collect data
  var data = {
    currentTrial: currentTrial,
    answer: answer[currentTrial - 1],
    response: response,
    RT: RT,
  };

  // send data to server
  fetch("/storeData", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.text())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));

  // update accuracy
  if (response === answer[currentTrial - 1]) {
    accuracy++;
  }

  $("#canvas").hide();
  $("#startTrial").show();
  currentTrial++;

  if (currentTrial < 4) {
    $("#startTrial").text("START TRIAL " + currentTrial);
  } else {
    $("#startTrial").hide();
    $("#submitButton").show();
  }
}

function StartTrial() {
  if (trialRunning) {
    return;
  }
  trialRunning = true;

  $("#startTrial").hide();
  $("#canvas").show();
  $("#canvas").attr("src", "static/images/" + currentTrial + "_display1.png");

  setTimeout(function () {
    $("#canvas").hide();
  }, 1000);

  setTimeout(function () {
    $("#canvas").show();
    $("#canvas").attr("src", "static/images/" + currentTrial + "_display2.png");
    startTrialTime = new Date().getTime();
  }, 1500);
}

function submit() {
  $("#submitButton").hide();
  $("#accuracy").show();
  $("#accuracy").text("Accuracy: " + accuracy + "/3");
}
