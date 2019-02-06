class SubjectContent {
  constructor(subElement) {
    this.subElement = subElement;
  }
  toggleContent() {
    let content=document.querySelectorAll('.subjectContent');
    Array.from(content).forEach(bar => bar.classList.remove('display'));
    this.subElement.classList.add('display');

  }
}

class SubjectBar {
  constructor(element) {
    this.element=element;
    this.tab = document.querySelector(`.subjectContent[data-tab='${this.element.dataset.tab}']`)
    this.text = new SubjectContent(this.tab);
    this.element.addEventListener('click',()=> this.toggleContent())
  }

  toggleContent() {
    this.text.toggleContent();
  }
    
}

let subjectBars = document.querySelectorAll('.subjectBar');
// console.log(subjectBars);
subjectBars.forEach(element => new SubjectBar(element));
