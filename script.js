// script.js

function updateDigitalClock() {
    const now = new Date();
    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');
    
    document.getElementById('time').textContent = `${hours}:${minutes}:${seconds}`;
}

// Update clock immediately and then every second
updateDigitalClock();
setInterval(updateDigitalClock, 1000);
