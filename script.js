document.addEventListener('DOMContentLoaded', function() {
    // Add onchange event listeners to each select element
    const selects = document.querySelectorAll('select');
    selects.forEach(select => {
        select.addEventListener('change', calculatePoints);
    });

    // Initial calculation
    calculatePoints();
});

function calculatePoints() {
    const redComplete = parseInt(document.getElementById('redComplete').value) * 11;
    const redPartial = parseInt(document.getElementById('redPartial').value) * 4;
    const yellowComplete = parseInt(document.getElementById('yellowComplete').value) * 11;
    const yellowPartial = parseInt(document.getElementById('yellowPartial').value) * 4;
    const waterGreen = parseInt(document.getElementById('waterGreen').value) * 10;
    const earthBlock = parseInt(document.getElementById('earthBlock').value) * 3;
    const chicken = parseInt(document.getElementById('chicken').value ) * 3;
    const fence = parseInt(document.getElementById('fence').value) * 3;

    const totalPoints = redComplete + redPartial + yellowComplete + yellowPartial + waterGreen + earthBlock + chicken + fence;

    // Update the total points displayed
    document.getElementById("totalPoints").innerHTML = totalPoints + " / 142"

    // Update the remark based on total points
    displayRemark(totalPoints);
}
function resetForm() {
    document.getElementById("redComplete").value = "0";
    document.getElementById("redPartial").value = "0";
    document.getElementById("yellowComplete").value = "0";
    document.getElementById("yellowPartial").value = "0";
    document.getElementById("waterGreen").value = "0";
    document.getElementById("earthBlock").value = "0";
    document.getElementById("chicken").value = "0";
    document.getElementById("fence").value = "0";
    document.getElementById("totalPoints").innerHTML = "0 / 142";
    updateRedPartialOptions();
  }
  
  document.getElementById("redComplete").addEventListener("change", updateRedPartialOptions);
  
  function updateRedPartialOptions() {
    let redComplete = parseInt(document.getElementById("redComplete").value);
    let redPartial = document.getElementById("redPartial");
  
    if (redComplete === 0) {
      redPartial.innerHTML = "<option value='0'>0</option><option value='1'>1</option><option value='2'>2</option><option value='3'>3</option><option value='4'>4</option>";
  } 
    if (redComplete === 1) {
      redPartial.innerHTML = "<option value='0'>0</option><option value='1'>1</option><option value='2'>2</option><option value='3'>3</option>";
  } 
  if (redComplete === 2) {
    redPartial.innerHTML = "<option value='0'>0</option><option value='1'>1</option><option value='2'>2</option>";
  } 
    if (redComplete === 3) {
        redPartial.innerHTML = "<option value='0'>0</option><option value='1'>1</option>";
    }
    if (redComplete === 4) {
      redPartial.innerHTML = "<option value='0'>0</option>";
  } 
  
  }
  
  document.getElementById("yellowComplete").addEventListener("change", updateyellowPartialOptionse);
  
  function updateyellowPartialOptionse() {
    let yellowComplete = parseInt(document.getElementById("yellowComplete").value);
    let yellowPartial  = document.getElementById("yellowPartial");
  
    if (yellowComplete === 0) {
      yellowPartial.innerHTML = "<option value='0'>0</option><option value='1'>1</option><option value='2'>2</option><option value='3'>3</option><option value='4'>4</option>";
  } 
    if (yellowComplete === 1) {
      yellowPartial.innerHTML = "<option value='0'>0</option><option value='1'>1</option><option value='2'>2</option><option value='3'>3</option>";
  } 
    if (yellowComplete === 2) {
    yellowPartial.innerHTML = "<option value='0'>0</option><option value='1'>1</option><option value='2'>2</option>";
  } 
    if (yellowComplete === 3) {
      yellowPartial.innerHTML = "<option value='0'>0</option><option value='1'>1</option>";
    }
    if (yellowComplete === 4) {
      yellowPartial.innerHTML = "<option value='0'>0</option>";
  } 
  
  }
function displayRemark(totalPoints) {
    const remarkText = document.getElementById('remarkText');
    if (totalPoints >= 0 && totalPoints <= 35) {
        remarkText.textContent = 'Your result is bad, you must practice';
        remarkText.style.color = 'red';
    } else if (totalPoints > 35 && totalPoints <= 70) {
        remarkText.textContent = "You're improving, keep working hard!";
        remarkText.style.color = 'orange';
    } else if (totalPoints > 70 && totalPoints <= 105) {
        remarkText.textContent = 'Great job! Keep it up!';
        remarkText.style.color = 'blue';
    } else if (totalPoints > 105 && totalPoints <= 140) {
        remarkText.textContent = 'Well done! You’re doing awesome!';
        remarkText.style.color = 'green';
    }
}

function random() {
    document.getElementById('redComplete').value = Math.floor(Math.random() * 5);
    document.getElementById('redPartial').value = Math.floor(Math.random() * 5);
    document.getElementById('yellowComplete').value = Math.floor(Math.random() * 5);
    document.getElementById('yellowPartial').value = Math.floor(Math.random() * 5);
    document.getElementById('waterGreen').value = Math.floor(Math.random() * 4);
    document.getElementById('earthBlock').value = Math.floor(Math.random() * 4);
    document.getElementById('chicken').value = Math.random() < 0.5 ? 'no' : 'yes';
    document.getElementById('fence').value = Math.floor(Math.random() * 5);

    calculatePoints();
}

function screenshot() {
    const mapElement = document.getElementById('map_elementary');
    html2image.toPng(mapElement)
        .then(function (dataUrl) {
            var link = document.createElement('a');
            link.download = 'map_elementary.png';
            link.href = dataUrl;
            link.click();
        });
}

let startTime;
let timerInterval;
let timeSpent = 0;

function startChrono() {
    startTime = Date.now() - timeSpent;
    timerInterval = setInterval(function() {
        timeSpent = Date.now() - startTime;
        updateChrono();
    }, 1000);
}

function stopChrono() {
    clearInterval(timerInterval);
}

function resetChrono() {
    clearInterval(timerInterval);
    timeSpent = 0;
    updateChrono();
}

function updateChrono() {
    const minutes = Math.floor(timeSpent / 60000);
    const seconds = ((timeSpent % 60000) / 1000).toFixed(0);
    document.getElementById('time').textContent = (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;

    const pointsText = document.getElementById('pointsOverTime');
    pointsText.textContent = `${document.getElementById('totalPoints').textContent} points in ${document.getElementById('time').textContent}`;
}
