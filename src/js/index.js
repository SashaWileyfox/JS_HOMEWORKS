import Student from './Student.js';
import View from './View.js';

const student1 = new Student('Dou', 'Sam', 1995, [100, 100, 100, 85]);
const viewStudent1 = new View(student1);
console.log(student1.getFullName());
console.log(student1.getAge());
console.log('Attendance:', student1.attendance);
console.log(`Average grades:${student1.getAverageGrades()}`);
console.log(student1.summary());
viewStudent1.showInfo();

console.log('--------------------------------');
const student2 = new Student('Willy', 'Wonka', 2000, [50, 50, 100, 85]);
const viewStudent2 = new View(student2);

console.log(student2.getFullName());
console.log(student2.getAge());
console.log('Attendance:', student2.attendance);
console.log(`Average grades:${student2.getAverageGrades()}`);
console.log(student2.summary());
viewStudent2.showInfo();
