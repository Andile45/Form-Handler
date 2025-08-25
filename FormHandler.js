class FormHandler {
  constructor(formId, alertContainerId) {
    this.form = document.getElementById(formId);
    this.alertContainer = document.getElementById(alertContainerId);
  }

  // ✅ Validate Email format
  validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  // ✅ Validate Name (no numbers/special chars at start)
  validateName(name) {
    const regex = /^[A-Za-z][A-Za-z\s]*$/;
    return regex.test(name);
  }

  // ✅ Validate Form
  validateForm(data) {
    let errors = [];

    if (!this.validateName(data.fullName)) {
      errors.push("Full Name must not start with a number or special character.");
    }
    if (!this.validateEmail(data.email)) {
      errors.push("Invalid email format.");
    }
    if (!data.password) {
      errors.push("Password is required.");
    }

    return errors;
  }

  // ✅ Save to LocalStorage
  saveToLocalStorage(data) {
    localStorage.setItem("formData", JSON.stringify(data));
  }

  // ✅ Get Form Data
  getFormData() {
    const stored = localStorage.getItem("formData");
    return stored ? JSON.parse(stored) : null;
  }

  // ✅ Show Bootstrap Alerts
  showAlert(message, type = "danger") {
    this.alertContainer.innerHTML = `
      <div class="alert alert-${type} alert-dismissible fade show" role="alert">
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
      </div>
    `;
  }
}

// Export class (optional for module systems)
window.FormHandler = FormHandler;
