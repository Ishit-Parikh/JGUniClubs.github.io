document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("sponsorshipForm");
    const successMessage = document.getElementById("successMessage");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the form from reloading the page

        // Add a smooth fade-in effect for the success message
        successMessage.classList.remove("hidden");
        successMessage.style.opacity = 0;
        let opacity = 0;
        const fadeIn = setInterval(function () {
            opacity += 0.1;
            successMessage.style.opacity = opacity;
            if (opacity >= 1) {
                clearInterval(fadeIn);
            }
        }, 50);

        // Reset the form fields after submission
        form.reset();
    });
});