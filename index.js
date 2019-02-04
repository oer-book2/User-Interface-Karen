class Panel {
    constructor(panel) {
  
      this.panelButtons = panel.querySelector('.panel-buttons');
      this.panelBtnOpen = panel.querySelector('.panel-btn-open');
      this.panelBtnClose = panel.querySelector('.panel-btn-close');
      this.panelContent = panel.querySelector('.panel-content');
      this.panelButtons.addEventListener('click', () => this.togglePanel());
      
    }
    togglePanel() {
      console.log(this.panelBtnOpen);
      this.panelBtnOpen.classList.toggle('hide-btn');
      this.panelBtnClose.classList.toggle('hide-btn');
      this.panelContent.classList.toggle('toggle-on');
    }
  }
  
  const panels = document.querySelectorAll('.panel');
  panels.forEach( panel => new Panel(panel));
  