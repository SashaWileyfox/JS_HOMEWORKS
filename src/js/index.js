import Student from './Student.js';

const student1 = new Student('Dou', 'Sam', 1995, [100, 100, 100, 85]);

console.log(student1);
console.log(student1.getFullName());
console.log(student1.getAge());
console.log(student1.attendance);
console.log(`Average grades:${student1.getAverageGrades()}`);

student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.absent();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
console.log(`Average attendance ${student1.getAverageAttendance()}`);
console.log(student1.summary());

console.log('--------------------------------');
const student2 = new Student('Willy', 'Wonka', 2000, [50, 50, 100, 85]);

console.log(student2);
console.log(student2.getFullName());
console.log(student2.getAge());
console.log(student2.attendance);
console.log(`Average grades:${student2.getAverageGrades()}`);

student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.absent();
student2.present();
student2.present();
student2.present();
student2.present();

console.log(`Average attendance ${student2.getAverageAttendance()}`);
console.log(student2.summary());
