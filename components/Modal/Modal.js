class Modal {
  constructor(element) {
    this.element = element;


    this.button = this.element.querySelector('button');

    this.button.addEventListener('click', () => {
      this.openModal();
    });
    
  }

  openModal() {
    console.log("clicked");
  }
}



const modals = document.querySelectorAll('.team-member');
modals.forEach(modal => {
  new Modal(modal);
});