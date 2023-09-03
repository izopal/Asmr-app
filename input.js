const iconKey = document.querySelector('.icon.key');
const keyInput = document.getElementById('key');
const iconTrash = document.querySelector('.icon.trash');
const maxLength = keyInput.getAttribute('maxlength');

// функція для обмеження кількості символів у полі "input"
function limitInputLength(maxLength) {
    const currentText = keyInput.value;
    if (currentText.length > maxLength) {
        keyInput.value = currentText.slice(0, maxLength);                          // Обрізаємо текст, якщо він занадто довгий
    }
}
// функція умови появи іконки закриття (якщо рядок заповнений появляється)
function toggleClearIcon() {
    iconTrash.style.display = keyInput.value.trim() !== '' ? 'block' : 'none';
}
// функція очищення поля "input" та зникнення іконки закриття
function clearInput() {
    keyInput.value = '';
    iconTrash.style.display = 'none';
}
// функцію для генерування випадкового ключа
function generateRandomKey(length) {
    const alfaBeta = "АБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯабвгґдеєжзиіїйклмнопрстуфхцчшщьюя1234567890-+*/%=_<>[]{}()|,.;:'`~Ёё!?@#$&%^QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
    let randomKey = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * alfaBeta.length);
        randomKey += alfaBeta.charAt(randomIndex);
    }
    return randomKey;
}
// функція заовнення поля "input" згенерованим Арі ключем та запуск іконки закриття
function setRandomKey() {
    const randomKey = generateRandomKey(maxLength);
    keyInput.value = randomKey;
    toggleClearIcon();
}



// вставляємо згенерований Арі ключ для введення "input" при натисканні на іконку закриття
iconKey.addEventListener('click', () => {
    setRandomKey();
});
// обмежуємо кількість символів у полі введення "input" та запускаємо іконку закриття
keyInput.addEventListener("input", () => {
    limitInputLength(maxLength);
    toggleClearIcon();
});
// очищаємо поле для введення "input" при натисканні на іконку закриття
iconTrash.addEventListener('click', () => {
    clearInput();
});

