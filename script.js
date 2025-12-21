// Функція для обробки кліка на копіюванні
function copyToClipboard(elementId, btnElement) {
    const element = document.getElementById(elementId);
    if (!element) return;

    // 1. Беремо посилання або текст
    let content = element.getAttribute('href') || element.innerText;

    // 2. Очищуємо від префіксів mailto: та tel:
    // Це зробить так, що копіюватиметься тільки чистий номер або пошта
    content = content.replace('mailto:', '').replace('tel:', '');

    navigator.clipboard.writeText(content).then(() => {
        const icon = btnElement.querySelector('i');
        const originalClass = icon.className;

        icon.className = 'fa-solid fa-check';
        btnElement.classList.add('success');

        setTimeout(() => {
            icon.className = originalClass;
            btnElement.classList.remove('success');
        }, 2000);
    });
}