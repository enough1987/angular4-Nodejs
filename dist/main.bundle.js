webpackJsonp([1],{

/***/ "./src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./src async recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The whole content below can be removed with the new code.-->\n\n\n<div>\n\n    <router-outlet></router-outlet>\n\n</div>\n\n\n <app-modals> </app-modals>\n  "

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@font-face {\n  font-family: 'Open Sans';\n  font-weight: 400;\n  src: url(\"/assets/Open_Sans/OpenSans-Light.ttf\"); }\n\n@font-face {\n  font-family: 'OpenSans-Semibold';\n  font-weight: 600;\n  src: url(\"/assets/Open_Sans/OpenSans-SemiBold.ttf\"); }\n\n@font-face {\n  font-family: 'OpenSans-Bold';\n  font-weight: 700;\n  src: url(\"/assets/Open_Sans/OpenSans-Bold.ttf\"); }\n\n@font-face {\n  font-family: 'OpenSans-Italic';\n  src: url(\"/assets/Open_Sans/OpenSans-Italic.ttf\"); }\n\n* {\n  color: #1F3654;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: lighter; }\n\nbody {\n  min-width: 280px;\n  font-size: 16px; }\n\n@media (max-width: 600px) {\n  body {\n    font-size: 14px; } }\n\n/* ******** */\n.block {\n  background-color: white;\n  position: relative; }\n\n.block__color-second {\n  background-color: #f8fbfd; }\n\n.block__fixed-small {\n  height: 300px; }\n\n.block__footer {\n  background-color: white;\n  position: relative;\n  border: 1px solid #eceff1; }\n\n@media (max-width: 600px) {\n  .block__fixed-small {\n    padding-top: 30px;\n    padding-bottom: 30px;\n    height: unset; } }\n\n/* ******** */\n.grid {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row wrap;\n          flex-flow: row wrap; }\n\n.grid-cell {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; }\n\n@media (max-width: 600px) {\n  .grid-cell {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 auto;\n            flex: 1 auto; }\n  .grid-none-on-small {\n    display: none; } }\n\n/* --------- */\n.main-header {\n  width: 100%;\n  min-height: 60px;\n  max-height: 90px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-animation-duration: 0.1s;\n          animation-duration: 0.1s; }\n\n.main-header__img {\n  width: 150px;\n  max-height: 60px;\n  margin: auto auto auto 20px;\n  background-color: transparent;\n  cursor: pointer; }\n\n.main-header__img:focus {\n  outline: 0; }\n\n.main-header__second {\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  z-index: 100;\n  background-color: white;\n  border-bottom: 1px solid #ECEFF1;\n  -webkit-animation-duration: 0.1s;\n          animation-duration: 0.1s; }\n\n.main-header__form {\n  border-bottom: 1px solid #eceff1; }\n\n.main-header__user-block {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-item-align: auto;\n      align-self: auto;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding-right: 10px; }\n  .main-header__user-block img, .main-header__user-block span {\n    -ms-flex-item-align: auto;\n        -ms-grid-row-align: auto;\n        align-self: auto; }\n  .main-header__user-block__foto {\n    height: 1em; }\n  .main-header__user-block__el {\n    color: white;\n    margin-right: 5px; }\n  .main-header__user-block__el-second {\n    color: #1F3654; }\n\n/* ******** */\n.button {\n  border-radius: 90px;\n  background-color: transparent;\n  font-size: 0.9em;\n  font-family: \"OpenSans-Semibold\", \"Open Sans\", sans-serif;\n  display: block;\n  text-decoration: none;\n  border: 1px solid white;\n  color: white;\n  padding: 6px 30px;\n  margin: 20px;\n  font-weight: bold;\n  cursor: pointer; }\n\n.button-pink {\n  border: 1px solid #FF3E7D;\n  color: #FF3E7D; }\n\n.button-pink-bgc {\n  background-color: #FF3E7D;\n  color: white;\n  margin: auto;\n  padding: 10px 60px;\n  border: 0px solid white;\n  box-shadow: 0 5px 10px rgba(155, 4, 54, 0.5); }\n\n.button-big {\n  padding-top: 1em;\n  padding-bottom: 1em;\n  width: 60%; }\n\n.button__placeholder {\n  color: #88a5b0;\n  position: absolute;\n  top: 35px;\n  left: 0px;\n  z-index: -1;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s; }\n\n.button__placeholder-dirty {\n  top: 12px; }\n\n.input-contaner {\n  border-bottom: 1px solid #1F3654; }\n\n.input-contaner-error {\n  border-bottom: 1px solid #ff3a3a; }\n\n.input {\n  color: #1F3654;\n  font-size: 1em;\n  width: 100%;\n  background-color: unset;\n  border: unset;\n  margin: 10px 0;\n  padding-right: 20%; }\n\n.input-link {\n  position: absolute;\n  top: 3.1em;\n  right: 1em;\n  font-size: 0.8em; }\n\n.input-dirty {\n  margin-top: 30px; }\n\n.input-img, .input-img-second {\n  width: 1em;\n  height: 1em;\n  position: absolute;\n  top: 35.5px;\n  right: 2.5em; }\n\n.input-img-second {\n  right: 0.5em;\n  top: 37px;\n  height: 0.8em; }\n\n.input-img__small {\n  width: 0.75em; }\n\n@media (max-width: 600px) {\n  .button {\n    padding: 6px 20px;\n    margin: 20px auto; }\n  .button-pink {\n    padding: 6px 10px;\n    font-size: 0.8em; }\n  .button-pink-bgc {\n    padding: 10px 30px; } }\n\n/* ******** */\n.auth-header {\n  padding-bottom: 60px;\n  background-image: url(\"/assets/images/imgHeader.png\");\n  background-position: center top;\n  background-size: cover;\n  background-repeat: no-repeat; }\n\n.auth-header__second {\n  padding-top: 90px; }\n\n.container__menu-center {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  /* Safari */\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n  .container__menu-center .a {\n    text-align: center;\n    width: 170px;\n    font-family: \"OpenSans-Semibold\", \"Open Sans\", sans-serif;\n    cursor: pointer; }\n  .container__menu-center .a:focus {\n    outline: 0; }\n\n.footer {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  /* Safari */\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n  .footer__rights {\n    padding: 5px; }\n\n.cntr__row-center {\n  text-align: center;\n  margin: auto; }\n  .cntr__row-center .cntr__row-icon {\n    margin-left: 2.5em;\n    margin-left: 2.5em; }\n\n.cntr__flex-center {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n@media (max-width: 600px) {\n  .container__menu-center {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    width: 100%; }\n    .container__menu-center .a {\n      width: 100%; }\n  .cntr__mob-full-row {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap; }\n    .cntr__mob-full-row .cntr__row {\n      width: 100%; }\n  .cntr__mob-text-center .cntr__row {\n    text-align: center;\n    margin: auto; }\n    .cntr__mob-text-center .cntr__row .cntr__row-icon {\n      margin-left: 2.5em;\n      margin-left: 2.5em; }\n  .footer {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap; }\n    .footer .footer__rights, .footer .footer__social {\n      text-align: center;\n      width: 100%; }\n    .footer__rights {\n      padding: 0px; }\n    .footer .icon__social, .footer .icon__social-left {\n      margin-right: 2.5em; } }\n\n@media (max-width: 600px) and (max-width: 400px) {\n  .cntr__mob-text-center .cntr__row {\n    text-align: center;\n    margin: auto; }\n    .cntr__mob-text-center .cntr__row .cntr__row-icon {\n      margin-left: 1.5em;\n      margin-left: 1.5em; }\n  .cntr__row-center .cntr__row-icon {\n    margin-left: 1.5em;\n    margin-left: 1.5em; }\n  .mob-hidden {\n    display: none; } }\n\n/* ******** */\n.text {\n  font-size: 1em;\n  line-height: 1.3em;\n  padding: 0;\n  text-align: left;\n  color: #1F3654;\n  font-family: \"Open Sans\", sans-serif; }\n\n.text__big {\n  font-size: 2.5em;\n  padding: 40px 0 16px 0;\n  text-align: center;\n  color: white;\n  font-family: \"OpenSans-Semibold\", \"Open Sans\", sans-serif;\n  font-weight: bold; }\n\n.text__middle {\n  font-size: 1.6em;\n  padding: 16px 0 16px 0;\n  text-align: center;\n  color: white;\n  font-family: \"OpenSans-Semibold\", \"Open Sans\", sans-serif;\n  font-weight: bold; }\n\n.text__middle-small {\n  font-size: 1.3em;\n  padding: 16px 0 16px 0;\n  text-align: center;\n  color: white;\n  font-family: \"OpenSans-Semibold\", \"Open Sans\", sans-serif;\n  font-weight: bold; }\n\n.text__normal {\n  padding: 16px 0 16px 0;\n  text-align: center;\n  color: white;\n  font-weight: 200; }\n\n.text__normal-small {\n  padding: 8px 0 8px 0;\n  text-align: center;\n  color: white;\n  font-weight: 200; }\n\n.text__normal-smallest {\n  padding: 8px 0 8px 0;\n  font-size: 0.8em;\n  text-align: center;\n  color: white;\n  font-weight: 200; }\n\n.text__italic {\n  font-family: \"OpenSans-Italic\", \"Open Sans\", sans-serif;\n  font-style: italic;\n  opacity: 0.8; }\n\n.text__center {\n  text-align: center; }\n\n.text__left {\n  text-align: left; }\n\n.text__dark {\n  color: #1F3654; }\n\n.text__error {\n  color: #FF3E7D;\n  font-size: 0.8em;\n  padding-top: 5px;\n  padding-bottom: 5px; }\n\n.text__pad-aside {\n  padding-left: 10px;\n  padding-right: 10px; }\n\n/* ******** */\n.pad__tb-smallest {\n  padding-top: 5px;\n  padding-bottom: 5px; }\n\n.pad__tb-small {\n  padding-top: 10px;\n  padding-bottom: 10px; }\n\n.pad__tb-middle-light {\n  padding-top: 15px;\n  padding-bottom: 15px; }\n\n.pad__tb-middle, .container__menu-center .a {\n  padding-top: 20px;\n  padding-bottom: 20px; }\n\n.pad__tb-big, .block__footer {\n  padding-top: 30px;\n  padding-bottom: 30px; }\n\n.pad__tb-big-very, .block {\n  padding-top: 60px;\n  padding-bottom: 60px; }\n\n.pad__t-big {\n  padding-top: 60px; }\n\n.pad__b-big {\n  padding-bottom: 60px; }\n\n.pad__big-bot {\n  padding-bottom: 40px; }\n\n.pad__without-bot {\n  padding-bottom: 0; }\n\n.pad__auth-form {\n  padding-top: 10%; }\n\n.pad__auth-form {\n  padding-top: 100px; }\n\n/* ******** */\n.main-container {\n  min-height: 100vh;\n  margin: 0px auto; }\n\n.main-container-in {\n  position: relative;\n  width: 70%;\n  max-width: 1000px;\n  min-width: 200px;\n  margin: 0px auto; }\n\n.main-container-in-small {\n  max-width: 500px; }\n\n.container__left {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  /* Safari */\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start; }\n\n.container__right {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  /* Safari */\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end; }\n\n.container__after-header {\n  margin-top: 100px;\n  position: relative; }\n\n@media (max-width: 800px) {\n  .main-container-in {\n    width: 85%; } }\n\n@media (max-width: 400px) {\n  .main-container-in {\n    width: 90%; } }\n\n/* ******** */\n.info-block {\n  padding: 16px 0 16px 0; }\n\n/* ******** */\n.img__center {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 86px;\n  height: 107px;\n  padding: 40px 0 0 0; }\n\n.img__big-overflow {\n  width: 80%;\n  max-width: 400px;\n  margin-left: 20%;\n  margin-top: -80px; }\n\n.img__chackbox {\n  cursor: pointer;\n  padding-right: 5px; }\n\n.icon__social, .icon__social-left {\n  width: 1.5em;\n  height: 1.5em;\n  margin-right: 2.5em;\n  cursor: pointer; }\n\n.icon__social-left {\n  margin-right: 0em;\n  margin-left: 2.5em; }\n\n/* ******** */\n.modal-bgc {\n  z-index: 9998;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: #979797;\n  opacity: 0.6; }\n\n.modal {\n  z-index: 9999;\n  position: absolute;\n  top: 45px;\n  right: 10px;\n  background-color: white;\n  color: #1F3654;\n  width: 300px;\n  padding: 20px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);\n  border-radius: 5px; }\n  .modal__h {\n    padding: 10px 0; }\n  .modal__text, .modal__alarm, .modal__nav {\n    padding: 5px 0; }\n  .modal__alarm {\n    font-size: 0.8em;\n    color: #FF3E7D;\n    cursor: pointer; }\n    .modal__alarm img {\n      height: 0.8em;\n      margin-right: 5px; }\n  .modal__nav {\n    margin-top: 20px;\n    cursor: pointer; }\n    .modal__nav img {\n      height: 1em;\n      margin-right: 10px; }\n\n.modal__confirm {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  width: 500px; }\n\n.modal__clickeble {\n  padding-left: 15px;\n  color: #ff3e7d;\n  cursor: pointer; }\n\n.modal-input-characters {\n  display: block;\n  border: none;\n  width: 50%;\n  margin: 25px 25%;\n  background: repeating-linear-gradient(90deg, dimgrey 0, dimgrey 1ch, transparent 0, transparent 1.5ch) 0 100%/8.5ch 2px no-repeat;\n  font: 5ch droid sans mono, consolas, monospace;\n  letter-spacing: 0.5ch; }\n  .modal-input-characters:focus {\n    outline: none;\n    color: #1F3654; }\n\n@media (max-width: 600px) {\n  .modal__confirm {\n    width: 400px; } }\n\n@media (max-width: 400px) {\n  .modal, .modal__confirm {\n    width: 250px; } }\n\n/* ************** */\n.width-middle-plass {\n  width: 60%;\n  margin-left: auto;\n  margin-right: auto; }\n\n@media (max-width: 400px) {\n  .width-middle-plass {\n    width: 100%; } }\n\n/* ************** */\n.link {\n  font-weight: bold;\n  font-family: \"OpenSans-Semibold\", \"Open Sans\", sans-serif;\n  color: #1F3654;\n  cursor: pointer;\n  text-decoration: none; }\n\n.link:focus {\n  outline: 0; }\n\n.link-light {\n  font-weight: normal; }\n\n/* ************** */\n.hidden {\n  display: none;\n  opacity: 0;\n  transition: all 2s linear; }\n\n.overflow-hidden {\n  overflow: hidden; }\n\n/* ********************************  */\n.circle {\n  width: 200px;\n  height: 200px;\n  margin: 20px auto;\n  background-color: #d0dade;\n  border-radius: 50%;\n  position: relative; }\n\n.circle-small {\n  width: 25px;\n  height: 25px;\n  background-color: #FF3E7D;\n  position: absolute;\n  bottom: -10px;\n  right: -10px;\n  padding: 20px; }\n\n.circle-in-img {\n  width: 40%;\n  position: absolute;\n  top: 25%;\n  left: 31%; }\n\n.ico_logo {\n  width: 100%;\n  max-height: 15vh;\n  margin-top: 10vh;\n  margin-bottom: 8vh; }\n\n.text-bold {\n  font-weight: bold;\n  font-family: \"OpenSans-Semibold\", \"Open Sans\", sans-serif; }\n\n.text-center {\n  margin-top: 2.5vh;\n  color: #1F3654;\n  text-align: center; }\n\n.text-left {\n  margin-top: 1em;\n  margin-bottom: 1em;\n  color: #1F3654;\n  font-size: 1.5em;\n  text-align: left; }\n\n.text-right {\n  margin-top: 1em;\n  color: #1F3654;\n  text-align: right; }\n\n.text-big {\n  font-size: 2.5em; }\n\n.text-middle {\n  font-size: 1.5em; }\n\n.text-center__big {\n  margin-top: 5vh;\n  font-size: 1.5em;\n  text-align: center; }\n\n.opacity-none {\n  opacity: 0; }\n\n.btn-container {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  /* Safari */\n  -webkit-box-pack: left;\n      -ms-flex-pack: left;\n          justify-content: left; }\n\n.btn {\n  background: unset;\n  padding: 1.1em 2.4em;\n  font-size: 1.4em;\n  margin: 1em;\n  color: #1F3654;\n  cursor: pointer;\n  text-decoration: none;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  text-align: center;\n  border-radius: 60px;\n  border: 1px solid #ECEFF1; }\n\n.btn:hover, .btn:focus {\n  border: 1px solid #7caee2; }\n\n.btn:active {\n  background: #dde5f3; }\n\n.btn-one-centered {\n  width: 50%;\n  margin: 10px auto; }\n\n.btn-with-ico {\n  color: white;\n  background-color: #1976d2;\n  border: 1px solid #1976d2;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.btn-with-ico__clean {\n  background-color: unset;\n  border: unset;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.btn-ico {\n  height: 1.1em;\n  margin-right: 0.5em; }\n\n.error-background {\n  background-color: #ff3a3a;\n  color: white; }\n\n.info-header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row wrap;\n          flex-flow: row wrap;\n  /* Safari */\n  -ms-flex-line-pack: stretch;\n      align-content: stretch;\n  margin: 3em 0; }\n\n.info-header__img, .info-header__text {\n  font-size: 1.7em; }\n\n.info-header__img {\n  height: 1.2em; }\n\n.info-header__text {\n  padding-left: 10%; }\n\n/* ********************** */\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_index__ = __webpack_require__("./src/app/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(settingService, authService, titleService) {
        this.settingService = settingService;
        this.authService = authService;
        this.titleService = titleService;
        console.log(" constructor of app ");
        this.authService.retrieveCurrentUser();
        this.titleService.init();
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.scss")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ViewEncapsulation */].None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_index__["a" /* SettingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_index__["a" /* SettingService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_app_index__["f" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_index__["f" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_app_index__["h" /* TitleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_index__["h" /* TitleService */]) === "function" && _c || Object])
], AppComponent);

var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_routing_module__ = __webpack_require__("./src/app/routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_index__ = __webpack_require__("./src/app/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//If you use commons elements (ngSwitch, ngIf, ngFor, ...) of Angular2 you must import CommonModule in your app

//  to use FormGroup

// The module that includes http's providers





var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5_app_routing_module__["a" /* RoutingModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6_app_index__["a" /* SettingService */],
            __WEBPACK_IMPORTED_MODULE_6_app_index__["b" /* HelperService */],
            __WEBPACK_IMPORTED_MODULE_6_app_index__["c" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_6_app_index__["d" /* WebSocketService */],
            __WEBPACK_IMPORTED_MODULE_6_app_index__["e" /* ModalsService */],
            __WEBPACK_IMPORTED_MODULE_6_app_index__["f" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_6_app_index__["g" /* AuthGuardService */],
            __WEBPACK_IMPORTED_MODULE_6_app_index__["h" /* TitleService */],
            __WEBPACK_IMPORTED_MODULE_6_app_index__["i" /* PaypalService */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7_app_app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6_app_index__["j" /* MainComponent */],
            __WEBPACK_IMPORTED_MODULE_6_app_index__["k" /* AuthComponent */],
            __WEBPACK_IMPORTED_MODULE_6_app_index__["l" /* AppHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_6_app_index__["m" /* AppFooterComponent */],
            __WEBPACK_IMPORTED_MODULE_6_app_index__["n" /* AuthFormsComponent */],
            __WEBPACK_IMPORTED_MODULE_6_app_index__["o" /* ErrorMsgComponent */],
            __WEBPACK_IMPORTED_MODULE_6_app_index__["p" /* InfoComponent */],
            __WEBPACK_IMPORTED_MODULE_6_app_index__["q" /* VideoPlayerComponent */],
            __WEBPACK_IMPORTED_MODULE_6_app_index__["r" /* ModalsComponent */],
            __WEBPACK_IMPORTED_MODULE_6_app_index__["s" /* WelcomeComponent */],
            __WEBPACK_IMPORTED_MODULE_6_app_index__["t" /* VideoComponent */],
            __WEBPACK_IMPORTED_MODULE_6_app_index__["u" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_6_app_index__["v" /* PayoutComponent */],
            __WEBPACK_IMPORTED_MODULE_6_app_index__["w" /* AaaComponent */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7_app_app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/app/components/aaa/aaa.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n\n\n    <header class=\"site-header\">\n        <div class=\"site-header__inner\">\n            <div class=\"site-header__top\">\n                <div class=\"menu\"></div>\n                <div class=\"logo\"></div>\n                <div class=\"searchblock\"></div>\n                <div class=\"userblock\"></div>\n            </div>\n            <div class=\"site-header__bottom\">\n                <div class=\"site-navigation__wrapper\">\n                    <nav class=\"site-navigation\">\n                        <ul class=\"site-navigation__list\">\n                            <li class=\"site-navigation__item\"><a href=\"#\" class=\"site-navigation__link\">Home</a></li>\n                            <li class=\"site-navigation__item\"><a href=\"#\" class=\"site-navigation__link  site-navigation__link--active\">Explore</a></li>\n                            <li class=\"site-navigation__item\"><a href=\"#\" class=\"site-navigation__link\">Following</a></li>\n                        </ul>\n                    </nav>\n                </div>\n            </div>\n        </div>\n    </header>\n\n\n\n    <div class=\"feed  feed--explore\">\n\n        <div class=\"feed__container\">\n\n            <div class=\"shelf\">\n                <div class=\"btn-load-more\">\n                    <svg class=\"icon\" width=\"6\" height=\"10\">\n                        <use xlink:href=\"#ico-arrow-left\" />\n                    </svg>\n                </div>\n                <header class=\"shelf__header\">\n                    <h2 class=\"shelf__title\">Trending now</h2>\n                    <a href=\"\" class=\"see-all-link\">See all (<span class=\"see-all-link__number\">50</span>)</a>\n                </header>\n                <div class=\"shelf__content\">\n\n\n\n                    <article class=\"card\">\n                        <header class=\"card__header\">\n                             <div class=\"username\">\n                                <div class=\"username__main-info\">\n                                    <a href=\"#\">\n                                    <div class=\"username__avatar\"><img src=\"assets/images/avatar-1.jpg\" alt=\"\"></div>\n                                    <div class=\"username__nickname\">bobby.brown</div>\n                                </a>\n                                </div>\n                                <div class=\"username__secondary-info\"></div>\n                            </div>\n                         </header>\n                        <div class=\"card__content\">\n                            <a href=\"#\" class=\"card__link\" title=\"How To find your perfect lip in 5 minutes and bla-bla-bla\">\n                                <div class=\"card__tumbnail  card__tumbnail--has-tumbnail\"><img src=\"assets/images/tumb-1.jpg\" width=\"auto\" height=\"140\" alt=\"\" class=\"card__img\"></div>\n                                <div class=\"card__title\">\n                                    <span class=\"skin-color-indicator skin-color-indicator--1\"></span>\n                                    <span class=\"card__category\">Makeup Tips</span>\n                                    <h3 class=\"card__video-title\">How To find your perfect lip in 5 minutes and bla-bla-bla</h3>\n                                </div>\n                            </a>\n                        </div>\n                        <footer class=\"card__footer\">\n                            <div class=\"video-info\">\n                                <div class=\"video-info__watchers\">\n                                    <span class=\"video-info__icon\">\n                                        <svg class=\"icon\" width=\"9\" height=\"8\">\n                                            <use xlink:href=\"#ico-eye-small\" />\n                                        </svg>\n                                    </span>\n                                    <span class=\"video-info__number\">1,374</span>\n                                    <span class=\"video-info__name\">watching</span>\n                                </div>\n                            </div>\n                            <div class=\"card__menu-toggle\">\n                                <svg class=\"icon\" width=\"15\" height=\"3\">\n                                    <use xlink:href=\"#btn-more-small\" />\n                                </svg>\n                            </div>\n                        </footer>\n                    </article>\n\n                    <article class=\"card\">\n                        <header class=\"card__header\">\n                             <div class=\"username  username--has-avatar  username--default-avatar\">\n                                <div class=\"username__main-info\">                                        \n                                    <a href=\"#\">\n                                        <div class=\"username__avatar\"><span class=\"username__avatar-letter\">M</span></div>\n                                     <div class=\"username__nickname\">medison.eva</div>\n                                    </a>\n                                </div>\n                                <div class=\"username__secondary-info\"></div>\n                            </div>\n                         </header>\n                        <div class=\"card__content\">\n                            <a href=\"#\" class=\"card__link\" title=\"Make eyes look good\">\n                                <div class=\"card__tumbnail\"></div>\n                                <div class=\"card__title\">\n                                    <span class=\"card__category\">Highlighting</span>\n                                    <h3 class=\"card__video-title\">Make eyes look good</h3>\n                                </div>\n                            </a>\n                        </div>\n                        <footer class=\"card__footer\">\n                            <div class=\"video-info\">\n                                <div class=\"video-info__watchers\">\n                                    <span class=\"video-info__icon\">\n                                        <svg class=\"icon\" width=\"9\" height=\"8\">\n                                            <use xlink:href=\"#ico-eye-small\" />\n                                        </svg>\n                                    </span>\n                                    <span class=\"video-info__number\">1,374</span>\n                                    <span class=\"video-info__name\">watching</span>\n                                </div>\n                            </div>\n                            <div class=\"card__menu-toggle\">\n                                <svg class=\"icon\" width=\"15\" height=\"3\">\n                                    <use xlink:href=\"#btn-more-small\" />\n                                </svg>\n                            </div>\n                        </footer>\n                    </article>\n\n                    <article class=\"card\">\n                        <header class=\"card__header\">\n                             <div class=\"username\">\n                                <div class=\"username__main-info\">                                        \n                                    <a href=\"#\">\n                                    <div class=\"username__avatar\"><img src=\"assets/images/avatar-1.jpg\" alt=\"\"></div>\n                                    <div class=\"username__nickname\">bobby.brown</div>\n                                </a>\n                                </div>\n                                <div class=\"username__secondary-info\"></div>\n                            </div>\n                         </header>\n                        <div class=\"card__content\">\n                            <a href=\"#\" class=\"card__link\" title=\"How To find your perfect lip in 5 minutes and bla-bla-bla\">\n                                <div class=\"card__tumbnail    card__tumbnail--has-tumbnail\"><img src=\"assets/images/tumb-1.jpg\" width=\"auto\" height=\"140\" alt=\"\" class=\"card__img\"></div>\n                                <div class=\"card__title\">\n                                    <span class=\"skin-color-indicator skin-color-indicator--1\"></span>\n                                    <span class=\"card__category\">Makeup Tips</span>\n                                    <h3 class=\"card__video-title\">How To find your perfect lip in 5 minutes and bla-bla-bla</h3>\n                                </div>\n                            </a>\n                        </div>\n                        <footer class=\"card__footer\">\n                            <div class=\"video-info\">\n                                <div class=\"video-info__watchers\">\n                                    <span class=\"video-info__icon\">\n                                        <svg class=\"icon\" width=\"9\" height=\"8\">\n                                            <use xlink:href=\"#ico-eye-small\" />\n                                        </svg>\n                                    </span>\n                                    <span class=\"video-info__number\">1,374</span>\n                                    <span class=\"video-info__name\">watching</span>\n                                </div>\n                            </div>\n                            <div class=\"card__menu-toggle\">\n                                <svg class=\"icon\" width=\"15\" height=\"3\">\n                                    <use xlink:href=\"#btn-more-small\" />\n                                </svg>\n                            </div>\n                        </footer>\n                    </article>\n\n                    <article class=\"card\">\n                        <header class=\"card__header\">\n                             <div class=\"username\">\n                                <div class=\"username__main-info\">                                        \n                                    <a href=\"#\">\n                                    <div class=\"username__avatar  username__avatar--no-avatar\"><img src=\"#\" alt=\"\"></div>\n                                    <div class=\"username__nickname\">very.very.longusernameverylong</div>\n                                </a>\n                                </div>\n                                <div class=\"username__secondary-info\"></div>\n                            </div>\n                         </header>\n                        <div class=\"card__content\">\n                            <a href=\"#\" class=\"card__link\" title=\"How To find your perfect lip in 5 min\">\n                                <div class=\"card__tumbnail  card__tumbnail--no-tumbnail\"><img src=\"#\" width=\"auto\" height=\"140\" alt=\"\" class=\"card__img\"></div>\n                                <div class=\"card__title\">\n                                    <span class=\"skin-color-indicator skin-color-indicator--1\"></span>\n                                    <span class=\"card__category\">Makeup Tips</span>\n                                    <h3 class=\"card__video-title\">How To find your perfect lip in 5 min</h3>\n                                </div>\n                            </a>\n                        </div>\n                        <footer class=\"card__footer\">\n                            <div class=\"video-info\">\n                                <div class=\"video-info__watchers\">\n                                    <span class=\"video-info__icon\">\n                                        <svg class=\"icon\" width=\"9\" height=\"8\">\n                                            <use xlink:href=\"#ico-eye-small\" />\n                                        </svg>\n                                    </span>\n                                    <span class=\"video-info__number\">1,374</span>\n                                    <span class=\"video-info__name\">watching</span>\n                                </div>\n                            </div>\n                            <div class=\"card__menu-toggle\">\n                                <svg class=\"icon\" width=\"15\" height=\"3\">\n                                    <use xlink:href=\"#btn-more-small\" />\n                                </svg>\n                            </div>\n                        </footer>\n                    </article>\n\n                    <article class=\"card\">\n                        <header class=\"card__header\">\n                             <div class=\"username\">\n                                <div class=\"username__main-info\">                                        \n                                    <a href=\"#\">\n                                    <div class=\"username__avatar\"><img src=\"assets/images/avatar-1.jpg\" alt=\"\"></div>\n                                    <div class=\"username__nickname\">bobby.brown</div>\n                                </a>\n                                </div>\n                                <div class=\"username__secondary-info\"></div>\n                            </div>\n                         </header>\n                        <div class=\"card__content\">\n                            <a href=\"#\" class=\"card__link\" title=\"How To find your perfect lip in 5 minutes and bla-bla-bla\">\n                                <div class=\"card__tumbnail    card__tumbnail--has-tumbnail\"><img src=\"assets/images/tumb-1.jpg\" width=\"auto\" height=\"140\" alt=\"\" class=\"card__img\"></div>\n                                <div class=\"card__title\">\n                                    <span class=\"card__category\">Makeup Tips</span>\n                                    <h3 class=\"card__video-title\">How To find your perfect lip in 5 minutes and bla-bla-bla</h3>\n                                </div>\n                            </a>\n                        </div>\n                        <footer class=\"card__footer\">\n                            <div class=\"video-info\">\n                                <div class=\"video-info__watchers\">\n                                    <span class=\"video-info__icon\">\n                                        <svg class=\"icon\" width=\"9\" height=\"8\">\n                                            <use xlink:href=\"#ico-eye-small\" />\n                                        </svg>\n                                    </span>\n                                    <span class=\"video-info__number\">1,374</span>\n                                    <span class=\"video-info__name\">watching</span>\n                                </div>\n                            </div>\n                            <div class=\"card__menu-toggle\">\n                                <svg class=\"icon\" width=\"15\" height=\"3\">\n                                    <use xlink:href=\"#btn-more-small\" />\n                                </svg>\n                            </div>\n                        </footer>\n                    </article>\n\n\n                </div>\n            </div>\n        </div>\n        <div class=\"feed__container\">\n            <div class=\"shelf\">\n                <header class=\"shelf__header\">\n                    <h2 class=\"shelf__title\">Best in <span class=\"category-name\">Makeup tips</span></h2>\n                    <a href=\"#\" class=\"shelf__more-link\"></a>\n                </header>\n               <div class=\"shelf__content\">\n\n\n\n                    <article class=\"card\">\n                        <header class=\"card__header\">\n                             <div class=\"username\">\n                                <div class=\"username__main-info\">                                        <a href=\"#\">\n                                    <div class=\"username__avatar\"><img src=\"assets/images/avatar-1.jpg\" alt=\"\"></div>\n                                    <div class=\"username__nickname\">bobby.brown</div>\n                                </a>\n                                </div>\n                                <div class=\"username__secondary-info\"></div>\n                            </div>\n                         </header>\n                        <div class=\"card__content\">\n                            <a href=\"#\" class=\"card__link\" title=\"How To find your perfect lip in 5 minutes and bla-bla-bla\">\n                                <div class=\"card__tumbnail  card__tumbnail--has-tumbnail\"><img src=\"assets/images/tumb-1.jpg\" width=\"auto\" height=\"140\" alt=\"\" class=\"card__img\"></div>\n                                <div class=\"card__title\">\n                                    <span class=\"skin-color-indicator skin-color-indicator--1\"></span>\n                                    <span class=\"card__category\">Makeup Tips</span>\n                                    <h3 class=\"card__video-title\">How To find your perfect lip in 5 minutes and bla-bla-bla</h3>\n                                </div>\n                            </a>\n                        </div>\n                        <footer class=\"card__footer\">\n                            <div class=\"video-info\">\n                                <div class=\"video-info__watchers\">\n                                    <span class=\"video-info__icon\">\n                                        <svg class=\"icon\" width=\"9\" height=\"8\">\n                                            <use xlink:href=\"#ico-eye-small\" />\n                                        </svg>\n                                    </span>\n                                    <span class=\"video-info__number\">1,374</span>\n                                    <span class=\"video-info__name\">watching</span>\n                                </div>\n                            </div>\n                            <div class=\"card__menu-toggle\">\n                                <svg class=\"icon\" width=\"15\" height=\"3\">\n                                    <use xlink:href=\"#btn-more-small\" />\n                                </svg>\n                            </div>\n                        </footer>\n                    </article>\n\n                    <article class=\"card\">\n                        <header class=\"card__header\">\n                             <div class=\"username  username--has-avatar  username--default-avatar\">\n                                <div class=\"username__main-info\">                                        \n                                    <a href=\"#\">\n                                        <div class=\"username__avatar\"><span class=\"username__avatar-letter\">M</span></div>\n                                     <div class=\"username__nickname\">medison.eva</div>\n                                    </a>\n                                </div>\n                                <div class=\"username__secondary-info\"></div>\n                            </div>\n                         </header>\n                        <div class=\"card__content\">\n                            <a href=\"#\" class=\"card__link\" title=\"Make eyes look good\">\n                                <div class=\"card__tumbnail\"></div>\n                                <div class=\"card__title\">\n                                    <span class=\"skin-color-indicator skin-color-indicator--1\"></span>\n                                    <span class=\"card__category\">Highlighting</span>\n                                    <h3 class=\"card__video-title\">Make eyes look good</h3>\n                                </div>\n                            </a>\n                        </div>\n                        <footer class=\"card__footer\">\n                            <div class=\"video-info\">\n                                <div class=\"video-info__watchers\">\n                                    <span class=\"video-info__icon\">\n                                        <svg class=\"icon\" width=\"9\" height=\"8\">\n                                            <use xlink:href=\"#ico-eye-small\" />\n                                        </svg>\n                                    </span>\n                                    <span class=\"video-info__number\">1,374</span>\n                                    <span class=\"video-info__name\">watching</span>\n                                </div>\n                            </div>\n                            <div class=\"card__menu-toggle\">\n                                <svg class=\"icon\" width=\"15\" height=\"3\">\n                                    <use xlink:href=\"#btn-more-small\" />\n                                </svg>\n                            </div>\n                        </footer>\n                    </article>\n\n                    <article class=\"card\">\n                        <header class=\"card__header\">\n                             <div class=\"username\">\n                                <div class=\"username__main-info\">                                        \n                                    <a href=\"#\">\n                                    <div class=\"username__avatar\"><img src=\"assets/images/avatar-1.jpg\" alt=\"\"></div>\n                                    <div class=\"username__nickname\">bobby.brown</div>\n                                </a>\n                                </div>\n                                <div class=\"username__secondary-info\"></div>\n                            </div>\n                         </header>\n                        <div class=\"card__content\">\n                            <a href=\"#\" class=\"card__link\"  title=\"How To find your perfect lip in 5 minutes and bla-bla-bla\">\n                                <div class=\"card__tumbnail    card__tumbnail--has-tumbnail\"><img src=\"assets/images/tumb-1.jpg\" width=\"auto\" height=\"140\" alt=\"\" class=\"card__img\"></div>\n                                <div class=\"card__title\">\n                                    <span class=\"skin-color-indicator skin-color-indicator--1\"></span>\n                                    <span class=\"card__category\">Makeup Tips</span>\n                                    <h3 class=\"card__video-title\">How To find your perfect lip in 5 minutes and bla-bla-bla</h3>\n                                </div>\n                            </a>\n                        </div>\n                        <footer class=\"card__footer\">\n                            <div class=\"video-info\">\n                                <div class=\"video-info__watchers\">\n                                    <span class=\"video-info__icon\">\n                                        <svg class=\"icon\" width=\"9\" height=\"8\">\n                                            <use xlink:href=\"#ico-eye-small\" />\n                                        </svg>\n                                    </span>\n                                    <span class=\"video-info__number\">1,374</span>\n                                    <span class=\"video-info__name\">watching</span>\n                                </div>\n                            </div>\n                            <div class=\"card__menu-toggle\">\n                                <svg class=\"icon\" width=\"15\" height=\"3\">\n                                    <use xlink:href=\"#btn-more-small\" />\n                                </svg>\n                            </div>\n                        </footer>\n                    </article>\n\n                    <article class=\"card\">\n                        <header class=\"card__header\">\n                             <div class=\"username\">\n                                <div class=\"username__main-info\">                                        \n                                    <a href=\"#\">\n                                    <div class=\"username__avatar  username__avatar--no-avatar\"><img src=\"#\" alt=\"\"></div>\n                                    <div class=\"username__nickname\">very.very.longusernameverylong</div>\n                                </a>\n                                </div>\n                                <div class=\"username__secondary-info\"></div>\n                            </div>\n                         </header>\n                        <div class=\"card__content\">\n                            <a href=\"#\" class=\"card__link\"  title=\"How To find your perfect lip in 5 min\">\n                                <div class=\"card__tumbnail   card__tumbnail--no-tumbnail\"><img src=\"#\" width=\"auto\" height=\"140\" alt=\"\" class=\"card__img\"></div>\n                                <div class=\"card__title\">\n                                    <span class=\"skin-color-indicator skin-color-indicator--1\"></span>\n                                    <span class=\"card__category\">Makeup Tips</span>\n                                    <h3 class=\"card__video-title\">How To find your perfect lip in 5 min</h3>\n                                </div>\n                            </a>\n                        </div>\n                        <footer class=\"card__footer\">\n                            <div class=\"video-info\">\n                                <div class=\"video-info__watchers\">\n                                    <span class=\"video-info__icon\">\n                                        <svg class=\"icon\" width=\"9\" height=\"8\">\n                                            <use xlink:href=\"#ico-eye-small\" />\n                                        </svg>\n                                    </span>\n                                    <span class=\"video-info__number\">1,374</span>\n                                    <span class=\"video-info__name\">watching</span>\n                                </div>\n                            </div>\n                            <div class=\"card__menu-toggle\">\n                                <svg class=\"icon\" width=\"15\" height=\"3\">\n                                    <use xlink:href=\"#btn-more-small\" />\n                                </svg>\n                            </div>\n                        </footer>\n                    </article>\n\n                    <article class=\"card\">\n                        <header class=\"card__header\">\n                             <div class=\"username\">\n                                <div class=\"username__main-info\">                                        \n                                    <a href=\"#\">\n                                    <div class=\"username__avatar\"><img src=\"assets/images/avatar-1.jpg\" alt=\"\"></div>\n                                    <div class=\"username__nickname\">bobby.brown</div>\n                                </a>\n                                </div>\n                                <div class=\"username__secondary-info\"></div>\n                            </div>\n                         </header>\n                        <div class=\"card__content\">\n                            <a href=\"#\" class=\"card__link\"   title=\"How To find your perfect lip in 5 minutes and bla-bla-bla\">\n                                <div class=\"card__tumbnail    card__tumbnail--has-tumbnail\"><img src=\"assets/images/tumb-1.jpg\" width=\"auto\" height=\"140\" alt=\"\" class=\"card__img\"></div>\n                                <div class=\"card__title\">\n                                    <span class=\"skin-color-indicator skin-color-indicator--1\"></span>\n                                    <span class=\"card__category\">Makeup Tips</span>\n                                    <h3 class=\"card__video-title\">How To find your perfect lip in 5 minutes and bla-bla-bla</h3>\n                                </div>\n                            </a>\n                        </div>\n                        <footer class=\"card__footer\">\n                            <div class=\"video-info\">\n                                <div class=\"video-info__watchers\">\n                                    <span class=\"video-info__icon\">\n                                        <svg class=\"icon\" width=\"9\" height=\"8\">\n                                            <use xlink:href=\"#ico-eye-small\" />\n                                        </svg>\n                                    </span>\n                                    <span class=\"video-info__number\">1,374</span>\n                                    <span class=\"video-info__name\">watching</span>\n                                </div>\n                            </div>\n                            <div class=\"card__menu-toggle\">\n                                <svg class=\"icon\" width=\"15\" height=\"3\">\n                                    <use xlink:href=\"#btn-more-small\" />\n                                </svg>\n                            </div>\n                        </footer>\n                    </article>\n\n\n                </div>\n            </div>\n            <div class=\"shelf\">\n                <header class=\"shelf__header\">\n                    <h2 class=\"shelf__title\">Best in <span class=\"category-name\">Highlighting</span>\n                    </h2>\n                    <a href=\"#\" class=\"shelf__more-link\"></a>\n                </header>\n               <div class=\"shelf__content\">\n\n\n\n                    <article class=\"card\">\n                        <header class=\"card__header\">\n                             <div class=\"username\">\n                                <div class=\"username__main-info\">                                        <a href=\"#\">\n                                    <div class=\"username__avatar\"><img src=\"assets/images/avatar-1.jpg\" alt=\"\"></div>\n                                    <div class=\"username__nickname\">bobby.brown</div>\n                                </a>\n                                </div>\n                                <div class=\"username__secondary-info\"></div>\n                            </div>\n                         </header>\n                        <div class=\"card__content\">\n                            <a href=\"#\" class=\"card__link\"   title=\"How To find your perfect lip in 5 minutes and bla-bla-bla\">\n                                <div class=\"card__tumbnail  card__tumbnail--has-tumbnail\"><img src=\"assets/images/tumb-1.jpg\" width=\"auto\" height=\"140\" alt=\"\" class=\"card__img\"></div>\n                                <div class=\"card__title\">\n                                    <span class=\"skin-color-indicator skin-color-indicator--1\"></span>\n                                    <span class=\"card__category\">Makeup Tips</span>\n                                    <h3 class=\"card__video-title\">How To find your perfect lip in 5 minutes and bla-bla-bla</h3>\n                                </div>\n                            </a>\n                        </div>\n                        <footer class=\"card__footer\">\n                            <div class=\"video-info\">\n                                <div class=\"video-info__watchers\">\n                                    <span class=\"video-info__icon\">\n                                        <svg class=\"icon\" width=\"9\" height=\"8\">\n                                            <use xlink:href=\"#ico-eye-small\" />\n                                        </svg>\n                                    </span>\n                                    <span class=\"video-info__number\">1,374</span>\n                                    <span class=\"video-info__name\">watching</span>\n                                </div>\n                            </div>\n                            <div class=\"card__menu-toggle\">\n                                <svg class=\"icon\" width=\"15\" height=\"3\">\n                                    <use xlink:href=\"#btn-more-small\" />\n                                </svg>\n                            </div>\n                        </footer>\n                    </article>\n\n                    <article class=\"card\">\n                        <header class=\"card__header\">\n                             <div class=\"username  username--has-avatar  username--default-avatar\">\n                                <div class=\"username__main-info\">                                        \n                                    <a href=\"#\">\n                                        <div class=\"username__avatar\"><span class=\"username__avatar-letter\">M</span></div>\n                                     <div class=\"username__nickname\">medison.eva</div>\n                                    </a>\n                                </div>\n                                <div class=\"username__secondary-info\"></div>\n                            </div>\n                         </header>\n                        <div class=\"card__content\">\n                            <a href=\"#\" class=\"card__link\"   title=\"Make eyes look good\">\n                                <div class=\"card__tumbnail\"></div>\n                                <div class=\"card__title\">\n                                    <span class=\"card__category\">Highlighting</span>\n                                    <h3 class=\"card__video-title\">Make eyes look good</h3>\n                                </div>\n                            </a>\n                        </div>\n                        <footer class=\"card__footer\">\n                            <div class=\"video-info\">\n                                <div class=\"video-info__watchers\">\n                                    <span class=\"video-info__icon\">\n                                        <svg class=\"icon\" width=\"9\" height=\"8\">\n                                            <use xlink:href=\"#ico-eye-small\" />\n                                        </svg>\n                                    </span>\n                                    <span class=\"video-info__number\">1,374</span>\n                                    <span class=\"video-info__name\">watching</span>\n                                </div>\n                            </div>\n                            <div class=\"card__menu-toggle\">\n                                <svg class=\"icon\" width=\"15\" height=\"3\">\n                                    <use xlink:href=\"#btn-more-small\" />\n                                </svg>\n                            </div>\n                        </footer>\n                    </article>\n\n                    <article class=\"card\">\n                        <header class=\"card__header\">\n                             <div class=\"username\">\n                                <div class=\"username__main-info\">                                        \n                                    <a href=\"#\">\n                                    <div class=\"username__avatar\"><img src=\"assets/images/avatar-1.jpg\" alt=\"\"></div>\n                                    <div class=\"username__nickname\">bobby.brown</div>\n                                </a>\n                                </div>\n                                <div class=\"username__secondary-info\"></div>\n                            </div>\n                         </header>\n                        <div class=\"card__content\">\n                            <a href=\"#\" class=\"card__link\" title=\"How To find your perfect lip in 5 minutes and bla-bla-bla\">\n                                <div class=\"card__tumbnail    card__tumbnail--has-tumbnail\"><img src=\"assets/images/tumb-1.jpg\" width=\"auto\" height=\"140\" alt=\"\" class=\"card__img\"></div>\n                                <div class=\"card__title\">\n                                    <span class=\"skin-color-indicator skin-color-indicator--1\"></span>\n                                    <span class=\"card__category\">Makeup Tips</span>\n                                    <h3 class=\"card__video-title\">How To find your perfect lip in 5 minutes and bla-bla-bla</h3>\n                                </div>\n                            </a>\n                        </div>\n                        <footer class=\"card__footer\">\n                            <div class=\"video-info\">\n                                <div class=\"video-info__watchers\">\n                                    <span class=\"video-info__icon\">\n                                        <svg class=\"icon\" width=\"9\" height=\"8\">\n                                            <use xlink:href=\"#ico-eye-small\" />\n                                        </svg>\n                                    </span>\n                                    <span class=\"video-info__number\">1,374</span>\n                                    <span class=\"video-info__name\">watching</span>\n                                </div>\n                            </div>\n                            <div class=\"card__menu-toggle\">\n                                <svg class=\"icon\" width=\"15\" height=\"3\">\n                                    <use xlink:href=\"#btn-more-small\" />\n                                </svg>\n                            </div>\n                        </footer>\n                    </article>\n\n                    <article class=\"card\">\n                        <header class=\"card__header\">\n                             <div class=\"username\">\n                                <div class=\"username__main-info\">                                        \n                                    <a href=\"#\">\n                                    <div class=\"username__avatar  username__avatar--no-avatar\"><img src=\"#\" alt=\"\"></div>\n                                    <div class=\"username__nickname\">very.very.longusernameverylong</div>\n                                </a>\n                                </div>\n                                <div class=\"username__secondary-info\"></div>\n                            </div>\n                         </header>\n                        <div class=\"card__content\">\n                            <a href=\"#\" class=\"card__link\" title=\"How To find your perfect lip in 5 min\">\n                                <div class=\"card__tumbnail   card__tumbnail--no-tumbnail\"><img src=\"#\" width=\"auto\" height=\"140\" alt=\"\" class=\"card__img\"></div>\n                                <div class=\"card__title\">\n                                    <span class=\"skin-color-indicator skin-color-indicator--1\"></span>\n                                    <span class=\"card__category\">Makeup Tips</span>\n                                    <h3 class=\"card__video-title\">How To find your perfect lip in 5 min</h3>\n                                </div>\n                            </a>\n                        </div>\n                        <footer class=\"card__footer\">\n                            <div class=\"video-info\">\n                                <div class=\"video-info__watchers\">\n                                    <span class=\"video-info__icon\">\n                                        <svg class=\"icon\" width=\"9\" height=\"8\">\n                                            <use xlink:href=\"#ico-eye-small\" />\n                                        </svg>\n                                    </span>\n                                    <span class=\"video-info__number\">1,374</span>\n                                    <span class=\"video-info__name\">watching</span>\n                                </div>\n                            </div>\n                            <div class=\"card__menu-toggle\">\n                                <svg class=\"icon\" width=\"15\" height=\"3\">\n                                    <use xlink:href=\"#btn-more-small\" />\n                                </svg>\n                            </div>\n                        </footer>\n                    </article>\n\n                    <article class=\"card\">\n                        <header class=\"card__header\">\n                             <div class=\"username\">\n                                <div class=\"username__main-info\">                                        \n                                    <a href=\"#\">\n                                    <div class=\"username__avatar\"><img src=\"assets/images/avatar-1.jpg\" alt=\"\"></div>\n                                    <div class=\"username__nickname\">bobby.brown</div>\n                                </a>\n                                </div>\n                                <div class=\"username__secondary-info\"></div>\n                            </div>\n                         </header>\n                        <div class=\"card__content\">\n                            <a href=\"#\" class=\"card__link\" title=\"How To find your perfect lip in 5 minutes and bla-bla-bla\">\n                                <div class=\"card__tumbnail    card__tumbnail--has-tumbnail\"><img src=\"assets/images/tumb-1.jpg\" width=\"auto\" height=\"140\" alt=\"\" class=\"card__img\"></div>\n                                <div class=\"card__title\">\n                                    <span class=\"skin-color-indicator skin-color-indicator--1\"></span>\n                                    <span class=\"card__category\">Makeup Tips</span>\n                                    <h3 class=\"card__video-title\">How To find your perfect lip in 5 minutes and bla-bla-bla</h3>\n                                </div>\n                            </a>\n                        </div>\n                        <footer class=\"card__footer\">\n                            <div class=\"video-info\">\n                                <div class=\"video-info__watchers\">\n                                    <span class=\"video-info__icon\">\n                                        <svg class=\"icon\" width=\"9\" height=\"8\">\n                                            <use xlink:href=\"#ico-eye-small\" />\n                                        </svg> \n                                    </span>\n                                    <span class=\"video-info__number\">1,374</span>\n                                    <span class=\"video-info__name\">watching</span>\n                                </div>\n                            </div>\n                            <div class=\"card__menu-toggle\">\n                                <svg class=\"icon\" width=\"15\" height=\"3\">\n                                    <use xlink:href=\"#btn-more-small\" />\n                                </svg>\n                            </div>\n                        </footer>\n                    </article>\n\n\n                </div>\n            </div>\n        </div>\n        <div class=\"loader\">\n            <button type=\"button\" class=\"button button-pink button--load-more\">Load more</button>\n        </div>\n    </div>\n\n    <footer class=\"site-footer\">\n        <div class=\"site-footer__inner\">\n        </div>\n    </footer>\n\n</div>\n\n<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display: none;\"><symbol id=\"btn-more-small\" viewBox=\"0 0 15 3\"><title>btn-more-small</title><title> btn-more-small</title><desc> Created with Sketch.</desc><g fill=\"none\"><g fill=\"#4A5D76\"><circle cx=\"1.5\" cy=\"1.5\" r=\"1.5\"/><circle cx=\"7.5\" cy=\"1.5\" r=\"1.5\"/><circle cx=\"13.5\" cy=\"1.5\" r=\"1.5\"/></g></g></symbol><symbol id=\"ico-arrow-left\" viewBox=\"0 0 6 12\"><title>ico-arrow-left</title><title> 1CDC06E5-C913-4A6F-888F-25A7630D7326</title><desc> Created with sketchtool.</desc><g fill=\"none\"><g fill=\"#D8D8D8\"><path d=\"M6.2 6C6.2 5.7 6.1 5.4 5.9 5.2L1.9 1.2C1.5 0.8 0.8 0.8 0.5 1.2L0.1 1.5C-0.3 1.9-0.3 2.6 0.1 3L3.2 6 0.1 9C-0.3 9.4-0.3 10.1 0.1 10.5L0.5 10.8C0.8 11.2 1.5 11.2 1.9 10.8L5.9 6.8C6.1 6.6 6.2 6.3 6.2 6Z\"/></g></g></symbol><symbol id=\"ico-eye-small\" viewBox=\"0 0 11 9\"><title>ico-eye-small</title><title> 8635A01E-6466-480E-B2C3-C9AA3696EEA8</title><desc> Created with sketchtool.</desc><g fill=\"none\"><g fill=\"#4A5D76\"><g transform=\"translate(-353 -406)translate(336 120)translate(17 19)translate(0 37)translate(0 225)translate(0 5)\"><polygon points=\"5.5 3 5.5 3 5.6 3 5.6 3 5.6 3 5.6 3 5.6 3 5.7 3 5.7 3 5.7 3 5.7 3 5.7 3 5.7 3 5.8 3 5.8 3 5.8 3 5.8 3 5.8 3 5.9 3 5.9 3 5.9 3.1 5.9 3.1 5.9 3.1 5.9 3.1 6 3.1 6 3.1 6 3.1 6 3.1 6 3.1 6 3.1 6.1 3.1 6.1 3.1 6.1 3.1 6.1 3.1 6.1 3.1 6.1 3.1 6.2 3.2 6.2 3.2 6.2 3.2 6.2 3.2 6.2 3.2 6.2 3.2 6.3 3.2 6.3 3.2 6.3 3.2 6.3 3.2 6.3 3.2 6.3 3.3 6.4 3.3 6.4 3.3 6.4 3.3 6.4 3.3 6.4 3.3 6.4 3.3 6.4 3.3 6.5 3.3 6.5 3.4 6.5 3.4 6.5 3.4 6.5 3.4 6.5 3.4 6.5 3.4 6.5 3.4 6.6 3.4 6.6 3.5 6.6 3.5 6.6 3.5 6.6 3.5 6.6 3.5 6.6 3.5 6.6 3.5 6.7 3.5 6.7 3.6 6.7 3.6 6.7 3.6 6.7 3.6 6.7 3.6 6.7 3.6 6.7 3.6 6.7 3.7 6.8 3.7 6.8 3.7 6.8 3.7 6.8 3.7 6.8 3.7 6.8 3.8 6.8 3.8 6.8 3.8 6.8 3.8 6.8 3.8 6.8 3.8 6.9 3.9 6.9 3.9 6.9 3.9 6.9 3.9 6.9 3.9 6.9 3.9 6.9 4 6.9 4 6.9 4 6.9 4 6.9 4 6.9 4 6.9 4.1 6.9 4.1 6.9 4.1 6.9 4.1 7 4.1 7 4.1 7 4.2 7 4.2 7 4.2 7 4.2 7 4.2 7 4.3 7 4.3 7 4.3 7 4.3 7 4.3 7 4.3 7 4.4 7 4.4 7 4.4 7 4.4 7 4.4 7 4.5 7 4.5 7 4.5 7 4.5 7 4.5 7 4.6 7 4.6 7 4.6 7 4.6 7 4.6 7 4.7 7 4.7 7 4.7 7 4.7 7 4.7 7 4.7 7 4.8 7 4.8 7 4.8 7 4.8 7 4.8 7 4.9 7 4.9 6.9 4.9 6.9 4.9 6.9 4.9 6.9 4.9 6.9 5 6.9 5 6.9 5 6.9 5 6.9 5 6.9 5 6.9 5.1 6.9 5.1 6.9 5.1 6.9 5.1 6.9 5.1 6.9 5.2 6.8 5.2 6.8 5.2 6.8 5.2 6.8 5.2 6.8 5.2 6.8 5.2 6.8 5.3 6.8 5.3 6.8 5.3 6.8 5.3 6.8 5.3 6.7 5.3 6.7 5.4 6.7 5.4 6.7 5.4 6.7 5.4 6.7 5.4 6.7 5.4 6.7 5.4 6.7 5.5 6.6 5.5 6.6 5.5 6.6 5.5 6.6 5.5 6.6 5.5 6.6 5.5 6.6 5.5 6.6 5.6 6.5 5.6 6.5 5.6 6.5 5.6 6.5 5.6 6.5 5.6 6.5 5.6 6.5 5.6 6.5 5.7 6.4 5.7 6.4 5.7 6.4 5.7 6.4 5.7 6.4 5.7 6.4 5.7 6.4 5.7 6.3 5.7 6.3 5.8 6.3 5.8 6.3 5.8 6.3 5.8 6.3 5.8 6.2 5.8 6.2 5.8 6.2 5.8 6.2 5.8 6.2 5.8 6.2 5.8 6.1 5.9 6.1 5.9 6.1 5.9 6.1 5.9 6.1 5.9 6.1 5.9 6 5.9 6 5.9 6 5.9 6 5.9 6 5.9 6 5.9 5.9 5.9 5.9 5.9 5.9 5.9 5.9 5.9 5.9 6 5.9 6 5.8 6 5.8 6 5.8 6 5.8 6 5.8 6 5.7 6 5.7 6 5.7 6 5.7 6 5.7 6 5.7 6 5.6 6 5.6 6 5.6 6 5.6 6 5.6 6 5.5 6 5.5 6 5.5 6 5.5 6 5.5 6 5.4 6 5.4 6 5.4 6 5.4 6 5.4 6 5.3 6 5.3 6 5.3 6 5.3 6 5.3 6 5.3 6 5.2 6 5.2 6 5.2 6 5.2 6 5.2 6 5.1 6 5.1 6 5.1 5.9 5.1 5.9 5.1 5.9 5.1 5.9 5 5.9 5 5.9 5 5.9 5 5.9 5 5.9 5 5.9 4.9 5.9 4.9 5.9 4.9 5.9 4.9 5.9 4.9 5.9 4.9 5.9 4.8 5.8 4.8 5.8 4.8 5.8 4.8 5.8 4.8 5.8 4.8 5.8 4.7 5.8 4.7 5.8 4.7 5.8 4.7 5.8 4.7 5.8 4.7 5.7 4.6 5.7 4.6 5.7 4.6 5.7 4.6 5.7 4.6 5.7 4.6 5.7 4.6 5.7 4.5 5.7 4.5 5.6 4.5 5.6 4.5 5.6 4.5 5.6 4.5 5.6 4.5 5.6 4.5 5.6 4.4 5.6 4.4 5.5 4.4 5.5 4.4 5.5 4.4 5.5 4.4 5.5 4.4 5.5 4.4 5.5 4.3 5.5 4.3 5.4 4.3 5.4 4.3 5.4 4.3 5.4 4.3 5.4 4.3 5.4 4.3 5.4 4.3 5.3 4.2 5.3 4.2 5.3 4.2 5.3 4.2 5.3 4.2 5.3 4.2 5.2 4.2 5.2 4.2 5.2 4.2 5.2 4.2 5.2 4.2 5.2 4.1 5.2 4.1 5.1 4.1 5.1 4.1 5.1 4.1 5.1 4.1 5.1 4.1 5 4.1 5 4.1 5 4.1 5 4.1 5 4.1 5 4.1 4.9 4.1 4.9 4.1 4.9 4.1 4.9 4 4.9 4 4.9 4 4.8 4 4.8 4 4.8 4 4.8 4 4.8 4 4.7 4 4.7 4 4.7 4 4.7 4 4.7 4 4.7 4 4.6 4 4.6 4 4.6 4 4.6 4 4.6 4 4.5 4 4.5 4 4.5 4 4.5 4 4.5 4 4.4 4 4.4 4 4.4 4 4.4 4 4.4 4 4.3 4 4.3 4 4.3 4 4.3 4 4.3 4 4.3 4 4.2 4 4.2 4 4.2 4 4.2 4 4.2 4 4.1 4 4.1 4.1 4.1 4.1 4.1 4.1 4.1 4.1 4.1 4.1 4 4.1 4 4.1 4 4.1 4 4.1 4 4.1 4 4.1 3.9 4.1 3.9 4.1 3.9 4.1 3.9 4.1 3.9 4.1 3.9 4.2 3.8 4.2 3.8 4.2 3.8 4.2 3.8 4.2 3.8 4.2 3.8 4.2 3.7 4.2 3.7 4.2 3.7 4.2 3.7 4.2 3.7 4.3 3.7 4.3 3.6 4.3 3.6 4.3 3.6 4.3 3.6 4.3 3.6 4.3 3.6 4.3 3.6 4.3 3.5 4.4 3.5 4.4 3.5 4.4 3.5 4.4 3.5 4.4 3.5 4.4 3.5 4.4 3.5 4.4 3.4 4.5 3.4 4.5 3.4 4.5 3.4 4.5 3.4 4.5 3.4 4.5 3.4 4.5 3.4 4.5 3.3 4.6 3.3 4.6 3.3 4.6 3.3 4.6 3.3 4.6 3.3 4.6 3.3 4.6 3.3 4.7 3.3 4.7 3.2 4.7 3.2 4.7 3.2 4.7 3.2 4.7 3.2 4.8 3.2 4.8 3.2 4.8 3.2 4.8 3.2 4.8 3.2 4.8 3.2 4.9 3.1 4.9 3.1 4.9 3.1 4.9 3.1 4.9 3.1 4.9 3.1 5 3.1 5 3.1 5 3.1 5 3.1 5 3.1 5 3.1 5.1 3.1 5.1 3.1 5.1 3.1 5.1 3.1 5.1 3 5.1 3 5.2 3 5.2 3 5.2 3 5.2 3 5.2 3 5.3 3 5.3 3 5.3 3 5.3 3 5.3 3 5.3 3 5.4 3 5.4 3 5.4 3 5.4 3 5.4 3 5.5 3 5.5 3 5.5 3\"/><path d=\"M3.1 6.3C3.7 6.8 4.6 7.2 5.5 7.2 6.4 7.2 7.3 6.8 7.9 6.3 8.7 5.6 9.3 4.9 9.3 4.4 9.3 4 8.7 3.3 7.9 2.6 7.3 2.1 6.4 1.7 5.5 1.7 4.6 1.7 3.7 2.1 3.1 2.6 2.3 3.3 1.7 4 1.7 4.4 1.7 4.9 2.3 5.6 3.1 6.3M5.5 7.9C3 7.9 1 5.5 1 4.4 1 3.4 3 1 5.5 1 8 1 10 3.4 10 4.4 10 5.5 8 7.9 5.5 7.9\" style=\"stroke-width:0.2;stroke:#4A5D76\"/></g></g></g></symbol></svg>"

/***/ }),

/***/ "./src/app/components/aaa/aaa.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@font-face {\n  font-family: 'Open Sans';\n  font-weight: 400;\n  src: url(\"/assets/Open_Sans/OpenSans-Light.ttf\"); }\n\n@font-face {\n  font-family: 'OpenSans-Semibold';\n  font-weight: 600;\n  src: url(\"/assets/Open_Sans/OpenSans-SemiBold.ttf\"); }\n\n@font-face {\n  font-family: 'OpenSans-Bold';\n  font-weight: 700;\n  src: url(\"/assets/Open_Sans/OpenSans-Bold.ttf\"); }\n\n@font-face {\n  font-family: 'OpenSans-Italic';\n  src: url(\"/assets/Open_Sans/OpenSans-Italic.ttf\"); }\n\n@-webkit-keyframes fadeInRight {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0); }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none; } }\n\n@keyframes fadeInRight {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0); }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none; } }\n\n@-webkit-keyframes fadeInUp {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 100%, 0);\n            transform: translate3d(0, 100%, 0); }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none; } }\n\n@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 100%, 0);\n            transform: translate3d(0, 100%, 0); }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none; } }\n\n.wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  min-height: 100vh;\n  background-color: rgba(236, 239, 241, 0.3);\n  font-family: 'Opensans', sans-serif;\n  box-sizing: border-box; }\n  .wrapper img {\n    max-width: 100%;\n    height: auto; }\n  .wrapper *,\n  .wrapper *:before,\n  .wrapper *:after {\n    box-sizing: inherit; }\n\n.visually-hidden {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  padding: 0;\n  border: 0;\n  clip: rect(0 0 0 0);\n  overflow: hidden; }\n\n.hidden {\n  display: none; }\n\n.feed {\n  max-width: 1244px;\n  height: auto;\n  margin: 0 auto; }\n\n.feed__container {\n  background-color: white;\n  border-radius: 12px;\n  box-shadow: 0 4px 8px 0 rgba(31, 54, 84, 0.1);\n  margin: 0 auto;\n  margin-bottom: 30px; }\n\n.shelf {\n  position: relative;\n  width: 100%;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both; }\n  .shelf .btn-load-more {\n    position: absolute;\n    right: 0;\n    top: 50%;\n    padding: 9px 3px;\n    transition: width, height, right 0.5s; }\n    .shelf .btn-load-more svg {\n      display: block;\n      margin: 0 auto; }\n    .shelf .btn-load-more:hover {\n      width: 28px;\n      height: 28px;\n      padding: 9px;\n      right: -14px;\n      background-color: #FF3E7D;\n      border-radius: 50%;\n      box-shadow: 0 1px 4px 0 rgba(218, 25, 88, 0.5); }\n      .shelf .btn-load-more:hover svg {\n        fill: white; }\n\n.shelf__header {\n  padding: 22px 18px;\n  padding-bottom: 10px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n\n.shelf__title {\n  font-family: 'OpenSans-Bold';\n  font-weight: 700;\n  line-height: 1;\n  margin: 0;\n  text-align: left; }\n  .shelf__title .category-name {\n    font-family: 'OpenSans-Bold';\n    font-weight: 700;\n    text-transform: capitalize; }\n\n.see-all-link {\n  color: #FF3E7D;\n  font-size: 14px;\n  font-weight: 600;\n  text-align: right; }\n  .see-all-link__number {\n    color: #FF3E7D; }\n  .see-all-link:hover {\n    text-decoration: underline; }\n\n.shelf__content {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -ms-flex-line-pack: start;\n      align-content: flex-start;\n  overflow: hidden; }\n\n.card {\n  width: 210px;\n  margin: 8px 20px;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both; }\n  .card:not(:nth-child(1)) {\n    display: none; }\n  @media (min-width: 492px) {\n    .card:nth-child(-n+2) {\n      display: block; } }\n  @media (min-width: 738px) {\n    .card:nth-child(-n+3) {\n      display: block; } }\n  @media (min-width: 984px) {\n    .card:nth-child(-n+4) {\n      display: block; } }\n  @media (min-width: 1230px) {\n    .card:nth-child(-n+5) {\n      display: block; } }\n\n.card__footer {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  margin: 4px; }\n\n.card__tumbnail {\n  width: 210px;\n  height: 140px;\n  margin-top: 8px;\n  margin-bottom: 12px;\n  background-color: #edf0f2;\n  border-radius: 8px;\n  border: 0.8px solid #edf0f2;\n  overflow: hidden; }\n  .card__tumbnail--has-tumbnail {\n    background-color: black; }\n  .card__tumbnail img {\n    width: auto;\n    height: 100%;\n    max-width: 100%;\n    display: block;\n    margin: 0 auto; }\n\n.card__title {\n  margin-top: 4px;\n  margin-bottom: 8px;\n  max-height: 38px;\n  font-family: 'OpenSans-Semibold';\n  font-weight: 600;\n  line-height: 1.4;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  color: #325b91;\n  font-size: 14px; }\n  .card__title:hover {\n    text-decoration: underline; }\n\n.card__category {\n  display: inline;\n  font-family: 'OpenSans-Bold';\n  font-weight: 700;\n  text-transform: capitalize;\n  color: #325b91; }\n  .card__category:after {\n    content: \" -\"; }\n\n.card__video-title {\n  color: #325b91;\n  text-transform: capitalize; }\n\n.card__menu-toggle svg {\n  width: 15px; }\n\n.card__video-title {\n  display: inline; }\n\n.video-info {\n  font-family: 'Open Sans';\n  font-weight: 400;\n  font-size: 12px;\n  color: #4a5d76; }\n  .video-info span {\n    color: #4a5d76;\n    line-height: 18px; }\n\n.video-info__icon {\n  fill: #4a5d76; }\n\n.skin-color-indicator {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  display: inline-block; }\n  .skin-color-indicator--1 {\n    background-color: #e7b48f; }\n\n.username {\n  font-size: 14px;\n  color: #1F3654; }\n  .username--default-avatar .username__avatar {\n    padding: 4px;\n    background: #ff5798;\n    font-family: 'OpenSans-Semibold';\n    font-size: 12px;\n    font-weight: 600;\n    color: white;\n    text-transform: uppercase;\n    text-align: center; }\n\n.username__avatar-letter {\n  color: white;\n  line-height: 12px;\n  display: block;\n  margin: 0 auto; }\n\n.username__avatar {\n  display: inline-block;\n  vertical-align: middle;\n  width: 20px;\n  height: 20px;\n  margin-right: 3px;\n  border-radius: 50%;\n  background-color: #edf0f2;\n  background-image: url(\"/assets/images/ico-profile-white.svg\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 50%;\n  border: 0.8px solid #edf0f2; }\n\n.username__nickname {\n  display: inline-block;\n  max-width: 165px;\n  vertical-align: middle;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis; }\n  .username__nickname:hover {\n    color: #325b91;\n    text-decoration: underline; }\n\n.site-header__top {\n  min-height: 56px;\n  background-color: white;\n  box-shadow: 0 2px 4px 0 rgba(31, 54, 84, 0.1); }\n\n.site-header__bottom {\n  box-shadow: 0 2px 6px 0 rgba(236, 239, 241, 0.5); }\n\n.site-navigation__list {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  margin-top: 20px; }\n\n.site-navigation__link {\n  display: block;\n  padding: 12px 25px;\n  color: #4a5d76; }\n  .site-navigation__link:hover, .site-navigation__link:focus, .site-navigation__link--active {\n    color: #1F3654; }\n  .site-navigation__link--active {\n    border-bottom: 2px solid #FF3E7D; }\n\n.site-footer {\n  min-height: 112px;\n  background-color: white; }\n\n.loader {\n  margin: 30px auto; }\n  .loader .button--load-more {\n    margin: 0 auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/components/aaa/aaa.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AaaComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AaaComponent = (function () {
    function AaaComponent() {
    }
    return AaaComponent;
}());
AaaComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-aaa',
        template: __webpack_require__("./src/app/components/aaa/aaa.component.html"),
        styles: [__webpack_require__("./src/app/components/aaa/aaa.component.scss")]
    })
], AaaComponent);

//# sourceMappingURL=aaa.component.js.map

/***/ }),

/***/ "./src/app/components/app-footer/app-footer.component.html":
/***/ (function(module, exports) {

module.exports = "\n \n \n            <div class=\"block\" >\n                <div class=\"main-container-in\" >\n\n                    <div class=\"container__menu-center pad__tb-big\" >\n\n                        <div class=\"a\" \n                        [routerLink]=\"['/info/company']\"  > About Company </div>\n\n                        <div class=\"a\" \n                        [routerLink]=\"['/info/terms']\"  > Terms of Usage </div>\n\n                        <div class=\"a\" \n                        [routerLink]=\"['/info/policy']\"  >  Privacy Policy </div>\n\n                    </div>\n\n                </div>\n            </div>\n\n\n\n            <div class=\"block block__color-second block__footer\" >\n                <div class=\"main-container-in footer cntr__mob-text-center\" >\n\n                    <p class=\"footer__rights cntr__row pad__tb-small cntr__flex-center\" >\n                        © 2017  Fabulive, All Right Reserved \n                    </p>\n\n                    <div class=\"footer__social cntr__row pad__tb-small\" >\n                        <a href=\"https://www.facebook.com/\" target=\"_blank\" >\n                            <img class=\"icon icon__social-left cntr__row-icon\" \n                            src=\"assets/images/ico-fb.svg\" />\n                        </a>\n                        <a href=\"https://twitter.com\" target=\"_blank\">\n                            <img class=\"icon icon__social-left cntr__row-icon\" \n                            src=\"assets/images/ico-tw.svg\" />\n                        </a>\n                        <a href=\"https://www.instagram.com\" target=\"_blank\" >\n                            <img class=\"icon icon__social-left cntr__row-icon\" \n                            src=\"assets/images/ico-insta.svg\" />\n                        </a>\n                    </div>\n\n                </div>\n            </div>\n"

/***/ }),

/***/ "./src/app/components/app-footer/app-footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/components/app-footer/app-footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppFooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppFooterComponent = (function () {
    function AppFooterComponent() {
    }
    return AppFooterComponent;
}());
AppFooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__("./src/app/components/app-footer/app-footer.component.html"),
        styles: [__webpack_require__("./src/app/components/app-footer/app-footer.component.scss")]
    })
], AppFooterComponent);

//# sourceMappingURL=app-footer.component.js.map

/***/ }),

/***/ "./src/app/components/app-header/app-header.component.html":
/***/ (function(module, exports) {

module.exports = "    <div \n        #header\n        [class.auth-header__second]=\"secondViewOfHeader\">\n\n\n        <div class=\"main-header\"\n            [class.main-header__second]=\"secondView || secondViewOfHeader\"\n            [class.main-header__form]=\"secondView\"\n            >\n\n            <img class=\"main-header__img\" \n            [routerLink]=\"['/']\"\n[src]=\" secondView || secondViewOfHeader ? 'assets/images/ico_logo_pink.svg' : 'assets/images/ico_logo_white.svg' \"\n            />\n\n            <div class=\"main-header__user-block\" \n            *ngIf=\"!authService.userInfo.username\" >\n\n                <button class=\"button\" \n                [class.button-pink]=\"secondView || secondViewOfHeader\"\n                [routerLink]=\"[btn?.route]\" > \n                    {{ btn?.text }}\n                </button>\n            </div>\n\n            <div class=\"main-header__user-block\" \n                *ngIf=\"authService.userInfo.username\"  \n                 >\n\n                <div class=\"modal__target\"\n                    (click)=\"toggleUserModal(!isUserModalVisible)\" >\n\n                <img \n                class=\"modal__target main-header__user-block__el main-header__user-block__foto\"\n[src]=\" secondView || secondViewOfHeader ? 'assets/images/ico-profile-blue.svg' : 'assets/images/ico-profile-white.svg' \" \n                 />\n                <span \n                class=\"modal__target main-header__user-block__el main-header__user-block__name mob-hidden\" \n[class.main-header__user-block__el-second]=\"secondView || secondViewOfHeader\" > \n                    {{ authService.userInfo.email }} </span>\n                <img \n                class=\"modal__target main-header__user-block__el main-header__user-block__toggle mob-hidden\" \n[src]=\" secondView || secondViewOfHeader ? 'assets/images/ico-drop-down-blue.svg' : 'assets/images/ico-drop-down.svg' \" \n                 />\n\n                </div> \n\n                <app-modals *ngIf=\"isUserModalVisible\" \n                [tempCase]=\"typeOfModal.Profile\"\n                (openModal)=\"openModal($event)\" ></app-modals>\n                \n            </div>\n\n        </div>\n\n    </div>\n"

/***/ }),

/***/ "./src/app/components/app-header/app-header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/components/app-header/app-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_index__ = __webpack_require__("./src/app/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppHeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Btn = (function () {
    function Btn() {
    }
    return Btn;
}());
var AppHeaderComponent = (function () {
    function AppHeaderComponent(authService, modalsService) {
        var _this = this;
        this.authService = authService;
        this.modalsService = modalsService;
        this.templateCase = __WEBPACK_IMPORTED_MODULE_1_app_index__["x" /* AuthTemplateCase */]; // copy of enum for template 
        this.isShowenPass = false; // used for changing visability of password
        this.secondViewOfHeader = false; // used for showing type of view
        this.isUserModalVisible = false; // used for show / hide user modal
        this.typeOfModal = __WEBPACK_IMPORTED_MODULE_1_app_index__["y" /* TypeOfModal */]; // copy of enum for modal
        this.btn = { route: "/sign-in", text: "Sign in" };
        this.secondView = true; // if true we have secondView all the time
        this.view = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]();
        // change view type
        this.setSecondViewOfHeader = function () {
            if (_this.secondView)
                return;
            if (_this.timerId)
                clearTimeout(_this.timerId);
            _this.timerId = setTimeout(function () {
                var pos = _this.header.nativeElement.getBoundingClientRect().top <= -320;
                _this.secondViewOfHeader = pos && (window.innerWidth > 800);
                _this.view.emit(_this.secondViewOfHeader);
            }, 50);
        };
        console.log(" constructor of AppHeaderComponent ");
    }
    AppHeaderComponent.prototype.onScrollEvent = function (e) {
        this.setSecondViewOfHeader();
    };
    AppHeaderComponent.prototype.onResize = function (e) {
        this.setSecondViewOfHeader();
    };
    AppHeaderComponent.prototype.onClick = function (e) {
        var isModalTarget = e.target.classList.contains("modal__target");
        if (!isModalTarget)
            this.toggleUserModal(false);
    };
    AppHeaderComponent.prototype.ngOnInit = function () {
    };
    // show / hide modal 
    AppHeaderComponent.prototype.toggleUserModal = function (isUserModalVisible) {
        this.isUserModalVisible = isUserModalVisible;
    };
    // used for showing anather modal 
    AppHeaderComponent.prototype.openModal = function (tempCase) {
        this.toggleUserModal(false);
        this.modalsService.senderOfOpen(tempCase);
    };
    return AppHeaderComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Btn)
], AppHeaderComponent.prototype, "btn", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Boolean)
], AppHeaderComponent.prototype, "secondView", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]) === "function" && _a || Object)
], AppHeaderComponent.prototype, "view", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('header'),
    __metadata("design:type", Object)
], AppHeaderComponent.prototype, "header", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* HostListener */])('window:scroll', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppHeaderComponent.prototype, "onScrollEvent", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* HostListener */])('window:resize', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppHeaderComponent.prototype, "onResize", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* HostListener */])('window:click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppHeaderComponent.prototype, "onClick", null);
AppHeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__("./src/app/components/app-header/app-header.component.html"),
        styles: [__webpack_require__("./src/app/components/app-header/app-header.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_app_index__["f" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_index__["f" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_app_index__["e" /* ModalsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_index__["e" /* ModalsService */]) === "function" && _c || Object])
], AppHeaderComponent);

var _a, _b, _c;
//# sourceMappingURL=app-header.component.js.map

/***/ }),

/***/ "./src/app/components/auth-forms/auth-forms.component.html":
/***/ (function(module, exports) {

module.exports = "       \n<app-header \n[btn]=\"tempCase === templateCase.SignUp ? { route: '/sign-in' , text : 'Sign in' } : { route: '/sign-up' , text : 'Sign up' }\" >\n</app-header>\n\n        <!-- sign-in template -->\n        <div class=\"main-container-in main-container-in-small pad__auth-form\" \n        *ngIf=\"tempCase === templateCase.SignIn\" >\n\n            <div class=\"container__after-header\" >\n\n\n            <h5 class=\"text text__middle text-left text__dark pad__without-bot cntr__row\">  \n                Sign In to Fabulive\n            </h5>\n\n            <p class=\"text text__normal-small text__left text__dark cntr__row\">\n                Enter your details\n            </p>\n\n            <form class=\"pad__tb-middle\" autocomplete=\"off\" novalidate\n                [formGroup]=\"formData\" > \n\n                <div class=\"btn-container input-contaner \" \n[class.input-contaner-error]=\"formData.controls.email.invalid && ( formData.controls.email.touched || isShowenErrors )\" >\n                    <label class=\"button__placeholder button__placeholder-dirty\" \n                    *ngIf=\"formData.get('email').value\"\n                    > Email </label>\n                    <label class=\"button__placeholder\" \n                    *ngIf=\"!formData.get('email').value\"\n                    > Email </label>\n                    <input class=\"input input-dirty\" type=\"text\" required \n                    formControlName=\"email\" />\n                    <img class=\"input-img-second\" \n                    [class.hidden]=\"!formData.get('email').value\"\n                    src=\"assets/images/ico-clear-sm.svg\"  \n                    (click)=\" formData.controls.email.reset() \" />  \n                </div>\n                <app-error-msg \n*ngIf=\" formData.controls.email.invalid && ( formData.controls.email.touched || isShowenErrors ) \"\n                    [msg]=\"'Please enter a valid email address'\" ></app-error-msg>    \n\n                <div class=\"btn-container input-contaner \" \n[class.input-contaner-error]=\"formData.controls.password.invalid && ( formData.controls.password.touched || isShowenErrors ) \"  >\n                    <label class=\"button__placeholder button__placeholder-dirty\" \n                    *ngIf=\"formData.get('password').value\"\n                    > Password </label>\n                   <label class=\"button__placeholder\" \n                    *ngIf=\"!formData.get('password').value\"\n                    > Password </label>\n                    <input class=\"input input-dirty\" required\n                    autocomplete=\"new-password\"\n                    [type]=\" isShowenPass ? 'text' : 'password' \"\n                    formControlName=\"password\" />\n                    <img class=\"input-img\" \n                    [class.hidden]=\"!formData.get('password').value\"\n                    [src]=\" isShowenPass ? 'assets/images/ico_eye_close_sm.svg' : 'assets/images/ico_eye_open_sm.svg' \"  \n                    (click)=\" toggleShowenPass() \" />  \n                    <img class=\"input-img-second\" \n                    [class.hidden]=\"!formData.get('password').value\"\n                    src=\"assets/images/ico-clear-sm.svg\"  \n                    (click)=\" formData.controls.password.reset() \" />  \n                    <span class=\"input-link link link-light\" \n                    [class.hidden]=\"formData.get('password').value\"\n                    [routerLink]=\"['/sign-in-forgot']\" >\n                        FORGOT?\n                    </span>            \n                </div>\n                <app-error-msg \n*ngIf=\" formData.controls.password.invalid && ( formData.controls.password.touched || isShowenErrors ) \"\n                    [msg]=\"'Please enter combination of 6-35 numbers, letters or punctuation marks.'\" ></app-error-msg>    \n                \n            </form>      \n\n\n            <app-error-msg \n*ngIf=\" serverErrorMsg && isShowenErrors \"\n                    [msg]=\"serverErrorMsg\" ></app-error-msg>  \n\n                    \n            <div class=\"pad__tb-middle pad__t-big\">\n                <button class=\"button button-pink-bgc button-big width-middle-plass\"\n                (click)=\" signIn() \" >\n                    Sign In\n                </button>\n            </div>\n\n\n            </div>        \n\n        </div> <!-- end of sign-in template -->\n\n\n        <!-- sign-up template -->\n        <div  class=\"main-container-in main-container-in-small pad__auth-form\"\n        *ngIf=\"tempCase === templateCase.SignUp\" >\n\n            <div class=\"container__after-header\" >\n\n\n            <h5 class=\"text text__middle text-left text__dark pad__without-bot cntr__row\">  \n                Sign up to Fabulive \n            </h5>\n\n            <p class=\"text text__normal-small text__left text__dark cntr__row\">\n                Get Started Now\n            </p>\n\n\n            <form class=\"pad__tb-middle\" autocomplete=\"off\" novalidate\n                [formGroup]=\"formData\" >\n\n                <div class=\"btn-container input-contaner \" \n[class.input-contaner-error]=\" formData.controls.fullName.invalid && ( formData.controls.fullName.touched || isShowenErrors ) \" >\n                    <label class=\"button__placeholder button__placeholder-dirty\" \n                    *ngIf=\"formData.get('fullName').value\"\n                    > Full Name </label>\n                    <label class=\"button__placeholder\" \n                    *ngIf=\"!formData.get('fullName').value\"\n                    > Full Name </label>\n                    <input class=\"input input-dirty\" type=\"text\" required \n                    formControlName=\"fullName\" />\n                    <img class=\"input-img-second\" \n                    [class.hidden]=\"!formData.get('fullName').value\"\n                    src=\"assets/images/ico-clear-sm.svg\"  \n                    (click)=\" formData.controls.fullName.reset() \" />  \n                </div>\n                <app-error-msg \n*ngIf=\" formData.controls.fullName.invalid && ( formData.controls.fullName.touched || isShowenErrors ) \"\n                    [msg]=\"'Please enter combination of 3-30 numbers, letters.'\" ></app-error-msg>  \n\n                <div class=\"btn-container input-contaner \" \n[class.input-contaner-error]=\"formData.controls.email.invalid && ( formData.controls.email.touched || isShowenErrors ) \" >\n                    <label class=\"button__placeholder button__placeholder-dirty\" \n                    *ngIf=\"formData.get('email').value\"\n                    > Email </label>\n                    <label class=\"button__placeholder\" \n                    *ngIf=\"!formData.get('email').value\"\n                    > Email </label>\n                    <input class=\"input input-dirty\" type=\"text\" required \n                    formControlName=\"email\" />\n                    <img class=\"input-img-second\" \n                    [class.hidden]=\"!formData.get('email').value\"\n                    src=\"assets/images/ico-clear-sm.svg\"  \n                    (click)=\" formData.controls.email.reset() \" />  \n                </div>\n                <app-error-msg \n*ngIf=\" formData.controls.email.invalid && ( formData.controls.email.touched || isShowenErrors ) \"\n                    [msg]=\"'Please enter a valid email address'\" ></app-error-msg>  \n\n                <div class=\"btn-container input-contaner \" \n[class.input-contaner-error]=\"formData.controls.password.invalid && ( formData.controls.password.touched || isShowenErrors )\" >\n                    <label class=\"button__placeholder button__placeholder-dirty\" \n                    *ngIf=\"formData.get('password').value\"\n                    > Password </label>\n                    <label class=\"button__placeholder\" \n                    *ngIf=\"!formData.get('password').value\"\n                    > Password </label>\n                    <input class=\"input input-dirty\" required\n                    autocomplete=\"new-password\"\n                    [type]=\" isShowenPass ? 'text' : 'password' \" \n                    formControlName=\"password\" />\n                    <img class=\"input-img\" \n                    [src]=\" isShowenPass ? 'assets/images/ico_eye_close_sm.svg' : 'assets/images/ico_eye_open_sm.svg' \"  \n                    [class.hidden]=\"!formData.get('password').value\"\n                    (click)=\" toggleShowenPass() \" /> \n                    <img class=\"input-img-second\" \n                    [class.hidden]=\"!formData.get('password').value\"\n                    src=\"assets/images/ico-clear-sm.svg\"  \n                    (click)=\" formData.controls.password.reset() \" />                \n                </div>\n                <app-error-msg \n*ngIf=\" formData.controls.password.invalid && ( formData.controls.password.touched || isShowenErrors ) \"\n                    [msg]=\"'Please enter combination of 6-35 numbers, letters or punctuation marks.'\" ></app-error-msg>    \n  \n            </form>    \n\n                <app-error-msg \n*ngIf=\" serverErrorMsg && isShowenErrors \"\n                    [msg]=\"serverErrorMsg\" ></app-error-msg>    \n\n            <div class=\"pad__tb-middle pad__t-big\">\n                <button class=\"button button-pink-bgc button-big width-middle-plass\"\n                (click)=\" signUp() \" >\n                    Sign Up\n                </button>\n            </div>\n\n             <h5 class=\"text text__normal text__dark pad__without-bot width-middle-plass\" >\n               <img class=\"img__chackbox\"\n(click)=\"toggleSubscribeOnUpdates()\"\n[src]=\" subscribeOnUpdates ? 'assets/images/ico-checked.svg' : 'assets/images/icoNotChecked.svg' \" />\n                Subscribe on our email updates\n            </h5>\n\n            <p class=\"text text__normal text__center text__dark text__pad-aside width-middle-plass\" >\n                By signing up you agree to \n                <span class=\"link\" \n                [routerLink]=\"['/info/terms']\" > Terms of Use </span>\n                and \n                <span class=\"link\" \n                [routerLink]=\"['/info/policy']\" > Privacy Policy </span>\n            </p> \n\n\n            </div>       \n\n        </div> <!-- end of sign-up template -->\n\n\n        <!-- sign-in-forgot template -->\n        <div  class=\"main-container-in main-container-in-small pad__auth-form\"\n        *ngIf=\"tempCase === templateCase.SignInForgot\" >\n\n            <div class=\"container__after-header\" >\n\n\n            <h5 class=\"text text__middle text-left text__dark pad__without-bot cntr__row\">  \n                Forgot your password?\n            </h5>\n\n            <p class=\"text text__normal-small text__left text__dark cntr__row\">\n                Please enter your email address and\n                we’ll get you back on track\n            </p>\n\n            <form class=\"pad__tb-middle\" autocomplete=\"off\" novalidate\n                [formGroup]=\"formData\" > \n\n                <div class=\"btn-container input-contaner \" \n[class.input-contaner-error]=\"formData.controls.email.invalid && ( formData.controls.email.touched || isShowenErrors ) \" >\n                    <label class=\"button__placeholder button__placeholder-dirty\" \n                    *ngIf=\"formData.get('email').value\"\n                    > Email </label>\n                    <label class=\"button__placeholder\" \n                    *ngIf=\"!formData.get('email').value\"\n                    > Email </label>\n                    <input class=\"input input-dirty\" type=\"text\" required \n                    formControlName=\"email\" />\n                    <img class=\"input-img-second\" \n                    [class.hidden]=\"!formData.get('email').value\"\n                    src=\"assets/images/ico-clear-sm.svg\"  \n                    (click)=\" formData.controls.email.reset() \" />  \n                </div>\n                <app-error-msg \n*ngIf=\" formData.controls.email.invalid && ( formData.controls.email.touched || isShowenErrors ) \"\n                    [msg]=\"'Please enter a valid email address'\" ></app-error-msg>   \n                \n            </form>   \n\n            <app-error-msg \n*ngIf=\" serverErrorMsg && isShowenErrors \"\n                    [msg]=\"serverErrorMsg\" ></app-error-msg>      \n\n            <div class=\"pad__tb-middle pad__t-big\">\n                <button class=\"button button-pink-bgc button-big width-middle-plass\"\n                (click)=\" resetPassword() \" >\n                    Reset Password\n                </button>\n            </div>\n\n\n            </div>\n\n        </div> <!-- end of sign-in-forgot template -->"

/***/ }),

/***/ "./src/app/components/auth-forms/auth-forms.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/components/auth-forms/auth-forms.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_index__ = __webpack_require__("./src/app/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthFormsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthFormsComponent = (function () {
    function AuthFormsComponent(activatedRoute, formBuilder, authService, modalsService) {
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.modalsService = modalsService;
        this.emailPattern = "[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}"; // it is used as pattern for email
        this.namePattern = "[a-zA-Z0-9\x20]{3,30}"; // it is used as pattern for fullname
        this.passPattern = "^.*(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])[a-zA-Z0-9@#$%^&+=]*$"; // it is used as pattern for password
        this.isShowenErrors = false; // if it has true we show errors 
        this.templateCase = __WEBPACK_IMPORTED_MODULE_3_app_index__["x" /* AuthTemplateCase */]; // copy of enum for template 
        this.isShowenPass = false; // used for changing visability of password
        this.subscribeOnUpdates = true; // used on sign up in checkbox
        console.log(" constructor of auth forms ");
    }
    AuthFormsComponent.prototype.ngOnInit = function () {
        if (this.authService.loggedIn)
            this.authService.nav(__WEBPACK_IMPORTED_MODULE_3_app_index__["z" /* AuthNavType */].redirectFromAuth);
        this.setTemplateCase();
        this.initReactiveForm();
    };
    // setter of templateCase
    AuthFormsComponent.prototype.setTemplateCase = function () {
        var urlFirstSegment = this.activatedRoute.snapshot.url[0];
        var id = urlFirstSegment ? urlFirstSegment.path : undefined;
        if (id === "sign-in") {
            this.tempCase = __WEBPACK_IMPORTED_MODULE_3_app_index__["x" /* AuthTemplateCase */].SignIn;
        }
        else if (id === "sign-up") {
            this.tempCase = __WEBPACK_IMPORTED_MODULE_3_app_index__["x" /* AuthTemplateCase */].SignUp;
        }
        else if (id === "sign-in-forgot") {
            this.tempCase = __WEBPACK_IMPORTED_MODULE_3_app_index__["x" /* AuthTemplateCase */].SignInForgot;
        }
        else {
            this.authService.nav(__WEBPACK_IMPORTED_MODULE_3_app_index__["z" /* AuthNavType */].redirectToAuth);
        }
        console.log(" tempCase ", id, this.tempCase);
    };
    //set FormGroup
    AuthFormsComponent.prototype.initReactiveForm = function () {
        switch (this.tempCase) {
            case this.templateCase.SignIn:
                this.formData = this.formBuilder.group({
                    email: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].minLength(6),
                            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].maxLength(100), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].pattern(this.emailPattern)]],
                    password: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].minLength(6),
                            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].maxLength(35)]]
                });
                break;
            case this.templateCase.SignUp:
                this.formData = this.formBuilder.group({
                    fullName: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].minLength(3),
                            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].maxLength(30), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].pattern(this.namePattern)]],
                    email: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].minLength(6),
                            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].maxLength(100), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].pattern(this.emailPattern)]],
                    password: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].minLength(6),
                            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].maxLength(35)]]
                });
                break;
            case this.templateCase.SignInForgot:
                this.formData = this.formBuilder.group({
                    email: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].minLength(6),
                            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].maxLength(100), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].pattern(this.emailPattern)]]
                });
                break;
        }
    };
    // it hendles signe up btn
    AuthFormsComponent.prototype.signIn = function () {
        var _this = this;
        console.log("signIn");
        if (this.formData.valid) {
            this.isShowenErrors = false;
            this.authService.signIn({
                email: this.formData.get('email').value,
                password: this.formData.get('password').value
            }).subscribe(function (data) {
                console.log(data);
                _this.authService.nav(__WEBPACK_IMPORTED_MODULE_3_app_index__["z" /* AuthNavType */].redirectFromAuth);
            }, function (err) {
                console.log(" MSG ", err.message);
                _this.isShowenErrors = true;
                _this.serverErrorMsg = err.message;
            });
        }
        else {
            this.isShowenErrors = true;
        }
    };
    // it hendles signe up btn
    AuthFormsComponent.prototype.signUp = function () {
        var _this = this;
        console.log("signUp");
        if (this.formData.valid) {
            delete this.serverErrorMsg;
            this.isShowenErrors = false;
            this.authService.signUp({
                fullName: this.formData.get('fullName').value,
                email: this.formData.get('email').value,
                password: this.formData.get('password').value,
                subscribeOnUpdates: this.subscribeOnUpdates
            }).subscribe(function (data) {
                console.log(" DATA ", data);
                _this.modalsService.senderOfOpen(__WEBPACK_IMPORTED_MODULE_3_app_index__["y" /* TypeOfModal */].ConfirmSignUp);
            }, function (err) {
                console.log(err.message);
                _this.isShowenErrors = true;
                _this.serverErrorMsg = err.message;
            });
        }
        else {
            this.isShowenErrors = true;
        }
    };
    // it hendles reset pass btn 
    AuthFormsComponent.prototype.resetPassword = function () {
        console.log(" reset password ");
        if (this.formData.valid) {
            //this.authService.forgotPassword().subscribe(()=>{
            this.isShowenErrors = false;
            this.authService.userInfo.email = this.formData.get('email').value;
            this.modalsService.senderOfOpen(__WEBPACK_IMPORTED_MODULE_3_app_index__["y" /* TypeOfModal */].Success);
            //}, ()=>{
            //  this.isShowenErrors = true;
            //});
        }
        else {
            this.isShowenErrors = true;
        }
    };
    // show / hide password
    AuthFormsComponent.prototype.toggleShowenPass = function () {
        this.isShowenPass = !this.isShowenPass;
    };
    // simple toggle of subscribeOnUpdates
    AuthFormsComponent.prototype.toggleSubscribeOnUpdates = function () {
        this.subscribeOnUpdates = !this.subscribeOnUpdates;
    };
    return AuthFormsComponent;
}());
AuthFormsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-auth-forms',
        template: __webpack_require__("./src/app/components/auth-forms/auth-forms.component.html"),
        styles: [__webpack_require__("./src/app/components/auth-forms/auth-forms.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_app_index__["f" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_index__["f" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_app_index__["e" /* ModalsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_index__["e" /* ModalsService */]) === "function" && _d || Object])
], AuthFormsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=auth-forms.component.js.map

/***/ }),

/***/ "./src/app/components/auth/auth.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n    <div class=\"auth-header\" \n        #header \n        [class.auth-header__second]=\"secondViewOfHeader\" >\n\n        <app-header\n            (view)=\"changeSecondViewOfHeader($event)\"\n            [secondView]=\"false\">\n        </app-header>\n\n \n        <div class=\"main-container-in\">\n\n            <h3 class=\"text text__big\" > YOU ARE FABULOUS! </h3>\n\n            <div *ngIf=\"authService.loggedIn\" >\n\n                <p  class=\"text text__normal\" >\n                    Follow the largest online beauty community. Stay up to date with our\n                    <br/> \n                    new fab content and updates. \n                </p>\n\n                <div class=\"cntr__row cntr__row-center\" >\n                    <a href=\"https://www.facebook.com/\" target=\"_blank\" >\n                        <img class=\"icon icon__social cntr__row-icon\" \n                        src=\"assets/images/ico-fb-copy.svg\" />\n                    </a>\n                    <a href=\"https://twitter.com\" target=\"_blank\">\n                        <img class=\"icon icon__social cntr__row-icon\" \n                        src=\"assets/images/ico-tw-copy.svg\" />\n                    </a>\n                    <a href=\"https://www.instagram.com\" target=\"_blank\" >\n                        <img class=\"icon icon__social cntr__row-icon\" \n                        src=\"assets/images/ico-insta-copy.svg\" />\n                    </a>\n                </div>\n\n            </div>\n\n            <div *ngIf=\"!authService.loggedIn\" >\n\n                <p  class=\"text text__normal\" >\n                    Sign up and join now the largest online beauty community. \n                    <br/>\n                    Stay up to date with our new fab content and updates. \n                </p>\n\n                <button class=\"button button-pink-bgc\" \n                [routerLink]=\"['/sign-up']\" > \n                    Join Now\n                </button> \n\n            </div>          \n\n        </div>\n    </div>\n\n    <div class=\"main-container\" >\n\n\n            <div class=\"block\" >\n                <div class=\"main-container-in\" >\n\n                    <p class=\"text text__middle text__dark\"> What is Fabulive? </p>\n\n                    <div class=\"grid\" >\n\n                        <div class=\"grid-cell\">\n\n                            <img class=\"img__center\" src=\"assets/images/img-community.svg\" />\n\n                            <h5 class=\"text text__middle-small text__dark pad__without-bot\" >\n                                Community\n                            </h5>\n\n                            <p class=\"text  text__normal text__center text__dark text__pad-aside\" >\n                                Become a part of the largest beauty platform and find yourself among \n                                like-minded people.\n                            </p>\n\n                            \n                        </div>\n\n                        <div class=\"grid-cell\">\n\n                            <img class=\"img__center\" src=\"assets/images/img-knowledge.svg\" />\n\n                            <h5 class=\"text text__middle-small text__dark pad__without-bot\" >\n                                Knowledge\n                            </h5>\n\n                            <p class=\"text text__normal text__center text__dark text__pad-aside\" >\n                                Learn all the pro's tricks, get inspired and demonstrate \n                                your skills to the whole world.\n                            </p>\n\n                            \n                        </div>\n\n                        <div class=\"grid-cell\">\n\n                            <img class=\"img__center\" src=\"assets/images/img-inpiration.svg\" />\n\n                            <h5 class=\"text  tex-normal text__middle-small text__dark pad__without-bot\" >\n                                Inspiration\n                            </h5>\n\n                            <p class=\"text text__normal text__center text__dark text__pad-aside\" >\n                                Find inspiration to create fabulous looks for yourself or \n                                share your ideas with others\n                            </p>\n\n                            \n                        </div>\n\n                    </div>\n\n                </div>\n            </div>\n\n            <div class=\"overflow-hidden\" >\n    \n                <div class=\"block block__color-second\" >\n                    <div class=\"main-container-in text__pad-aside\" >\n\n                        <h5 class=\"text text__middle text__dark\">  Why Fabulive?</h5>\n\n                        <p class=\"text text__normal  text__left text__dark\">\n                            Fabulive was developed in order to create jobs for makeup artists and beauty experts,\n                            giving the ability for the world to learn anywhere and anytime from anyone. Fabulive created \n                            a marketplace platform for anyone to explore, learn and even teach using \n                            the live stream technology. \n                            <br/>\n                            So stop waiting, it's time for you to be Fabulous!\n                        </p>\n\n                    </div>\n                </div>\n\n\n                <div class=\"block block__fixed-small\" >\n                    <div class=\"main-container-in\" >\n\n                        <div class=\"grid\" >\n\n                            <div class=\"grid-cell cntr__mob-text-center\">\n\n                                <h5 class=\"text text__middle text-left text__dark pad__without-bot cntr__row\">  \n                                    Coming soon on Mobile </h5>\n\n                                <p class=\"text text__normal-small text__left text__dark cntr__row\">\n                                    Fabulive - our beauty community is coming to mobile devices.\n                                </p>\n\n                                <p class=\"text text__normal-small text__left text__dark cntr__row\">\n                                    Follow us:\n                                </p>\n                                <div class=\"cntr__row\" >\n                                    <a href=\"https://www.facebook.com/\" target=\"_blank\" >\n                                        <img class=\"icon icon__social cntr__row-icon\" \n                                        src=\"assets/images/ico-fb.svg\" />\n                                    </a>\n                                    <a href=\"https://twitter.com\" target=\"_blank\">\n                                        <img class=\"icon icon__social cntr__row-icon\" \n                                        src=\"assets/images/ico-tw.svg\" />\n                                    </a>\n                                    <a href=\"https://www.instagram.com\" target=\"_blank\" >\n                                        <img class=\"icon icon__social cntr__row-icon\" \n                                        src=\"assets/images/ico-insta.svg\" />\n                                    </a>\n                                </div>\n\n                            </div>\n\n                            <div class=\"grid-cell grid-none-on-small\">\n\n                                <img class=\"img__big-overflow\" src=\"assets/images/imgPhone.png\" >\n\n                            </div>\n\n                        </div>\n\n                    </div>\n                </div>\n\n            </div>\n\n            <div class=\"block block__color-second \" \n            *ngIf=\"!authService.loggedIn\" >\n                <div class=\"main-container-in pad__tb-big pad__b-big\" >\n\n                    <h5 class=\"text text__middle text__dark pad__without-bot\" >  \n                        Sign Up to Stay Informed </h5>\n\n                    <p class=\"text text__normal  text__dark\">\n                        Stay in touch with Fabulive! Sign up with your e-mail to be \n                        informed about new content and helpful updates.\n                    </p>\n\n\n                    <button class=\"button button-pink-bgc\" \n                    [routerLink]=\"['/sign-up']\" > \n                        Sign Up\n                    </button>    \n\n                </div>\n            </div>\n\n\n        <app-footer>      \n        </app-footer>\n\n\n\n    </div>\n\n"

/***/ }),

/***/ "./src/app/components/auth/auth.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/components/auth/auth.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_index__ = __webpack_require__("./src/app/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthComponent = (function () {
    function AuthComponent(authService) {
        this.authService = authService;
        console.log(" constructor AuthComponent ");
    }
    AuthComponent.prototype.ngOnInit = function () {
    };
    AuthComponent.prototype.changeSecondViewOfHeader = function ($event) {
        this.secondViewOfHeader = $event;
    };
    return AuthComponent;
}());
AuthComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-auth',
        template: __webpack_require__("./src/app/components/auth/auth.component.html"),
        styles: [__webpack_require__("./src/app/components/auth/auth.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_index__["f" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_index__["f" /* AuthService */]) === "function" && _a || Object])
], AuthComponent);

var _a;
//# sourceMappingURL=auth.component.js.map

/***/ }),

/***/ "./src/app/components/error-msg/error-msg.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div>\n    <p class=\"text__error\" >\n        {{ msg }}\n    </p>\n</div>"

/***/ }),

/***/ "./src/app/components/error-msg/error-msg.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".error-msg {\n  text-align: left;\n  margin: 2px 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/components/error-msg/error-msg.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorMsgComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ErrorMsgComponent = (function () {
    function ErrorMsgComponent() {
        this.msg = " invalid field ";
    }
    return ErrorMsgComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", String)
], ErrorMsgComponent.prototype, "msg", void 0);
ErrorMsgComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-error-msg',
        template: __webpack_require__("./src/app/components/error-msg/error-msg.component.html"),
        styles: [__webpack_require__("./src/app/components/error-msg/error-msg.component.scss")]
    })
], ErrorMsgComponent);

//# sourceMappingURL=error-msg.component.js.map

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = " home page\n\n\n\n    <div id=\"video-container\">\n     <video id=\"red5pro-publisher\"></video>\n   </div>\n\n\n   <div id=\"video-container-2\">\n     <video id=\"red5pro-subscriber\"></video>\n   </div>"

/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngAfterViewInit = function () {
        // Create a new instance of the WebRTC publisher.
        var publisher = new window.red5prosdk.RTCPublisher();
        // Create a view instance based on video element id.
        var viewPub = new window.red5prosdk.PublisherView('red5pro-publisher');
        viewPub.attachPublisher(publisher);
        // Access user media.
        navigator.getUserMedia({
            audio: true,
            video: true
        }, function (media) {
            console.log(" -------- ", media);
            // Upon access of user media,
            // 1. Attach the stream to the publisher.
            // 2. Show the stream as preview in view instance.
            publisher.attachStream(media);
            viewPub.preview(media);
            ///
            //var protocol = window.location.protocol;
            //var isSecure = protocol.charAt(protocol.length - 2);
            // Using Chrome/Google TURN/STUN servers.
            var iceServers = [{ urls: 'stun:stun2.l.google.com:19302' }];
            // Initialize
            publisher.init({
                protocol: 'ws',
                host: '52.57.212.168',
                port: 8554,
                app: 'live',
                streamName: 'mystream',
                iceServers: iceServers
            })
                .then(function () {
                // Invoke the publish action
                return publisher.publish();
            })
                .catch(function (error) {
                // A fault occurred while trying to initialize and publish the stream.
                console.error(error);
            });
            ///
        }, function (error) {
            console.error(error);
        });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("./src/app/components/home/home.component.html"),
        styles: [__webpack_require__("./src/app/components/home/home.component.scss")]
    })
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "./src/app/components/info/info.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div>\n\n    <app-header>\n    </app-header>\n\n\n    <div class=\"main-container-in container__after-header\"\n    *ngIf=\"templCase === templateCase.Company\" >\n     \n        <div class=\"main-container-in\">\n\n            <h3 class=\"text text__big text__dark \" > Fabulive Team </h3>\n\n            <p  class=\"text text__normal text__dark text__italic\" >\n                “Create goals so strong that obstacles, failure and loss only \n                act as motivation”\n            </p>\n\n        </div>\n        \n        <div class=\"main-container-in\">\n\n            <h5 class=\"text text__middle text-left text__dark pad__without-bot cntr__row\">  \n                Contacts </h5>\n\n            <p class=\"text text__normal-small text__left text__dark cntr__row\">\n            Feedback:\n            <br />\n            support@fabulive.com\n            </p>\n\n            <p class=\"text text__normal-small text__left text__dark cntr__row\">\n            Head Office Fabulive Ltd:\n            <br />\n            Suite 1404, Tung Wai Commercial Building, 109-111 Gloucester Road, Wanchai, Hong Kong\n            </p>\n\n            <p class=\"text text__normal-small text__left text__dark cntr__row\">\n            Phone:\n            <br />\n            (852) 2723 3336\n            </p>\n\n        </div>\n    \n    </div>\n\n    <div class=\"main-container-in container__after-header\"\n    *ngIf=\"templCase === templateCase.Terms\" >\n\n                \n            <h5 class=\"text text__middle text-left text__dark pad__without-bot cntr__row\">  \n                    Fabulive Terms of Service\n            </h5>\n\n            <p class=\"text text__normal-small text__left text__dark cntr__row\">\nFabulive is the Mobile Application developer and owned by Fabulive Ltd Registered at Suite 1404, Tung Wai Commercial Building, \n109-111 Gloucester Road, Wanchai, Hong Kong\n            </p>\n\n            \n                \n            <h5 class=\"text text__middle-small text-left text__dark pad__without-bot cntr__row\">  \n                   Acceptance of Terms\n            </h5>\n\n            <p class=\"text text__normal-small text__left text__dark cntr__row\">  \nThe Terms of Service (\"Terms\") you are reading are a legal agreement between Fabulive Limited and yourself (\"you\"). \nBy accessing or using any Fabulive Limited application (\"Service\") you agree that you have read, understood, accept and \nagree to be bound by these Terms. If you do not agree to these Terms, then you are not authorized to use the service.\n            </p>\n\n            <p class=\"text text__normal-small text__left text__dark cntr__row\">  \nFabulive Limited reserves the right, in its sole discretion, to revise or modify these Terms at any time, and you agree to be \nbound by such revisions or modifications. Users are responsible for viewing these Terms periodically. Your continued use of the Service \nafter a change or modification of these Terms has been made will constitute your acceptance of the revised Terms. If you do not agree to the \nTerms your only remedy is to discontinue your use of the Service and to cancel any account, you have created using the Service.\n            </p>\n\n             <p class=\"text text__normal-small text__left text__dark cntr__row\">  \nIf you violate the Terms, Fabulive Limited reserves the right to issue you a warning regarding the violation or immediately terminate or \nsuspend any or all accounts you have created using the Service. You agree that Fabulive Limited need not provide you notice before terminating or \nsuspending your account(s), but it may provide such notice in its sole discretion.\n            </p>\n\n             <p class=\"text text__normal-small text__left text__dark cntr__row\">  \nYou agree that Fabulive Limited may change any part of the Service, including its content, at any time \nor discontinue the Service or any part thereof, for any reason, without notice to you and without liability.\n            </p>\n\n             <p class=\"text text__normal-small text__left text__dark cntr__row\">  \nThe Service is intended for use by those 18 years or older for amusement purposes only. You declare that you are 13 years old or older.\nIf you are between the ages of 13 and 18, you declare that your legal guardian has reviewed and agrees to these Terms..\n            </p>\n\n                \n            <h5 class=\"text text__middle-small text-left text__dark pad__without-bot cntr__row\">  \n                    Account information\n            </h5>\n\n            <p class=\"text text__normal-small text__left text__dark cntr__row\">  \nDuring the process of creating an account to access the Service (\"Account\"), you may be required to select a password or to allow \nus to access your account information from a social network service (\"Login Information\"). The following rules govern the security of \nyour Account and Login Information. For the purposes of these Terms, references to Account and Login Information shall include any account \nand account information, including user names, passwords or security questions, whether or not created for the purpose of using the Service, \nthat are used to access the Service (for example, account information for a social network service account from which the Service is accessed):\n            </p>\n\n            <p class=\"text text__normal-small text__left text__dark cntr__row\"> \nYou shall not share your Account or Login Information, nor let anyone else access your Account or do anything \nelse that might jeopardize the security of your Account. Fabulive Limited will not ask you to reveal your password \nand will not initiate contact with you asking for answers to your password security questions.\n            </p>\n\n            <p class=\"text text__normal-small text__left text__dark cntr__row\"> \nIn the event you become aware of or reasonably suspect any breach of security, including, without limitation any loss, theft, \nor unauthorized disclosure of your Login Information or unauthorized access to your Account, you must immediately notify Fabulive Limited and modify your Login Information.\n            </p>\n\n            <p class=\"text text__normal-small text__left text__dark cntr__row\"> \nYou are solely responsible for maintaining the confidentiality of the Login Information, \nand you will be responsible for all uses of your Login Information, including purchases, whether or not authorized by you.\n            </p>\n\n            <p class=\"text text__normal-small text__left text__dark cntr__row\"> \nYou are responsible for anything that happens through your Account, whether or not such actions were taken by you. \nYou therefore acknowledge that your Account may be terminated if someone else uses it to engage in any activity that violates the Terms of Service or is otherwise improper or illegal.\n            </p>\n\n            <p class=\"text text__normal-small text__left text__dark cntr__row\"> \nYou undertake to monitor your Account to restrict use by minors, and you will deny access to children under the age of 13. You accept full \nresponsibility for any unauthorized use of the Service by minors and you acknowledge that you are responsible for any use of your credit card or other payment \ninstrument (for example, paypal) by minors.    \n            </p>\n\n                        <p class=\"text text__normal-small text__left text__dark cntr__row\"> \nFabulive Limited reserves the right to remove or reclaim any usernames at any time and for any reason, including but not \nlimited to claims by a third party that a username violates the third party's rights.\n            </p>\n\n            <p class=\"text text__normal-small text__left text__dark cntr__row\"> \nYou understand that your user ID number, name and profile picture will be publicly available and that search engines may index your name and profile photo.\n            </p>\n\n            <p class=\"text text__normal-small text__left text__dark cntr__row\"> \nAny personal information you provide to us when creating or updating your account, which may include your name, birth date, e-mail address, and, \nin some cases, payment information, will be held and used in accordance with Fabulive Limited's Privacy Policy. You agree that you will supply accurate \nand complete information to us, and that you will update that information promptly after it changes.    \n            </p>\n\n             <h5 class=\"text text__middle-small text-left text__dark pad__without-bot cntr__row\">  \n                    License\n            </h5>\n\n            <p class=\"text text__normal-small text__left text__dark cntr__row\">  \nSubject to your agreement and compliance with these Terms, Fabulive Limited grants you a personal, non-exclusive, non-transferable,\n non-sub licensable, revocable, limited scope license to use the Service. Use of the Service shall be solely for your own, private, \n non-commercial entertainment purposes and for no other purpose whatsoever. You hereby acknowledge that your license to use the Service is limited by \n these Terms, and, if you violate or if, at any point, you do not agree to any of these Terms, your license to use the Service shall immediately \n terminate, and you shall immediately refrain from using the Service. If the Service or any part thereof is determined to be illegal under the \n laws of the country in which you are situated, you shall not be granted any license to use the Service, and must refrain from using the Service.\n            </p>\n\n             <h5 class=\"text text__middle-small text-left text__dark pad__without-bot cntr__row\">  \n                    Account Termination\n            </h5>\n\n            <p class=\"text text__normal-small text__left text__dark cntr__row\">  \nFabulive Limited may refuse access to the Service or may terminate your account without notice for any reason, including, \nbut not limited to, a suspected violation of these Terms, illegal or improper use of your account, or illegal or improper use \nof the Services, User Content (as defined below), products, or Fabulive Limited intellectual property as determined by Fabulive \nLimited in its sole discretion. You may lose your user name and persona, if applicable, as a result of account termination, without \nresponsibility on the part of Fabulive Limited for any damage that may result from the foregoing. If you have more than one account, \nFabulive Limited may terminate all of your accounts.\n            </p>\n\n                 <p class=\"text text__normal-small text__left text__dark cntr__row\">  \nIn addition to the foregoing, Fabulive Limited may selectively remove, revoke or garnishee Benefits associated with your account. \n\"Benefits\" mean licensed rights granted, awarded, gifted, provided to and/or purchased by you to access and/or use online or off-line \nelements or features of the Service and/or products, and include but are not limited to paid and free downloadable content, virtual currency,\n digital and/or virtual assets, unlockable content, rights of use tied to unlock keys or codes, serial codes and/or online authentication of any \n kind, and in-game achievements. If your account, or a particular subscription for the Service associated with your account, is terminated,\n  suspended and/or if any Benefits are selectively removed, revoked or garnisheed from your account, no refund will be granted, no Benefits \n  will be credited to you or converted to cash or other forms of reimbursement, and you will have no further access to your account or Benefits \n  associated with your account or the particular Service.\n            </p>\n\n                 <p class=\"text text__normal-small text__left text__dark cntr__row\">  \nYou acknowledge that Fabulive Limited is not required to provide you notice before suspending or terminating your account or selectively \nremoving, revoking or garnisheeing Benefits associated with your account. In the event that Fabulive Limited terminates your account, you\n may not participate in any of the Services again without Fabulive Limited express permission. Fabulive Limited reserves the right to refuse \n to keep accounts for, and provide access to the Service or other services to, any individual. You may not allow individuals whose accounts \n  have been terminated by us to use your account. If you believe that any action has been taken against your account in error, please contact \n  us at support@monsterbrainstudios.com\n            </p>\n\n\n             <h5 class=\"text text__middle-small text-left text__dark pad__without-bot cntr__row\">  \n                    User Content\n            </h5>\n\n            <p class=\"text text__normal-small text__left text__dark cntr__row\">  \nYou agree that any content published by you through the Service is done so through the use of technology and tools provided by Fabulive \nLimited. You agree that you are publishing such content willingly and you represent that you own such content, that you have all rights to publish \nsaid content and that your publishing of the content complies with all applicable laws. You understand and agree that you may not distribute, sell, \ntransfer or license this content and/or application in any manner, in any country, or on any social network, or other medium without the explicit prior \nwritten permission of Fabulive Limited. You grant Fabulive Limited the right to act as an agent on your behalf as the Service's operator.\n            </p>\n\n                 <p class=\"text text__normal-small text__left text__dark cntr__row\">  \nAny data, text, graphics, photographs, or any other content, and their selection and arrangement, uploaded to the Service by any \nuser (\"User Content\") are subject, whether in whole or in part, to unlimited worldwide commercial, non-commercial and/or promotional \nuse by Fabulive Limited. Any text, graphics, photographs, files or other User Content uploaded by you shall be your sole responsibility \nand you hereby agree that you may be held liable for any User Content that you upload. Fabulive Limited shall not bear any responsibility \nfor any of the abovementioned content.\n            </p>\n\n                 <p class=\"text text__normal-small text__left text__dark cntr__row\">  \nFabulive Limited may or may not regulate User Content and provides no representations or guarantees regarding the accuracy, quality, \nor integrity of any User Content posted via the Service. By using the Service you acknowledge and accept that you may be exposed to \nmaterial you find offensive or objectionable. You agree that Fabulive Limited will not under any circumstances be responsible or liable \nfor any User Content, including, but not limited to, errors in any User Content or any loss or damage incurred by use of the User Content \nor for any failure to or delay in removing User Content.\n            </p>\n\n              <p class=\"text text__normal-small text__left text__dark cntr__row\">  \nFabulive Limited reserves the right (but shall at no time be obligated) to, in its sole discretion, remove, block, edit, move, disable \nor permanently delete User Content from the Service with or without notice for any reason whatsoever. You hereby agree that, to the maximum \nextent permitted by applicable law, Fabulive Limited shall at no time be responsible or held liable for the removal, modification or blocking \nof material or User Content that may be considered offensive and shall at no time be obligated to effect such removal other than under applicable law.\n            </p>\n\n              <h5 class=\"text text__middle-small text-left text__dark pad__without-bot cntr__row\">  \n                    Communication Channels\n            </h5>\n\n            <p class=\"text text__normal-small text__left text__dark cntr__row\">  \nThe Service may provide communication channels such as forums, communities, or chat areas (\"Communication Channels\") designed to enable \nyou to communicate with other Service users. Fabulive Limited is under no obligation to monitor these communication channels but may do so, \nand reserves the right to review materials posted to the Communication Channels and to remove any materials, at any time, with or without notice \nfor any reason, at its sole discretion. Fabulive Limited may also terminate or suspend your access to any Communication Channels at any time, \nwithout notice, for any reason. You acknowledge that chats, postings, or materials posted by users on the Communication Channels are neither \nendorsed nor controlled by Fabulive Limited, and these communications should not be considered reviewed or approved by Fabulive Limited. \nYou will be solely responsible for your activities within the Communication Channels and under no circumstances will Fabulive Limited be liable \nfor any activity within the Communication Channels.\n            </p>\n\n                 <p class=\"text text__normal-small text__left text__dark cntr__row\">  \nYou agree that all your communications within the Communication Channels are public, and you have no expectation of privacy regarding your \nuse of the Communication Channels. Fabulive Limited is not responsible for information that you choose to share on the Communication Channels, or for the actions of other users.\n            </p>\n\n             <h5 class=\"text text__middle-small text-left text__dark pad__without-bot cntr__row\">  \n                    Virtual Currencies, Goods and Purchases\n            </h5>\n\n            <p class=\"text text__normal-small text__left text__dark cntr__row\">  \nThe Service may include an opportunity to purchase virtual, in-game currency (\"Coins/gifts\") that may require you to pay a fee using \nreal money to obtain the Coins/gifts. Coins/gifts can never be redeemed for real money, goods, or any other item of monetary value from \nFabulive Limited or any other party. You understand that you have no right or title in the virtual in-game items, gifts or Coins.\n            </p>\n\n                 <p class=\"text text__normal-small text__left text__dark cntr__row\">  \nYour purchase of Coins/gifts is final and is not refundable, transferable or exchangeable, except in Fabulive Limited sole \ndiscretion. You can’t purchase, sell, or exchange Coins/gifts outside the Service. Doing so is a violation of the Terms and \nmay result in termination of your Service account and/or legal action taken against you. Fabulive Limited retains the right to \nmanage, control, modify and/or eliminate Coins/gift or any other form of virtual currency at its sole discretion. Prices and availability \nof Coins/gifts are subject to change without notice.\n            </p>\n\n                 <p class=\"text text__normal-small text__left text__dark cntr__row\">  \nCoins/gifts may only be held by legal residents of countries where access to and use of the Services are permitted. Coins/gifts \nmay only be purchased or acquired from us and through means we provide on the applicable website or otherwise expressly authorize. \nWe reserve the right to refuse your request to purchase and/or acquire Coins/gifts for any reason. When you purchase Coins/gifts, \nthey will reside in your account (\"Game Account\") until discharged through use of the Service. When purchasing Coins/gifts or other \ncontent as may be made available, you agree to pay us the applicable charges for your purchase, including applicable taxes, using a \nvalid charge card or other payment method we may accept in accordance with the billing terms and prices in effect at the time the fee \nor charge becomes payable. All sales of Coins/gifts and/or other content are final. If your Game Account is charged for items you did not \npurchase, or you did not receive the items you purchased, or you were charged an incorrect amount, you may request a refund or correction \nin accordance to payment provider policy. Any refund request must be received within 96 hours from the time of purchase in order for refunds \nto be issued in accordance to payment provider policy. Refund requests past 96 hours from time of purchase will be honored according only in \naccordance to payment provider policy. Other than charges to your Game Account, you agree to notify us about any billing problems or discrepancies \nwithin 30 days after they first appear on your account statement. If you do not bring them to our attention within 90 days, you agree that you waive \nyour right to dispute such problems or discrepancies. You are responsible for and agree to reimburse us for all reversals, charge-backs, \nclaims, fees, fines, penalties and other liability incurred by us (including costs and related expenses) that were caused by or arising out \nof payments that you authorized or accepted. You understand that we may suspend or terminate your user account or Game Account if for any reason \na charge you authorize us to make to your credit card or other method of payment cannot be processed or is returned to us unpaid and, if such \nevent occurs, you shall immediately remit to us payment for such charge through an alternative payment method.\n            </p>\n\n\n             <h5 class=\"text text__middle-small text-left text__dark pad__without-bot cntr__row\">  \n                    Remunerations and Payouts\n            </h5>\n\n            <p class=\"text text__normal-small text__left text__dark cntr__row\">  \nPlease be aware that Fabulive Limited doesn't offer any real money, goods, or any other items of monetary value as remuneration \nin any of our applications and Services. All Monster Brain Games are played with in-game virtual currency (\"Coins/gifts\") only, \nwhich cannot be repaid in terms of real value at any conditions. By accepting these Terms you confirm, that you are aware of how \nFabulive Limited services are functioning and becoming authorized for the purpose of using them.\n\n            </p>\n\n                 <p class=\"text text__normal-small text__left text__dark cntr__row\">  \nAll compensations in Fabulive Limited Services are done in the form of in-game virtual currency, \ngame power-ups and additional energy supplies. All the assets you win playing any of Fabulive Limited \nServices are not transferable outside the games and have no real value. They cannot be traded or exchanged \noutside Monster Brain Studios Services and if it takes place, it violates Fabulive Limited Terms and can \ncause termination of your Service Account and/or legal actions taken against you. \n            </p>\n\n\n            <h5 class=\"text text__middle-small text-left text__dark pad__without-bot cntr__row\">  \n                    Rules of Conduct and Usage\n            </h5>\n\n            <p class=\"text text__normal-small text__left text__dark cntr__row\">  \nYou represent and warrant that you have full right and authority to use the Services and to be bound by these Terms. \nYou agree that you will comply fully with all applicable laws, regulations, statutes, ordinances, and the Terms herein.\n            </p>\n\n                 <p class=\"text text__normal-small text__left text__dark cntr__row\">  \nYou undertake that you shall not defraud, or attempt to defraud, Fabulive Limited or other users, and that you shall \nnot act in bad faith in your use of the Service. If Fabulive Limited determines that you do act in bad faith in violation \nof these Terms, or if Fabulive Limited determines that your actions fall outside of reasonable community standards, \nFabulive Limited may, at its sole discretion, terminate your account and prohibit you from using the Service.\n            </p>\n\n                 <p class=\"text text__normal-small text__left text__dark cntr__row\">  \nYou agree that your use of the Service shall be lawful and that you will comply with the usage rules. In furtherance of the foregoing, and as an example and not as a limitation, you agree that you shall not:\n<br>\t   • Create an account with or access the Service if you are under the age of 13;\n<br>\t   • Upload, post, transmit or otherwise disseminate material that is vulgar, indecent, obscene, pornographic, sexual or that is, in a reasonable person's view, otherwise offensive or objectionable;\n<br>\t• Libel, ridicule, defame, mock, stalk, intimidate, threaten, harass, or abuse anyone, hatefully, racially, ethnically or in any other manner;\n<br>\t• Upload or transmit (or attempt to upload or transmit) files that contain viruses, Trojan horses, worms, time bombs, cancel bots, corrupted files or data, or any other similar software or programs that may damage the operation of the Service or the computers of other users of the Service;\n<br>\t• Advertise, solicit or transmit any commercial advertisements, including chain letters, junk e-mail or repetitive messages (spim or spam) to anyone;\n<br>\t• Violate the contractual, personal, intellectual property or other rights of any party including by using, uploading, transmitting, distributing, or otherwise making available any information or material made available through the Service in any manner that infringes any copyright, trademark, patent, trade secret, or other right of any party (including rights of privacy or publicity);\n<br>\t• Create false personas, multiple identities, multiple user accounts, set up an account on behalf of someone other than yourself, use bots or other automated software programs to defraud or which otherwise violate these Terms of Service and/or the terms of service of any third-party applications or social networks through which the Service is accessed;\n<br>\t• Attempt to obtain passwords or other private information from other members including personally identifiable information (whether in text, image or video form), identification documents, or financial information;\n<br>\t• Upload or transmit (or attempt to upload or to transmit), without Fabulive Limited express permission, any material that acts as a passive or active information collection or transmission mechanism, including, without limitation, clear graphics interchange formats (\"gifs\"), 1×1 pixels, web bugs, cookies or other similar devices (sometimes referred to as \"spyware,\" \"passive collection mechanisms\" or \"pcms\");\n<br>\t• Improperly use support channels or complaint buttons to make false reports to Fabulive Limited;\n<br>\t• Develop, distribute, use, or publicly inform other members of \"auto\" software programs, \"macro\" software programs or other \"cheat utility\" software programs or applications;\n<br>\t• Exploit, distribute or publicly inform other members of any game error, miscue or bug which gives an unintended advantage;\n<br>\t• Deal with Coins/gifts in a manner that violates these Terms, including transferring Coins/gifts to other individuals, parties, or entities, selling or re-selling Virtual Currency or virtual goods or fraudulently obtaining or acquiring Virtual Currency or other products or services;\n<br>\t• Rent, lease, sell, trade, gift, bequeath or otherwise transfer your account to anyone without Fabulive Limited written permission;\n<br>\t• Access or use an account which has been rented, leased, sold, traded, gifted, bequeathed, or otherwise transferred from the account creator without Fabulive Limited written permission;\n<br>\t• Engage in any fraudulent activity with respect to payment methods or advertiser tracking mechanisms;\n<br>\t• Violate any applicable laws or regulations, or encourage or promote any illegal activity including, but not limited to, copyright infringement, trademark infringement, defamation, invasion of privacy, identity theft, hacking, cracking or distribution of counterfeit software, or cheats or hacks for the Service;\n<br>\t• Attempt to use the Service on or through any service that is not authorized by Fabulive Limited. Any such use is at your own risk and may subject you to additional or different terms. Fabulive Limited takes no responsibility for your use of the Service through any service that is not authorized by it;\n<br>\t• Post or communicate any person's real-world personal information using the Service;\n<br>\t• Attempt to interfere with, hack into or decipher any transmissions to or from the servers for the Service; or\n<br>\t• Interfere with the ability of others to enjoy using the Service, including disrupt, overburden or aid the disruption or overburdening of the Service servers, or take actions that interfere with or materially increase the cost to provide the Service for the enjoyment of all its users.\n\n            </p>\n\n\n             <h5 class=\"text text__middle-small text-left text__dark pad__without-bot cntr__row\">  \n                    Intellectual Property (IP) Ownership\n            </h5>\n\n            <p class=\"text text__normal-small text__left text__dark cntr__row\">  \nFabulive Limited retains all rights in the Service materials (including, but not limited to, applications, software, designs, \ngraphics, texts, information, pictures, video, sound, music, and other files, and their selection and arrangement) (collectively, \n\"Service Materials\"). The entire contents of the Service are protected by applicable copyright, trade dress, patent, and trademark laws, \ninternational conventions, and other laws protecting intellectual property and related proprietary rights.\n\n            </p>\n\n                 <p class=\"text text__normal-small text__left text__dark cntr__row\">  \nYou shall not, nor shall you cause any other party to modify, decompile, disassemble, reverse engineer, copy, transfer, \ncreate derivative works from, rent, sub-license, distribute, reproduce framed, republish, scrape, download, display, transmit, \npost, lease or sell in any form or by any means, in whole or in part, use for any purpose other than for using the Service pursuant \nto these Terms or otherwise exploit any of the Service Materials without Fabulive Limited explicit, prior written permission. \nThe foregoing shall not apply to your own User Content that you post through the Service in accordance with these Terms. All other \nuses of copyrighted or trade mark material, including any derivative use, require explicit, prior written permission from Fabulive \nLimited. Any reproduction or redistribution of materials not in accordance with these Terms is explicitly prohibited and may result \nin the termination of your Service account as well as severe civil and criminal penalties.\n            </p>\n\n                 <p class=\"text text__normal-small text__left text__dark cntr__row\">  \nFabulive Limited and/or its licensors and affiliates own all right, title, and interest, including copyrights and other intellectual \nproperty rights, in and to all the Service Materials. You hereby acknowledge that you do not acquire any ownership rights by using the \nService or by accessing any of the Service Materials, or rights to any derivative works thereof.\n\n            </p>\n\n              \n            <h5 class=\"text text__middle-small text-left text__dark pad__without-bot cntr__row\">  \n                    Disclaimer of Warranty; Limitation of Liability\n            </h5>\n\n            <p class=\"text text__normal-small text__left text__dark cntr__row\">  \nYou agree that your use of the Service shall be at your sole risk. To the fullest extent permitted by law, Fabulive Limited, \nits officers, directors, employees, and agents disclaim all warranties, explicit or implied, in connection with the Service and \nyour use thereof including implied warranties of merchantability, title, fitness for a particular purpose or non-infringement, \nusefulness, authority, accuracy, completeness, and timeliness. Fabulive Limited makes no warranties or representations about the \naccuracy or completeness of the content of the Service of the content of any sites linked to the Service and assume no liability or responsibility for any:\n\n            </p>\n\n                 <p class=\"text text__normal-small text__left text__dark cntr__row\">  \n(i) Errors, mistakes, or inaccuracies of content;\n(ii) Personal injury or property damage, of any nature whatsoever, resulting from your access to and use of the Service;\n(iii) Any unauthorized access to or use of Fabulive Limited secure servers and/or any and all personal information and/or financial information stored therein;\n(iv) Any interruption or cessation of transmission to or from the Service;\n(v) Any bugs, viruses, Trojan horses, or the like which may be transmitted to or through the Service by any third party; or\n(vi) Any errors or omissions in any content or for any loss or damage of any kind incurred as a result of the use of any content posted, emailed, transmitted, or otherwise made available via the Service.\n            </p>\n\n                 <p class=\"text text__normal-small text__left text__dark cntr__row\">  \nIn no event will Fabulive Limited, its directors, officers, agents, contractors, partners and employees, be liable to you or any third person for any special, direct, indirect, incidental, special, \npunitive, or consequential damages whatsoever including any lost profits or lost data arising from your use of the Service or other materials on, accessed through or downloaded from the Service, \nwhether based on warranty, contract, tort, or any other legal theory, and whether or not Fabulive Limited has been advised of the possibility of these damages. The foregoing limitation of liability \nshall apply to the fullest extent permitted by law in the applicable jurisdiction. You specifically acknowledge that Fabulive Limited shall not be liable for user submissions or defamatory, offensive, \nor illegal conduct by any third party and that the risk of harm or damage from the foregoing rests entirely with you.\n            </p>\n\n             <p class=\"text text__normal-small text__left text__dark cntr__row\">  \nYou agree to indemnify and hold Fabulive Limited, and each of its directors, officers, agents, contractors, partners and employees, harmless from and against any loss, liability, claim, demand, damages, \ncosts and expenses, including reasonable attorney's fees, arising out of or in connection with:\n            </p>\n\n\n             <p class=\"text text__normal-small text__left text__dark cntr__row\">  \n(i) Your use of and access to the Service;\n(ii) Your violation of any term of these Terms;\n(iii) Your violation of any third party right, including without limitation any copyright, property, or privacy right;\n(iv) Any claim that a user submissions made by you has caused damage to a third party; or\n(v) Any User Content you post or share on or through the Service.\n            </p>\n\n                 <p class=\"text text__normal-small text__left text__dark cntr__row\">  \nFabulive Limited reserves the right to amend these Terms of Service at any time and without notice, and it is your responsibility to review these Terms of Service for any changes. Your use of the Service \nfollowing any amendment of these Terms of Service will signify your assent to and acceptance of its revised terms. YOU AND FABULIVE LIMITED AGREE THAT ANY CAUSE OF ACTION ARISING OUT OF OR RELATED TO THE \nSERVICE MUST COMMENCE WITHIN ONE (1) YEAR AFTER THE CAUSE OF ACTION ACCRUES. OTHERWISE, SUCH CAUSE OF ACTION IS PERMANENTLY BARRED.\n            </p>\n\n             <p class=\"text text__normal-small text__left text__dark cntr__row\">  \nIf you do not agree with the terms and conditions of this document, please discontinue using any of Fabulive Limited services. If there are any questions regarding these \nTerms and Conditions you may contact us to the following address: support@fabulive.com\n\n            </p>\n\n\n    </div>\n\n    <div class=\"main-container-in container__after-header\"\n    *ngIf=\"templCase === templateCase.Policy\" >\n\n<h5 class=\"text text__middle-small text-left text__dark pad__without-bot cntr__row\">  \n    Privacy Policy\n</h5>\n\n            <p class=\"text text__normal-small text__left text__dark cntr__row\"> \nWelcome to Fabulive, a community to learn anything from anyone. The Fabulive web site and service including \n(without limitation) all websites, mobile applications and other interactive properties through which the service \nis delivered (collectively, the “Service”) are owned, operated and distributed by Fabulive Limited. By accessing any\n part of the Service, you are agreeing to the terms and conditions described below (this “Privacy Policy”) and the \n terms and conditions of our terms of service (the “Terms of Service”). If you do not agree to any of these terms, \n you should not use the Service. This Privacy Policy applies to all users, including both users who are simply viewing \n content available via the Service and users who have registered as members of Fabulive.\n            </p>\n            <p class=\"text text__normal-small text__left text__dark cntr__row\"> \nWe may, at our sole discretion, modify this Privacy Policy at any time. By accessing the Service at any time after such \nmodifications, you are agreeing to such modifications. This Privacy Policy was last modified as of July 5, 2017.\n            </p>\n\n<h5 class=\"text text__middle-small text-left text__dark pad__without-bot cntr__row\">  \nGeneral\n</h5>\n\n            <p class=\"text text__normal-small text__left text__dark cntr__row\"> \nYour privacy is very important to us. Accordingly, we have developed this Privacy Policy in order for you to understand \nhow we collect, use, communicate and disclose and make use of personal information. The following outlines our privacy policy.\n            </p>\n\n<h5 class=\"text text__middle-small text-left text__dark pad__without-bot cntr__row\">  \nPersonal Information\n</h5>\n\n            <p class=\"text text__normal-small text__left text__dark cntr__row\"> \nWhen your register with us and become a Fabulive Member, we will ask you for personally identifiable information. This refers \nto information about you that can be used to contact or identify you. This includes, but is not limited to, your name, email\n address, but does not include your credit card number of billing information. PayPal processes all of the transactions on \n Fabulive, and the information you provide to PayPal is subject to its privacy policy. We do not receive any of the credit \n card information you provide to PayPal.\n            </p>\n\n            <p class=\"text text__normal-small text__left text__dark cntr__row\"> \nIn order to send you e-mail from Fabulive, we need your e-mail address. To provide you with additional services, we may \nalso request your name, geographical coordinates, and telephone number. We will not give your name, email, or other personal\n information to unaffiliated third parties except with your consent or as otherwise set forth in this privacy policy. \n Though we make every effort to preserve user privacy, we may need to disclose personal information when required by law \n or when we have a good faith belief that such action is necessary to comply with a current judicial proceeding, a court\n  order or legal process that we receive or to protect our interests or the safety of others. \n            </p>\n\n  <h5 class=\"text text__middle-small text-left text__dark pad__without-bot cntr__row\">  \nOther Information\n  </h5>\n\n            <p class=\"text text__normal-small text__left text__dark cntr__row\"> \nWe use your IP address to help diagnose problems with our server, to administer our Service, and to analyze traffic patterns\n on the Service. We use cookies, web beacons and similar technology to deliver content specific to your interests and to save \n your password so you don't have to re-enter it each time you visit. We may also use web beacons and similar technology in emails \n that we send to you in order to track whether the emails have been opened. In addition, our web servers track information about \n the visits to the Service. For example, we compile statistics that show the daily number of visitors to the Service, the daily \n requests we receive for particular files on the Service, and what geographical areas those requests come from. These aggregated \n statistics are used internally to better provide services to the public and may also be provided to others.\n            </p>\n\n <h5 class=\"text text__middle-small text-left text__dark pad__without-bot cntr__row\">  \nVoluntary Disclosure\n </h5>\n\n            <p class=\"text text__normal-small text__left text__dark cntr__row\"> \nAny personal information or content that you voluntarily disclose in public areas becomes publicly available and can be collected\n and used by other users for any reason. Your profile page is typically publicly available, although you have the ability to change \n the settings to limit access to these areas. You should exercise caution before disclosing your personal information via these or \n any other public venues.\n            </p>\n\n <h5 class=\"text text__middle-small text-left text__dark pad__without-bot cntr__row\">  \nChildren’s Privacy\n </h5>\n\n            <p class=\"text text__normal-small text__left text__dark cntr__row\"> \nYou must be at least 13 years old to register to use the Service. Accordingly, we do not collect any personal information \nfrom children.\n            </p>\n\n<h5 class=\"text text__middle-small text-left text__dark pad__without-bot cntr__row\">  \nThird Party Advertising\n</h5>\n\n            <p class=\"text text__normal-small text__left text__dark cntr__row\"> \nWe may use third-party advertising companies to serve ads when you visit the Service. These companies may use information \n(not including your name, address, email address or telephone number) about your visits to this and other Web sites in order \nto provide advertisements on the Service and other sites about goods and services that may be of interest to you. In the course \nof serving advertisements to this site, third-party advertisers may also place or recognize a unique \"cookie\" on your browser, \nor use other technologies such as Java scripts or web beacons.\n            </p>\n\n<h5 class=\"text text__middle-small text-left text__dark pad__without-bot cntr__row\">  \nOther Sites\n</h5>\n\n            <p class=\"text text__normal-small text__left text__dark cntr__row\"> \nThe Service may contain links to other Web sites or services. We are not responsible for the privacy practices or the content of\n such Web sites or services, and you should review the privacy policy of each such Web site or service to make sure that you are\n  comfortable with it before providing any personal information. For example, all payments for classes are processed through PayPal. \n  As discussed above, we do not receive any of the information you provide to PayPal, and all such information is subject to PayPal’s \n  privacy policy.\n            </p>\n\n  <h5 class=\"text text__middle-small text-left text__dark pad__without-bot cntr__row\">  \nMiscellaneous\n  </h5>\n\n            <p class=\"text text__normal-small text__left text__dark cntr__row\"> \nIn the event that we are acquired by or merged with a third party entity, we reserve the right to transfer or assign the information \nwe have collected from users as part of such merger, acquisition, sale, or other change of control. In the unlikely event of our \nbankruptcy, insolvency, reorganization, receivership, or assignment for the benefit of creditors, or the application of laws or \nequitable principles affecting creditors' rights generally, we may not be able to control how your personal information is treated,\n transferred, or used.\n            </p>\n             <p class=\"text text__normal-small text__left text__dark cntr__row\"> \nThe Service is hosted in the United States and is intended for and directed to users in the United States. If you are accessing\n the Service from the European Union, Asia, or any other region with laws or regulations governing personal data collection, use,\n  and disclosure, that differ from United States laws, please be advised that through your continued use of the Service, which \n  is governed by United States law, this Privacy Policy, and our Terms of Service, you are transferring your personal information\n   to the United States and you consent to that transfer.\n             </p>\n               <p class=\"text text__normal-small text__left text__dark cntr__row\"> \nCalifornia Civil Code Section 1798.83 permits users of the Service who are California residents to request certain information \nregarding its disclosure of personal information to third parties for their direct marketing purposes. To make such a request, \nplease send an e-mail with \"California Privacy Rights\" in the heading to support@fabulive.com or write us at the address listed below.\n             </p>\n\n<h5 class=\"text text__middle-small text-left text__dark pad__without-bot cntr__row\">  \nContact Us\n</h5>\n\n            <p class=\"text text__normal-small text__left text__dark cntr__row\"> \nIf you have any questions, you can contact us at support@fabulive.com or at Suite 1404, Tung Wai Commercial Building, \n109-111 Gloucester Road, Wanchai, Hong Kong.\n            </p>\n \n\n\n    </div>\n\n        <app-footer>      \n        </app-footer>\n\n    </div>\n"

/***/ }),

/***/ "./src/app/components/info/info.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/components/info/info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InfoTemplateCase;
(function (InfoTemplateCase) {
    InfoTemplateCase[InfoTemplateCase["Terms"] = 0] = "Terms";
    InfoTemplateCase[InfoTemplateCase["Policy"] = 1] = "Policy";
    InfoTemplateCase[InfoTemplateCase["Company"] = 2] = "Company";
})(InfoTemplateCase || (InfoTemplateCase = {}));
var InfoComponent = (function () {
    function InfoComponent(route, router, location) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.location = location;
        this.templateCase = InfoTemplateCase;
        router.events.filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* NavigationEnd */]; }).subscribe(function (val) {
            window.scrollTo(0, 0);
            _this.setTemplCase();
        });
    }
    InfoComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
        this.setTemplCase();
    };
    // set template for showing
    InfoComponent.prototype.setTemplCase = function () {
        var id = this.route.snapshot.params['id'];
        console.log(" id ", id);
        if (id === "company") {
            this.templCase = InfoTemplateCase.Company;
        }
        else if (id === "terms") {
            this.templCase = InfoTemplateCase.Terms;
        }
        else if (id === "policy") {
            this.templCase = InfoTemplateCase.Policy;
        }
        console.log(id, this.templCase);
    };
    // TODO : bug if we went to this page with link, redirect back, do we want redirect to special page?
    InfoComponent.prototype.navBack = function () {
        this.location.back();
    };
    return InfoComponent;
}());
InfoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-info',
        template: __webpack_require__("./src/app/components/info/info.component.html"),
        styles: [__webpack_require__("./src/app/components/info/info.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["c" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["c" /* Location */]) === "function" && _c || Object])
], InfoComponent);

var _a, _b, _c;
//# sourceMappingURL=info.component.js.map

/***/ }),

/***/ "./src/app/components/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n\n\n    <header class=\"site-header\">\n        <div class=\"site-header__inner\">\n            <div class=\"site-header__top\">\n                <div class=\"menu\"></div>\n                <div class=\"logo\"></div>\n                <div class=\"searchblock\"></div>\n                <div class=\"userblock\"></div>\n            </div>\n            <div class=\"site-header__bottom\">\n                <div class=\"site-navigation__wrapper\">\n                    <nav class=\"site-navigation\">\n                        <ul class=\"site-navigation__list\">\n                            <li class=\"site-navigation__item\"><a href=\"#\" class=\"site-navigation__link\">Home</a></li>\n                            <li class=\"site-navigation__item\"><a href=\"#\" class=\"site-navigation__link  site-navigation__link--active\">Explore</a></li>\n                            <li class=\"site-navigation__item\"><a href=\"#\" class=\"site-navigation__link\">Following</a></li>\n                        </ul>\n                    </nav>\n                </div>\n            </div>\n        </div>\n    </header>\n\n\n\n    <div class=\"feed  feed--explore\">\n\n        <div class=\"feed__container\">\n\n            <div class=\"shelf\">\n                <div class=\"btn-load-more\">\n                    <svg class=\"icon\" width=\"6\" height=\"10\">\n                        <use xlink:href=\"#ico-arrow-left\" />\n                    </svg>\n                </div>\n                <header class=\"shelf__header\">\n                    <h2 class=\"shelf__title\">Trending now</h2>\n                    <a href=\"\" class=\"see-all-link\">See all (<span class=\"see-all-link__number\">50</span>)</a>\n                </header>\n                <div class=\"shelf__content\">\n\n\n\n                    <article class=\"card\">\n                        <header class=\"card__header\">\n                             <div class=\"username\">\n                                <div class=\"username__main-info\">\n                                    <a href=\"#\">\n                                    <div class=\"username__avatar\"><img src=\"assets/images/avatar-1.jpg\" alt=\"\"></div>\n                                    <div class=\"username__nickname\">bobby.brown</div>\n                                </a>\n                                </div>\n                                <div class=\"username__secondary-info\"></div>\n                            </div>\n                         </header>\n                        <div class=\"card__content\">\n                            <a href=\"#\" class=\"card__link\" title=\"How To find your perfect lip in 5 minutes and bla-bla-bla\">\n                                <div class=\"card__tumbnail  card__tumbnail--has-tumbnail\"><img src=\"assets/images/tumb-1.jpg\" width=\"auto\" height=\"140\" alt=\"\" class=\"card__img\"></div>\n                                <div class=\"card__title\">\n                                    <span class=\"skin-color-indicator skin-color-indicator--1\"></span>\n                                    <span class=\"card__category\">Makeup Tips</span>\n                                    <h3 class=\"card__video-title\">How To find your perfect lip in 5 minutes and bla-bla-bla</h3>\n                                </div>\n                            </a>\n                        </div>\n                        <footer class=\"card__footer\">\n                            <div class=\"video-info\">\n                                <div class=\"video-info__watchers\">\n                                    <span class=\"video-info__icon\">\n                                        <svg class=\"icon\" width=\"9\" height=\"8\">\n                                            <use xlink:href=\"#ico-eye-small\" />\n                                        </svg>\n                                    </span>\n                                    <span class=\"video-info__number\">1,374</span>\n                                    <span class=\"video-info__name\">watching</span>\n                                </div>\n                            </div>\n                            <div class=\"card__menu-toggle\">\n                                <svg class=\"icon\" width=\"15\" height=\"3\">\n                                    <use xlink:href=\"#btn-more-small\" />\n                                </svg>\n                            </div>\n                        </footer>\n                    </article>\n\n                    <article class=\"card\">\n                        <header class=\"card__header\">\n                             <div class=\"username  username--has-avatar  username--default-avatar\">\n                                <div class=\"username__main-info\">                                        \n                                    <a href=\"#\">\n                                        <div class=\"username__avatar\"><span class=\"username__avatar-letter\">M</span></div>\n                                     <div class=\"username__nickname\">medison.eva</div>\n                                    </a>\n                                </div>\n                                <div class=\"username__secondary-info\"></div>\n                            </div>\n                         </header>\n                        <div class=\"card__content\">\n                            <a href=\"#\" class=\"card__link\" title=\"Make eyes look good\">\n                                <div class=\"card__tumbnail\"></div>\n                                <div class=\"card__title\">\n                                    <span class=\"card__category\">Highlighting</span>\n                                    <h3 class=\"card__video-title\">Make eyes look good</h3>\n                                </div>\n                            </a>\n                        </div>\n                        <footer class=\"card__footer\">\n                            <div class=\"video-info\">\n                                <div class=\"video-info__watchers\">\n                                    <span class=\"video-info__icon\">\n                                        <svg class=\"icon\" width=\"9\" height=\"8\">\n                                            <use xlink:href=\"#ico-eye-small\" />\n                                        </svg>\n                                    </span>\n                                    <span class=\"video-info__number\">1,374</span>\n                                    <span class=\"video-info__name\">watching</span>\n                                </div>\n                            </div>\n                            <div class=\"card__menu-toggle\">\n                                <svg class=\"icon\" width=\"15\" height=\"3\">\n                                    <use xlink:href=\"#btn-more-small\" />\n                                </svg>\n                            </div>\n                        </footer>\n                    </article>\n\n                    <article class=\"card\">\n                        <header class=\"card__header\">\n                             <div class=\"username\">\n                                <div class=\"username__main-info\">                                        \n                                    <a href=\"#\">\n                                    <div class=\"username__avatar\"><img src=\"assets/images/avatar-1.jpg\" alt=\"\"></div>\n                                    <div class=\"username__nickname\">bobby.brown</div>\n                                </a>\n                                </div>\n                                <div class=\"username__secondary-info\"></div>\n                            </div>\n                         </header>\n                        <div class=\"card__content\">\n                            <a href=\"#\" class=\"card__link\" title=\"How To find your perfect lip in 5 minutes and bla-bla-bla\">\n                                <div class=\"card__tumbnail    card__tumbnail--has-tumbnail\"><img src=\"assets/images/tumb-1.jpg\" width=\"auto\" height=\"140\" alt=\"\" class=\"card__img\"></div>\n                                <div class=\"card__title\">\n                                    <span class=\"skin-color-indicator skin-color-indicator--1\"></span>\n                                    <span class=\"card__category\">Makeup Tips</span>\n                                    <h3 class=\"card__video-title\">How To find your perfect lip in 5 minutes and bla-bla-bla</h3>\n                                </div>\n                            </a>\n                        </div>\n                        <footer class=\"card__footer\">\n                            <div class=\"video-info\">\n                                <div class=\"video-info__watchers\">\n                                    <span class=\"video-info__icon\">\n                                        <svg class=\"icon\" width=\"9\" height=\"8\">\n                                            <use xlink:href=\"#ico-eye-small\" />\n                                        </svg>\n                                    </span>\n                                    <span class=\"video-info__number\">1,374</span>\n                                    <span class=\"video-info__name\">watching</span>\n                                </div>\n                            </div>\n                            <div class=\"card__menu-toggle\">\n                                <svg class=\"icon\" width=\"15\" height=\"3\">\n                                    <use xlink:href=\"#btn-more-small\" />\n                                </svg>\n                            </div>\n                        </footer>\n                    </article>\n\n                    <article class=\"card\">\n                        <header class=\"card__header\">\n                             <div class=\"username\">\n                                <div class=\"username__main-info\">                                        \n                                    <a href=\"#\">\n                                    <div class=\"username__avatar  username__avatar--no-avatar\"><img src=\"#\" alt=\"\"></div>\n                                    <div class=\"username__nickname\">very.very.longusernameverylong</div>\n                                </a>\n                                </div>\n                                <div class=\"username__secondary-info\"></div>\n                            </div>\n                         </header>\n                        <div class=\"card__content\">\n                            <a href=\"#\" class=\"card__link\" title=\"How To find your perfect lip in 5 min\">\n                                <div class=\"card__tumbnail  card__tumbnail--no-tumbnail\"><img src=\"#\" width=\"auto\" height=\"140\" alt=\"\" class=\"card__img\"></div>\n                                <div class=\"card__title\">\n                                    <span class=\"skin-color-indicator skin-color-indicator--1\"></span>\n                                    <span class=\"card__category\">Makeup Tips</span>\n                                    <h3 class=\"card__video-title\">How To find your perfect lip in 5 min</h3>\n                                </div>\n                            </a>\n                        </div>\n                        <footer class=\"card__footer\">\n                            <div class=\"video-info\">\n                                <div class=\"video-info__watchers\">\n                                    <span class=\"video-info__icon\">\n                                        <svg class=\"icon\" width=\"9\" height=\"8\">\n                                            <use xlink:href=\"#ico-eye-small\" />\n                                        </svg>\n                                    </span>\n                                    <span class=\"video-info__number\">1,374</span>\n                                    <span class=\"video-info__name\">watching</span>\n                                </div>\n                            </div>\n                            <div class=\"card__menu-toggle\">\n                                <svg class=\"icon\" width=\"15\" height=\"3\">\n                                    <use xlink:href=\"#btn-more-small\" />\n                                </svg>\n                            </div>\n                        </footer>\n                    </article>\n\n                    <article class=\"card\">\n                        <header class=\"card__header\">\n                             <div class=\"username\">\n                                <div class=\"username__main-info\">                                        \n                                    <a href=\"#\">\n                                    <div class=\"username__avatar\"><img src=\"assets/images/avatar-1.jpg\" alt=\"\"></div>\n                                    <div class=\"username__nickname\">bobby.brown</div>\n                                </a>\n                                </div>\n                                <div class=\"username__secondary-info\"></div>\n                            </div>\n                         </header>\n                        <div class=\"card__content\">\n                            <a href=\"#\" class=\"card__link\" title=\"How To find your perfect lip in 5 minutes and bla-bla-bla\">\n                                <div class=\"card__tumbnail    card__tumbnail--has-tumbnail\"><img src=\"assets/images/tumb-1.jpg\" width=\"auto\" height=\"140\" alt=\"\" class=\"card__img\"></div>\n                                <div class=\"card__title\">\n                                    <span class=\"card__category\">Makeup Tips</span>\n                                    <h3 class=\"card__video-title\">How To find your perfect lip in 5 minutes and bla-bla-bla</h3>\n                                </div>\n                            </a>\n                        </div>\n                        <footer class=\"card__footer\">\n                            <div class=\"video-info\">\n                                <div class=\"video-info__watchers\">\n                                    <span class=\"video-info__icon\">\n                                        <svg class=\"icon\" width=\"9\" height=\"8\">\n                                            <use xlink:href=\"#ico-eye-small\" />\n                                        </svg>\n                                    </span>\n                                    <span class=\"video-info__number\">1,374</span>\n                                    <span class=\"video-info__name\">watching</span>\n                                </div>\n                            </div>\n                            <div class=\"card__menu-toggle\">\n                                <svg class=\"icon\" width=\"15\" height=\"3\">\n                                    <use xlink:href=\"#btn-more-small\" />\n                                </svg>\n                            </div>\n                        </footer>\n                    </article>\n\n\n                </div>\n            </div>\n        </div>\n        <div class=\"feed__container\">\n            <div class=\"shelf\">\n                <header class=\"shelf__header\">\n                    <h2 class=\"shelf__title\">Best in <span class=\"category-name\">Makeup tips</span></h2>\n                    <a href=\"#\" class=\"shelf__more-link\"></a>\n                </header>\n               <div class=\"shelf__content\">\n\n\n\n                    <article class=\"card\">\n                        <header class=\"card__header\">\n                             <div class=\"username\">\n                                <div class=\"username__main-info\">                                        <a href=\"#\">\n                                    <div class=\"username__avatar\"><img src=\"assets/images/avatar-1.jpg\" alt=\"\"></div>\n                                    <div class=\"username__nickname\">bobby.brown</div>\n                                </a>\n                                </div>\n                                <div class=\"username__secondary-info\"></div>\n                            </div>\n                         </header>\n                        <div class=\"card__content\">\n                            <a href=\"#\" class=\"card__link\" title=\"How To find your perfect lip in 5 minutes and bla-bla-bla\">\n                                <div class=\"card__tumbnail  card__tumbnail--has-tumbnail\"><img src=\"assets/images/tumb-1.jpg\" width=\"auto\" height=\"140\" alt=\"\" class=\"card__img\"></div>\n                                <div class=\"card__title\">\n                                    <span class=\"skin-color-indicator skin-color-indicator--1\"></span>\n                                    <span class=\"card__category\">Makeup Tips</span>\n                                    <h3 class=\"card__video-title\">How To find your perfect lip in 5 minutes and bla-bla-bla</h3>\n                                </div>\n                            </a>\n                        </div>\n                        <footer class=\"card__footer\">\n                            <div class=\"video-info\">\n                                <div class=\"video-info__watchers\">\n                                    <span class=\"video-info__icon\">\n                                        <svg class=\"icon\" width=\"9\" height=\"8\">\n                                            <use xlink:href=\"#ico-eye-small\" />\n                                        </svg>\n                                    </span>\n                                    <span class=\"video-info__number\">1,374</span>\n                                    <span class=\"video-info__name\">watching</span>\n                                </div>\n                            </div>\n                            <div class=\"card__menu-toggle\">\n                                <svg class=\"icon\" width=\"15\" height=\"3\">\n                                    <use xlink:href=\"#btn-more-small\" />\n                                </svg>\n                            </div>\n                        </footer>\n                    </article>\n\n                    <article class=\"card\">\n                        <header class=\"card__header\">\n                             <div class=\"username  username--has-avatar  username--default-avatar\">\n                                <div class=\"username__main-info\">                                        \n                                    <a href=\"#\">\n                                        <div class=\"username__avatar\"><span class=\"username__avatar-letter\">M</span></div>\n                                     <div class=\"username__nickname\">medison.eva</div>\n                                    </a>\n                                </div>\n                                <div class=\"username__secondary-info\"></div>\n                            </div>\n                         </header>\n                        <div class=\"card__content\">\n                            <a href=\"#\" class=\"card__link\" title=\"Make eyes look good\">\n                                <div class=\"card__tumbnail\"></div>\n                                <div class=\"card__title\">\n                                    <span class=\"skin-color-indicator skin-color-indicator--1\"></span>\n                                    <span class=\"card__category\">Highlighting</span>\n                                    <h3 class=\"card__video-title\">Make eyes look good</h3>\n                                </div>\n                            </a>\n                        </div>\n                        <footer class=\"card__footer\">\n                            <div class=\"video-info\">\n                                <div class=\"video-info__watchers\">\n                                    <span class=\"video-info__icon\">\n                                        <svg class=\"icon\" width=\"9\" height=\"8\">\n                                            <use xlink:href=\"#ico-eye-small\" />\n                                        </svg>\n                                    </span>\n                                    <span class=\"video-info__number\">1,374</span>\n                                    <span class=\"video-info__name\">watching</span>\n                                </div>\n                            </div>\n                            <div class=\"card__menu-toggle\">\n                                <svg class=\"icon\" width=\"15\" height=\"3\">\n                                    <use xlink:href=\"#btn-more-small\" />\n                                </svg>\n                            </div>\n                        </footer>\n                    </article>\n\n                    <article class=\"card\">\n                        <header class=\"card__header\">\n                             <div class=\"username\">\n                                <div class=\"username__main-info\">                                        \n                                    <a href=\"#\">\n                                    <div class=\"username__avatar\"><img src=\"assets/images/avatar-1.jpg\" alt=\"\"></div>\n                                    <div class=\"username__nickname\">bobby.brown</div>\n                                </a>\n                                </div>\n                                <div class=\"username__secondary-info\"></div>\n                            </div>\n                         </header>\n                        <div class=\"card__content\">\n                            <a href=\"#\" class=\"card__link\"  title=\"How To find your perfect lip in 5 minutes and bla-bla-bla\">\n                                <div class=\"card__tumbnail    card__tumbnail--has-tumbnail\"><img src=\"assets/images/tumb-1.jpg\" width=\"auto\" height=\"140\" alt=\"\" class=\"card__img\"></div>\n                                <div class=\"card__title\">\n                                    <span class=\"skin-color-indicator skin-color-indicator--1\"></span>\n                                    <span class=\"card__category\">Makeup Tips</span>\n                                    <h3 class=\"card__video-title\">How To find your perfect lip in 5 minutes and bla-bla-bla</h3>\n                                </div>\n                            </a>\n                        </div>\n                        <footer class=\"card__footer\">\n                            <div class=\"video-info\">\n                                <div class=\"video-info__watchers\">\n                                    <span class=\"video-info__icon\">\n                                        <svg class=\"icon\" width=\"9\" height=\"8\">\n                                            <use xlink:href=\"#ico-eye-small\" />\n                                        </svg>\n                                    </span>\n                                    <span class=\"video-info__number\">1,374</span>\n                                    <span class=\"video-info__name\">watching</span>\n                                </div>\n                            </div>\n                            <div class=\"card__menu-toggle\">\n                                <svg class=\"icon\" width=\"15\" height=\"3\">\n                                    <use xlink:href=\"#btn-more-small\" />\n                                </svg>\n                            </div>\n                        </footer>\n                    </article>\n\n                    <article class=\"card\">\n                        <header class=\"card__header\">\n                             <div class=\"username\">\n                                <div class=\"username__main-info\">                                        \n                                    <a href=\"#\">\n                                    <div class=\"username__avatar  username__avatar--no-avatar\"><img src=\"#\" alt=\"\"></div>\n                                    <div class=\"username__nickname\">very.very.longusernameverylong</div>\n                                </a>\n                                </div>\n                                <div class=\"username__secondary-info\"></div>\n                            </div>\n                         </header>\n                        <div class=\"card__content\">\n                            <a href=\"#\" class=\"card__link\"  title=\"How To find your perfect lip in 5 min\">\n                                <div class=\"card__tumbnail   card__tumbnail--no-tumbnail\"><img src=\"#\" width=\"auto\" height=\"140\" alt=\"\" class=\"card__img\"></div>\n                                <div class=\"card__title\">\n                                    <span class=\"skin-color-indicator skin-color-indicator--1\"></span>\n                                    <span class=\"card__category\">Makeup Tips</span>\n                                    <h3 class=\"card__video-title\">How To find your perfect lip in 5 min</h3>\n                                </div>\n                            </a>\n                        </div>\n                        <footer class=\"card__footer\">\n                            <div class=\"video-info\">\n                                <div class=\"video-info__watchers\">\n                                    <span class=\"video-info__icon\">\n                                        <svg class=\"icon\" width=\"9\" height=\"8\">\n                                            <use xlink:href=\"#ico-eye-small\" />\n                                        </svg>\n                                    </span>\n                                    <span class=\"video-info__number\">1,374</span>\n                                    <span class=\"video-info__name\">watching</span>\n                                </div>\n                            </div>\n                            <div class=\"card__menu-toggle\">\n                                <svg class=\"icon\" width=\"15\" height=\"3\">\n                                    <use xlink:href=\"#btn-more-small\" />\n                                </svg>\n                            </div>\n                        </footer>\n                    </article>\n\n                    <article class=\"card\">\n                        <header class=\"card__header\">\n                             <div class=\"username\">\n                                <div class=\"username__main-info\">                                        \n                                    <a href=\"#\">\n                                    <div class=\"username__avatar\"><img src=\"assets/images/avatar-1.jpg\" alt=\"\"></div>\n                                    <div class=\"username__nickname\">bobby.brown</div>\n                                </a>\n                                </div>\n                                <div class=\"username__secondary-info\"></div>\n                            </div>\n                         </header>\n                        <div class=\"card__content\">\n                            <a href=\"#\" class=\"card__link\"   title=\"How To find your perfect lip in 5 minutes and bla-bla-bla\">\n                                <div class=\"card__tumbnail    card__tumbnail--has-tumbnail\"><img src=\"assets/images/tumb-1.jpg\" width=\"auto\" height=\"140\" alt=\"\" class=\"card__img\"></div>\n                                <div class=\"card__title\">\n                                    <span class=\"skin-color-indicator skin-color-indicator--1\"></span>\n                                    <span class=\"card__category\">Makeup Tips</span>\n                                    <h3 class=\"card__video-title\">How To find your perfect lip in 5 minutes and bla-bla-bla</h3>\n                                </div>\n                            </a>\n                        </div>\n                        <footer class=\"card__footer\">\n                            <div class=\"video-info\">\n                                <div class=\"video-info__watchers\">\n                                    <span class=\"video-info__icon\">\n                                        <svg class=\"icon\" width=\"9\" height=\"8\">\n                                            <use xlink:href=\"#ico-eye-small\" />\n                                        </svg>\n                                    </span>\n                                    <span class=\"video-info__number\">1,374</span>\n                                    <span class=\"video-info__name\">watching</span>\n                                </div>\n                            </div>\n                            <div class=\"card__menu-toggle\">\n                                <svg class=\"icon\" width=\"15\" height=\"3\">\n                                    <use xlink:href=\"#btn-more-small\" />\n                                </svg>\n                            </div>\n                        </footer>\n                    </article>\n\n\n                </div>\n            </div>\n            <div class=\"shelf\">\n                <header class=\"shelf__header\">\n                    <h2 class=\"shelf__title\">Best in <span class=\"category-name\">Highlighting</span>\n                    </h2>\n                    <a href=\"#\" class=\"shelf__more-link\"></a>\n                </header>\n               <div class=\"shelf__content\">\n\n\n\n                    <article class=\"card\">\n                        <header class=\"card__header\">\n                             <div class=\"username\">\n                                <div class=\"username__main-info\">                                        <a href=\"#\">\n                                    <div class=\"username__avatar\"><img src=\"assets/images/avatar-1.jpg\" alt=\"\"></div>\n                                    <div class=\"username__nickname\">bobby.brown</div>\n                                </a>\n                                </div>\n                                <div class=\"username__secondary-info\"></div>\n                            </div>\n                         </header>\n                        <div class=\"card__content\">\n                            <a href=\"#\" class=\"card__link\"   title=\"How To find your perfect lip in 5 minutes and bla-bla-bla\">\n                                <div class=\"card__tumbnail  card__tumbnail--has-tumbnail\"><img src=\"assets/images/tumb-1.jpg\" width=\"auto\" height=\"140\" alt=\"\" class=\"card__img\"></div>\n                                <div class=\"card__title\">\n                                    <span class=\"skin-color-indicator skin-color-indicator--1\"></span>\n                                    <span class=\"card__category\">Makeup Tips</span>\n                                    <h3 class=\"card__video-title\">How To find your perfect lip in 5 minutes and bla-bla-bla</h3>\n                                </div>\n                            </a>\n                        </div>\n                        <footer class=\"card__footer\">\n                            <div class=\"video-info\">\n                                <div class=\"video-info__watchers\">\n                                    <span class=\"video-info__icon\">\n                                        <svg class=\"icon\" width=\"9\" height=\"8\">\n                                            <use xlink:href=\"#ico-eye-small\" />\n                                        </svg>\n                                    </span>\n                                    <span class=\"video-info__number\">1,374</span>\n                                    <span class=\"video-info__name\">watching</span>\n                                </div>\n                            </div>\n                            <div class=\"card__menu-toggle\">\n                                <svg class=\"icon\" width=\"15\" height=\"3\">\n                                    <use xlink:href=\"#btn-more-small\" />\n                                </svg>\n                            </div>\n                        </footer>\n                    </article>\n\n                    <article class=\"card\">\n                        <header class=\"card__header\">\n                             <div class=\"username  username--has-avatar  username--default-avatar\">\n                                <div class=\"username__main-info\">                                        \n                                    <a href=\"#\">\n                                        <div class=\"username__avatar\"><span class=\"username__avatar-letter\">M</span></div>\n                                     <div class=\"username__nickname\">medison.eva</div>\n                                    </a>\n                                </div>\n                                <div class=\"username__secondary-info\"></div>\n                            </div>\n                         </header>\n                        <div class=\"card__content\">\n                            <a href=\"#\" class=\"card__link\"   title=\"Make eyes look good\">\n                                <div class=\"card__tumbnail\"></div>\n                                <div class=\"card__title\">\n                                    <span class=\"card__category\">Highlighting</span>\n                                    <h3 class=\"card__video-title\">Make eyes look good</h3>\n                                </div>\n                            </a>\n                        </div>\n                        <footer class=\"card__footer\">\n                            <div class=\"video-info\">\n                                <div class=\"video-info__watchers\">\n                                    <span class=\"video-info__icon\">\n                                        <svg class=\"icon\" width=\"9\" height=\"8\">\n                                            <use xlink:href=\"#ico-eye-small\" />\n                                        </svg>\n                                    </span>\n                                    <span class=\"video-info__number\">1,374</span>\n                                    <span class=\"video-info__name\">watching</span>\n                                </div>\n                            </div>\n                            <div class=\"card__menu-toggle\">\n                                <svg class=\"icon\" width=\"15\" height=\"3\">\n                                    <use xlink:href=\"#btn-more-small\" />\n                                </svg>\n                            </div>\n                        </footer>\n                    </article>\n\n                    <article class=\"card\">\n                        <header class=\"card__header\">\n                             <div class=\"username\">\n                                <div class=\"username__main-info\">                                        \n                                    <a href=\"#\">\n                                    <div class=\"username__avatar\"><img src=\"assets/images/avatar-1.jpg\" alt=\"\"></div>\n                                    <div class=\"username__nickname\">bobby.brown</div>\n                                </a>\n                                </div>\n                                <div class=\"username__secondary-info\"></div>\n                            </div>\n                         </header>\n                        <div class=\"card__content\">\n                            <a href=\"#\" class=\"card__link\" title=\"How To find your perfect lip in 5 minutes and bla-bla-bla\">\n                                <div class=\"card__tumbnail    card__tumbnail--has-tumbnail\"><img src=\"assets/images/tumb-1.jpg\" width=\"auto\" height=\"140\" alt=\"\" class=\"card__img\"></div>\n                                <div class=\"card__title\">\n                                    <span class=\"skin-color-indicator skin-color-indicator--1\"></span>\n                                    <span class=\"card__category\">Makeup Tips</span>\n                                    <h3 class=\"card__video-title\">How To find your perfect lip in 5 minutes and bla-bla-bla</h3>\n                                </div>\n                            </a>\n                        </div>\n                        <footer class=\"card__footer\">\n                            <div class=\"video-info\">\n                                <div class=\"video-info__watchers\">\n                                    <span class=\"video-info__icon\">\n                                        <svg class=\"icon\" width=\"9\" height=\"8\">\n                                            <use xlink:href=\"#ico-eye-small\" />\n                                        </svg>\n                                    </span>\n                                    <span class=\"video-info__number\">1,374</span>\n                                    <span class=\"video-info__name\">watching</span>\n                                </div>\n                            </div>\n                            <div class=\"card__menu-toggle\">\n                                <svg class=\"icon\" width=\"15\" height=\"3\">\n                                    <use xlink:href=\"#btn-more-small\" />\n                                </svg>\n                            </div>\n                        </footer>\n                    </article>\n\n                    <article class=\"card\">\n                        <header class=\"card__header\">\n                             <div class=\"username\">\n                                <div class=\"username__main-info\">                                        \n                                    <a href=\"#\">\n                                    <div class=\"username__avatar  username__avatar--no-avatar\"><img src=\"#\" alt=\"\"></div>\n                                    <div class=\"username__nickname\">very.very.longusernameverylong</div>\n                                </a>\n                                </div>\n                                <div class=\"username__secondary-info\"></div>\n                            </div>\n                         </header>\n                        <div class=\"card__content\">\n                            <a href=\"#\" class=\"card__link\" title=\"How To find your perfect lip in 5 min\">\n                                <div class=\"card__tumbnail   card__tumbnail--no-tumbnail\"><img src=\"#\" width=\"auto\" height=\"140\" alt=\"\" class=\"card__img\"></div>\n                                <div class=\"card__title\">\n                                    <span class=\"skin-color-indicator skin-color-indicator--1\"></span>\n                                    <span class=\"card__category\">Makeup Tips</span>\n                                    <h3 class=\"card__video-title\">How To find your perfect lip in 5 min</h3>\n                                </div>\n                            </a>\n                        </div>\n                        <footer class=\"card__footer\">\n                            <div class=\"video-info\">\n                                <div class=\"video-info__watchers\">\n                                    <span class=\"video-info__icon\">\n                                        <svg class=\"icon\" width=\"9\" height=\"8\">\n                                            <use xlink:href=\"#ico-eye-small\" />\n                                        </svg>\n                                    </span>\n                                    <span class=\"video-info__number\">1,374</span>\n                                    <span class=\"video-info__name\">watching</span>\n                                </div>\n                            </div>\n                            <div class=\"card__menu-toggle\">\n                                <svg class=\"icon\" width=\"15\" height=\"3\">\n                                    <use xlink:href=\"#btn-more-small\" />\n                                </svg>\n                            </div>\n                        </footer>\n                    </article>\n\n                    <article class=\"card\">\n                        <header class=\"card__header\">\n                             <div class=\"username\">\n                                <div class=\"username__main-info\">                                        \n                                    <a href=\"#\">\n                                    <div class=\"username__avatar\"><img src=\"assets/images/avatar-1.jpg\" alt=\"\"></div>\n                                    <div class=\"username__nickname\">bobby.brown</div>\n                                </a>\n                                </div>\n                                <div class=\"username__secondary-info\"></div>\n                            </div>\n                         </header>\n                        <div class=\"card__content\">\n                            <a href=\"#\" class=\"card__link\" title=\"How To find your perfect lip in 5 minutes and bla-bla-bla\">\n                                <div class=\"card__tumbnail    card__tumbnail--has-tumbnail\"><img src=\"assets/images/tumb-1.jpg\" width=\"auto\" height=\"140\" alt=\"\" class=\"card__img\"></div>\n                                <div class=\"card__title\">\n                                    <span class=\"skin-color-indicator skin-color-indicator--1\"></span>\n                                    <span class=\"card__category\">Makeup Tips</span>\n                                    <h3 class=\"card__video-title\">How To find your perfect lip in 5 minutes and bla-bla-bla</h3>\n                                </div>\n                            </a>\n                        </div>\n                        <footer class=\"card__footer\">\n                            <div class=\"video-info\">\n                                <div class=\"video-info__watchers\">\n                                    <span class=\"video-info__icon\">\n                                        <svg class=\"icon\" width=\"9\" height=\"8\">\n                                            <use xlink:href=\"#ico-eye-small\" />\n                                        </svg> \n                                    </span>\n                                    <span class=\"video-info__number\">1,374</span>\n                                    <span class=\"video-info__name\">watching</span>\n                                </div>\n                            </div>\n                            <div class=\"card__menu-toggle\">\n                                <svg class=\"icon\" width=\"15\" height=\"3\">\n                                    <use xlink:href=\"#btn-more-small\" />\n                                </svg>\n                            </div>\n                        </footer>\n                    </article>\n\n\n                </div>\n            </div>\n        </div>\n        <div class=\"loader\">\n            <button type=\"button\" class=\"button button-pink button--load-more\">Load more</button>\n        </div>\n    </div>\n\n    <footer class=\"site-footer\">\n        <div class=\"site-footer__inner\">\n        </div>\n    </footer>\n\n</div>\n\n<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display: none;\"><symbol id=\"btn-more-small\" viewBox=\"0 0 15 3\"><title>btn-more-small</title><title> btn-more-small</title><desc> Created with Sketch.</desc><g fill=\"none\"><g fill=\"#4A5D76\"><circle cx=\"1.5\" cy=\"1.5\" r=\"1.5\"/><circle cx=\"7.5\" cy=\"1.5\" r=\"1.5\"/><circle cx=\"13.5\" cy=\"1.5\" r=\"1.5\"/></g></g></symbol><symbol id=\"ico-arrow-left\" viewBox=\"0 0 6 12\"><title>ico-arrow-left</title><title> 1CDC06E5-C913-4A6F-888F-25A7630D7326</title><desc> Created with sketchtool.</desc><g fill=\"none\"><g fill=\"#D8D8D8\"><path d=\"M6.2 6C6.2 5.7 6.1 5.4 5.9 5.2L1.9 1.2C1.5 0.8 0.8 0.8 0.5 1.2L0.1 1.5C-0.3 1.9-0.3 2.6 0.1 3L3.2 6 0.1 9C-0.3 9.4-0.3 10.1 0.1 10.5L0.5 10.8C0.8 11.2 1.5 11.2 1.9 10.8L5.9 6.8C6.1 6.6 6.2 6.3 6.2 6Z\"/></g></g></symbol><symbol id=\"ico-eye-small\" viewBox=\"0 0 11 9\"><title>ico-eye-small</title><title> 8635A01E-6466-480E-B2C3-C9AA3696EEA8</title><desc> Created with sketchtool.</desc><g fill=\"none\"><g fill=\"#4A5D76\"><g transform=\"translate(-353 -406)translate(336 120)translate(17 19)translate(0 37)translate(0 225)translate(0 5)\"><polygon points=\"5.5 3 5.5 3 5.6 3 5.6 3 5.6 3 5.6 3 5.6 3 5.7 3 5.7 3 5.7 3 5.7 3 5.7 3 5.7 3 5.8 3 5.8 3 5.8 3 5.8 3 5.8 3 5.9 3 5.9 3 5.9 3.1 5.9 3.1 5.9 3.1 5.9 3.1 6 3.1 6 3.1 6 3.1 6 3.1 6 3.1 6 3.1 6.1 3.1 6.1 3.1 6.1 3.1 6.1 3.1 6.1 3.1 6.1 3.1 6.2 3.2 6.2 3.2 6.2 3.2 6.2 3.2 6.2 3.2 6.2 3.2 6.3 3.2 6.3 3.2 6.3 3.2 6.3 3.2 6.3 3.2 6.3 3.3 6.4 3.3 6.4 3.3 6.4 3.3 6.4 3.3 6.4 3.3 6.4 3.3 6.4 3.3 6.5 3.3 6.5 3.4 6.5 3.4 6.5 3.4 6.5 3.4 6.5 3.4 6.5 3.4 6.5 3.4 6.6 3.4 6.6 3.5 6.6 3.5 6.6 3.5 6.6 3.5 6.6 3.5 6.6 3.5 6.6 3.5 6.7 3.5 6.7 3.6 6.7 3.6 6.7 3.6 6.7 3.6 6.7 3.6 6.7 3.6 6.7 3.6 6.7 3.7 6.8 3.7 6.8 3.7 6.8 3.7 6.8 3.7 6.8 3.7 6.8 3.8 6.8 3.8 6.8 3.8 6.8 3.8 6.8 3.8 6.8 3.8 6.9 3.9 6.9 3.9 6.9 3.9 6.9 3.9 6.9 3.9 6.9 3.9 6.9 4 6.9 4 6.9 4 6.9 4 6.9 4 6.9 4 6.9 4.1 6.9 4.1 6.9 4.1 6.9 4.1 7 4.1 7 4.1 7 4.2 7 4.2 7 4.2 7 4.2 7 4.2 7 4.3 7 4.3 7 4.3 7 4.3 7 4.3 7 4.3 7 4.4 7 4.4 7 4.4 7 4.4 7 4.4 7 4.5 7 4.5 7 4.5 7 4.5 7 4.5 7 4.6 7 4.6 7 4.6 7 4.6 7 4.6 7 4.7 7 4.7 7 4.7 7 4.7 7 4.7 7 4.7 7 4.8 7 4.8 7 4.8 7 4.8 7 4.8 7 4.9 7 4.9 6.9 4.9 6.9 4.9 6.9 4.9 6.9 4.9 6.9 5 6.9 5 6.9 5 6.9 5 6.9 5 6.9 5 6.9 5.1 6.9 5.1 6.9 5.1 6.9 5.1 6.9 5.1 6.9 5.2 6.8 5.2 6.8 5.2 6.8 5.2 6.8 5.2 6.8 5.2 6.8 5.2 6.8 5.3 6.8 5.3 6.8 5.3 6.8 5.3 6.8 5.3 6.7 5.3 6.7 5.4 6.7 5.4 6.7 5.4 6.7 5.4 6.7 5.4 6.7 5.4 6.7 5.4 6.7 5.5 6.6 5.5 6.6 5.5 6.6 5.5 6.6 5.5 6.6 5.5 6.6 5.5 6.6 5.5 6.6 5.6 6.5 5.6 6.5 5.6 6.5 5.6 6.5 5.6 6.5 5.6 6.5 5.6 6.5 5.6 6.5 5.7 6.4 5.7 6.4 5.7 6.4 5.7 6.4 5.7 6.4 5.7 6.4 5.7 6.4 5.7 6.3 5.7 6.3 5.8 6.3 5.8 6.3 5.8 6.3 5.8 6.3 5.8 6.2 5.8 6.2 5.8 6.2 5.8 6.2 5.8 6.2 5.8 6.2 5.8 6.1 5.9 6.1 5.9 6.1 5.9 6.1 5.9 6.1 5.9 6.1 5.9 6 5.9 6 5.9 6 5.9 6 5.9 6 5.9 6 5.9 5.9 5.9 5.9 5.9 5.9 5.9 5.9 5.9 5.9 6 5.9 6 5.8 6 5.8 6 5.8 6 5.8 6 5.8 6 5.7 6 5.7 6 5.7 6 5.7 6 5.7 6 5.7 6 5.6 6 5.6 6 5.6 6 5.6 6 5.6 6 5.5 6 5.5 6 5.5 6 5.5 6 5.5 6 5.4 6 5.4 6 5.4 6 5.4 6 5.4 6 5.3 6 5.3 6 5.3 6 5.3 6 5.3 6 5.3 6 5.2 6 5.2 6 5.2 6 5.2 6 5.2 6 5.1 6 5.1 6 5.1 5.9 5.1 5.9 5.1 5.9 5.1 5.9 5 5.9 5 5.9 5 5.9 5 5.9 5 5.9 5 5.9 4.9 5.9 4.9 5.9 4.9 5.9 4.9 5.9 4.9 5.9 4.9 5.9 4.8 5.8 4.8 5.8 4.8 5.8 4.8 5.8 4.8 5.8 4.8 5.8 4.7 5.8 4.7 5.8 4.7 5.8 4.7 5.8 4.7 5.8 4.7 5.7 4.6 5.7 4.6 5.7 4.6 5.7 4.6 5.7 4.6 5.7 4.6 5.7 4.6 5.7 4.5 5.7 4.5 5.6 4.5 5.6 4.5 5.6 4.5 5.6 4.5 5.6 4.5 5.6 4.5 5.6 4.4 5.6 4.4 5.5 4.4 5.5 4.4 5.5 4.4 5.5 4.4 5.5 4.4 5.5 4.4 5.5 4.3 5.5 4.3 5.4 4.3 5.4 4.3 5.4 4.3 5.4 4.3 5.4 4.3 5.4 4.3 5.4 4.3 5.3 4.2 5.3 4.2 5.3 4.2 5.3 4.2 5.3 4.2 5.3 4.2 5.2 4.2 5.2 4.2 5.2 4.2 5.2 4.2 5.2 4.2 5.2 4.1 5.2 4.1 5.1 4.1 5.1 4.1 5.1 4.1 5.1 4.1 5.1 4.1 5 4.1 5 4.1 5 4.1 5 4.1 5 4.1 5 4.1 4.9 4.1 4.9 4.1 4.9 4.1 4.9 4 4.9 4 4.9 4 4.8 4 4.8 4 4.8 4 4.8 4 4.8 4 4.7 4 4.7 4 4.7 4 4.7 4 4.7 4 4.7 4 4.6 4 4.6 4 4.6 4 4.6 4 4.6 4 4.5 4 4.5 4 4.5 4 4.5 4 4.5 4 4.4 4 4.4 4 4.4 4 4.4 4 4.4 4 4.3 4 4.3 4 4.3 4 4.3 4 4.3 4 4.3 4 4.2 4 4.2 4 4.2 4 4.2 4 4.2 4 4.1 4 4.1 4.1 4.1 4.1 4.1 4.1 4.1 4.1 4.1 4.1 4 4.1 4 4.1 4 4.1 4 4.1 4 4.1 4 4.1 3.9 4.1 3.9 4.1 3.9 4.1 3.9 4.1 3.9 4.1 3.9 4.2 3.8 4.2 3.8 4.2 3.8 4.2 3.8 4.2 3.8 4.2 3.8 4.2 3.7 4.2 3.7 4.2 3.7 4.2 3.7 4.2 3.7 4.3 3.7 4.3 3.6 4.3 3.6 4.3 3.6 4.3 3.6 4.3 3.6 4.3 3.6 4.3 3.6 4.3 3.5 4.4 3.5 4.4 3.5 4.4 3.5 4.4 3.5 4.4 3.5 4.4 3.5 4.4 3.5 4.4 3.4 4.5 3.4 4.5 3.4 4.5 3.4 4.5 3.4 4.5 3.4 4.5 3.4 4.5 3.4 4.5 3.3 4.6 3.3 4.6 3.3 4.6 3.3 4.6 3.3 4.6 3.3 4.6 3.3 4.6 3.3 4.7 3.3 4.7 3.2 4.7 3.2 4.7 3.2 4.7 3.2 4.7 3.2 4.8 3.2 4.8 3.2 4.8 3.2 4.8 3.2 4.8 3.2 4.8 3.2 4.9 3.1 4.9 3.1 4.9 3.1 4.9 3.1 4.9 3.1 4.9 3.1 5 3.1 5 3.1 5 3.1 5 3.1 5 3.1 5 3.1 5.1 3.1 5.1 3.1 5.1 3.1 5.1 3.1 5.1 3 5.1 3 5.2 3 5.2 3 5.2 3 5.2 3 5.2 3 5.3 3 5.3 3 5.3 3 5.3 3 5.3 3 5.3 3 5.4 3 5.4 3 5.4 3 5.4 3 5.4 3 5.5 3 5.5 3 5.5 3\"/><path d=\"M3.1 6.3C3.7 6.8 4.6 7.2 5.5 7.2 6.4 7.2 7.3 6.8 7.9 6.3 8.7 5.6 9.3 4.9 9.3 4.4 9.3 4 8.7 3.3 7.9 2.6 7.3 2.1 6.4 1.7 5.5 1.7 4.6 1.7 3.7 2.1 3.1 2.6 2.3 3.3 1.7 4 1.7 4.4 1.7 4.9 2.3 5.6 3.1 6.3M5.5 7.9C3 7.9 1 5.5 1 4.4 1 3.4 3 1 5.5 1 8 1 10 3.4 10 4.4 10 5.5 8 7.9 5.5 7.9\" style=\"stroke-width:0.2;stroke:#4A5D76\"/></g></g></g></symbol></svg>"

/***/ }),

/***/ "./src/app/components/main/main.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@font-face {\n  font-family: 'Open Sans';\n  font-weight: 400;\n  src: url(\"/assets/Open_Sans/OpenSans-Light.ttf\"); }\n\n@font-face {\n  font-family: 'OpenSans-Semibold';\n  font-weight: 600;\n  src: url(\"/assets/Open_Sans/OpenSans-SemiBold.ttf\"); }\n\n@font-face {\n  font-family: 'OpenSans-Bold';\n  font-weight: 700;\n  src: url(\"/assets/Open_Sans/OpenSans-Bold.ttf\"); }\n\n@font-face {\n  font-family: 'OpenSans-Italic';\n  src: url(\"/assets/Open_Sans/OpenSans-Italic.ttf\"); }\n\n@-webkit-keyframes fadeInRight {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0); }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none; } }\n\n@keyframes fadeInRight {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0); }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none; } }\n\n@-webkit-keyframes fadeInUp {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 100%, 0);\n            transform: translate3d(0, 100%, 0); }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none; } }\n\n@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 100%, 0);\n            transform: translate3d(0, 100%, 0); }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none; } }\n\n.wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  min-height: 100vh;\n  background-color: rgba(236, 239, 241, 0.3);\n  font-family: 'Opensans', sans-serif;\n  box-sizing: border-box; }\n  .wrapper img {\n    max-width: 100%;\n    height: auto; }\n  .wrapper *,\n  .wrapper *:before,\n  .wrapper *:after {\n    box-sizing: inherit; }\n\n.visually-hidden {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  padding: 0;\n  border: 0;\n  clip: rect(0 0 0 0);\n  overflow: hidden; }\n\n.hidden {\n  display: none; }\n\n.feed {\n  max-width: 1244px;\n  height: auto;\n  margin: 0 auto; }\n\n.feed__container {\n  background-color: white;\n  border-radius: 12px;\n  box-shadow: 0 4px 8px 0 rgba(31, 54, 84, 0.1);\n  margin: 0 auto;\n  margin-bottom: 30px; }\n\n.shelf {\n  position: relative;\n  width: 100%;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both; }\n  .shelf .btn-load-more {\n    position: absolute;\n    right: 0;\n    top: 50%;\n    padding: 9px 3px;\n    transition: width, height, right 0.5s; }\n    .shelf .btn-load-more svg {\n      display: block;\n      margin: 0 auto; }\n    .shelf .btn-load-more:hover {\n      width: 28px;\n      height: 28px;\n      padding: 9px;\n      right: -14px;\n      background-color: #FF3E7D;\n      border-radius: 50%;\n      box-shadow: 0 1px 4px 0 rgba(218, 25, 88, 0.5); }\n      .shelf .btn-load-more:hover svg {\n        fill: white; }\n\n.shelf__header {\n  padding: 22px 18px;\n  padding-bottom: 10px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n\n.shelf__title {\n  font-family: 'OpenSans-Bold';\n  font-weight: 700;\n  line-height: 1;\n  margin: 0;\n  text-align: left; }\n  .shelf__title .category-name {\n    font-family: 'OpenSans-Bold';\n    font-weight: 700;\n    text-transform: capitalize; }\n\n.see-all-link {\n  color: #FF3E7D;\n  font-size: 14px;\n  font-weight: 600;\n  text-align: right; }\n  .see-all-link__number {\n    color: #FF3E7D; }\n  .see-all-link:hover {\n    text-decoration: underline; }\n\n.shelf__content {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -ms-flex-line-pack: start;\n      align-content: flex-start;\n  overflow: hidden; }\n\n.card {\n  width: 210px;\n  margin: 8px 20px;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both; }\n  .card:not(:nth-child(1)) {\n    display: none; }\n  @media (min-width: 492px) {\n    .card:nth-child(-n+2) {\n      display: block; } }\n  @media (min-width: 738px) {\n    .card:nth-child(-n+3) {\n      display: block; } }\n  @media (min-width: 984px) {\n    .card:nth-child(-n+4) {\n      display: block; } }\n  @media (min-width: 1230px) {\n    .card:nth-child(-n+5) {\n      display: block; } }\n\n.card__footer {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  margin: 4px; }\n\n.card__tumbnail {\n  width: 210px;\n  height: 140px;\n  margin-top: 8px;\n  margin-bottom: 12px;\n  background-color: #edf0f2;\n  border-radius: 8px;\n  border: 0.8px solid #edf0f2;\n  overflow: hidden; }\n  .card__tumbnail--has-tumbnail {\n    background-color: black; }\n  .card__tumbnail img {\n    width: auto;\n    height: 100%;\n    max-width: 100%;\n    display: block;\n    margin: 0 auto; }\n\n.card__title {\n  margin-top: 4px;\n  margin-bottom: 8px;\n  max-height: 38px;\n  font-family: 'OpenSans-Semibold';\n  font-weight: 600;\n  line-height: 1.4;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  color: #325b91;\n  font-size: 14px; }\n  .card__title:hover {\n    text-decoration: underline; }\n\n.card__category {\n  display: inline;\n  font-family: 'OpenSans-Bold';\n  font-weight: 700;\n  text-transform: capitalize;\n  color: #325b91; }\n  .card__category:after {\n    content: \" -\"; }\n\n.card__video-title {\n  color: #325b91;\n  text-transform: capitalize; }\n\n.card__menu-toggle svg {\n  width: 15px; }\n\n.card__video-title {\n  display: inline; }\n\n.video-info {\n  font-family: 'Open Sans';\n  font-weight: 400;\n  font-size: 12px;\n  color: #4a5d76; }\n  .video-info span {\n    color: #4a5d76;\n    line-height: 18px; }\n\n.video-info__icon {\n  fill: #4a5d76; }\n\n.skin-color-indicator {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  display: inline-block; }\n  .skin-color-indicator--1 {\n    background-color: #e7b48f; }\n\n.username {\n  font-size: 14px;\n  color: #1F3654; }\n  .username--default-avatar .username__avatar {\n    padding: 4px;\n    background: #ff5798;\n    font-family: 'OpenSans-Semibold';\n    font-size: 12px;\n    font-weight: 600;\n    color: white;\n    text-transform: uppercase;\n    text-align: center; }\n\n.username__avatar-letter {\n  color: white;\n  line-height: 12px;\n  display: block;\n  margin: 0 auto; }\n\n.username__avatar {\n  display: inline-block;\n  vertical-align: middle;\n  width: 20px;\n  height: 20px;\n  margin-right: 3px;\n  border-radius: 50%;\n  background-color: #edf0f2;\n  background-image: url(\"/assets/images/ico-profile-white.svg\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 50%;\n  border: 0.8px solid #edf0f2; }\n\n.username__nickname {\n  display: inline-block;\n  max-width: 165px;\n  vertical-align: middle;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis; }\n  .username__nickname:hover {\n    color: #325b91;\n    text-decoration: underline; }\n\n.site-header__top {\n  min-height: 56px;\n  background-color: white;\n  box-shadow: 0 2px 4px 0 rgba(31, 54, 84, 0.1); }\n\n.site-header__bottom {\n  box-shadow: 0 2px 6px 0 rgba(236, 239, 241, 0.5); }\n\n.site-navigation__list {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  margin-top: 20px; }\n\n.site-navigation__link {\n  display: block;\n  padding: 12px 25px;\n  color: #4a5d76; }\n  .site-navigation__link:hover, .site-navigation__link:focus, .site-navigation__link--active {\n    color: #1F3654; }\n  .site-navigation__link--active {\n    border-bottom: 2px solid #FF3E7D; }\n\n.site-footer {\n  min-height: 112px;\n  background-color: white; }\n\n.loader {\n  margin: 30px auto; }\n  .loader .button--load-more {\n    margin: 0 auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/components/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainComponent = (function () {
    function MainComponent() {
        console.log(" constructor of main ");
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    return MainComponent;
}());
MainComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-main',
        template: __webpack_require__("./src/app/components/main/main.component.html"),
        styles: [__webpack_require__("./src/app/components/main/main.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], MainComponent);

//# sourceMappingURL=main.component.js.map

/***/ }),

/***/ "./src/app/components/modals/modals.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-bgc\" \n    *ngIf=\"tempCase && isBackground()\" \n    (click)=\"cancelModal()\" ></div>\n\n<div class=\"modal modal__profile modal__target\" \n    *ngIf=\"tempCase === typeOfModal.Profile\" >\n\n    <p class=\"container__right\" >\n        <img class=\"link\" src=\"assets/images/Closebutton.svg\"\n        (click)=\"cancelModal()\" >\n    </p>\n\n   <p class=\"modal__target modal__h\" > \n       {{ authService.userInfo.username }}\n    </p>\n\n   <p class=\"modal__target modal__text\" > \n       {{ authService.userInfo.email }}\n    </p>\n\n   <p class=\"modal__target modal__alarm\" \n   *ngIf=\"!authService.userInfo.email_verified\"\n   (click)=\"openModalEvent(typeOfModal.Confirm)\" > \n       <img class=\"modal__target\" src=\"assets/images/ico-alert.svg\" />\n       Confirm </p>\n\n   <p class=\"modal__target modal__nav\" \n   (click)=\"authService.signOut()\" > \n       <img class=\"modal__target\" src=\"assets/images/ico-exit.svg\" />\n       Sign Out</p>\n \n</div>\n\n\n<div class=\"modal modal__confirm modal__target\" \n    *ngIf=\"tempCase === typeOfModal.Success\" >\n\n    <p class=\"container__right\" >\n        <img class=\"link\" src=\"assets/images/Closebutton.svg\"\n        (click)=\"cancelModal()\" >\n    </p>\n\n    <h5 class=\"text text__middle-small text__dark pad__without-bot\" >\n        Success!\n    </h5>\n\n    <p class=\"text text__normal text__center text__dark text__pad-aside\" >\n        Password resetting instructions were sent to\n        <br />\n        {{ authService.userInfo.email }}\n    </p>\n \n</div>\n\n<div class=\"modal modal__confirm modal__target\" \n    *ngIf=\"tempCase === typeOfModal.Confirm\" >\n\n    <p class=\"container__right\" >\n        <img class=\"link\" src=\"assets/images/Closebutton.svg\"\n        (click)=\"cancelModal()\" >\n    </p>\n\n    <p class=\"text text__normal text__center text__dark text__pad-aside\" >\n        Please enter confirmation code\n        <br />\n        sent to your email below\n    </p>\n\n    <div class=\"\" >\n        <input class=\"modal-input-characters pad__tb-small \" maxlength='6' value='' \n        [(ngModel)]=\"key\"\n        (keyup)=\"changeKey(key)\" />\n    </div>\n\n    <p class=\"text text__normal-smallest text__center text__dark text__pad-aside\" \n    *ngIf=\"!wasResendCode\" >\n        Didn’t recieve confirmation email?\n        <br />\n        Check spam folder or press resend button.\n    </p>\n\n    <p class=\"text text__normal-smallest text__center text__dark text__pad-aside\" \n    *ngIf=\"wasResendCode\" >\n        Confirmation email sent to you\n        <br />\n        {{ authService.userInfo.email }}\n    </p>\n\n    <app-error-msg \n        *ngIf=\" isShowenErrors \"\n        [msg]=\"'Please enter a valid confirmation code'\" >\n    </app-error-msg>  \n\n    <app-error-msg \n        *ngIf=\" serverErrorMsg \"\n        [msg]=\" serverErrorMsg \" >\n    </app-error-msg>\n\n   <p class=\"modal__target pad__tb-small container__right\"  > \n       <span class=\"modal__clickeble\" \n       *ngIf=\"!wasResendCode\"\n       (click)=\"resendConfirmationCode()\" > Resend </span>\n       <span class=\"modal__clickeble\" \n       (click)=\"confirmCode()\" > Confirm </span>\n   </p>\n  \n</div>\n\n\n<div class=\"modal modal__confirm modal__target\" \n    *ngIf=\"tempCase === typeOfModal.ConfirmSignUp\" >\n\n    <p class=\"container__right\" >\n        <img class=\"link\" src=\"assets/images/Closebutton.svg\"\n        (click)=\"cancelModal()\" >\n    </p>\n\n    <h5 class=\"text text__middle-small text__dark pad__without-bot\" >\n        Thanks you for signing up!\n    </h5>\n\n    <p class=\"text text__normal text__center text__dark text__pad-aside\" >\n        Please enter confirmation code\n        <br />\n        sent to your email below\n    </p>\n\n    <div class=\"\" >\n        <input class=\"modal-input-characters pad__tb-small \" maxlength='6' value='' \n        [(ngModel)]=\"key\"\n        (keyup)=\"changeKey(key)\" />\n    </div>\n\n    <app-error-msg \n        *ngIf=\" isShowenErrors \"\n        [msg]=\"'Please enter a valid confirmation code'\" >\n    </app-error-msg>  \n\n    <app-error-msg \n        *ngIf=\" serverErrorMsg \"\n        [msg]=\" serverErrorMsg \" >\n    </app-error-msg>\n\n\n   <p class=\"modal__target pad__tb-small container__right\"  > \n       <span class=\"modal__clickeble\" \n       (click)=\"cancelModal()\" > Later </span>\n       <span class=\"modal__clickeble\" \n       (click)=\"confirmCode()\" > Confirm </span>\n   </p>\n \n</div>"

/***/ }),

/***/ "./src/app/components/modals/modals.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/components/modals/modals.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_index__ = __webpack_require__("./src/app/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ModalsComponent = (function () {
    function ModalsComponent(authService, modalsService) {
        this.authService = authService;
        this.modalsService = modalsService;
        this.openModal = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]();
        this.closeModal = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]();
        this.typeOfModal = __WEBPACK_IMPORTED_MODULE_1_app_index__["y" /* TypeOfModal */];
        this.key = "";
        console.log(" constructor of modal ", typeof this.typeOfModal);
    }
    ModalsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.modalsService.listenerOfOpen().subscribe(function (tempCase) {
            _this.tempCase = tempCase;
        });
    };
    ModalsComponent.prototype.openModalEvent = function (tempCase) {
        this.openModal.emit(tempCase);
        this.modalsService.senderOfOpen(tempCase);
    };
    ModalsComponent.prototype.closeModalEvent = function () {
        this.closeModal.emit(this.tempCase);
        this.cleanModalData();
    };
    ModalsComponent.prototype.cleanModalData = function () {
        delete this.tempCase;
        delete this.isShowenErrors;
        delete this.wasResendCode;
        delete this.serverErrorMsg;
    };
    ModalsComponent.prototype.changeKey = function (key) {
        var newKey = "";
        for (var i = 0; i < key.length; i++) {
            var c = +key[i];
            if (typeof c === "number" && c === c) {
                newKey += key[i];
            }
            ;
        }
        console.log(newKey);
        this.key = newKey;
    };
    ModalsComponent.prototype.confirmCode = function () {
        var _this = this;
        console.log(" confirmCode ", this.key.length, this.isShowenErrors);
        if (this.key.length == 6) {
            this.isShowenErrors = false;
            this.authService.confirmCode(this.key).subscribe(function (data) {
                console.log(data);
                _this.authService.nav(__WEBPACK_IMPORTED_MODULE_1_app_index__["z" /* AuthNavType */].redirectFromAuth);
                _this.closeModalEvent();
            }, function (err) {
                console.log(err);
                _this.serverErrorMsg = err;
            });
        }
        else {
            this.isShowenErrors = true;
        }
    };
    ModalsComponent.prototype.resendConfirmationCode = function () {
        var _this = this;
        console.log(" resendCode ");
        this.authService.resendConfirmationCode().subscribe(function (data) {
            console.log(data);
            _this.wasResendCode = true;
        }, function (err) {
            console.log(err);
            _this.serverErrorMsg = err.message;
        });
    };
    ModalsComponent.prototype.cancelModal = function () {
        if (this.tempCase == this.typeOfModal.ConfirmSignUp || this.tempCase == this.typeOfModal.Success) {
            this.authService.nav(__WEBPACK_IMPORTED_MODULE_1_app_index__["z" /* AuthNavType */].redirectFromAuth);
            this.cleanModalData();
        }
        else {
            this.closeModalEvent();
        }
    };
    ModalsComponent.prototype.isBackground = function () {
        return (this.tempCase === this.typeOfModal.Confirm ||
            this.tempCase === this.typeOfModal.ConfirmSignUp ||
            this.tempCase === this.typeOfModal.Success);
    };
    return ModalsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_index__["y" /* TypeOfModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_index__["y" /* TypeOfModal */]) === "function" && _a || Object)
], ModalsComponent.prototype, "tempCase", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]) === "function" && _b || Object)
], ModalsComponent.prototype, "openModal", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]) === "function" && _c || Object)
], ModalsComponent.prototype, "closeModal", void 0);
ModalsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-modals',
        template: __webpack_require__("./src/app/components/modals/modals.component.html"),
        styles: [__webpack_require__("./src/app/components/modals/modals.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_app_index__["f" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_index__["f" /* AuthService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_app_index__["e" /* ModalsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_index__["e" /* ModalsService */]) === "function" && _e || Object])
], ModalsComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=modals.component.js.map

/***/ }),

/***/ "./src/app/components/payout/payout.component.html":
/***/ (function(module, exports) {

module.exports = "\n<app-header>\n</app-header>\n\n\n<div class=\"main-container-in main-container-in-small pad__auth-form\"\n    *ngIf=\" id == 'login' \" >\n\n    <p class=\"balance\" > balance : 1000 </p>\n\n    <p>\n        <span> 100 </span>\n        <input name=\"amount\" type=\"radio\" value=\"100\" #amount \n        (click)=\"login(amount.value)\" >\n    </p>\n    <p>\n        <span> 200 </span>\n        <input name=\"amount\" type=\"radio\" value=\"200\" #amount2 \n        (click)=\"login(amount2.value)\" >\n    </p>\n    <p>\n        <span> 300 </span>\n        <input name=\"amount\" type=\"radio\" value=\"300\" #amount3\n        (click)=\"login(amount3.value)\"  >\n    </p>\n    <p>\n        <span> 400 </span>\n        <input name=\"amount\" type=\"radio\" value=\"400\" #amount4\n        (click)=\"login(amount4.value)\" >\n    </p>\n\n</div>\n\n\n<div class=\"main-container-in main-container-in-small pad__auth-form\"\n    *ngIf=\" id == 'payout' \" >\n\n    <button (click)=\"backToLogin()\" > go back </button>\n\n    <p>\n        <span> Email : </span>\n        {{ paypalService?.userinfo?.email }}\n    </p>\n\n    <p>\n        <span> Amount : </span>\n        {{ paypalService.amount }}\n    </p>\n\n    <button (click)=\"payout()\"\n    > continue </button>\n\n</div>\n\n\n<div class=\"main-container-in main-container-in-small pad__auth-form\"\n    *ngIf=\" id == 'success' \" >\n\n    SUCCESS\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/payout/payout.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/components/payout/payout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_index__ = __webpack_require__("./src/app/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PayoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PayoutComponent = (function () {
    function PayoutComponent(activatedRoute, router, paypalService) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.paypalService = paypalService;
        this.id = '';
        this.listenParam = function (params) {
            _this.id = params['id'];
            console.log('ID : ', _this.id);
            if (_this.id == 'login') {
                _this.paypalService.getAuthorizeUrl().subscribe(function (data) { });
            }
            if (_this.id == 'payout') {
                _this.paypalService.authorizeCode = _this.activatedRoute.snapshot.queryParams["code"];
                console.log(' ~~--> ', _this.paypalService.authorizeCode);
                if (!_this.paypalService.authorizeCode) {
                    alert(" test - no authorizeCode ");
                    _this.router.navigate(['/payout/login']);
                }
                _this.paypalService.getUserInfo().subscribe(function (data) {
                    console.log(_this.paypalService.userinfo);
                    if (!_this.paypalService.userinfo) {
                        alert(" test - no userinfo ");
                        _this.router.navigate(['/payout/login']);
                    }
                });
                ;
            }
            if (_this.id == 'success') {
            }
        };
    }
    PayoutComponent.prototype.ngOnInit = function () {
        var sub = this.activatedRoute.params.subscribe(this.listenParam);
        this.paypalService.payout().subscribe(function (data) {
            console.log(data);
        });
    };
    PayoutComponent.prototype.login = function (amount) {
        var _this = this;
        this.paypalService.getAuthorizeUrl().subscribe(function (data) {
            _this.paypalService.login(amount);
        });
    };
    PayoutComponent.prototype.payout = function () {
        var _this = this;
        console.log(this.paypalService.amount, ' || ', this.paypalService.userinfo);
        if (!this.paypalService.amount || !this.paypalService.userinfo) {
            //alert(" test - no authorizeCode ");
            //this.router.navigate(['/payout/login']);
            //return;
        }
        this.paypalService.payout().subscribe(function (data) {
            console.log(data);
            if (data.links[0]) {
                _this.router.navigate(['/payout/success']);
            }
            else {
                alert(' no no no ');
            }
        });
    };
    PayoutComponent.prototype.backToLogin = function () {
        this.router.navigate(['/payout/login']);
    };
    return PayoutComponent;
}());
PayoutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-payout',
        template: __webpack_require__("./src/app/components/payout/payout.component.html"),
        styles: [__webpack_require__("./src/app/components/payout/payout.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_app_index__["i" /* PaypalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_index__["i" /* PaypalService */]) === "function" && _c || Object])
], PayoutComponent);

var _a, _b, _c;
//# sourceMappingURL=payout.component.js.map

/***/ }),

/***/ "./src/app/components/video-player/video-player.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"video-player__wrapper\" style=\"position:relative;\">\n  \n  <div class=\"video-player__play-pause\"\n      (click)=\"playPause()\">\n      <button class=\"video-player__play-pause__btn\"\n        *ngIf=\"isShowenPlayPauseBtn\" >\n         Click to play\n      </button>\n  </div>\n\n  <video id=\"my-video\" class=\"video-player__video video-js\" \n    #video controls preload=\"auto\" controlsList=\"nodownload\" \n    [width]=\"videoOptions.width\"\n    [height]=\"videoOptions.height\" \n    [poster]=\"videoOptions.path + '.jpg' \" \n    [autoplay]=\"videoOptions.autoplay\" \n    data-setup=\"{}\">\n    <source \n      [src]=\"videoOptions.path + '.mp4' \" type='video/mp4' class=\"video-player__source\">\n    <source \n      [src]=\"videoOptions.path + '.webm' \" type='video/webm' class=\"video-player__source\">\n    <p class=\"vjs-no-js\">\n      To view this video please enable JavaScript, and consider upgrading to a web browser that\n      <a href=\"http://videojs.com/html5-video-support/\" target=\"_blank\">supports HTML5 video</a>\n    </p>\n  </video>\n\n</div>"

/***/ }),

/***/ "./src/app/components/video-player/video-player.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".video-player__wrapper {\n  position: relative;\n  display: inline-block; }\n\n.video-player__play-pause {\n  position: absolute;\n  top: 0%;\n  left: 0%;\n  z-index: 1;\n  width: 100%;\n  height: 100%; }\n\n.video-player__play-pause__btn {\n  position: absolute;\n  top: 40%;\n  left: 40%;\n  z-index: 2;\n  color: red; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/components/video-player/video-player.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* unused harmony export VideoOptions */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoPlayerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VideoOptions = (function () {
    function VideoOptions() {
    }
    return VideoOptions;
}());

var VideoPlayerComponent = (function () {
    function VideoPlayerComponent() {
    }
    Object.defineProperty(VideoPlayerComponent.prototype, "options", {
        set: function (options) {
            console.log('got video options: ', options);
            this.videoOptions = options;
        },
        enumerable: true,
        configurable: true
    });
    VideoPlayerComponent.prototype.ngAfterViewInit = function () {
        // if there is autoplay we need to hide btn
        this.isShowenPlayPauseBtn = this.videoOptions.autoplay ? false : true;
    };
    // if we click on video player we wanna change state of video player ( play/pause )
    VideoPlayerComponent.prototype.playPause = function () {
        console.log(this.video);
        if (this.video.nativeElement.paused || this.video.nativeElement.ended) {
            this.video.nativeElement.play();
            this.isShowenPlayPauseBtn = false;
        }
        else {
            this.video.nativeElement.pause();
            this.isShowenPlayPauseBtn = true;
        }
    };
    return VideoPlayerComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])("video"),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */]) === "function" && _a || Object)
], VideoPlayerComponent.prototype, "video", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", VideoOptions),
    __metadata("design:paramtypes", [VideoOptions])
], VideoPlayerComponent.prototype, "options", null);
VideoPlayerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-video-player',
        template: __webpack_require__("./src/app/components/video-player/video-player.component.html"),
        styles: [__webpack_require__("./src/app/components/video-player/video-player.component.scss")]
    })
], VideoPlayerComponent);

var _a;
//# sourceMappingURL=video-player.component.js.map

/***/ }),

/***/ "./src/app/components/video/video.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/video/video.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/components/video/video.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_index__ = __webpack_require__("./src/app/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VideoComponent = (function () {
    function VideoComponent(authService, httpService) {
        this.authService = authService;
        this.httpService = httpService;
        console.log(" constructor of main ");
    }
    VideoComponent.prototype.ngOnInit = function () {
        this.video1 = { path: "assets/video", width: 640, height: 340, autoplay: true };
        this.video2 = { path: "assets/video", width: 440, height: 240 };
        this.httpService.get("assets/test.json").subscribe(function (res) {
            //console.log( " res ", res );
        });
    };
    VideoComponent.prototype.logout = function () {
        this.authService.signOut();
    };
    return VideoComponent;
}());
VideoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-video',
        template: __webpack_require__("./src/app/components/video/video.component.html"),
        styles: [__webpack_require__("./src/app/components/video/video.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_index__["f" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_index__["f" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_app_index__["c" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_index__["c" /* HttpService */]) === "function" && _b || Object])
], VideoComponent);

var _a, _b;
//# sourceMappingURL=video.component.js.map

/***/ }),

/***/ "./src/app/components/welcome/welcome.component.html":
/***/ (function(module, exports) {

module.exports = "\n    <div class=\"main-container\">\n\n        <p class=\"text-center__big\" >\n            Welcome to Fabulive\n        </p>\n\n       <div class=\"circle\" >\n\n           <img class=\"circle-in-img\" src=\"assets/images/ico_profile_white_la.svg\" />\n\n            <input type=\"file\" class=\"hidden\" \n            #fileFoto \n            (change)=\"changeFoto($event)\" />\n            <img class=\"circle circle-small circle-small-img\" src=\"assets/images/ico_plus_white_mid.svg\" \n            (click)=\"fileFoto.click()\" />\n\n       </div>\n\n        <p class=\"text-center__big\" >\n            Add Profile Photo\n        </p>\n\n        <p class=\"\">\n            Complete the information:\n        </p>\n\n\n\n    </div>\n"

/***/ }),

/***/ "./src/app/components/welcome/welcome.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/components/welcome/welcome.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_index__ = __webpack_require__("./src/app/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WelcomeComponent = (function () {
    function WelcomeComponent(authService) {
        this.authService = authService;
        console.log(" constructor of welcome ");
    }
    // https://stackoverflow.com/questions/40214772/file-upload-in-angular-2
    WelcomeComponent.prototype.changeFoto = function (event) {
        this.authService.changeFoto(event).subscribe(function (data) { return console.log('success'); }, function (error) { return console.log(error); });
    };
    return WelcomeComponent;
}());
WelcomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-welcome',
        template: __webpack_require__("./src/app/components/welcome/welcome.component.html"),
        styles: [__webpack_require__("./src/app/components/welcome/welcome.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_index__["f" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_index__["f" /* AuthService */]) === "function" && _a || Object])
], WelcomeComponent);

var _a;
//# sourceMappingURL=welcome.component.js.map

/***/ }),

/***/ "./src/app/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_services_settings_service__ = __webpack_require__("./src/app/services/settings.service.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0_app_services_settings_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_helper_service__ = __webpack_require__("./src/app/services/helper.service.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1_app_services_helper_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_http_service__ = __webpack_require__("./src/app/services/http.service.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2_app_services_http_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_ws_service__ = __webpack_require__("./src/app/services/ws.service.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3_app_services_ws_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_services_modals_servise__ = __webpack_require__("./src/app/services/modals.servise.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4_app_services_modals_servise__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_5_app_services_auth_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_services_auth_guard_service__ = __webpack_require__("./src/app/services/auth-guard.service.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_6_app_services_auth_guard_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_services_title_service__ = __webpack_require__("./src/app/services/title.service.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_7_app_services_title_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_services_paypal_service__ = __webpack_require__("./src/app/services/paypal.service.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_8_app_services_paypal_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_app_components_error_msg_error_msg_component__ = __webpack_require__("./src/app/components/error-msg/error-msg.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_9_app_components_error_msg_error_msg_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_app_components_info_info_component__ = __webpack_require__("./src/app/components/info/info.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_10_app_components_info_info_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_app_components_video_player_video_player_component__ = __webpack_require__("./src/app/components/video-player/video-player.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_11_app_components_video_player_video_player_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_app_components_modals_modals_component__ = __webpack_require__("./src/app/components/modals/modals.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __WEBPACK_IMPORTED_MODULE_12_app_components_modals_modals_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_app_components_video_video_component__ = __webpack_require__("./src/app/components/video/video.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return __WEBPACK_IMPORTED_MODULE_13_app_components_video_video_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_app_components_welcome_welcome_component__ = __webpack_require__("./src/app/components/welcome/welcome.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return __WEBPACK_IMPORTED_MODULE_14_app_components_welcome_welcome_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_app_components_auth_forms_auth_forms_component__ = __webpack_require__("./src/app/components/auth-forms/auth-forms.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_15_app_components_auth_forms_auth_forms_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_app_components_app_header_app_header_component__ = __webpack_require__("./src/app/components/app-header/app-header.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_16_app_components_app_header_app_header_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_app_components_app_footer_app_footer_component__ = __webpack_require__("./src/app/components/app-footer/app-footer.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_17_app_components_app_footer_app_footer_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_app_components_auth_auth_component__ = __webpack_require__("./src/app/components/auth/auth.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_18_app_components_auth_auth_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_app_components_main_main_component__ = __webpack_require__("./src/app/components/main/main.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_19_app_components_main_main_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_app_components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return __WEBPACK_IMPORTED_MODULE_20_app_components_home_home_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_app_components_payout_payout_component__ = __webpack_require__("./src/app/components/payout/payout.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return __WEBPACK_IMPORTED_MODULE_21_app_components_payout_payout_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_app_components_aaa_aaa_component__ = __webpack_require__("./src/app/components/aaa/aaa.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return __WEBPACK_IMPORTED_MODULE_22_app_components_aaa_aaa_component__["a"]; });
/* unused harmony reexport VideoOptions */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return __WEBPACK_IMPORTED_MODULE_4_app_services_modals_servise__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return __WEBPACK_IMPORTED_MODULE_5_app_services_auth_service__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return __WEBPACK_IMPORTED_MODULE_5_app_services_auth_service__["b"]; });



























//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/app/routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_index__ = __webpack_require__("./src/app/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2_app_index__["k" /* AuthComponent */], data: { title: 'Fabulive' } },
    { path: 'sign-in', component: __WEBPACK_IMPORTED_MODULE_2_app_index__["n" /* AuthFormsComponent */], data: { title: 'Sign In' } },
    { path: 'sign-up', component: __WEBPACK_IMPORTED_MODULE_2_app_index__["n" /* AuthFormsComponent */], data: { title: 'Sign Up' } },
    { path: 'sign-in-forgot', component: __WEBPACK_IMPORTED_MODULE_2_app_index__["n" /* AuthFormsComponent */], data: { title: 'Forgot Password' } },
    { path: 'info/:id', component: __WEBPACK_IMPORTED_MODULE_2_app_index__["p" /* InfoComponent */], data: { title: 'Info' } },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2_app_index__["u" /* HomeComponent */], data: { title: 'Home' } },
    { path: 'payout/:id', component: __WEBPACK_IMPORTED_MODULE_2_app_index__["v" /* PayoutComponent */], data: { title: 'Payout' } },
    { path: 'welcome', component: __WEBPACK_IMPORTED_MODULE_2_app_index__["v" /* PayoutComponent */], data: { title: 'Welcome' } },
    { path: 'aaa', component: __WEBPACK_IMPORTED_MODULE_2_app_index__["w" /* AaaComponent */], data: { title: 'aaa' } },
    { path: '**', redirectTo: '' }
];
var RoutingModule = (function () {
    function RoutingModule() {
    }
    return RoutingModule;
}());
RoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forRoot(AppRoutes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]
        ]
    })
], RoutingModule);

//# sourceMappingURL=routing.module.js.map

/***/ }),

/***/ "./src/app/services/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of__ = __webpack_require__("./node_modules/rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_delay__ = __webpack_require__("./node_modules/rxjs/add/operator/delay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_delay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_index__ = __webpack_require__("./src/app/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthGuardService = (function () {
    function AuthGuardService(authService) {
        this.authService = authService;
    }
    // it useds in routing as guard
    AuthGuardService.prototype.canActivate = function () {
        console.log("AuthGuard#canActivate called", this.authService.loggedIn);
        if (this.authService.loggedIn) {
            return true;
        }
        else {
            this.authService.nav(__WEBPACK_IMPORTED_MODULE_4_app_index__["z" /* AuthNavType */].redirectToAuth);
            return false;
        }
    };
    return AuthGuardService;
}());
AuthGuardService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_app_index__["f" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_index__["f" /* AuthService */]) === "function" && _a || Object])
], AuthGuardService);

var _a;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ "./src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__("./node_modules/rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_delay__ = __webpack_require__("./node_modules/rxjs/add/operator/delay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_delay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_amazon_cognito_identity_js__ = __webpack_require__("./node_modules/amazon-cognito-identity-js/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_aws_sdk__ = __webpack_require__("./node_modules/aws-sdk/lib/browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_aws_sdk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_aws_sdk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_services_http_service__ = __webpack_require__("./src/app/services/http.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return AuthNavType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AuthTemplateCase; });
/* unused harmony export SignIn */
/* unused harmony export SignUp */
/* unused harmony export UserInfo */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AuthNavType;
(function (AuthNavType) {
    AuthNavType[AuthNavType["redirectToAuth"] = 0] = "redirectToAuth";
    AuthNavType[AuthNavType["redirectFromAuth"] = 1] = "redirectFromAuth";
})(AuthNavType || (AuthNavType = {}));
var AuthTemplateCase;
(function (AuthTemplateCase) {
    AuthTemplateCase[AuthTemplateCase["Base"] = 0] = "Base";
    AuthTemplateCase[AuthTemplateCase["SignUp"] = 1] = "SignUp";
    AuthTemplateCase[AuthTemplateCase["SignIn"] = 2] = "SignIn";
    AuthTemplateCase[AuthTemplateCase["SignInForgot"] = 3] = "SignInForgot";
})(AuthTemplateCase || (AuthTemplateCase = {}));
var SignIn = (function () {
    function SignIn() {
    }
    return SignIn;
}());

var SignUp = (function () {
    function SignUp() {
    }
    return SignUp;
}());

var UserInfo = (function () {
    function UserInfo(registered, username, password, email, email_verified) {
        this.registered = registered;
        this.username = username;
        this.password = password;
        this.email = email;
        if (email_verified)
            this.email_verified = email_verified;
    }
    return UserInfo;
}());

var AuthService = (function () {
    function AuthService(router, httpService) {
        this.router = router;
        this.httpService = httpService;
        this.redirectToAuth = ""; // it uses for redirection to auth
        this.redirectFromAuth = ""; // it uses for redirection from auth
        // AWS variebles starts
        this.region = "eu-central-1";
        this.userPoolId = "eu-central-1_0VWSoKhex";
        this.clientId = "7cjjqbsn3gfcr2bv732kkqovge";
        this.identitypoolid = "eu-central-1:ab39fcdf-e476-45d0-89fd-3c974a48e36a";
        this.identityProvider = "cognito-idp." + this.region + ".amazonaws.com/" + this.userPoolId;
        // AWS variebles ends
        this.userInfo = new UserInfo(false, "", "", "", false);
        this.onInit();
    }
    AuthService.prototype.onInit = function () {
        __WEBPACK_IMPORTED_MODULE_7_aws_sdk__["config"].region = this.region;
        __WEBPACK_IMPORTED_MODULE_7_aws_sdk__["config"].update({ accessKeyId: 'mock', secretAccessKey: 'mock' });
        this.userPool = new __WEBPACK_IMPORTED_MODULE_6_amazon_cognito_identity_js__["a" /* CognitoUserPool */]({
            UserPoolId: this.userPoolId,
            ClientId: this.clientId // Your client id here
        });
        console.log(" USERPOOL => ", this.userPool);
    };
    Object.defineProperty(AuthService.prototype, "loggedIn", {
        // it is getter for isLoggedIn
        get: function () {
            return !!this.userInfo.username;
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.setUserInfo = function (userInfo) {
        this.userInfo = userInfo;
    };
    AuthService.prototype.resetUserInfo = function () {
        this.userInfo = new UserInfo(false, "", "", "", false);
        localStorage.removeItem("userInfo");
    };
    // navigation to/from auth page group
    AuthService.prototype.nav = function (authNavType) {
        console.log(" nav ", authNavType);
        if (authNavType === AuthNavType.redirectToAuth)
            this.router.navigate([this.redirectToAuth]);
        if (authNavType === AuthNavType.redirectFromAuth)
            this.router.navigate([this.redirectFromAuth]);
    };
    AuthService.prototype.getOptionsForCognitoIdentityCredentials = function (res) {
        var options = {};
        options['IdentityPoolId'] = this.identitypoolid;
        options['Logins'] = {};
        options['Logins'][this.identityProvider] = res.getIdToken().getJwtToken();
        return options;
    };
    // it uses for start session
    AuthService.prototype.retrieveCurrentUser = function (observer, result) {
        var _this = this;
        console.log(" RETRIVE CURRENT  USER ");
        if (!this.cognitoUser)
            this.cognitoUser = this.userPool.getCurrentUser();
        console.log(" cognitoUser ", this.cognitoUser);
        if (this.cognitoUser != null) {
            this.cognitoUser.getSession(function (err, session) {
                if (err) {
                    console.error(err);
                    if (observer)
                        observer.next(result);
                    return;
                }
                console.log('session validity: ' + session.isValid());
                // NOTE: getSession must be called to authenticate user before calling getUserAttributes
                _this.cognitoUser.getUserAttributes(function (err, attributes) {
                    if (err) {
                        console.log(" ERR ", err);
                        if (observer)
                            observer.next(result);
                    }
                    else {
                        console.log(" attributes ", attributes);
                        var obj = {};
                        for (var i = 0; i < attributes.length; i++) {
                            obj[attributes[i].getName()] = attributes[i].getValue();
                        }
                        _this.setUserInfo(new UserInfo(true, _this.cognitoUser.getUsername(), "", obj.email, obj.email_verified));
                    }
                    console.log(" userInfo ", _this.userInfo);
                    if (observer)
                        observer.next();
                });
                var options = _this.getOptionsForCognitoIdentityCredentials(session);
                __WEBPACK_IMPORTED_MODULE_7_aws_sdk__["config"].credentials = new __WEBPACK_IMPORTED_MODULE_7_aws_sdk__["CognitoIdentityCredentials"](options);
            });
        }
    };
    // it logins in user
    AuthService.prototype.signIn = function (formData) {
        var _this = this;
        console.log(" SIGN IN ", formData);
        var sub = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
            _this.cognitoUser = new __WEBPACK_IMPORTED_MODULE_6_amazon_cognito_identity_js__["b" /* CognitoUser */]({
                Username: formData.email,
                Pool: _this.userPool
            });
            console.log(" cognitoUser : ", _this.cognitoUser);
            var authenticationDetails = new __WEBPACK_IMPORTED_MODULE_6_amazon_cognito_identity_js__["c" /* AuthenticationDetails */]({
                Username: formData.email,
                Password: formData.password
            });
            _this.cognitoUser.authenticateUser(authenticationDetails, {
                onSuccess: function (result) {
                    console.log('access token + ' + result.getAccessToken().getJwtToken());
                    var options = _this.getOptionsForCognitoIdentityCredentials(result);
                    __WEBPACK_IMPORTED_MODULE_7_aws_sdk__["config"].credentials = new __WEBPACK_IMPORTED_MODULE_7_aws_sdk__["CognitoIdentityCredentials"](options);
                    _this.setUserInfo(new UserInfo(true, _this.cognitoUser.getUsername(), formData.password, formData.email));
                    _this.retrieveCurrentUser(observer, result);
                },
                onFailure: function (err) {
                    return observer.error(err);
                },
            });
        });
        return sub;
    };
    // it signs up user
    AuthService.prototype.signUp = function (formData) {
        var _this = this;
        console.log(" SIGN UP ", formData);
        var sub = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
            var attributeList = [];
            var email = new __WEBPACK_IMPORTED_MODULE_6_amazon_cognito_identity_js__["d" /* CognitoUserAttribute */]({
                Name: 'email',
                Value: formData.email
            });
            attributeList.push(email);
            // formData.fullName
            var username = formData.fullName.replace(/\s/g, "");
            console.log(" username ", username);
            _this.userPool.signUp(username, formData.password, attributeList, null, function (err, result) {
                if (err)
                    return observer.error(err);
                _this.cognitoUser = result.user;
                console.log(" this.cognitoUser : ", _this.cognitoUser);
                _this.setUserInfo(new UserInfo(true, _this.cognitoUser.getUsername(), formData.password, formData.email, false));
                observer.next(result);
            });
        });
        return sub;
    };
    // send code to confirm
    AuthService.prototype.confirmCode = function (code) {
        var _this = this;
        console.log(" CONFIRM CODE ");
        var sub = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
            if (!_this.cognitoUser)
                _this.cognitoUser = _this.userPool.getCurrentUser();
            _this.cognitoUser.confirmRegistration(code, true, function (err, result) {
                if (err)
                    return observer.error(err);
                console.log('cognitoUser.confirmRegistration result: ', result);
                _this.signIn({ email: _this.userInfo.email, password: _this.userInfo.password }).subscribe(function () {
                    observer.next(result);
                });
            });
        });
        return sub;
    };
    AuthService.prototype.resendConfirmationCode = function () {
        var _this = this;
        console.log(" RESEND CONFIRM CODE ");
        var sub = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
            if (!_this.cognitoUser)
                _this.cognitoUser = _this.userPool.getCurrentUser();
            _this.cognitoUser.resendConfirmationCode(function (err, result) {
                if (err)
                    return observer.error(err);
                console.log('cognitoUser.resendConfirmationCode result: ', result);
                observer.next(result);
            });
        });
        return sub;
    };
    AuthService.prototype.forgotPassword = function () {
        var _this = this;
        console.log(" FORGOT PASSWORD ");
        var sub = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
            if (!_this.cognitoUser)
                _this.cognitoUser = _this.userPool.getCurrentUser();
            var cognitoUser = _this.cognitoUser;
            if (cognitoUser)
                cognitoUser.forgotPassword({
                    onSuccess: function (result) {
                        console.log('call result: ' + result);
                        observer.next(result);
                    },
                    onFailure: function (err) {
                        console.error(err);
                        observer.error(err);
                    },
                    inputVerificationCode: function () {
                        var verificationCode = prompt('Please input verification code ', '');
                        var newPassword = prompt('Enter new password ', '');
                        cognitoUser.confirmPassword(verificationCode, newPassword, this);
                    }
                });
        });
        return sub;
    };
    // it logins out user
    AuthService.prototype.signOut = function () {
        this.cognitoUser = this.userPool.getCurrentUser();
        this.cognitoUser.signOut();
        this.resetUserInfo();
        this.nav(AuthNavType.redirectToAuth);
    };
    // type of sign in ( with Facebook )
    AuthService.prototype.signInWithFb = function () {
    };
    // type of sign up ( with Facebook )
    AuthService.prototype.signUpWithFb = function () {
    };
    // https://stackoverflow.com/questions/40214772/file-upload-in-angular-2
    AuthService.prototype.changeFoto = function (event) {
        var fileList = event.target.files;
        if (fileList.length > 0) {
            var file = fileList[0];
            var formData = new FormData();
            formData.append('uploadFile', file, file.name);
            var headers = new Headers();
            headers.append('Content-Type', 'multipart/form-data');
            headers.append('Accept', 'application/json');
            return this.httpService.post("assets/test.json", formData, headers);
        }
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_8_app_services_http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_app_services_http_service__["a" /* HttpService */]) === "function" && _b || Object])
], AuthService);

var _a, _b;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "./src/app/services/helper.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelperService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HelperService = (function () {
    function HelperService() {
    }
    return HelperService;
}());
HelperService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], HelperService);

//# sourceMappingURL=helper.service.js.map

/***/ }),

/***/ "./src/app/services/http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HttpService = (function () {
    function HttpService(http) {
        this.http = http;
        this.headers = new Headers({ 'Content-Type': 'application/json' });
    }
    HttpService.prototype.get = function (url, options) {
        if (options === void 0) { options = { headers: this.headers }; }
        return this.http.get(url, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    HttpService.prototype.post = function (url, body, options) {
        if (body === void 0) { body = {}; }
        if (options === void 0) { options = { headers: this.headers }; }
        return this.http.post(url, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    HttpService.prototype.put = function (url, body, options) {
        if (body === void 0) { body = {}; }
        if (options === void 0) { options = { headers: this.headers }; }
        return this.http.put(url, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    HttpService.prototype.delete = function (url, options) {
        if (options === void 0) { options = { headers: this.headers }; }
        return this.http.delete(url, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    HttpService.prototype.extractData = function (res) {
        //console.log( " extractData ", res );
        var data = JSON.parse(res._body);
        return data || {};
    };
    HttpService.prototype.handleError = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(" my error ");
    };
    return HttpService;
}());
HttpService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], HttpService);

var _a;
//# sourceMappingURL=http.service.js.map

/***/ }),

/***/ "./src/app/services/modals.servise.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TypeOfModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TypeOfModal;
(function (TypeOfModal) {
    TypeOfModal[TypeOfModal["Profile"] = 0] = "Profile";
    TypeOfModal[TypeOfModal["Confirm"] = 1] = "Confirm";
    TypeOfModal[TypeOfModal["ConfirmSignUp"] = 2] = "ConfirmSignUp";
    TypeOfModal[TypeOfModal["Success"] = 3] = "Success";
})(TypeOfModal || (TypeOfModal = {}));
var ModalsService = ModalsService_1 = (function () {
    function ModalsService() {
        this._subject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Subject"]();
        return ModalsService_1.instance = ModalsService_1.instance || this;
    }
    ModalsService.prototype.listenerOfOpen = function () {
        return this._subject.asObservable();
    };
    ModalsService.prototype.senderOfOpen = function (item) {
        this._subject.next(item);
    };
    return ModalsService;
}());
ModalsService = ModalsService_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ModalsService);

var ModalsService_1;
//# sourceMappingURL=modals.servise.js.map

/***/ }),

/***/ "./src/app/services/paypal.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_service__ = __webpack_require__("./src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app__ = __webpack_require__("./src/app/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaypalService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PaypalService = (function () {
    function PaypalService(httpService) {
        var _this = this;
        this.httpService = httpService;
        this.getAuthorizeUrl = function () {
            return _this.httpService.post(__WEBPACK_IMPORTED_MODULE_2_app__["a" /* SettingService */].originPaypal + "/api/paypal/authorizeUrl").map(function (data) {
                if (data.authorizeUrl) {
                    console.log(" authorizeUrl ", data);
                    _this.authorizeUrl = data.authorizeUrl;
                }
                return data;
            });
        };
        this.login = function (amount) {
            _this.amount = amount;
            console.log(" ====> ", _this.authorizeUrl);
            window.location.href = _this.authorizeUrl; // + "&amount=" + amount;
        };
        this.getUserInfo = function () {
            console.log(" code ", _this.authorizeCode);
            return _this.httpService.post(__WEBPACK_IMPORTED_MODULE_2_app__["a" /* SettingService */].originPaypal + "/api/paypal/tokeninfoCreate", {
                code: _this.authorizeCode
            }).map(function (data) {
                console.log(data);
                if (data.userinfo) {
                    _this.userinfo = data.userinfo;
                }
                return data;
            });
        };
        this.payout = function () {
            console.log(" amount ", _this.amount);
            return _this.httpService.post(__WEBPACK_IMPORTED_MODULE_2_app__["a" /* SettingService */].originPaypal + "/api/paypal/payout", {
                amount: _this.amount,
                currency: "USD",
                email: _this.userinfo ? _this.userinfo.email : "",
                description: "payout",
            });
        };
    }
    Object.defineProperty(PaypalService.prototype, "amount", {
        get: function () {
            return localStorage.getItem("amount");
        },
        set: function (amount) {
            localStorage.setItem("amount", amount);
        },
        enumerable: true,
        configurable: true
    });
    return PaypalService;
}());
PaypalService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */]) === "function" && _a || Object])
], PaypalService);

var _a;
//# sourceMappingURL=paypal.service.js.map

/***/ }),

/***/ "./src/app/services/settings.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SettingService = SettingService_1 = (function () {
    function SettingService() {
        if (SettingService_1.instance) {
            return SettingService_1.instance;
        }
        console.log(" LOCATION : ", window.location);
        if (window.location.hostname == "localhost") {
            SettingService_1.originPaypal = window.location.protocol + "//" + window.location.hostname + ':3000';
        }
        else {
            SettingService_1.originPaypal = window.location.protocol + '://52.58.162.133:3000';
        }
    }
    return SettingService;
}());
SettingService = SettingService_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], SettingService);

var SettingService_1;
//# sourceMappingURL=settings.service.js.map

/***/ }),

/***/ "./src/app/services/title.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__ = __webpack_require__("./node_modules/rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_mergeMap__ = __webpack_require__("./node_modules/rxjs/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_mergeMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TitleService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TitleService = TitleService_1 = (function () {
    function TitleService(router, activatedRoute, title) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.title = title;
        return TitleService_1.instance ? TitleService_1.instance : this;
    }
    TitleService.prototype.init = function () {
        var _this = this;
        this.router.events
            .filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* NavigationEnd */]; })
            .map(function () { return _this.activatedRoute; })
            .subscribe(function (event) {
            var title = _this.getTitle(_this.router.routerState, _this.router.routerState.root);
            console.log(' title is running : ', title);
            _this.title.setTitle(title);
        });
    };
    // collect that title data properties from all child routes
    // there might be a better way but this worked for me
    TitleService.prototype.getTitle = function (state, parent) {
        var t = "";
        if (parent && parent.snapshot.data && parent.snapshot.data.title) {
            t = parent.snapshot.data.title;
        }
        if (t === "" && state && parent) {
            t = this.getTitle(state, state.firstChild(parent));
        }
        return t;
    };
    return TitleService;
}());
TitleService = TitleService_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* Title */]) === "function" && _c || Object])
], TitleService);

var TitleService_1, _a, _b, _c;
//# sourceMappingURL=title.service.js.map

/***/ }),

/***/ "./src/app/services/ws.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebSocketService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var WebSocketService = (function () {
    function WebSocketService() {
        var _this = this;
        this.message = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Subject"]();
        this.opened = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Subject"]();
        this.start = function (url) {
            var self = _this;
            _this.url = url;
            _this.ws = __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].webSocket(_this.url);
            _this.socket = _this.ws.subscribe({
                next: function (data) {
                    if (data['type'] == 'welcome') {
                        self.opened.next(true);
                    }
                    _this.message.next(data);
                },
                error: function () {
                    self.opened.next(false);
                    _this.message.next({ type: 'closed' });
                    self.socket.unsubscribe();
                    setTimeout(function () {
                        self.start(self.url);
                    }, 1000);
                },
                complete: function () {
                    _this.message.next({ type: 'closed' });
                }
            });
        };
    }
    WebSocketService.prototype.close = function () {
        this.socket.unsubscribe();
        this.ws.complete();
    };
    WebSocketService.prototype.sendMessage = function (message) {
        this.ws.next(message);
    };
    return WebSocketService;
}());
WebSocketService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])()
], WebSocketService);

//# sourceMappingURL=ws.service.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[3]);
//# sourceMappingURL=main.bundle.js.map