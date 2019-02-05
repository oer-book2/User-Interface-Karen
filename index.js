class Subject {
    constructor(subject) {

      this.subject = subject;
      
      this.subjectButtons.addEventListener('click', () => this.toggleSubject());
      
    }
    toggleSubject() {
     
    }
  }
  
  const subjects = document.querySelectorAll('.subject');
  subjects.forEach( subject => new Subject(subject));
  