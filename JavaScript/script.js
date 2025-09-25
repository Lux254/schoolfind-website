const toggleBtn = document.querySelector('.nav-toggle');
const overlay = document.querySelector('.nav-overlay');

toggleBtn.addEventListener('click', () => {
    overlay.classList.toggle('active');

    // Change icon ☰ <-> ✖
    if (overlay.classList.contains('active')) {
        toggleBtn.textContent = '✖';
    } else {
        toggleBtn.textContent = '☰';
    }
});

