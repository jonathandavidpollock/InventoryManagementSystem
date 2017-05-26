/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

    btnEdit.forEach(function (btn) {
        btn.addEventListener("click", function (e) {
            var btn = e.target;
            var row = e.target.parentNode.parentNode;

            //fields
            var fname = row.querySelector('.name');
            var fcategory = row.querySelector('.category');
            var fquantity = row.querySelector('.quantity');
            var editable = row.querySelectorAll('[contenteditable]');

            var id = btn.getAttribute('data-id');
            var token = document.querySelector('[name=_token]').value;

            // changing to editable
            editable.forEach(function (el) {
                el.setAttribute('contenteditable', 'true');
            });
            // el.setAttribute('onKeypress',"if(event.keyCode < 48 || event.keyCode > 57){return false;}");


            //changing button
            this.classList.toggle('alert');
            this.classList.toggle('good');
            this.innerHTML = 'save';

            console.log('THIS IS THIS:', btn);

            //AJAX request
            this.addEventListener('click', function () {
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
                    success: function success(response) {
                        window.location = '/';
                    }
                });
            });
        });
    });

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

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);
module.exports = __webpack_require__(1);


/***/ })
/******/ ]);