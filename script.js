// Set current year
document.getElementById('current-year').textContent = new Date().getFullYear();

// Set return date (3 days from now)
const returnDate = new Date();
returnDate.setDate(returnDate.getDate() + 7); // أسبوع واحد
//returnDate.setDate(returnDate.getDate() + 3);
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
document.getElementById('return-date').textContent = returnDate.toLocaleDateString('ar-SA', options);

// Countdown Timer
function updateCountdown() {
    const now = new Date().getTime();
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 7); // أسبوع واحد
    const timeLeft = targetDate - now;
    
    if (timeLeft < 0) {
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
        return;
    }
    
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    
    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

// Animated Progress Bar
function animateProgressBar() {
    const progressFill = document.getElementById('progress-fill');
    const progressPercentage = document.getElementById('progress-percentage');
    let width = 65;
    let direction = 1;
    
    setInterval(() => {
        if (width >= 75) direction = -1;
        if (width <= 65) direction = 1;
        
        width += direction * 0.1;
        progressFill.style.width = width + '%';
        progressPercentage.textContent = Math.round(width) + '%';
    }, 100);
}

// Random gear speed variations
function randomizeGearSpeeds() {
    const gears = document.querySelectorAll('.gear');
    gears.forEach((gear, index) => {
        const speed = 5 + Math.random() * 10;
        gear.style.animationDuration = `${speed}s`;
    });
}

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
    updateCountdown();
    setInterval(updateCountdown, 1000);
    animateProgressBar();
    randomizeGearSpeeds();
    
    // Add click effect to social icons
    document.querySelectorAll('.social-icon').forEach(icon => {
        icon.addEventListener('click', (e) => {
            e.preventDefault();
            icon.style.transform = 'scale(0.9)';
            setTimeout(() => {
                icon.style.transform = '';
                // In real implementation, this would navigate to the social media page
                alert('في التنفيذ الفعلي، سيتم نقل المستخدم إلى صفحة السوشيال ميديا');
            }, 300);
        });
    });
});
