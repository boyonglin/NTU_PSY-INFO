var currentTrial = 1;
var startTrialTime = 0;
var trialRunning = false;

$(document).ready(function() {
	$('#submitButton').hide();
	$(document).keyup(function (e){
                if( e.which === 32 ) { StartTrial(); } //space
                if( e.which === 83 ) { PressedSame(); } //s
                if( e.which === 68 ) { PressedDifferent(); } //d
        });
});

function PressedSame() {
	if (!trialRunning) {
		return;
	}
	$('#t' + currentTrial + '_response').val("same");
	NextTrial();
}

function PressedDifferent() {
	if (!trialRunning) {
		return;
	}
	$('#t' + currentTrial + '_response').val("diff");
	NextTrial();
}

function NextTrial() {
	trialRunning = false;

	var currentTime = new Date().getTime();
	var RT = currentTime - startTrialTime;
	$('#t' + currentTrial + '_rt').val(RT);

	$('#t' + currentTrial + '_d2').hide();
	$('#startTrial').show();
	currentTrial++;

        if(currentTrial==4){
		$('#submitButton').show();
        }
}

function StartTrial() {
	if (trialRunning) {
		return;
	}
	trialRunning = true;

	$('#startTrial').hide();
	$('#t' + currentTrial + '_d1').show();

	setTimeout(function() {
		$('#t' + currentTrial + '_d1').hide();
	}, 1000);

	setTimeout(function() {
		$('#t' + currentTrial + '_d2').show();
		startTrialTime = new Date().getTime();
	}, 1500);
}