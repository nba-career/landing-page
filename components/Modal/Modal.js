class Modal {
  constructor(element) {
    this.element = element;
  }
}



const modals = document.querySelectorAll('.team-member');
modals.forEach(modal => {
  new Modal(modal);
});