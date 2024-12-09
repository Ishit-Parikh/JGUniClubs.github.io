function validateForm() {
    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const address = document.getElementById("address").value.trim();
    const city = document.getElementById("city").value.trim();
    const state = document.getElementById("state").value.trim();
    const zipCode = document.getElementById("zipCode").value.trim();
    const cardNumber = document.getElementById("cardNumber").value.trim();
    const expMonth = document.getElementById("expMonth").value.trim();
    const expYear = document.getElementById("expYear").value.trim();
    const cvv = document.getElementById("cvv").value.trim();

    if (
        !fullName ||
        !email ||
        !address ||
        !city ||
        !state ||
        !zipCode ||
        !cardNumber ||
        !expMonth ||
        !expYear ||
        !cvv
    ) {
        alert("Please fill in all the required fields.");
        return;
    }

    setTimeout(() => {
        window.location.href = "../HTML_Files/successful_payment.html";
    }, 1000);
}

// QR Code Modal Logic
const gPayImage = document.getElementById("gPayImage");
const qrModal = document.getElementById("qrModal");
const closeBtn = document.querySelector(".close");

// Show the modal when the G-Pay image is clicked
gPayImage.addEventListener("click", () => {
    qrModal.style.display = "flex"; // Show modal
    qrModal.style.opacity = "1"; // Ensure full opacity
});

// Close the modal when the 'X' button is clicked
closeBtn.addEventListener("click", () => {
    qrModal.style.display = "none";
});

// Close the modal when clicking outside of it
window.addEventListener("click", (event) => {
    if (event.target === qrModal) {
        qrModal.style.display = "none";
    }
});