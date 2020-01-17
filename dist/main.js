(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\r\n  <app-header>cd</app-header>\r\n  <div class=\"container\">\r\n\r\n    \r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</body>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/components/account/account.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/components/account/account.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #f=\"ngForm\" (ngSubmit)=\"submit()\">\r\n    <div class=\"form-group row\">\r\n      <label for=\"banknName\" class=\"col-sm-2 col-form-label\">Bank name</label>\r\n      <div class=\"col-sm-10\">\r\n        <input type=\"text\"  class=\"form-control\" id=\"banknName\" name=\"bankName\" [(ngModel)]=\"account.bankName\" placeholder=\"banknName\">\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n      <label for=\"accountNumber\" class=\"col-sm-2 col-form-label\">Account Number</label>\r\n      <div class=\"col-sm-10\">\r\n        <input type=\"text\" class=\"form-control\" id=\"accountNumber\" name=\"accountNumber\" [(ngModel)]=\"account.accountNumber\" placeholder=\"account number\">\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n            <label for=\"pensionName\" class=\"col-sm-2 col-form-label\">Pension bank name</label>\r\n            <div class=\"col-sm-10\">\r\n              <input type=\"text\" class=\"form-control\" id=\"pensionName\" name=\"pensionName\" [(ngModel)]=\"account.pensionName\" placeholder=\"pension name\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n                <label for=\"pensionAccount\" class=\"col-sm-2 col-form-label\">Pension account number</label>\r\n                <div class=\"col-sm-10\">\r\n                  <input type=\"text\" class=\"form-control\" id=\"pensionAccount\" name=\"pensionAccount\" [(ngModel)]=\"account.pensionAccount\" placeholder=\"Pension account number\">\r\n                </div>\r\n              </div>\r\n            \r\n                          <button>Save</button>\r\n  </form>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/components/config-form/config-form.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/components/config-form/config-form.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #f=\"ngForm\" (ngSubmit)=\"submit()\">\r\n \r\n    <div class=\"form-group row\">\r\n      <label for=\"accountNumber\" class=\"col-sm-2 col-form-label\">Name</label>\r\n      <div class=\"col-sm-10\">\r\n        <input type=\"text\" class=\"form-control\" id=\"name\" name=\"name\" [(ngModel)]=\"config.name\" placeholder=\"\">\r\n      </div>\r\n    </div>   \r\n   \r\n            \r\n                          <button>Save</button>\r\n  </form>\r\n\r\n  <br>\r\n<ul *ngFor=\"let i of configList\">\r\n  <li>\r\n    <a [routerLink]=\"['/addconfig/',i]\"> <h3>{{i}} </h3> </a>\r\n      <button (click)=\"onRemoveconfig(i)\">Remove</button>\r\n \r\n  </li>\r\n \r\n  \r\n</ul>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/components/config-page/config-page.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/components/config-page/config-page.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #f=\"ngForm\" (ngSubmit)=\"submit(name)\">\r\n  <div class=\"form-group row\">\r\n    <label for=\"banknName\" class=\"col-sm-2 col-form-label\">Configuration Name</label>\r\n    <div class=\"col-sm-10\">\r\n      <input type=\"text\"  class=\"form-control\" id=\"name\" name=\"name\" [(ngModel)]=\"config.name\" placeholder=\"name\">\r\n    </div>\r\n  </div>\r\n \r\n \r\n          \r\n     <button>Add New Settings</button>                   \r\n</form>\r\n\r\n<br>\r\n<ul *ngFor=\"let i of configList\">\r\n  <li>\r\n    <a [routerLink]=\"['/addconfig/',i.name]\"> <h3>{{i.name}} </h3> </a>\r\n      <button (click)=\"onRemoveconfig(i._id,i.name)\">Remove</button>\r\n \r\n  </li>\r\n \r\n  \r\n</ul>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/components/header/header.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/components/header/header.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\r\n  <nav class='navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3' >\r\n    <div class=\"container\">\r\n      <a class=\"navbar-brand\" [routerLink]='[\"/\"]'>AlphaHRMS SOLUTION</a>\r\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\".navbar-collapse\" aria-label=\"Toggle navigation\"\r\n        [attr.aria-expanded]=\"isExpanded\" (click)=\"toggle()\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n      <div class=\"navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse\" [ngClass]='{\"show\": isExpanded}'>\r\n        <ul class=\"navbar-nav flex-grow\">\r\n          <li class=\"nav-item\" [routerLinkActive]='[\"link-active\"]' [routerLinkActiveOptions]='{ exact: true }'>\r\n            <a class=\"nav-link text-dark\" [routerLink]='[\"/\"]'>Home</a>\r\n          \r\n          </li>\r\n          <li class=\"nav-item\" [routerLinkActive]='[\"link-active\"]' [routerLinkActiveOptions]='{ exact: true }'>\r\n             \r\n              <a class=\"nav-link text-dark\" (click)=\"logout()\">Logout</a>\r\n            </li>\r\n        \r\n          <li class=\"nav-item\"></li>\r\n        \r\n    \r\n        </ul>\r\n      </div>\r\n    </div>\r\n  \r\n  \r\n    <form class=\"form-inline my-2 my-lg-0\">\r\n      <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\r\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\r\n    </form>\r\n  </nav>\r\n</header>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/components/job/job.component.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/components/job/job.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #f=\"ngForm\" (ngSubmit)=\"submit()\">\r\n    <div class=\"form-group row\">\r\n      <label for=\"status\" class=\"col-sm-2 col-form-label\">Job status</label>\r\n      <div class=\"col-sm-10\">\r\n        <input type=\"text\"  class=\"form-control\" id=\"status\" name=\"status\" [(ngModel)]=\"job.status\" placeholder=\"status\">\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n      <label for=\"unit\" class=\"col-sm-2 col-form-label\">Unit</label>\r\n      <div class=\"col-sm-10\">\r\n        <input type=\"text\" class=\"form-control\" id=\"unit\" name=\"unit\" [(ngModel)]=\"job.unit\" placeholder=\"Unit\">\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n            <label for=\"subUnit\" class=\"col-sm-2 col-form-label\">Sub unit</label>\r\n            <div class=\"col-sm-10\">\r\n              <input type=\"text\" class=\"form-control\" id=\"subUnit\" name=\"subUnit\" [(ngModel)]=\"job.subUnit\" placeholder=\"Sub Unit\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n                <label for=\"designation\" class=\"col-sm-2 col-form-label\">Designation</label>\r\n                <div class=\"col-sm-10\">\r\n                  <input type=\"text\" class=\"form-control\" id=\"designation\" name=\"designation\" [(ngModel)]=\"job.designation\" placeholder=\"Designation\">\r\n                </div>\r\n              </div>\r\n            \r\n                <div class=\"form-group row\">\r\n                    <label for=\"salaryScale\" class=\"col-sm-2 col-form-label\">Salary Scale</label>\r\n                    <div class=\"col-sm-10\">\r\n                      <input type=\"text\" class=\"form-control\" id=\"salaryScale\" name=\"salaryScale\" [(ngModel)]=\"job.salaryScale\" placeholder=\"Salary scale\">\r\n                    </div>\r\n                  </div>\r\n            \r\n                          <button>Save</button>\r\n  </form>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/components/login/login.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/components/login/login.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n        <div class=\"col-md-6 new-user-alert\">\r\n            <div *ngIf=\"brandNew\" class=\"alert alert-success\" role=\"alert\">\r\n                <strong>All set!</strong> Please login with your account\r\n            </div>  \r\n            <h2>Login</h2>        \r\n        </div>\r\n      </div>\r\n      \r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n            <form #f=\"ngForm\" novalidate (ngSubmit)=\"login(f)\">\r\n                \r\n                <div class=\"form-group\">\r\n                  <label for=\"email\">Email</label>\r\n                  <input id=\"email\" type=\"text\" required name=\"email\" class=\"form-control\" placeholder=\"Email\" [ngModel]=\"credentials.email\" #email=\"ngModel\" tmFocus validateEmail>\r\n                  <small [hidden]=\"email.valid || (email.pristine && !submitted)\" class=\"text-danger\">Please enter a valid email</small>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label for=\"password\">Password</label>\r\n                  <input type=\"password\" class=\"form-control\" id=\"password\" required name=\"password\" placeholder=\"Password\" ngModel>\r\n                </div>          \r\n      \r\n                <div class=\"form-group\">\r\n                    <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"f.invalid || isRequesting\">Login</button>\r\n                    <app-spinner [isRunning]=\"isRequesting\"></app-spinner> \r\n                </div>\r\n      \r\n                <div *ngIf=\"errors\" class=\"alert alert-danger\" role=\"alert\">\r\n                    <strong>Oops!</strong> {{errors}}\r\n                  </div> \r\n                \r\n              </form>\r\n         </div>\r\n      </div>\r\n      "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/components/spinner/spinner.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/components/spinner/spinner.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"!isDelayedRunning\" class=\"spinner\">  \r\n    <div class=\"double-bounce1\"></div>\r\n    <div class=\"double-bounce2\"></div>\r\n</div> "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/components/staff-page/staff-page.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/components/staff-page/staff-page.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [routerLinkActive]=\"['link-active']\">\n    <a [routerLink]=\"['/editJob']\">\n        <span class='glyphicon glyphicon-edit'></span> Edit Job Details\n    </a>\n</div> \n<div [routerLinkActive]=\"['link-active']\">\n    <a [routerLink]=\"['/editaccount']\">\n        <span class='glyphicon glyphicon-edit'></span> Edit Account Details\n    </a>\n</div> \n<div [routerLinkActive]=\"['link-active']\">\n    <a [routerLink]=\"['/allowance']\">\n        <span class='glyphicon glyphicon-edit'></span> Edit Allowances\n    </a>\n</div> \n<div [routerLinkActive]=\"['link-active']\">\n    <a [routerLink]=\"['/deduction']\">\n        <span class='glyphicon glyphicon-edit'></span> Edit Deductions\n    </a>\n</div> \n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/components/staff/staff.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/components/staff/staff.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 *ngIf=\"!individual.id\">Add New Staff</h1>\r\n<h1 *ngIf=\"individual.id\">Edit Staff</h1>\r\n\r\n<form #f=\"ngForm\" (ngSubmit)=\"submit()\">\r\n         \r\n        <div class=\"form-group row\">\r\n          <label for=\"surname\" class=\"col-sm-2 col-form-label\">Surname</label>\r\n          <div class=\"col-sm-10\">\r\n            <input type=\"text\"  class=\"form-control\" id=\"surname\" name=\"surname\" [(ngModel)]=\"individual.surname\" placeholder=\"surname\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label for=\"firstname\" class=\"col-sm-2 col-form-label\">Firstname</label>\r\n          <div class=\"col-sm-10\">\r\n            <input type=\"text\" class=\"form-control\" id=\"firstname\" name=\"firstname\" [(ngModel)]=\"individual.firstname\" placeholder=\"firstname\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n                <label for=\"othernames\" class=\"col-sm-2 col-form-label\">Othernames</label>\r\n                <div class=\"col-sm-10\">\r\n                  <input type=\"text\" class=\"form-control\" id=\"firstname\" name=\"othernames\" [(ngModel)]=\"individual.othernames\" placeholder=\"othernames\">\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group row\">\r\n                    <label for=\"staffNumber\" class=\"col-sm-2 col-form-label\">Staff number</label>\r\n                    <div class=\"col-sm-10\">\r\n                      <input type=\"text\" class=\"form-control\" id=\"staffnumber\" name=\"staffnumber\" [(ngModel)]=\"individual.staffnumber\" placeholder=\"Staff number\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group row\">\r\n                        <label for=\"recordNumber\" class=\"col-sm-2 col-form-label\">Establishment number</label>\r\n                        <div class=\"col-sm-10\">\r\n                          <input type=\"text\" class=\"form-control\" id=\"recordnumber\" name=\"recordnumber\" [(ngModel)]=\"individual.recordnumber\" placeholder=\"Record number\">\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"form-group row\">\r\n                            <label for=\"firstname\" class=\"col-sm-2 col-form-label\">Email</label>\r\n                            <div class=\"col-sm-10\">\r\n                              <input type=\"text\" class=\"form-control\" id=\"email\" name=\"email\" [(ngModel)]=\"individual.email\" placeholder=\"example@example.com\">\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"form-group row\">\r\n                                <label for=\"firstname\" class=\"col-sm-2 col-form-label\">Birth date</label>\r\n                                <div class=\"col-sm-10\">\r\n                                  <input type=\"text\" class=\"form-control\" id=\"dob\" name=\"dob\" [(ngModel)]=\"individual.dob\" placeholder=\"Date of Birth\">\r\n                                </div>\r\n                              </div>\r\n\r\n                              <button>Save</button>\r\n      </form>\r\n"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (max-width: 767px) {\r\n  /* On small screens, the nav menu spans the full width of the screen. Leave a space for it. */\r\n  .body-content {\r\n    padding-top: 50px;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw2RkFBNkY7RUFDN0Y7SUFDRSxpQkFBaUI7RUFDbkI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgLyogT24gc21hbGwgc2NyZWVucywgdGhlIG5hdiBtZW51IHNwYW5zIHRoZSBmdWxsIHdpZHRoIG9mIHRoZSBzY3JlZW4uIExlYXZlIGEgc3BhY2UgZm9yIGl0LiAqL1xyXG4gIC5ib2R5LWNvbnRlbnQge1xyXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
        this.individual = {};
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var src_components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/components/spinner/spinner.component */ "./src/components/spinner/spinner.component.ts");
/* harmony import */ var src_components_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/components/login/login.component */ "./src/components/login/login.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../components/header/header.component */ "./src/components/header/header.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_services_basic_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/services/basic-auth.interceptor.service */ "./src/services/basic-auth.interceptor.service.ts");
/* harmony import */ var src_services_error_interceptor_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/services/error.interceptor.service */ "./src/services/error.interceptor.service.ts");
/* harmony import */ var src_components_staff_staff_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/components/staff/staff.component */ "./src/components/staff/staff.component.ts");
/* harmony import */ var src_components_job_job_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/components/job/job.component */ "./src/components/job/job.component.ts");
/* harmony import */ var src_components_account_account_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/components/account/account.component */ "./src/components/account/account.component.ts");
/* harmony import */ var src_components_staff_page_staff_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/components/staff-page/staff-page.component */ "./src/components/staff-page/staff-page.component.ts");
/* harmony import */ var src_components_config_form_config_form_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/components/config-form/config-form.component */ "./src/components/config-form/config-form.component.ts");
/* harmony import */ var src_components_config_page_config_page_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/components/config-page/config-page.component */ "./src/components/config-page/config-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                src_components_staff_staff_component__WEBPACK_IMPORTED_MODULE_13__["StaffComponent"],
                src_components_job_job_component__WEBPACK_IMPORTED_MODULE_14__["JobComponent"],
                src_components_account_account_component__WEBPACK_IMPORTED_MODULE_15__["AccountComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"],
                src_components_staff_page_staff_page_component__WEBPACK_IMPORTED_MODULE_16__["StaffPageComponent"],
                src_components_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"],
                src_components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_0__["SpinnerComponent"],
                src_components_config_form_config_form_component__WEBPACK_IMPORTED_MODULE_17__["ConfigFormComponent"],
                src_components_config_page_config_page_component__WEBPACK_IMPORTED_MODULE_18__["ConfigPageComponent"]
                //  LoginFormComponent,
                //   RegisterFormComponent,
                //  UserService
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"].withServerTransition({ appId: 'ng-cli-universal' }),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot([
                    { path: 'newstaff', component: src_components_staff_staff_component__WEBPACK_IMPORTED_MODULE_13__["StaffComponent"] },
                    { path: 'editstaff/:id', component: src_components_staff_staff_component__WEBPACK_IMPORTED_MODULE_13__["StaffComponent"] },
                    { path: 'editJob', component: src_components_job_job_component__WEBPACK_IMPORTED_MODULE_14__["JobComponent"] },
                    { path: 'editaccount', component: src_components_account_account_component__WEBPACK_IMPORTED_MODULE_15__["AccountComponent"] },
                    { path: 'staff', component: src_components_staff_page_staff_page_component__WEBPACK_IMPORTED_MODULE_16__["StaffPageComponent"] },
                    { path: 'allowance', component: src_components_staff_page_staff_page_component__WEBPACK_IMPORTED_MODULE_16__["StaffPageComponent"] },
                    { path: 'deduction', component: src_components_staff_page_staff_page_component__WEBPACK_IMPORTED_MODULE_16__["StaffPageComponent"] },
                    { path: 'addconfig/:name', component: src_components_config_form_config_form_component__WEBPACK_IMPORTED_MODULE_17__["ConfigFormComponent"] },
                    { path: 'settings', component: src_components_config_page_config_page_component__WEBPACK_IMPORTED_MODULE_18__["ConfigPageComponent"] },
                    // { path: '',component: ListrechargeComponent, canActivate: [AuthGuard] },
                    { path: 'login', component: src_components_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
                ])
            ],
            providers: [
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"], useClass: src_services_basic_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_11__["BasicAuthInterceptor"], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"], useClass: src_services_error_interceptor_service__WEBPACK_IMPORTED_MODULE_12__["ErrorInterceptor"], multi: true },
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/components/account/account.component.css":
/*!******************************************************!*\
  !*** ./src/components/account/account.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvY29tcG9uZW50cy9hY2NvdW50L2FjY291bnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/components/account/account.component.ts":
/*!*****************************************************!*\
  !*** ./src/components/account/account.component.ts ***!
  \*****************************************************/
/*! exports provided: AccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountComponent", function() { return AccountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/app.component */ "./src/app/app.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_services_individual_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/individual.service */ "./src/services/individual.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AccountComponent = /** @class */ (function () {
    function AccountComponent(individual, toastr, individualService) {
        this.individual = individual;
        this.toastr = toastr;
        this.individualService = individualService;
        this.account = [];
    }
    AccountComponent.prototype.ngOnInit = function () {
        this.may = this.individual.individual[0];
        if (this.may.account)
            this.account = this.may.account;
    };
    AccountComponent.prototype.submit = function () {
        this.may.account = this.account;
        this.individualService.UpdateStaff(this.may).subscribe(function (x) {
        });
        this.toastr.success(this.may.firstname, ' is Updated');
    };
    AccountComponent.ctorParameters = function () { return [
        { type: src_app_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] },
        { type: src_services_individual_service__WEBPACK_IMPORTED_MODULE_3__["IndividualService"] }
    ]; };
    AccountComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-account',
            template: __webpack_require__(/*! raw-loader!./account.component.html */ "./node_modules/raw-loader/index.js!./src/components/account/account.component.html"),
            styles: [__webpack_require__(/*! ./account.component.css */ "./src/components/account/account.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"], src_services_individual_service__WEBPACK_IMPORTED_MODULE_3__["IndividualService"]])
    ], AccountComponent);
    return AccountComponent;
}());



/***/ }),

/***/ "./src/components/config-form/config-form.component.css":
/*!**************************************************************!*\
  !*** ./src/components/config-form/config-form.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvY29tcG9uZW50cy9jb25maWctZm9ybS9jb25maWctZm9ybS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/components/config-form/config-form.component.ts":
/*!*************************************************************!*\
  !*** ./src/components/config-form/config-form.component.ts ***!
  \*************************************************************/
/*! exports provided: ConfigFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigFormComponent", function() { return ConfigFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/app.component */ "./src/app/app.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_services_configurations_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/configurations.service */ "./src/services/configurations.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ConfigFormComponent = /** @class */ (function () {
    function ConfigFormComponent(individual, toastr, configService, route, router) {
        var _this = this;
        this.individual = individual;
        this.toastr = toastr;
        this.configService = configService;
        this.may = {};
        this.query = {};
        this.config = {};
        this.configList = [];
        route.params.subscribe(function (p) {
            _this.query.name = p['name'];
        });
    }
    ConfigFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.configService.getConfig(this.query).subscribe(function (result) {
            _this.may = result[0];
            if (_this.may.values)
                _this.configList = _this.may.values;
        });
    };
    ConfigFormComponent.prototype.onRemoveconfig = function (name) {
        var newArray = this.configList.filter(function (item) {
            return name != item;
        });
        this.configList = newArray;
        this.addConfig();
    };
    ConfigFormComponent.prototype.addConfig = function () {
        this.may.values = this.configList;
        this.configService.UpdateConfig(this.may).subscribe(function (x) {
        });
        this.toastr.success("Successfull", 'Created');
    };
    ConfigFormComponent.prototype.submit = function () {
        this.configList.push(this.config.name);
        console.log(this.configList);
        this.addConfig();
        this.config = {};
    };
    ConfigFormComponent.ctorParameters = function () { return [
        { type: src_app_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] },
        { type: src_services_configurations_service__WEBPACK_IMPORTED_MODULE_3__["ConfigurationsService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    ConfigFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-config-form',
            template: __webpack_require__(/*! raw-loader!./config-form.component.html */ "./node_modules/raw-loader/index.js!./src/components/config-form/config-form.component.html"),
            styles: [__webpack_require__(/*! ./config-form.component.css */ "./src/components/config-form/config-form.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"], src_services_configurations_service__WEBPACK_IMPORTED_MODULE_3__["ConfigurationsService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ConfigFormComponent);
    return ConfigFormComponent;
}());



/***/ }),

/***/ "./src/components/config-page/config-page.component.css":
/*!**************************************************************!*\
  !*** ./src/components/config-page/config-page.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvY29tcG9uZW50cy9jb25maWctcGFnZS9jb25maWctcGFnZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/components/config-page/config-page.component.ts":
/*!*************************************************************!*\
  !*** ./src/components/config-page/config-page.component.ts ***!
  \*************************************************************/
/*! exports provided: ConfigPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigPageComponent", function() { return ConfigPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_services_configurations_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/configurations.service */ "./src/services/configurations.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConfigPageComponent = /** @class */ (function () {
    function ConfigPageComponent(toastr, configService) {
        this.toastr = toastr;
        this.configService = configService;
        this.config = {};
        this.configList = [];
    }
    ConfigPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.configService.getConfig(this.query).subscribe(function (result) {
            _this.configList = result;
            console.log(_this.configList);
        });
    };
    ConfigPageComponent.prototype.onRemoveconfig = function (id, name) {
        var _this = this;
        this.configService.removeConfig(id).subscribe(function (x) {
            _this.toastr.success("Deleted");
        });
        var newArray = this.configList.filter(function (item) {
            return name != item.name;
        });
        this.configList = newArray;
    };
    ConfigPageComponent.prototype.submit = function () {
        this.configList.push(this.config);
        console.log(this.config);
        this.configService.createConfig(this.config).subscribe(function (x) {
        });
        this.toastr.success("Successfull", 'Created');
        this.config = {};
    };
    ConfigPageComponent.ctorParameters = function () { return [
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"] },
        { type: src_services_configurations_service__WEBPACK_IMPORTED_MODULE_2__["ConfigurationsService"] }
    ]; };
    ConfigPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-config-page',
            template: __webpack_require__(/*! raw-loader!./config-page.component.html */ "./node_modules/raw-loader/index.js!./src/components/config-page/config-page.component.html"),
            styles: [__webpack_require__(/*! ./config-page.component.css */ "./src/components/config-page/config-page.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"], src_services_configurations_service__WEBPACK_IMPORTED_MODULE_2__["ConfigurationsService"]])
    ], ConfigPageComponent);
    return ConfigPageComponent;
}());



/***/ }),

/***/ "./src/components/header/header.component.css":
/*!****************************************************!*\
  !*** ./src/components/header/header.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a.navbar-brand {\r\n    white-space: normal;\r\n    text-align: center;\r\n    word-break: break-all;\r\n  }\r\n  \r\n  html {\r\n    font-size: 14px;\r\n  }\r\n  \r\n  @media (min-width: 768px) {\r\n    html {\r\n      font-size: 16px;\r\n    }\r\n  }\r\n  \r\n  .box-shadow {\r\n    box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05);\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFDQTtJQUNFO01BQ0UsZUFBZTtJQUNqQjtFQUNGOztFQUVBO0lBQ0UsOENBQThDO0VBQ2hEIiwiZmlsZSI6InNyYy9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImEubmF2YmFyLWJyYW5kIHtcclxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbiAgfVxyXG4gIFxyXG4gIGh0bWwge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIGh0bWwge1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5ib3gtc2hhZG93IHtcclxuICAgIGJveC1zaGFkb3c6IDAgLjI1cmVtIC43NXJlbSByZ2JhKDAsIDAsIDAsIC4wNSk7XHJcbiAgfVxyXG4gICJdfQ== */"

/***/ }),

/***/ "./src/components/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/components/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_services_authenticated_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/authenticated.service */ "./src/services/authenticated.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(cdRef, router, authenticationService) {
        var _this = this;
        this.cdRef = cdRef;
        this.router = router;
        this.authenticationService = authenticationService;
        this.balance = {};
        this.isExpanded = false;
        this.authenticationService.currentUser.subscribe(function (x) { return _this.currentUser = x; });
    }
    HeaderComponent.prototype.logout = function () {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    };
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.collapse = function () {
        this.isExpanded = false;
    };
    HeaderComponent.prototype.toggle = function () {
        this.isExpanded = !this.isExpanded;
    };
    HeaderComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: src_services_authenticated_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
    ]; };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/components/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            src_services_authenticated_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/components/job/job.component.css":
/*!**********************************************!*\
  !*** ./src/components/job/job.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvY29tcG9uZW50cy9qb2Ivam9iLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/components/job/job.component.ts":
/*!*********************************************!*\
  !*** ./src/components/job/job.component.ts ***!
  \*********************************************/
/*! exports provided: JobComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobComponent", function() { return JobComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/app.component */ "./src/app/app.component.ts");
/* harmony import */ var src_services_individual_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/individual.service */ "./src/services/individual.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var JobComponent = /** @class */ (function () {
    function JobComponent(individual, toastr, individualService) {
        this.individual = individual;
        this.toastr = toastr;
        this.individualService = individualService;
        this.may = {};
        this.job = {};
    }
    JobComponent.prototype.ngOnInit = function () {
        this.may = this.individual.individual[0];
        if (this.may.job)
            this.job = this.may.job;
        // this.setJob(this.may)
    };
    JobComponent.prototype.submit = function () {
        this.may.job = this.job;
        this.individualService.UpdateStaff(this.may).subscribe(function (x) {
        });
        this.toastr.success(this.may.firstname, ' is Updated');
    };
    JobComponent.ctorParameters = function () { return [
        { type: src_app_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
        { type: src_services_individual_service__WEBPACK_IMPORTED_MODULE_2__["IndividualService"] }
    ]; };
    JobComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-job',
            template: __webpack_require__(/*! raw-loader!./job.component.html */ "./node_modules/raw-loader/index.js!./src/components/job/job.component.html"),
            styles: [__webpack_require__(/*! ./job.component.css */ "./src/components/job/job.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], src_services_individual_service__WEBPACK_IMPORTED_MODULE_2__["IndividualService"]])
    ], JobComponent);
    return JobComponent;
}());



/***/ }),

/***/ "./src/components/login/login.component.ts":
/*!*************************************************!*\
  !*** ./src/components/login/login.component.ts ***!
  \*************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_services_authenticated_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/authenticated.service */ "./src/services/authenticated.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, activatedRoute, authenticationService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.authenticationService = authenticationService;
        this.submitted = false;
        this.credentials = { email: '', password: '' };
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.activatedRoute.queryParams.subscribe(function (param) {
            _this.brandNew = param['brandNew'];
            _this.credentials.email = param['email'];
        });
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        // prevent memory leak by unsubscribing
        this.subscription.unsubscribe();
    };
    LoginComponent.prototype.login = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        this.submitted = true;
        // stop here if form is invalid
        this.authenticationService.login(value.email, value.password)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])())
            .subscribe(function (data) {
            _this.router.navigate(['/']);
        }, function (error) {
            _this.error = error;
            _this.isRequesting = false;
        });
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"] },
        { type: src_services_authenticated_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
    ]; };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/components/login/login.component.html") }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"],
            src_services_authenticated_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/components/spinner/spinner.component.css":
/*!******************************************************!*\
  !*** ./src/components/spinner/spinner.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".spinner {\r\n    width: 40px;\r\n    height: 40px;\r\n  \r\n    position: relative;\r\n    margin: 30px auto;\r\n  }\r\n  \r\n  .double-bounce1, .double-bounce2 {\r\n    width: 100%;\r\n    height: 100%;\r\n    border-radius: 50%;\r\n    background-color: #333;\r\n    opacity: 0.6;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n  \r\n    -webkit-animation: sk-bounce 2.0s infinite ease-in-out;\r\n    animation: sk-bounce 2.0s infinite ease-in-out;\r\n  }\r\n  \r\n  .double-bounce2 {\r\n    -webkit-animation-delay: -1.0s;\r\n    animation-delay: -1.0s;\r\n  }\r\n  \r\n  @-webkit-keyframes sk-bounce {\r\n    0%, 100% { -webkit-transform: scale(0.0) }\r\n    50% { -webkit-transform: scale(1.0) }\r\n  }\r\n  \r\n  @keyframes sk-bounce {\r\n    0%, 100% {\r\n      transform: scale(0.0);\r\n      -webkit-transform: scale(0.0);\r\n    } 50% {\r\n        transform: scale(1.0);\r\n        -webkit-transform: scale(1.0);\r\n      }\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL3NwaW5uZXIvc3Bpbm5lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFlBQVk7O0lBRVosa0JBQWtCO0lBQ2xCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPOztJQUVQLHNEQUFzRDtJQUN0RCw4Q0FBOEM7RUFDaEQ7O0VBRUE7SUFDRSw4QkFBOEI7SUFDOUIsc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsV0FBVyw4QkFBOEI7SUFDekMsTUFBTSw4QkFBOEI7RUFDdEM7O0VBRUE7SUFDRTtNQUNFLHFCQUFxQjtNQUNyQiw2QkFBNkI7SUFDL0IsRUFBRTtRQUNFLHFCQUFxQjtRQUNyQiw2QkFBNkI7TUFDL0I7RUFDSiIsImZpbGUiOiJzcmMvY29tcG9uZW50cy9zcGlubmVyL3NwaW5uZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zcGlubmVyIHtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gIFxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luOiAzMHB4IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIC5kb3VibGUtYm91bmNlMSwgLmRvdWJsZS1ib3VuY2UyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxuICAgIG9wYWNpdHk6IDAuNjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgXHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogc2stYm91bmNlIDIuMHMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XHJcbiAgICBhbmltYXRpb246IHNrLWJvdW5jZSAyLjBzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuICBcclxuICAuZG91YmxlLWJvdW5jZTIge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0xLjBzO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMS4wcztcclxuICB9XHJcbiAgXHJcbiAgQC13ZWJraXQta2V5ZnJhbWVzIHNrLWJvdW5jZSB7XHJcbiAgICAwJSwgMTAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjApIH1cclxuICAgIDUwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjApIH1cclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyBzay1ib3VuY2Uge1xyXG4gICAgMCUsIDEwMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMCk7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjApO1xyXG4gICAgfSA1MCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wKTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wKTtcclxuICAgICAgfVxyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/components/spinner/spinner.component.ts":
/*!*****************************************************!*\
  !*** ./src/components/spinner/spinner.component.ts ***!
  \*****************************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SpinnerComponent = /** @class */ (function () {
    function SpinnerComponent() {
        this.isDelayedRunning = false;
        this.delay = 150;
    }
    Object.defineProperty(SpinnerComponent.prototype, "isRunning", {
        set: function (value) {
            var _this = this;
            if (!value) {
                this.cancelTimeout();
                this.isDelayedRunning = false;
                return;
            }
            if (this.currentTimeout) {
                return;
            }
            // specify window to side-step conflict with node types: https://github.com/mgechev/angular2-seed/issues/901
            this.currentTimeout = window.setTimeout(function () {
                _this.isDelayedRunning = value;
                _this.cancelTimeout();
            }, this.delay);
        },
        enumerable: true,
        configurable: true
    });
    SpinnerComponent.prototype.cancelTimeout = function () {
        clearTimeout(this.currentTimeout);
        this.currentTimeout = 0;
    };
    SpinnerComponent.prototype.ngOnDestroy = function () {
        this.cancelTimeout();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], SpinnerComponent.prototype, "delay", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], SpinnerComponent.prototype, "isRunning", null);
    SpinnerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-spinner',
            template: __webpack_require__(/*! raw-loader!./spinner.component.html */ "./node_modules/raw-loader/index.js!./src/components/spinner/spinner.component.html"),
            styles: [__webpack_require__(/*! ./spinner.component.css */ "./src/components/spinner/spinner.component.css")]
        })
    ], SpinnerComponent);
    return SpinnerComponent;
}());



/***/ }),

/***/ "./src/components/staff-page/staff-page.component.css":
/*!************************************************************!*\
  !*** ./src/components/staff-page/staff-page.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvY29tcG9uZW50cy9zdGFmZi1wYWdlL3N0YWZmLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/components/staff-page/staff-page.component.ts":
/*!***********************************************************!*\
  !*** ./src/components/staff-page/staff-page.component.ts ***!
  \***********************************************************/
/*! exports provided: StaffPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffPageComponent", function() { return StaffPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/app.component */ "./src/app/app.component.ts");
/* harmony import */ var src_services_individual_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/individual.service */ "./src/services/individual.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StaffPageComponent = /** @class */ (function () {
    function StaffPageComponent(route, individual, individualService) {
        this.route = route;
        this.individual = individual;
        this.individualService = individualService;
        this.query = {};
        this.may = {};
        route.params.subscribe(function (p) {
            //this.job.id = +p['id'];
        });
    }
    StaffPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.query._id = "5e112e6e3986d872ecf6ccb0";
        this.individualService.getStaff(this.query).subscribe(function (result) {
            _this.individual.individual = result;
            _this.may = _this.individual.individual;
        });
    };
    StaffPageComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: src_app_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"] },
        { type: src_services_individual_service__WEBPACK_IMPORTED_MODULE_2__["IndividualService"] }
    ]; };
    StaffPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-staff-page',
            template: __webpack_require__(/*! raw-loader!./staff-page.component.html */ "./node_modules/raw-loader/index.js!./src/components/staff-page/staff-page.component.html"),
            styles: [__webpack_require__(/*! ./staff-page.component.css */ "./src/components/staff-page/staff-page.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], src_app_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"], src_services_individual_service__WEBPACK_IMPORTED_MODULE_2__["IndividualService"]])
    ], StaffPageComponent);
    return StaffPageComponent;
}());



/***/ }),

/***/ "./src/components/staff/staff.component.css":
/*!**************************************************!*\
  !*** ./src/components/staff/staff.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvY29tcG9uZW50cy9zdGFmZi9zdGFmZi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/components/staff/staff.component.ts":
/*!*************************************************!*\
  !*** ./src/components/staff/staff.component.ts ***!
  \*************************************************/
/*! exports provided: StaffComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffComponent", function() { return StaffComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_individual_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/individual.service */ "./src/services/individual.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_services_configurations_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/configurations.service */ "./src/services/configurations.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StaffComponent = /** @class */ (function () {
    function StaffComponent(individualService, configService, toastr) {
        this.individualService = individualService;
        this.configService = configService;
        this.toastr = toastr;
        this.individual = {
            _id: "",
            title: "",
            surname: "",
            firstname: "",
            othernames: "",
            staffnumber: "",
            recordnumber: "",
            email: ""
        };
        this.query = {};
        this.may = [];
        this.title = {};
    }
    StaffComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.configService.getConfig(this.query).subscribe(function (result) {
            _this.may = result;
            console.log(_this.may);
            var newArray = _this.may.filter(function (item) {
                return "Title" == item.name;
            });
            _this.title = newArray;
            console.log(_this.title);
            console.log(newArray);
        });
    };
    StaffComponent.prototype.submit = function () {
        this.individualService.createStaff(this.individual).subscribe(function (x) {
        });
        this.toastr.success(this.individual.firstname, ' is Added');
    };
    StaffComponent.ctorParameters = function () { return [
        { type: src_services_individual_service__WEBPACK_IMPORTED_MODULE_1__["IndividualService"] },
        { type: src_services_configurations_service__WEBPACK_IMPORTED_MODULE_3__["ConfigurationsService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }
    ]; };
    StaffComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-staff',
            template: __webpack_require__(/*! raw-loader!./staff.component.html */ "./node_modules/raw-loader/index.js!./src/components/staff/staff.component.html"),
            styles: [__webpack_require__(/*! ./staff.component.css */ "./src/components/staff/staff.component.css")]
        }),
        __metadata("design:paramtypes", [src_services_individual_service__WEBPACK_IMPORTED_MODULE_1__["IndividualService"], src_services_configurations_service__WEBPACK_IMPORTED_MODULE_3__["ConfigurationsService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], StaffComponent);
    return StaffComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! exports provided: getBaseUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBaseUrl", function() { return getBaseUrl; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}
var providers = [
    { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] }
];
if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])(providers).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/services/authenticated.service.ts":
/*!***********************************************!*\
  !*** ./src/services/authenticated.service.ts ***!
  \***********************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    Object.defineProperty(AuthenticationService.prototype, "currentUserValue", {
        get: function () {
            return this.currentUserSubject.value;
        },
        enumerable: true,
        configurable: true
    });
    AuthenticationService.prototype.login = function (email, password) {
        var _this = this;
        return this.http.post('/users/login', { email: email, password: password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) {
            // store user details and basic auth credentials in local storage to keep user logged in between page refreshes
            user.authdata = window.btoa(email + ':' + password);
            localStorage.setItem('currentUser', JSON.stringify(user));
            //  localStorage.setItem('currentUser', JSON.stringify(user));
            _this.currentUserSubject.next(user);
            return user;
        }));
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    };
    AuthenticationService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/services/basic-auth.interceptor.service.ts":
/*!********************************************************!*\
  !*** ./src/services/basic-auth.interceptor.service.ts ***!
  \********************************************************/
/*! exports provided: BasicAuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicAuthInterceptor", function() { return BasicAuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authenticated_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authenticated.service */ "./src/services/authenticated.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BasicAuthInterceptor = /** @class */ (function () {
    function BasicAuthInterceptor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    BasicAuthInterceptor.prototype.intercept = function (request, next) {
        // add authorization header with basic auth credentials if available
        var currentUser = this.authenticationService.currentUserValue;
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + currentUser.token
                }
            });
        }
        return next.handle(request);
    };
    BasicAuthInterceptor.ctorParameters = function () { return [
        { type: _authenticated_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"] }
    ]; };
    BasicAuthInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_authenticated_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]])
    ], BasicAuthInterceptor);
    return BasicAuthInterceptor;
}());



/***/ }),

/***/ "./src/services/configurations.service.ts":
/*!************************************************!*\
  !*** ./src/services/configurations.service.ts ***!
  \************************************************/
/*! exports provided: ConfigurationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurationsService", function() { return ConfigurationsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfigurationsService = /** @class */ (function () {
    function ConfigurationsService(http) {
        this.http = http;
    }
    ConfigurationsService.prototype.createConfig = function (config) {
        return this.http.post('/configuration', config);
    };
    ConfigurationsService.prototype.removeConfig = function (config) {
        return this.http.delete('/configuration/' + config);
    };
    ConfigurationsService.prototype.UpdateConfig = function (config) {
        return this.http.patch('/configuration/' + config._id, config);
    };
    ConfigurationsService.prototype.getConfig = function (filter) {
        return this.http.get('/configuration' + '?' + this.toQueryString(filter));
    };
    ConfigurationsService.prototype.toQueryString = function (obj) {
        var parts = [];
        for (var property in obj) {
            var value = obj[property];
            if (value != null && value != undefined && value != 'NaN' && value != null)
                parts.push(encodeURIComponent(property) + '=' + encodeURIComponent(value));
        }
        return parts.join('&');
    };
    ConfigurationsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    ConfigurationsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ConfigurationsService);
    return ConfigurationsService;
}());



/***/ }),

/***/ "./src/services/error.interceptor.service.ts":
/*!***************************************************!*\
  !*** ./src/services/error.interceptor.service.ts ***!
  \***************************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _authenticated_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authenticated.service */ "./src/services/authenticated.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    ErrorInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                _this.authenticationService.logout();
                location.reload(true);
            }
            var error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
        }));
    };
    ErrorInterceptor.ctorParameters = function () { return [
        { type: _authenticated_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
    ]; };
    ErrorInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_authenticated_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());



/***/ }),

/***/ "./src/services/individual.service.ts":
/*!********************************************!*\
  !*** ./src/services/individual.service.ts ***!
  \********************************************/
/*! exports provided: IndividualService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndividualService", function() { return IndividualService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IndividualService = /** @class */ (function () {
    function IndividualService(http) {
        this.http = http;
    }
    IndividualService.prototype.createStaff = function (individual) {
        return this.http.post('/individual', individual);
    };
    IndividualService.prototype.UpdateStaff = function (update) {
        console.log(update);
        return this.http.patch('/individual/' + update._id, update);
    };
    IndividualService.prototype.getStaff = function (filter) {
        return this.http.get('/individual' + '?' + this.toQueryString(filter));
    };
    IndividualService.prototype.toQueryString = function (obj) {
        var parts = [];
        for (var property in obj) {
            var value = obj[property];
            if (value != null && value != undefined && value != 'NaN' && value != null)
                parts.push(encodeURIComponent(property) + '=' + encodeURIComponent(value));
        }
        return parts.join('&');
    };
    IndividualService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    IndividualService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], IndividualService);
    return IndividualService;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Cloud\AlphaHR_V1\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map