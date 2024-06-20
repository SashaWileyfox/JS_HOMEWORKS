function View(obj) {
  this.obj = obj;
  View.prototype.showInfo = function () {
    const parentElement = document.querySelector('[data-tbody]');
    const wrap = document.createElement('tr');
    wrap.innerHTML = `<td>${this.obj.getFullName()}</td>
      <td>${this.obj.getAge()}</td>
      <td>${this.obj.getAverageGrades()}</td>
      <td>
                 <div class="btn-group" role="group" aria-label="Basic example">
                   <button data-btn="present" type="button" class="btn btn-primary">Present</i></button>
                             <button data-btn="absent" type="button" class="btn btn-danger">Absent</button>

                 </div>
      </td>
      <td>${this.obj.getAverageAttendance()}</td>
      <td>${this.obj.summary()}</td>`;
    parentElement.appendChild(wrap);

    wrap.querySelector('[data-btn="present"]')
      .addEventListener('click', () => {
        this.obj.present();
        this.updateInfo(wrap);
        this.obj.getAverageAttendance();
        if (this.obj.attendance.length === 25) {
          console.log('Average attendance:', this.obj.getAverageAttendance());
        }
      });
    wrap.querySelector('[data-btn="absent"]')
      .addEventListener('click', () => {
        this.obj.absent();
        this.updateInfo(wrap);
        if (this.obj.attendance.length === 25) {
          console.log('Average attendance:', this.obj.getAverageAttendance());
        }
      });
  };

  View.prototype.updateInfo = function (wrap) {
    wrap.cells[4].innerText = this.obj.getAverageAttendance();
    wrap.cells[5].innerText = this.obj.summary();
  };
}

export default View;
