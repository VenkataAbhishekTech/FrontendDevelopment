"use strict";

class FormBuilder {
    constructor(fields) {
        this.fields = fields;
    }

    renderForm(containerId) {
        const container = document.getElementById(containerId);
        let html = "";

        this.fields.forEach(field => {
            html += `
                <label>${field.label}</label>
                <input type="${field.type}" id="${field.label.toLowerCase()}" />
            `;
        });

        container.innerHTML = html;
    }

    getFormData() {
        const data = {};

        this.fields.forEach(field => {
            const key = field.label.toLowerCase();
            const value = document.getElementById(key).value;
            data[key] = value;
        });

        return data;
    }
}

const fields = [
    { type: "text", label: "Username" },
    { type: "email", label: "Email" },
    { type: "password", label: "Password" }
];

const form = new FormBuilder(fields);
form.renderForm("formContainer");

document.getElementById("submitBtn").addEventListener("click", () => {
    const result = form.getFormData();
    document.getElementById("output").textContent = JSON.stringify(result, null, 2);
});
