import View from './View.js';

function Student(name, surname, yearOfBirth, grades = []) {
  this.name = name;
  this.surname = surname;
  this.yearOfBirth = yearOfBirth;
  this.grades = grades;

  this.attendance = [];
  this.accPresent = 0;

  Student.prototype.getFullName = function () {
    return `${name} ${surname}`;
  };
  Student.prototype.getAge = function () {
    const currentDate = new Date();
    return `${currentDate.getFullYear() - yearOfBirth} years old`;
  };

  Student.prototype.present = function () {
    if (this.attendance.length <= 25 - 1) {
      this.attendance.push(true);
      this.accPresent++;
    } else {
      throw new Error('The academic year is over');
    }
  };
  Student.prototype.absent = function () {
    if (this.attendance.length <= 25 - 1) {
      this.attendance.push(false);
    } else {
      throw new Error('The academic year is over');
    }
  };

  Student.prototype.getAverageGrades = function () {
    const countGrades = grades.reduce((accumulator, currentValue) => accumulator + currentValue);
    return countGrades / grades.length;
  };
  Student.prototype.getAverageAttendance = function () {
    return this.accPresent / 25;
  };
  Student.prototype.summary = function () {
    if (this.getAverageGrades() >= 90 && this.getAverageAttendance() >= 0.9) {
      return 'Well done!';
    } if (this.getAverageGrades() < 90 && this.getAverageAttendance() >= 0.9) {
      return 'Good but you can better!';
    } if (this.getAverageGrades() >= 90 && this.getAverageAttendance() < 0.9) {
      return 'Good but you can better!';
    }
    return 'You are radish!';
  };
}

export default Student;
