document.querySelectorAll('.menu-btn').forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');

        document.querySelectorAll('.menu-item').forEach(item => {
            item.style.display = item.getAttribute('data-category') === category ? 'block' : 'none';
        });
    });
});

// Initially display all items or a default category
document.querySelectorAll('.menu-item').forEach(item => {
    item.style.display = 'block';  // Display all items by default
});

// JavaScript to handle button clicks and default active state
document.querySelectorAll('.menu-btn').forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');

        // Remove active class from all buttons
        document.querySelectorAll('.menu-btn').forEach(btn => btn.classList.remove('active'));

        // Add active class to the clicked button
        button.classList.add('active');

        // Show items based on the clicked category
        document.querySelectorAll('.menu-item').forEach(item => {
            item.style.display = item.getAttribute('data-category') === category ? 'block' : 'none';
        });
    });
});

// Set the default button to active and show burger items on page load
document.addEventListener('DOMContentLoaded', () => {
    const defaultButton = document.querySelector('.menu-btn[data-category="burgers"]');
    if (defaultButton) {
        defaultButton.classList.add('active');
        document.querySelectorAll('.menu-item').forEach(item => {
            item.style.display = item.getAttribute('data-category') === 'burgers' ? 'block' : 'none';
        });
    }
});

