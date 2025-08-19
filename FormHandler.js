export default class FormHandler {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }

    // Validate email format
    validateEmail() {
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(this.email);
    }

    // Validate name (must not start with number or special char)
    validateName() {
        let nameRegex = /^[A-Za-z][A-Za-z\s]*$/;
        return nameRegex.test(this.name);
    }

    // Validate form 
    validateForm() {
        if (!this.name || !this.email || !this.password) {
            return { valid: false, message: "All fields are required." };
        } else if (!this.validateName()) {
            return { valid: false, message: "Name must start with a letter." }

        } else if (!this.validateEmail()) {
            return { return: false, message: "invalid email format." };

        } else {
            return { valid: true };
        }

    }

    //saving data to the local storage 
    saveToLocalStorage() {
        const formDData = {
            name: this.name,
            email: this.email,
            password: this.password
        }
        //converting js object to a json file and saving it  on local storage
        localStorage.setItem("formData", JSON.stringify(formDData));


    }

    //Getting stored data 
    static getFormData() {
        let data = localStorage.getItem("formData");

        if (data) {

            console.log("Data retrived ", JSON.parse(data));
            return JSON.parse(data);

        } else {
            console.log("No data found")
            return null;
        }
    }




}
