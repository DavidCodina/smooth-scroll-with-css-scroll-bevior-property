class Modal {
  constructor(){
    console.log("A new Modal was instantiated...");
		this.init();
	}


	//Utility function for adding even listeners to classes.
	addEventListenerByClass(className, event, fn) {
		const nodelList = document.getElementsByClassName(className);
		for (let i = 0; i < nodelList.length; i++) {
	    nodelList[i].addEventListener(event, fn);
		}
	}


	//Utility function for adding even listeners to elements with a given data attribute.
	addEventListenerByAttribute(attribute, event, fn) {
		const nodelList = document.querySelectorAll(attribute);
		for (let i = 0; i < nodelList.length; i++) {
	    nodelList[i].addEventListener(event, fn);
		}
	}


  //Initialize object instantiation - called in constructor.
	init(){
		this.addEventListenerByClass('open-modal-button', 'click', function() {
			const modal_id = this.dataset.modalId;
			const modal    = document.getElementById(modal_id);
			modal.classList.add('is-open');
		});

		this.addEventListenerByAttribute('[data-modal-close]', 'click', function(event){
			if (event.target !== this) { return; }
			const current_modal = event.target.closest(".modal");
			current_modal.classList.remove('is-open');
		});
	}
}
