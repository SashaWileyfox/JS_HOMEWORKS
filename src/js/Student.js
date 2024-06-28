function Student(name, surname, yearOfBirth) {
  this.name = name;
  this.surname = surname;
  this.yearOfBirth = yearOfBirth;

  this.grades = new Array(25).fill(null);
  this.attendance = new Array(25).fill(null);

  this.currentLesson = 0;

  Student.prototype.getFullName = function () {
    return `${this.name} ${this.surname}`;
  };
  Student.prototype.getAge = function () {
    const currentDate = new Date();
    return `${currentDate.getFullYear() - yearOfBirth} years old`;
  };

  Student.prototype.present = function () {
    if (this.attendance.length <= 25) {
      this.attendance[this.currentLesson] = true;
      this.currentLesson += 1;
    } else {
      throw new Error(`The academic year for ${this.getFullName()} is over`);
    }
  };
  Student.prototype.absent = function () {
    if (this.attendance.length <= 25) {
      this.attendance[this.currentLesson] = false;
      this.currentLesson += 1;
    } else {
      throw new Error(`The academic year for ${this.getFullName()} is over`);
    }
  };

  Student.prototype.getAverageGrades = function () {
    let sum = 0;
    let lessonsWithGrades = 0;
    for (let i = 0; i < this.currentLesson; i++) {
      if (this.grades[i] !== null) lessonsWithGrades += 1;
      sum += this.grades[i];
    }
    return Number(sum / lessonsWithGrades)
      .toFixed(2);
  };
  Student.prototype.getAverageAttendance = function () {
    let visitedLessons = 0;
    for (let i = 0; i < this.currentLesson; i++) {
      if (this.attendance[i]) visitedLessons += 1;
    }
    return Number(visitedLessons / (this.currentLesson))
      .toFixed(2);
  };

  Student.prototype.summary = function () {
    if (this.getAverageGrades() >= 90 && this.getAverageAttendance() >= 0.90) {
      return 'Well done!';
    }
    if (this.getAverageGrades() < 90 && this.getAverageAttendance() >= 0.90) {
      return 'Good but you can better!';
    }
    if (this.getAverageGrades() >= 90 && this.getAverageAttendance() < 0.90) {
      return 'Good but you can better!';
    }
    if (this.getAverageGrades() < 90 && this.getAverageAttendance() < 0.90) {
      return 'You are radish!';
    }
  };

  Student.prototype.setGrade = function (grade) {
    if (typeof grade !== 'number') throw new Error('Lessons count is invalid');
    if (grade < 0 || grade > 100) throw new Error(`Grade cannot be ${grade}`);
    if (!this.attendance[this.currentLesson - 1]) throw new Error(`Student ${this.getFullName()}is absent`);
    this.grades[this.currentLesson - 1] = grade;
  };
}

export default Student;
