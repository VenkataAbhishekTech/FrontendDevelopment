function Person(name) {
    this.name = name;
}

Person.prototype.showName = function () {
    return `Name: ${this.name}`;
};

function Student(name, branch) {
    Person.call(this, name);
    this.branch = branch;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.showBranch = function () {
    return `Branch: ${this.branch}`;
};

class PersonClass {
    constructor(name) {
        this.name = name;
    }

    showName() {
        return `Name: ${this.name}`;
    }
}

class StudentClass extends PersonClass {
    constructor(name, branch) {
        super(name);
        this.branch = branch;
    }

    showBranch() {
        return `Branch: ${this.branch}`;
    }
}

document.getElementById("runBtn").addEventListener("click", () => {

    let output = "";

    const studentProto = new Student("Amit", "CSE");
    const studentClass = new StudentClass("Riya", "ECE");

    output += "=== ES5 PROTOTYPE VERSION ===\n";
    output += studentProto.showName() + "\n";
    output += studentProto.showBranch() + "\n\n";

    output += "=== ES6 CLASS VERSION ===\n";
    output += studentClass.showName() + "\n";
    output += studentClass.showBranch() + "\n\n";

    output += "Both behave the same because ES6 classes are\nsyntactic sugar over prototype inheritance.";

    document.getElementById("output").innerText = output;
});
