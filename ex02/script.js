// Selecting elements using strict authorized methods
const mainTitle = document.getElementById('title');
const descriptionPara = document.querySelector('#description');
const updateButton = document.getElementById('update-btn');
const styleButton = document.querySelector('#style-btn');

// Safe text insertion using .textContent (avoiding innerHTML)
updateButton.addEventListener('click', () => {
    mainTitle.textContent = 'DOM Updated Successfully!';
    descriptionPara.textContent = 'The title and paragraph text have been safely modified in real-time.';
});

// Manipulating class list and direct style properties
styleButton.addEventListener('click', () => {
    // Toggling CSS class using classList
    const cardElement = document.querySelector('.card');
    cardElement.classList.toggle('active');

    // Direct inline style property alteration
    if (cardElement.classList.contains('active')) {
        mainTitle.style.color = '#2563eb';
    } else {
        mainTitle.style.color = '#000000';
    }
});