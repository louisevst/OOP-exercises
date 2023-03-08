/* There's two groups, both of 10 students. Every student has a name (even Jaqen) and gets a grade. 
You can have some fun coming up with the content here 😃

Provide an easy way to calculate the average score of a group.
Add a function to move a student from one group to another.
Show the average score of both groups. Move the top student from one group with the lowest scoring student from another. 
Show the averages again - how were these affected? */
//My answer
const students = { nico: 20, martin: 10, Ian: 5, noham: 19 };
class group {
  constructor(student) {
    this.names = Object.keys(student);
    this.grades = Object.values(student);
  }
  average() {
    return (
      this.grades.reduce((partialSum, a) => partialSum + a, 0) /
      this.grades.length
    );
  }
  remove(guy) {
    for (var i = 0; i < this.names.length; i++) {
      if (this.names[i] === guy) {
        this.names.splice(i, 1);
        this.grades.splice(i, 1);
      }
    }
  }
  add(guy) {
    this.names.push(Object.keys(guy).toString());
    this.grades.push(Number(Object.values(guy).toString()));
  }
}
const group1 = new group({
  nico: 20,
  martin: 10,
  Ian: 5,
  noham: 19,
  nicole: 10,
  mohamed: 1,
  lucie: 14,
  mike: 12,
  aline: 16,
  marine: 11,
});
const group2 = new group({
  marie: 5,
  laura: 10,
  antoine: 15,
  rose: 6,
  charlotte: 20,
  pamela: 2,
  brigitte: 4,
  max: 12,
  nisha: 15,
  margot: 18,
});
console.log(group1.average());
console.log(group2.average());
group1.remove("nico");
group2.add({ nico: 20 });
group2.remove("pamela");
group1.add({ pamela: 2 });
console.log(group1.average());
console.log(group2.average());

//chatgpt answer

// Define a class to represent a student
class Student {
  constructor(name, grade) {
    this.name = name;
    this.grade = grade;
  }
}

// Define a class to represent a group of students
class Group {
  constructor(students) {
    this.students = students;
  }

  // Define a method to calculate the average grade of a group
  calculateAverageGrade() {
    let total = 0;
    for (let i = 0; i < this.students.length; i++) {
      total += this.students[i].grade;
    }
    return total / this.students.length;
  }

  // Define a method to move a student from one group to another
  moveStudent(studentName, toGroup) {
    for (let i = 0; i < this.students.length; i++) {
      if (this.students[i].name === studentName) {
        const student = this.students.splice(i, 1)[0];
        toGroup.students.push(student);
        break;
      }
    }
  }
}

// Define two groups of students
const groupA = new Group([
  new Student("Arya", 80),
  new Student("Bran", 75),
  new Student("Catelyn", 85),
  new Student("Daenerys", 90),
  new Student("Eddard", 70),
  new Student("Frey", 65),
  new Student("Greyjoy", 75),
  new Student("Hodor", 80),
  new Student("Ilyn", 60),
  new Student("Jaqen", 95),
]);

const groupB = new Group([
  new Student("Khal", 70),
  new Student("Lannister", 85),
  new Student("Melisandre", 95),
  new Student("Nymeria", 54),
  new Student("Cerenna", 80),
  new Student("Alyshara", 90),
  new Student("Darelle", 80),
  new Student("Jeyne", 55),
  new Student("Jorek", 40),
  new Student("Lanna", 60),
]);

console.log(groupA.calculateAverageGrade());
console.log(groupB.calculateAverageGrade());
groupA.moveStudent("Jaqen", groupB);
groupB.moveStudent("Jorek", groupA);
console.log(groupA.calculateAverageGrade());
console.log(groupB.calculateAverageGrade());
