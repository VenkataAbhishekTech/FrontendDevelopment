function Person(name) {
    this.name = name;
}

Person.prototype.showName = function () {
    return `Name: ${this.name}`;
};

function Faculty(name, department) {
    Person.call(this, name);
    this.department = department;
}

Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;

Faculty.prototype.showDepartment = function () {
    return `Department: ${this.department}`;
};

function Professor(name, department, specialization) {
    Faculty.call(this, name, department);
    this.specialization = specialization;
}

Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;

Professor.prototype.showSpecialization = function () {
    return `Specialization: ${this.specialization}`;
};

document.getElementById("checkBtn").addEventListener("click", function () {
    const prof = new Professor("Dr. Abhishek", "CSE", "Machine Learning");

    document.getElementById("output").innerHTML = `
        <p>${prof.showName()}</p>
        <p>${prof.showDepartment()}</p>
        <p>${prof.showSpecialization()}</p>

        <h3>Prototype Chain Access:</h3>
        <ul>
            <li>Professor → has showSpecialization()</li>
            <li>Faculty → has showDepartment()</li>
            <li>Person → has showName()</li>
        </ul>

        <p><strong>Professor object inherits all 3 levels successfully.</strong></p>
    `;
});
