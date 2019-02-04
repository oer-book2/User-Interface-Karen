class Subject {
    constructor(subject) {
  
      this.subjectButtons = subject.querySelector('.subject-buttons');
      this.subjectBtnOpen = subject.querySelector('.subject-btn-open');
      this.subjectBtnClose = subject.querySelector('.subject-btn-close');
      this.subjectContent = subject.querySelector('.subject-content');
      this.subjectButtons.addEventListener('click', () => this.toggleSubject());
      
    }
    toggleSubject() {
      this.subjectBtnOpen.classList.toggle('hide-btn');
      this.subjectBtnClose.classList.toggle('hide-btn');
      this.subjectContent.classList.toggle('toggle-on');
    }
  }
  
  const subjects = document.querySelectorAll('.subject');
  subjects.forEach( subject => new Subject(subject));
  