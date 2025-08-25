// Create instance of FormHandler
const handler = new FormHandler("userForm", "alert-container");

// Handle Form Submit
handler.form.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = {
    fullName: document.getElementById("fullName").value.trim(),
    email: document.getElementById("email").value.trim(),
    password: document.getElementById("password").value.trim()
  };

  const errors = handler.validateForm(data);

  if (errors.length > 0) {
    handler.showAlert(errors.join("<br>"), "danger");
  } else {
    handler.saveToLocalStorage(data);
    handler.showAlert("✅ Data saved successfully!", "success");
    console.log("Saved Data:", handler.getFormData());
    handler.form.reset();
  }
});

// ✅ Handle "View My Information" button
document.getElementById("viewInfoBtn").addEventListener("click", () => {
  const userData = handler.getFormData();
  const outputDiv = document.getElementById("userOutput");

  if (userData) {
    outputDiv.innerHTML = `
      <h4>Saved Information</h4>
      <p><strong>Full Name:</strong> ${userData.fullName}</p>
      <p><strong>Email:</strong> ${userData.email}</p>
     
    `;
  } else {
    outputDiv.innerHTML = `<p class="text-danger">⚠️ No data found. Please register first.</p>`;
  }
});
