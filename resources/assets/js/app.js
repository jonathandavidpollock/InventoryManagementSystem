'use strict';
//
// var name = 'carlosjunod';
// console.log('my name is ' + name);

// /// Analytics Code  ////////////////////////////////////////////////////////
//
// var ctx = document.getElementById("weekChart").getContext('2d');
// var ctx2 = document.getElementById("monthChart").getContext('2d');
// var myChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
//         datasets: [{
//             label: '# of Votes',
//             data: [12, 19, 3, 5, 2, 3],
//             backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'],
//             borderColor: ['rgba(255,99,132,1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero: true
//                 }
//             }]
//         }
//     }
// });
//
// var myChart2 = new Chart(ctx2, {
//     type: 'line',
//     data: {
//         labels: ["January", "Febuary", "March", "April", "May", "June"],
//         datasets: [{
//             label: '# of Votes',
//             data: [12, 19, 3, 5, 2, 3],
//             backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'],
//             borderColor: ['rgba(255,99,132,1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero: true
//                 }
//             }]
//         }
//     }
// });
//
// function addValuesChart(labels, values) {
//     myChart.data.datasets[0].labels = values;
//     myChart.data.datasets[0].data = labels;
//     myChart.update();
// }
//
// function addValuesChart2(values, labels) {
//     myChart2.data.datasets[0].labels = values;
//     myChart2.data.datasets[0].data = labels;
//     myChart2.update();
// }

/////////////////////////////////////////////////////////////////////////////
window.addEventListener("load", function () {

    // Getting Modal
    var modal = document.querySelector(".modal-wrapper");

    var eModal = document.querySelector(".modal-del-wrapper");

    // Grabing the add button
    var addBtn = document.getElementById("addBtn");

    var btnCancel = document.getElementById("btnCancel");

    var linkDelete = document.getElementById("linkDelete");

    var btnEdit = document.getElementById("btnEdit");

    var btnDelete = document.getElementById("btnDelete");

    addBtn.addEventListener("click", function () {
        modal.style.display = "block";
    });

    btnEdit.addEventListener("click", function (e) {
        let btn = e.target;
        let row = e.target.parentNode.parentNode;
        let field = row.querySelector('[contenteditable]');
        let id = btn.getAttribute('data-id');
        // let value = field.innerHTML;
        let token = document.querySelector('[name=_token]').value;

        // changing to editable
        field.setAttribute('contenteditable', 'true');
        field.setAttribute('onKeypress',"if(event.keyCode < 48 || event.keyCode > 57){return false;}");

        console.log(field.innerHTML);
        //changing button
        btn.classList.toggle('alert');
        btn.classList.toggle('good');

        btn.innerHTML = 'save';

        field.addEventListener('blur', function(){
          $.ajax({
          type: 'post',
          url: '/products/update',
          data: {
            "quantity": field.innerHTML,
            "id": id,
            "_token": token
          },
          success: function(response){
            window.location = '/';
          }
          })
        })
    });



    btnCancel.addEventListener("click", function () {
        modal.style.display = "none";
    });

    linkDelete.addEventListener("click", function () {
        modal.style.display = "none";
        eModal.style.display = "block";
    });

    btnDelete.addEventListener("click", function () {
        modal.style.display = "none";
        eModal.style.display = "block";
    });

    window.onclick = function (e) {
        if (e.target == eModal) {
            eModal.style.display = "none";
        }
    };
});
