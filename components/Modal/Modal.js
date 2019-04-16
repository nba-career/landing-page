class Modal {
	constructor(element) {
		this.element = element;

		this.button = this.element.querySelector('button');
		this.modal = this.element.querySelector('.modal');
		this.overlay = this.element.querySelector('.overlay');
		this.closeButton = this.element.querySelector('.close-modal');

		this.button.addEventListener('click', () => {
			this.toggleModal();
		});

		this.closeButton.addEventListener('click', () => {
			this.toggleModal();
		});

		this.overlay.addEventListener('click', () => {
			this.toggleModal();
		});
	}

	toggleModal() {
		let currentState = this.modal.style.display;
		if (currentState === 'none') {
			this.modal.style.display = 'block';
		} else {
			this.modal.style.display = 'none';
		}
	}
}

const modals = document.querySelectorAll('.team-member');
modals.forEach((modal) => {
	new Modal(modal);
});
