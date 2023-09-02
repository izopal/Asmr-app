const message = document.getElementById('message');
const iconClose = document.querySelector('.icon.close .ionicon');

// очищаємо поле "message" і показуємо кнопку iconClose при натисканні на поле message
message.addEventListener('click', () => {
    message.value = '';
    iconClose.style.display = 'block';
});
// очищаємо поле "message" і приховуємо кнопку iconClose при натисканні на іконку закриття
iconClose.addEventListener('click', () => {
    message.value = '';
    iconClose.style.display = 'none';
});