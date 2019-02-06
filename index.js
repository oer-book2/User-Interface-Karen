class SubjectBar {
  constructor(subjectBar) {
    this.subjectBar = subjectBar.querySelector('.subjectBar');
    subjectBar.addEventListener('click', () => console.log('This works'))
  }

  toggleContent() {
    if(subjectContent.style.display==='none'){
    subjectContent.style.display = 'block';
    } else {
      subjectContent.style.display = 'none'
    }
  }
 }

let subjectBars = document.querySelectorAll('.subjectBar');
// console.log(subjectBars);
subjectBars.forEach(subjectBar => new SubjectBar(subjectBar));
