/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/scripts/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/scripts/script.js":
/*!*******************************!*\
  !*** ./app/scripts/script.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/* No jquery only DOM */\n/* global variables */\n/*Select elements for tab panels*/\n/* select links */\nvar tabLinks = document.querySelectorAll('.feature-tab__links  li');\nvar tabContents = document.querySelectorAll('.featureProduct  .feature-tab__content .tabPanel');\nvar tabImages = document.querySelectorAll('.featureProduct picture');\n\n/* Set display on load */\ntabLinks[0].classList.add('currentLink');\ntabContents[0].classList.add('currentContent');\ntabImages[0].classList.add('setFront');\n/* Find the current Tab */\n\ntabLinks.forEach(function (link) {\n  link.onclick = function () {\n    if (tabLinks[0] == this) {\n      /* first click the link*/\n      tabLinks[0].classList.add('currentLink');\n      tabLinks[1].classList.remove('currentLink');\n      tabLinks[2].classList.remove('currentLink');\n      /* then seclect the tab content*/\n      tabContents[0].classList.add('currentContent');\n      tabContents[1].classList.remove('currentContent');\n      tabContents[2].classList.remove('currentContent');\n      /* then seclect the tab content*/\n      tabImages[0].classList.add('setFront');\n      tabImages[1].classList.remove('setFront');\n      tabImages[2].classList.remove('setFront');\n    } else if (tabLinks[1] == this) {\n      tabLinks[1].classList.add('currentLink');\n      tabLinks[0].classList.remove('currentLink');\n      tabLinks[2].classList.remove('currentLink');\n\n      tabContents[1].classList.add('currentContent');\n      tabContents[0].classList.remove('currentContent');\n      tabContents[2].classList.remove('currentContent');\n\n      tabImages[1].classList.add('setFront');\n      tabImages[0].classList.remove('setFront');\n      tabImages[2].classList.remove('setFront');\n    } else {\n      tabLinks[2].classList.add('currentLink');\n      tabLinks[0].classList.remove('currentLink');\n      tabLinks[1].classList.remove('currentLink');\n\n      tabContents[2].classList.add('currentContent');\n      tabContents[1].classList.remove('currentContent');\n      tabContents[0].classList.remove('currentContent');\n\n      tabImages[2].classList.add('setFront');\n      tabImages[0].classList.remove('setFront');\n      tabImages[1].classList.remove('setFront');\n    }\n  };\n});\n\n/*  */\n\nvar tabLists = document.querySelectorAll('.feature-tab__links--4 li');\nvar tabDescription = document.querySelectorAll('.featureMedia .feature-tab__content .tabPanel');\nvar tabPictures = document.querySelectorAll('.featureMedia picture');\n\n/* Set display on load */\ntabLists[0].classList.add('currentLink');\ntabDescription[0].classList.add('currentContent');\ntabPictures[0].classList.add('setFront');\n/* Find the current Tab */\n\ntabLists.forEach(function (link) {\n  link.onclick = function () {\n    if (tabLists[0] == this) {\n      /* first click the link*/\n      tabLists[0].classList.add('currentLink');\n      tabLists[1].classList.remove('currentLink');\n      tabLists[2].classList.remove('currentLink');\n      tabLists[3].classList.remove('currentLink');\n      /* then seclect the tab content*/\n      tabDescription[0].classList.add('currentContent');\n      tabDescription[1].classList.remove('currentContent');\n      tabDescription[2].classList.remove('currentContent');\n      tabDescription[3].classList.remove('currentContent');\n      /* then seclect the tab content*/\n      tabPictures[0].classList.add('setFront');\n      tabPictures[1].classList.remove('setFront');\n      tabPictures[2].classList.remove('setFront');\n      tabPictures[3].classList.remove('setFront');\n    } else if (tabLists[1] == this) {\n      tabLists[1].classList.add('currentLink');\n      tabLists[0].classList.remove('currentLink');\n      tabLists[2].classList.remove('currentLink');\n      tabLists[3].classList.remove('currentLink');\n\n      tabDescription[1].classList.add('currentContent');\n      tabDescription[0].classList.remove('currentContent');\n      tabDescription[2].classList.remove('currentContent');\n      tabDescription[3].classList.remove('currentContent');\n\n      tabPictures[1].classList.add('setFront');\n      tabPictures[0].classList.remove('setFront');\n      tabPictures[2].classList.remove('setFront');\n      tabPictures[3].classList.remove('setFront');\n    } else if (tabLists[2] == this) {\n      tabLists[2].classList.add('currentLink');\n      tabLists[0].classList.remove('currentLink');\n      tabLists[1].classList.remove('currentLink');\n      tabLists[3].classList.remove('currentLink');\n\n      tabDescription[2].classList.add('currentContent');\n      tabDescription[1].classList.remove('currentContent');\n      tabDescription[0].classList.remove('currentContent');\n      tabDescription[3].classList.remove('currentContent');\n\n      tabPictures[2].classList.add('setFront');\n      tabPictures[0].classList.remove('setFront');\n      tabPictures[1].classList.remove('setFront');\n      tabPictures[3].classList.remove('setFront');\n    } else {\n      tabLists[3].classList.add('currentLink');\n      tabLists[0].classList.remove('currentLink');\n      tabLists[1].classList.remove('currentLink');\n      tabLists[2].classList.remove('currentLink');\n\n      tabDescription[3].classList.add('currentContent');\n      tabDescription[1].classList.remove('currentContent');\n      tabDescription[0].classList.remove('currentContent');\n      tabDescription[2].classList.remove('currentContent');\n\n      tabPictures[3].classList.add('setFront');\n      tabPictures[0].classList.remove('setFront');\n      tabPictures[1].classList.remove('setFront');\n      tabPictures[2].classList.remove('setFront');\n    }\n  };\n});\n\n/* No jquery only DOM */\n/* global variables */\n/*Select elements for tab panels*/\n/* select links */\nvar tabs = document.querySelectorAll('.feature-tab__links--2 li');\nvar contents = document.querySelectorAll('.featureAccess  .feature-tab__content .tabPanel');\nvar images = document.querySelectorAll('.featureAccess picture');\n\n/* Set display on load */\ntabs[0].classList.add('currentLink');\ncontents[0].classList.add('currentContent');\nimages[0].classList.add('setFront');\n/* Find the current Tab */\n\ntabs.forEach(function (link) {\n  link.onclick = function () {\n    if (tabs[0] == this) {\n      /* first click the link*/\n      tabs[0].classList.add('currentLink');\n      tabs[1].classList.remove('currentLink');\n      /* then seclect the tab content*/\n      contents[0].classList.add('currentContent');\n      contents[1].classList.remove('currentContent');\n      /* then seclect the tab content*/\n      images[0].classList.add('setFront');\n      images[1].classList.remove('setFront');\n    } else {\n      tabs[1].classList.add('currentLink');\n      tabs[0].classList.remove('currentLink');\n\n      contents[1].classList.add('currentContent');\n      contents[0].classList.remove('currentContent');\n\n      images[1].classList.add('setFront');\n      images[0].classList.remove('setFront');\n    }\n  };\n});\n\n/* Drop down menu with javascript DOM*/\n\nvar dropdownMenu = document.getElementById('dropDown');\nvar dropdown = document.querySelector('.headerNav .dropdown-menu .dropdown');\nvar menuClicked = document.querySelector('.headerNav .dropdown-menu');\nvar hideDropdown = document.querySelector('.wrapper');\n\ndropdownMenu.onclick = function () {\n  hideDropdown.onclick = function () {\n    if (dropdown.classList.contains('dropdown-visible')) {\n      dropdown.classList.remove('dropdown-visible');\n      location.reload();\n    } else {\n      dropdown.classList.add('dropdown-visible');\n      menuClicked.classList.add('dropdown-menu__clicked');\n    }\n  };\n};\n\n/* Drop down menu with javascript DOM*/\n\nvar dropdownSubMenu = document.getElementById('subdropDown');\nvar subdropdown = document.querySelector('.subdropDown');\nvar subMenuClicked = document.querySelector('.dropdown-submenu .subdropDown');\nvar dropdownIcon = document.querySelector('.dropdown-icon');\nvar hideSubDropdown = document.querySelector('.wrapper');\n\ndropdownSubMenu.onclick = function () {\n  hideSubDropdown.onclick = function () {\n    if (subdropdown.classList.contains('subdropdown-visible')) {\n      subdropdown.classList.remove('subdropdown-visible');\n      location.reload();\n    } else {\n      subdropdown.classList.add('subdropdown-visible');\n      subMenuClicked.classList.add('subdropdown-menu__clicked');\n      dropdownIcon.classList.toggle('dropdown-icon_flip');\n    }\n  };\n};\n\n/* subheader placement with pure javascript DOM */\nwindow.onscroll = function () {\n\n  if (window.scrollY >= 60) {\n    // change target to number\n    document.getElementById('subheader-trigger').classList.add('sticky-subheader');\n    document.querySelector('.headerHero').classList.add('marginTop');\n    document.querySelector('.dropdown-submenu__mobile').classList.add('sticky-subheader__mobile');\n  } else {\n    document.getElementById('subheader-trigger').classList.remove('sticky-subheader');\n    document.querySelector('.headerHero').classList.remove('marginTop');\n    document.querySelector('.dropdown-submenu__mobile').classList.remove('sticky-subheader__mobile');\n  }\n};\n\n/* Adding classes with the elements on mouseout*/\nvar subNavLinks = document.querySelectorAll('.links');\nvar subLink = document.querySelectorAll('.sublinks');\n\nsubNavLinks[0].onmouseover = function () {\n  this.classList.add('links-position');\n  subLink[0].classList.add('show-sublinks__dropdown');\n};\nsubNavLinks[1].onmouseover = function () {\n  this.classList.add('links-position');\n  subLink[1].classList.add('show-sublinks__dropdown');\n};\nsubNavLinks[2].onmouseover = function () {\n  this.classList.add('links-position');\n  subLink[2].classList.add('show-sublinks__dropdown');\n};\nsubNavLinks[3].onmouseover = function () {\n  this.classList.add('links-position');\n  subLink[3].classList.add('show-sublinks__dropdown');\n};\n/* removing classes with the elements on mouseout*/\nsubNavLinks[0].onmouseout = function () {\n  this.classList.remove('links-position');\n  subLink[0].classList.remove('show-sublinks__dropdown');\n};\nsubNavLinks[1].onmouseout = function () {\n  this.classList.remove('links-position');\n  subLink[1].classList.remove('show-sublinks__dropdown');\n};\nsubNavLinks[2].onmouseout = function () {\n  this.classList.remove('links-position');\n  subLink[2].classList.remove('show-sublinks__dropdown');\n};\nsubNavLinks[3].onmouseout = function () {\n  this.classList.remove('links-position');\n  subLink[3].classList.remove('show-sublinks__dropdown');\n};\n\n/* mobile menu display */\n\nvar mobileMenu = document.querySelector('.header-mobile__expanded');\nvar menuIcon = document.querySelector('.hamburger');\n\nmenuIcon.onclick = function () {\n  mobileMenu.classList.toggle('show-mobile__menu');\n};\n\nvar mobileDropdown = document.querySelector('.links-mobile');\nvar mobileDropdownLinks = document.querySelector('.sublinks-mobile');\nmobileDropdown.onclick = function () {\n  mobileDropdownLinks.classList.toggle('show-dropdown__links');\n};\n\n/* FooterLink Modal*/\nvar footerLinkModal = document.querySelector('.footerLinks-modal__link');\nvar footerModal = document.querySelector('.modal1');\nvar footerModalclose = document.querySelector('.close');\n\nfooterLinkModal.onclick = function () {\n  footerModal.classList.add('modal1-visible');\n  footerModal.classList.remove('modal-close');\n};\nfooterModalclose.onclick = function () {\n  footerModal.classList.add('modal-close');\n  footerModal.classList.remove('modal1-visible');\n};\n\n//# sourceURL=webpack:///./app/scripts/script.js?");

/***/ })

/******/ });