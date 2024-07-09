function calculatePoints() {
    const redComplete = parseInt(document.getElementById('redComplete').value) * 11 || 0;
    const redPartial = parseInt(document.getElementById('redPartial').value) * 4 || 0;
    const yellowComplete = parseInt(document.getElementById('yellowComplete').value) * 11 || 0;
    const yellowPartial = parseInt(document.getElementById('yellowPartial').value) * 4 || 0;
    const waterGreen = parseInt(document.getElementById('waterGreen').value) * 10 || 0;
    const earthBlock = parseInt(document.getElementById('earthBlock').value) * 3 || 0;
    const chicken = parseInt(document.getElementById('chicken').value) * 3 || 0;
    const fence = parseInt(document.getElementById('fence').value) * 3 || 0;

    const totalPoints = redComplete + redPartial + yellowComplete + yellowPartial + waterGreen + earthBlock + chicken + fence;

    document.getElementById("totalPoints").innerHTML = totalPoints + " ";
    displayRemark(totalPoints); // Ensure remark is updated
}

function updateRedPartialOptions() {
    let redComplete = parseInt(document.getElementById("redComplete").value);
    let redPartial = document.getElementById("redPartial");
    let selectedValue = redPartial.value;

    if (redComplete === 0) {
        redPartial.innerHTML = "<option value='0'>0</option><option value='1'>1</option><option value='2'>2</option><option value='3'>3</option><option value='4'>4</option>";
    } else if (redComplete === 1) {
        redPartial.innerHTML = "<option value='0'>0</option><option value='1'>1</option><option value='2'>2</option><option value='3'>3</option>";
    } else if (redComplete === 2) {
        redPartial.innerHTML = "<option value='0'>0</option><option value='1'>1</option><option value='2'>2</option>";
    } else if (redComplete === 3) {
        redPartial.innerHTML = "<option value='0'>0</option><option value='1'>1</option>";
    } else if (redComplete === 4) {
        redPartial.innerHTML = "<option value='0'>0</option>";
    }
    
    if (Array.from(redPartial.options).some(option => option.value === selectedValue)) {
        redPartial.value = selectedValue;
    }
}

function updateRedcompleteOptions() {
    let redPartial = parseInt(document.getElementById("redPartial").value);
    let redComplete = document.getElementById("redComplete");
    let selectedValue = redComplete.value;

    if (redPartial === 0) {
        redComplete.innerHTML = "<option value='0'>0</option><option value='1'>1</option><option value='2'>2</option><option value='3'>3</option><option value='4'>4</option>";
    } else if (redPartial === 1) {
        redComplete.innerHTML = "<option value='0'>0</option><option value='1'>1</option><option value='2'>2</option><option value='3'>3</option>";
    } else if (redPartial === 2) {
        redComplete.innerHTML = "<option value='0'>0</option><option value='1'>1</option><option value='2'>2</option>";
    } else if (redPartial === 3) {
        redComplete.innerHTML = "<option value='0'>0</option><option value='1'>1</option>";
    } else if (redPartial === 4) {
        redComplete.innerHTML = "<option value='0'>0</option>";
    }
    
    if (Array.from(redComplete.options).some(option => option.value === selectedValue)) {
        redComplete.value = selectedValue;
    }
}

function updateYellowPartialOptions() {
    let yellowComplete = parseInt(document.getElementById("yellowComplete").value);
    let yellowPartial = document.getElementById("yellowPartial");
    let selectedValue = yellowPartial.value;

    if (yellowComplete === 0) {
        yellowPartial.innerHTML = "<option value='0'>0</option><option value='1'>1</option><option value='2'>2</option><option value='3'>3</option><option value='4'>4</option>";
    } else if (yellowComplete === 1) {
        yellowPartial.innerHTML = "<option value='0'>0</option><option value='1'>1</option><option value='2'>2</option><option value='3'>3</option>";
    } else if (yellowComplete === 2) {
        yellowPartial.innerHTML = "<option value='0'>0</option><option value='1'>1</option><option value='2'>2</option>";
    } else if (yellowComplete === 3) {
        yellowPartial.innerHTML = "<option value='0'>0</option><option value='1'>1</option>";
    } else if (yellowComplete === 4) {
        yellowPartial.innerHTML = "<option value='0'>0</option>";
    }
    
    if (Array.from(yellowPartial.options).some(option => option.value === selectedValue)) {
        yellowPartial.value = selectedValue;
    }
}

function updateYellowcompleteOptions() {
    let yellowPartial = parseInt(document.getElementById("yellowPartial").value);
    let yellowComplete = document.getElementById("yellowComplete");
    let selectedValue = yellowPartial.value;

    if (yellowPartial === 0) {
        yellowComplete.innerHTML = "<option value='0'>0</option><option value='1'>1</option><option value='2'>2</option><option value='3'>3</option><option value='4'>4</option>";
    } else if (yellowPartial === 1) {
        yellowComplete.innerHTML = "<option value='0'>0</option><option value='1'>1</option><option value='2'>2</option><option value='3'>3</option>";
    } else if (yellowPartial === 2) {
        yellowComplete.innerHTML = "<option value='0'>0</option><option value='1'>1</option><option value='2'>2</option>";
    } else if (yellowPartial === 3) {
        yellowComplete.innerHTML = "<option value='0'>0</option><option value='1'>1</option>";
    } else if (yellowPartial === 4) {
        yellowComplete.innerHTML = "<option value='0'>0</option>";
    }
    
    if (Array.from(yellowComplete.options).some(option => option.value === selectedValue)) {
        yellowPartial.value = selectedValue;
    }
}

document.getElementById("redComplete").addEventListener("change", updateRedPartialOptions);
document.getElementById("redPartial").addEventListener("change", updateRedcompleteOptions);
document.getElementById("yellowComplete").addEventListener("change", updateYellowPartialOptions);
document.getElementById("yellowPartial").addEventListener("change", updateYellowcompleteOptions);
document.getElementById('calculatorForm').addEventListener('change', calculatePoints);

let timer;
let time = 0;

function startChrono() {
    stopChrono(); // Stop any existing timer
    timer = setInterval(updateChrono, 1000);
}

function stopChrono() {
    clearInterval(timer);
}

function resetChrono() {
    stopChrono();
    time = 0;
    document.getElementById('time').textContent = formatTime(time);
    document.getElementById('pointsOverTime').textContent = '0 points in 00:00';
}

function updateChrono() {
    time++;
    document.getElementById('time').textContent = formatTime(time);
    updatePointsOverTime(); // Update points over time display
    if (time >= 90) {
        stopChrono();
        document.getElementById('alarmSound').play(); // Play the alarm sound
    }
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}



function updatePointsOverTime() {
    const points = document.getElementById('totalPoints').textContent;
    const timeText = document.getElementById('time').textContent;
    document.getElementById('pointsOverTime').textContent = `${points} points in ${timeText}`;
}

function displayRemark(totalPoints) {
    const remarkText = document.getElementById('remarkText');
    if (totalPoints >= 0 && totalPoints <= 35) {
        remarkText.textContent = "Your result is bad, you must practice";
        remarkText.style.color = "red";
    } else if (totalPoints > 35 && totalPoints <= 70) {
        remarkText.textContent = "You're improving, keep working hard!";
        remarkText.style.color = "orange";
    } else if (totalPoints > 70 && totalPoints <= 105) {
        remarkText.textContent = "Great job! Keep it up!";
        remarkText.style.color = "blue";
    } else if (totalPoints > 105) {
        remarkText.textContent = "Well done! You’re doing awesome!";
        remarkText.style.color = "green";
    }
}

function resetAll() {
    document.getElementById('calculatorForm').reset();
    document.getElementById('totalPoints').textContent = '0';
    document.getElementById('time').textContent = '00:00';
    document.getElementById('pointsOverTime').textContent = '0 points in 00:00';
    document.getElementById('remarkText').textContent = '';
    resetChrono(); // Reset the chronometer
}
