function Person(name) {
    this.name = name;
}

Person.prototype.getName = function () {
    return `Name: ${this.name}`;
};

function Student(name, branch) {
    Person.call(this, name);  
    this.branch = branch;
}

Student.prototype = Object.create(Person.prototype);

Student.prototype.constructor = Student;

Student.prototype.getBranch = function () {
    return `Branch: ${this.branch}`;
};

document.getElementById("showBtn").addEventListener("click", function () {
    const student1 = new Student("Abhishek", "Computer Science");

    document.getElementById("output").innerHTML = `
        <p>${student1.getName()}</p>
        <p>${student1.getBranch()}</p>
        <p><strong>Prototype chain:</strong></p>
        <ul>
            <li>student1 → Student.prototype</li>
            <li>Student.prototype → Person.prototype</li>
            <li>Person.prototype → Object.prototype</li>
        </ul>
    `;
});
