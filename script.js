// --- Pricing Page Toggle ---
const pricingToggleButtons = document.querySelectorAll('.toggle-btn');

pricingToggleButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        pricingToggleButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to the clicked button
        button.classList.add('active');

        // You can add logic here to change prices based on data-period attribute
        const period = button.dataset.period;
        console.log("Selected period:", period);
    });
});