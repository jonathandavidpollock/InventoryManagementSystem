var name = 'carlosjunod'

console.log(`my name is ${name}`)

window.addEventListener("load", ()=>{
 	
 	// Getting Modal
 	var modal = document.querySelector(".modal-wrapper");

 	var eModal = document.querySelector(".modal-del-wrapper");
	
 	// Grabing the add button
 	var addBtn = document.getElementById("addBtn");

 	var btnCancel = document.getElementById("btnCancel");

 	var linkDelete = document.getElementById("linkDelete");

	var btnEdit = document.getElementById("btnEdit");

	var btnDelete = document.getElementById("btnDelete");

	addBtn.addEventListener("click", ()=> {
		modal.style.display = "block";
	})

	btnEdit.addEventListener("click", ()=> {
		modal.style.display = "block";
	})

	btnCancel.addEventListener("click", () => {
		modal.style.display = "none";
	})

	linkDelete.addEventListener("click", () => {
		modal.style.display = "none";
		eModal.style.display = "block";
	})

	btnDelete.addEventListener("click", () => {
		modal.style.display = "none";
		eModal.style.display = "block";
	})

	window.onclick = function(e){
		if(e.target == eModal){
			eModal.style.display = "none";
		}
	}

})	