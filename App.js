import FormHandler from "./FormHandler.js";

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("userForm");
    const alertBox = document.getElementById("alertBox");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        // Get input values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        // Create instance
        const formHandler = new FormHandler(name, email, password);

        // Validate
        const validation = formHandler.validateForm();

        if (!validation.valid) {
            showAlert(validation.message, "danger");
            return;
        }

        // Save to localStorage
        formHandler.saveToLocalStorage();
        showAlert("Form submitted successfully!", "success");

        // Clear inputs
        form.reset();

        // Retrieve and log data
        FormHandler.getFormData();
    });

    // Helper: Show Bootstrap alert
    function showAlert(message, type) {
        alertBox.innerHTML = `
            <div class="alert alert-${type} alert-dismissible fade show" role="alert">
                ${message}
                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
            </div>
        `;
    }
});
