import Student from './Student.js';

const student1 = new Student('Dou', 'Sam', 1995);
console.log(student1.getFullName());
console.log(student1);
student1.absent();
student1.present();
student1.setGrade(90);
student1.present();
student1.setGrade(100);
student1.present();
student1.setGrade(90);

console.log('Average Grades:', student1.getAverageGrades());
console.log('Average attendance:', student1.getAverageAttendance());
console.log(student1.summary());

console.log('--------------------------------');
const student2 = new Student('Willy', 'Wonka', 2000);
console.log(student2.getFullName());
console.log(student2);
student2.absent();
student2.absent();
student2.present();
student2.setGrade(75);
student2.present();
student2.setGrade(90);

console.log('Average Grades:', student2.getAverageGrades());
console.log('Average attendance:', student2.getAverageAttendance());
console.log(student2.summary());
