const playButton = document.getElementById('play-btn');
const audio = document.getElementById('track-audio');

playButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playButton.classList.add('playing');
        playButton.innerHTML = '&#10074;&#10074;'; // Пауза
    } else {
        audio.pause();
        playButton.classList.remove('playing');
        playButton.innerHTML = '&#9654;'; // Play
    }
});

// Сброс кнопки при окончании трека
audio.addEventListener('ended', () => {
    playButton.classList.remove('playing');
    playButton.innerHTML = '&#9654;';
});

// Инициализация Swiper.js
const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
