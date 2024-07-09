function calculatePoints() {
    const redComplete = parseInt(document.getElementById("redComplete").value) * 8;
    const redPartial = parseInt(document.getElementById("redPartial").value) * 4;
    const redCompletee = parseInt(document.getElementById("redCompletee").value) * 8;
    const redPartiale = parseInt(document.getElementById("redPartiale").value) * 4;
    const additionalPoints1 = parseInt(document.getElementById('additionalPoints1').value);
    const eBike1 = parseInt(document.getElementById("eBike1").value);
    const eBike2 = parseInt(document.getElementById("eBike2").value);
    const cableTouching = parseInt(document.getElementById("cableTouching").value);
    const cableComplete = parseInt(document.getElementById("cableComplete").value);
    const apartmentHouse1 = parseInt(document.getElementById("apartmentHouse1").value);
    const apartmentHouse2 = parseInt(document.getElementById("apartmentHouse2").value);
    const fence1 = parseInt(document.getElementById("fence1").value);
    const fence2 = parseInt(document.getElementById("fence2").value);
    const fence3 = parseInt(document.getElementById("fence3").value);

    const totalPoints = redComplete + redPartial + redCompletee + redPartiale + additionalPoints1 + eBike1 + eBike2 + cableTouching + cableComplete + apartmentHouse1 + apartmentHouse2 + fence1 + fence2 + fence3;

    document.getElementById("totalPoints").innerHTML = totalPoints + " ";
    displayRemark(totalPoints);
}

function resetForm() {
    document.getElementById("redComplete").value = "0";
    document.getElementById("redPartial").value = "0";
    document.getElementById("redCompletee").value = "0";
    document.getElementById("redPartiale").value = "0";
    document.getElementById('additionalPoints1').value = "0";
    document.getElementById("eBike1").value = "0";
    document.getElementById("eBike2").value = "0";
    document.getElementById("cableTouching").value = "0";
    document.getElementById("cableComplete").value = "0";
    document.getElementById("apartmentHouse1").value = "0";
    document.getElementById("apartmentHouse2").value = "0";
    document.getElementById("fence1").value = "0";
    document.getElementById("fence2").value = "0";
    document.getElementById("fence3").value = "0";
    document.getElementById("totalPoints").innerHTML = "0 / 120";
    updateRedPartialOptions();
}

document.getElementById("redComplete").addEventListener("change", updateRedPartialOptions);

function updateRedPartialOptions() {
    let redComplete = parseInt(document.getElementById("redComplete").value);
    let redPartial = document.getElementById("redPartial");

    if (redComplete === 0) {
        redPartial.innerHTML = "<option value='0'>0</option><option value='8'>1</option><option value='0'>2</option><option value='24'>3</option><option value='32'>4</option><option value='32'>5</option><option value='32'>6</option>";
    } 
    if (redComplete === 1) {
        redPartial.innerHTML = "<option value='0'>0</option><option value='8'>1</option><option value='16'>2</option><option value='24'>3</option><option value='32'>4</option><option value='32'>5</option>";
    } 
    if (redComplete === 2) {
        redPartial.innerHTML = "<option value='0'>0</option><option value='8'>1</option><option value='16'>2</option><option value='24'>3</option><option value='32'>4</option>";
    } 
    if (redComplete === 3) {
        redPartial.innerHTML = "<option value='0'>0</option><option value='8'>1</option><option value='16'>2</option><option value='24'>3</option>";
    }
    if (redComplete === 4) {
        redPartial.innerHTML = "<option value='0'>0</option><option value='8'>1</option><option value='16'>2</option>";
    } 
    if (redComplete === 5) {
        redPartial.innerHTML = "<option value='0'>0</option><option value='8'>1</option>";
    } 
    if (redComplete === 6) {
        redPartial.innerHTML = "<option value='0'>0</option>";
    } 
}

document.getElementById("redCompletee").addEventListener("change", updateRedPartialOptionse);

function updateRedPartialOptionse() {
    let redCompletee = parseInt(document.getElementById("redCompletee").value);
    let redPartiale = document.getElementById("redPartiale");

    if (redCompletee === 0) {
        redPartiale.innerHTML = "<option value='0'>0</option><option value='8'>1</option><option value='16'>2</option><option value='24'>3</option>";
    } 
    if (redCompletee === 1) {
        redPartiale.innerHTML = "<option value='0'>0</option><option value='8'>1</option><option value='16'>2</option>";
    } 
    if (redCompletee === 2) {
        redPartiale.innerHTML = "<option value='0'>0</option><option value='8'>1</option>";
    } 
    if (redCompletee === 3) {
        redPartiale.innerHTML = "<option value='0'>0</option>";
    }
}

document.getElementById("cableComplete").addEventListener("change", updatecableCompleteOptions);

function updatecableCompleteOptions() {
    let cableTouching = document.getElementById("cableTouching");
    let cableCompleteValue = parseInt(document.getElementById("cableComplete").value);

    if (cableCompleteValue === 0) {
        cableTouching.innerHTML = "<option value='0'>no</option><option value='5'>yes</option>";
    } else if (cableCompleteValue === 11) {
        cableTouching.innerHTML = "<option value='0'>no</option>";
    }
}

document.getElementById("cableTouching").addEventListener("change", updatecableTouchingOptions);

function updatecableTouchingOptions() {
    let cableComplete = document.getElementById("cableComplete");
    let cableTouchingValue = parseInt(document.getElementById("cableTouching").value);

    if (cableTouchingValue === 0) {
        cableComplete.innerHTML = "<option value='0'>no</option><option value='11'>yes</option>";
    } else if (cableTouchingValue === 5) {
        cableComplete.innerHTML = "<option value='0'>no</option>";
    }
}

  
  

document.getElementById("redComplete").addEventListener("change", updateRedPartialOptions);
document.getElementById("redCompletee").addEventListener("change", updateRedPartialOptionse);
document.getElementById("cableComplete").addEventListener("change", updatecableCompleteOptions);
document.getElementById("cableTouching").addEventListener("change", updatecableTouchingOptions);
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
    if (totalPoints >= 0 && totalPoints <= 30) {
        remarkText.textContent = "Your result is bad, you must practice";
        remarkText.style.color = "red";
    } else if (totalPoints > 30 && totalPoints <= 60) {
        remarkText.textContent = "You're improving, keep working hard!";
        remarkText.style.color = "orange";
    } else if (totalPoints > 60 && totalPoints <= 90) {
        remarkText.textContent = "Great job! Keep it up!";
        remarkText.style.color = "blue";
    } else if (totalPoints > 90 && totalPoints <= 120) {
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