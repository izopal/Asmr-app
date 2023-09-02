const textElement = document.querySelector('*');                        // Отримуємо елемент, текст якого потрібно змінювати

// Функція для оновлення розміру тексту
function updateTextSize() {
  // Отримуємо розміри вікна браузера
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  // Встановлюємо розмір тексту відповідно до розмірів вікна
  const textSize = Math.min(windowWidth, windowHeight) * 0.015;         // Наприклад, 1.5% від мінімального розміру
  textElement.style.fontSize = textSize + 'px';                         // Застосовуємо розмір тексту до елементу
}

// Викликаємо функцію при завантаженні та зміні розмірів вікна
window.addEventListener('load', updateTextSize);
window.addEventListener('resize', updateTextSize);
