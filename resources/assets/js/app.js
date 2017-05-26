'use strict';
window.addEventListener("load", function () {

    // Getting Modal
    var modal = document.querySelector(".modal-wrapper");

    var eModal = document.querySelector(".modal-del-wrapper");

    // Grabing the add button
    var addBtn = document.getElementById("addBtn");

    var btnCancel = document.getElementById("btnCancel");

    var linkDelete = document.getElementById("linkDelete");

    var btnEdit = document.querySelectorAll("button");

    var btnDelete = document.querySelectorAll(".delete");

    addBtn.addEventListener("click", function () {
        modal.style.display = "block";
    });

    // console.log(btnDelete);

    btnEdit.forEach(function(btn){
      btn.addEventListener("click", function (e) {
          let btn = e.target;
          let row = e.target.parentNode.parentNode;

          //fields
          let fname = row.querySelector('.name');
          let fcategory = row.querySelector('.category');
          let fquantity = row.querySelector('.quantity');
          let editable = row.querySelectorAll('[contenteditable]');


          let id = btn.getAttribute('data-id');
          let token = document.querySelector('[name=_token]').value;

          // changing to editable
          editable.forEach(function(el){
            el.setAttribute('contenteditable', 'true');
          })
          // el.setAttribute('onKeypress',"if(event.keyCode < 48 || event.keyCode > 57){return false;}");




          //changing button
          this.classList.toggle('alert');
          this.classList.toggle('good');
          this.innerHTML = 'save';

          console.log('THIS IS THIS:', btn);

          //AJAX request
          this.addEventListener('click', function(){
            $.ajax({
            type: 'post',
            url: '/products/update',
            data: {
              "name": fname.innerHTML,
              "category": fcategory.innerHTML,
              "quantity": fquantity.innerHTML,
              "id": id,
              "_token": token
            },
            success: function(response){
              window.location = '/';
            }
            })
          })
      });
    })





    btnCancel.addEventListener("click", function (e) {
      e.preventDefault();
      window.location = '/';
    });

    linkDelete.addEventListener("click", function () {
        modal.style.display = "none";
        eModal.style.display = "block";
    });

    window.onclick = function (e) {
        if (e.target == eModal) {
            eModal.style.display = "none";
        }
    };
});
