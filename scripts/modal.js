/* =============================================================================
                               functions
============================================================================= */


//Utility function for adding even listeners to classes.
//https://stackoverflow.com/questions/12362256/addeventlistener-on-nodelist
function addEventListenerByClass(className, event, fn) {
	const nodelList = document.getElementsByClassName(className);
	for (let i = 0; i < nodelList.length; i++) {
    nodelList[i].addEventListener(event, fn);
	}
}



//Utility function for adding even listeners to elements with a given data attribute.
function addEventListenerByAttribute(attribute, event, fn) {
	const nodelList = document.querySelectorAll(attribute);
	for (let i = 0; i < nodelList.length; i++) {
    nodelList[i].addEventListener(event, fn);
	}
}


/* =============================================================================
                              Event Listeners
============================================================================= */


addEventListenerByClass('open-modal-button', 'click', function() { //Use function syntax for use of 'this' keyword.
	//this.dataset.modalId corresponds to the data-modal-id one the button.
	//The value itself corresponds the the id of the modal we want to open.
	const modal_id = this.dataset.modalId;
	const modal    = document.getElementById(modal_id);
	modal.classList.add('is-open');
	//console.log(modal_id);
});



////////////////////////////////////////////////////////////////////////////
//
//
//	To close the modal when clicking on anything but modal .modal-content, we
//	could do this:
//
//
// 			window.onclick = function(event) {
//   			if ( event.target.classList.contains("modal") ) {
//     			//This assumes that if you're clicking on it, it has .is-open
// 					event.target.classList.remove("is-open")
//   			}
// 			}
//
//
//	However, I'd rather not put a click even listener on window.
//	By selecting elements by data attribute, and then having them find the closest() .modal,
//	We can achieve the same effect. This also allows for us to apply the close feature to multiple
//	elements at once (e.g., the .modal and the close button).
//
//
////////////////////////////////////////////////////////////////////////////


addEventListenerByAttribute('[data-modal-close]', 'click', function(event){
	//Return early if the thing you're clicking on is a child element:
	//https://stackoverflow.com/questions/9183381/how-to-have-click-event-only-fire-on-parent-div-not-children?rq=1
	if (event.target !== this) { return; }
	const current_modal = event.target.closest(".modal");
	current_modal.classList.remove('is-open');
});
