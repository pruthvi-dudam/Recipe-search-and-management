(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+Dr4":
/*!*********************************************!*\
  !*** ./src/app/services/apicall.service.ts ***!
  \*********************************************/
/*! exports provided: ApicallService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApicallService", function() { return ApicallService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");



class ApicallService {
    constructor(http) {
        this.http = http;
    }
    //api1key = 0cef2320fde3415e9f4c05a44c175b8b; // pruthvi
    //api2key = 05c9f01ba967407b8415b1c5165e3bee; //shrav
    getRecipes(cusine) {
        return this.http.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=05c9f01ba967407b8415b1c5165e3bee&cuisine=${cusine}`);
    }
    getRecipesDiet(cusine, diet) {
        return this.http.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=0cef2320fde3415e9f4c05a44c175b8b&cuisine=${cusine}&diet=${diet}`);
    }
    getRecipesQuery(cusine, query) {
        return this.http.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=0cef2320fde3415e9f4c05a44c175b8b&query=${query}&cuisine=${cusine}`);
    }
    getRecipesQueryAndDiet(cusine, query, diet) {
        return this.http.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=0cef2320fde3415e9f4c05a44c175b8b&query=${query}&cuisine=${cusine}&diet=${diet}`);
    }
    getInfo(id) {
        return this.http.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=05c9f01ba967407b8415b1c5165e3bee`);
    }
    getInfosummary(id) {
        return this.http.get(`https://api.spoonacular.com/recipes/${id}/summary?apiKey=0cef2320fde3415e9f4c05a44c175b8b`);
    }
    getIngridients(id) {
        return this.http.get(`https://api.spoonacular.com/recipes/${id}/priceBreakdownWidget.json?apiKey=0cef2320fde3415e9f4c05a44c175b8b`);
    }
    getInstructions(id) {
        return this.http.get(`https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=05c9f01ba967407b8415b1c5165e3bee&stepBreakdown=true`);
    }
    getTastes(id) {
        return this.http.get(`https://api.spoonacular.com/recipes/${id}/tasteWidget.json?apiKey=05c9f01ba967407b8415b1c5165e3bee`);
    }
    getNutrition(id) {
        return this.http.get(`https://api.spoonacular.com/recipes/${id}/nutritionWidget.json?apiKey=05c9f01ba967407b8415b1c5165e3bee`);
    }
    getNutritionImg(id) {
        return this.http.get(`https://api.spoonacular.com/food/products/${id}/nutritionLabel?apiKey=05c9f01ba967407b8415b1c5165e3bee`, { responseType: 'text' });
    }
    getSimilarRecipes(id) {
        return this.http.get(`https://api.spoonacular.com/recipes/${id}/similar?apiKey=05c9f01ba967407b8415b1c5165e3bee`);
    }
}
ApicallService.ɵfac = function ApicallService_Factory(t) { return new (t || ApicallService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ApicallService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApicallService, factory: ApicallService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApicallService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "+fd8":
/*!*****************************************!*\
  !*** ./src/app/shared/shared-module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _form_error_messages_form_error_messages_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-error-messages/form-error-messages.component */ "/Ids");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _recipe_card_recipe_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./recipe-card/recipe-card.component */ "qTX1");






class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_form_error_messages_form_error_messages_component__WEBPACK_IMPORTED_MODULE_2__["FormErrorMessagesComponent"], _recipe_card_recipe_card_component__WEBPACK_IMPORTED_MODULE_4__["RecipeCardComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_form_error_messages_form_error_messages_component__WEBPACK_IMPORTED_MODULE_2__["FormErrorMessagesComponent"], _recipe_card_recipe_card_component__WEBPACK_IMPORTED_MODULE_4__["RecipeCardComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_form_error_messages_form_error_messages_component__WEBPACK_IMPORTED_MODULE_2__["FormErrorMessagesComponent"], _recipe_card_recipe_card_component__WEBPACK_IMPORTED_MODULE_4__["RecipeCardComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
                exports: [_form_error_messages_form_error_messages_component__WEBPACK_IMPORTED_MODULE_2__["FormErrorMessagesComponent"], _recipe_card_recipe_card_component__WEBPACK_IMPORTED_MODULE_4__["RecipeCardComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "/Ids":
/*!*****************************************************************************!*\
  !*** ./src/app/shared/form-error-messages/form-error-messages.component.ts ***!
  \*****************************************************************************/
/*! exports provided: FormErrorMessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormErrorMessagesComponent", function() { return FormErrorMessagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function FormErrorMessagesComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This is a required field ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormErrorMessagesComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Your field is too short ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormErrorMessagesComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter only a valid Canadian Postal Code ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormErrorMessagesComponent_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter a valid email address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormErrorMessagesComponent_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Must match the previous entry ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormErrorMessagesComponent_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password must be 8 to 20 characters, with at least 1 letter and 1 digit. Special characters are not accepted (i.e. !@#). ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormErrorMessagesComponent_div_0_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter a valid name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormErrorMessagesComponent_div_0_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter birthdate in correct format ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormErrorMessagesComponent_div_0_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter a valid city ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormErrorMessagesComponent_div_0_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter a valid name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormErrorMessagesComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FormErrorMessagesComponent_div_0_div_1_Template, 2, 0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FormErrorMessagesComponent_div_0_div_2_Template, 2, 0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FormErrorMessagesComponent_div_0_div_3_Template, 2, 0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FormErrorMessagesComponent_div_0_div_4_Template, 2, 0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FormErrorMessagesComponent_div_0_div_5_Template, 2, 0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FormErrorMessagesComponent_div_0_div_6_Template, 2, 0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, FormErrorMessagesComponent_div_0_div_7_Template, 2, 0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, FormErrorMessagesComponent_div_0_div_8_Template, 2, 0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, FormErrorMessagesComponent_div_0_div_9_Template, 2, 0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, FormErrorMessagesComponent_div_0_div_10_Template, 2, 0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.validatorMessage["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.validatorMessage["minlength"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.validatorMessage["pattern"] && !ctx_r0.validatorMessage["minlength"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.validatorMessage["email"] && !ctx_r0.validatorMessage["minlength"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.validatorMessage["misMatchPassword"] || ctx_r0.validatorMessage["misMatchEmail"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.validatorMessage["invalidPassword"] && !ctx_r0.validatorMessage["minlength"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.validatorMessage["pattern"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.validatorMessage["invalidBirthDate"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.validatorMessage["invalidCity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.validatorMessage["invalidUserName"]);
} }
class FormErrorMessagesComponent {
    constructor() {
        this.validatorMessage = null;
    }
    ngOnInit() { }
}
FormErrorMessagesComponent.ɵfac = function FormErrorMessagesComponent_Factory(t) { return new (t || FormErrorMessagesComponent)(); };
FormErrorMessagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormErrorMessagesComponent, selectors: [["app-form-error-messages"]], inputs: { validatorMessage: "validatorMessage" }, decls: 1, vars: 1, consts: [[4, "ngIf"], ["class", "error", 4, "ngIf"], ["class", "npnm", 4, "ngIf"], [1, "error"], [1, "npnm"]], template: function FormErrorMessagesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FormErrorMessagesComponent_div_0_Template, 11, 10, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.validatorMessage);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".error[_ngcontent-%COMP%] {\n  font-size: 12px;\n  display: block;\n  padding: 0 1rem;\n  margin-top: 15px;\n  color: #ee0700;\n  line-height: 16px;\n  size: 1rem;\n}\n\n.npnm[_ngcontent-%COMP%] {\n  font-size: 12px;\n  display: block;\n  margin-top: 5px;\n  color: #ee0700;\n  padding-bottom: 1rem;\n  line-height: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Zvcm0tZXJyb3ItbWVzc2FnZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUFDRjs7QUFDQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0FBRUYiLCJmaWxlIjoiZm9ybS1lcnJvci1tZXNzYWdlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lcnJvciB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBhZGRpbmc6IDAgMXJlbTtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIGNvbG9yOiAjZWUwNzAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gIHNpemU6IDFyZW07XHJcbn1cclxuLm5wbm0ge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgY29sb3I6ICNlZTA3MDA7XHJcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormErrorMessagesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-form-error-messages',
                templateUrl: './form-error-messages.component.html',
                styleUrls: ['./form-error-messages.component.scss'],
            }]
    }], function () { return []; }, { validatorMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/pruthvirajdudam/Downloads/Recipe-search-and-management/src/main.ts */"zUnb");


/***/ }),

/***/ "2tjI":
/*!********************************************************!*\
  !*** ./src/app/recipes-page/recipes-page.component.ts ***!
  \********************************************************/
/*! exports provided: RecipesPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipesPageComponent", function() { return RecipesPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_apicall_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/apicall.service */ "+Dr4");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/services.component */ "KfLr");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../header/header.component */ "fECr");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../footer/footer.component */ "fp1T");
/* harmony import */ var _shared_recipe_card_recipe_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/recipe-card/recipe-card.component */ "qTX1");










function RecipesPageComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecipesPageComponent_div_18_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const diet_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.getDietRecipes(diet_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const diet_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", diet_r3, " ");
} }
function RecipesPageComponent_button_24_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecipesPageComponent_button_24_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.goBackToTop(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Go to Top Recipes > ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RecipesPageComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-recipe-card", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const recipe_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imgSrc", recipe_r8.image)("title", recipe_r8.title)("isRecipe", true)("isDelete", false);
} }
class RecipesPageComponent {
    constructor(router, activatedRoute, apiService, shared) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.apiService = apiService;
        this.shared = shared;
        this.diet = '';
        this.query = '';
        this.title = '';
        // savedRecipeList: string[] = [];
        this.savedRecipeList = new Map();
        //
        this.isTopRecipe = false;
        //
        this.dietList = [
            'Gluten Free',
            'Ketogenic',
            'Vegetarian',
            'Lacto-Vegetarian',
            'Ovo-Vegetaria',
            'Vegan',
            'Pescetarian',
            'Paleo',
            'Primal',
            'Whole30',
        ];
        this.cuisine = this.router.url.substring(13);
    }
    ngOnInit() {
        this.goBackToTop();
        this.shared.setValue(this.savedRecipeList);
    }
    getDietRecipes(diet) {
        console.log('in diet');
        this.isTopRecipe = true;
        this.diet = diet;
        this.title = '' + this.cuisine + ' recipes with ' + this.diet + ' diet';
        if (this.query.length > 0) {
            //this.isQueryRecipe = false;
            this.getQueryAndDietRecipes();
        }
        else {
            this.apiService
                .getRecipesDiet(this.cuisine.toLowerCase(), diet.toLowerCase())
                .subscribe((list) => {
                this.recipeList = list.results;
            }, (err) => console.error(err), () => console.log(this.recipeList));
        }
    }
    getQueryRecipes() {
        this.isTopRecipe = true;
        console.log('in query');
        this.title = '' + this.cuisine + ' recipes with ' + this.query + ' !';
        if (this.diet.length > 0) {
            this.getQueryAndDietRecipes();
        }
        else {
            this.apiService
                .getRecipesQuery(this.cuisine.toLowerCase(), this.query.toLowerCase())
                .subscribe((list) => {
                this.recipeList = list.results;
            }, (err) => {
                console.error(err);
            }, () => console.log(this.recipeList));
        }
    }
    getQueryAndDietRecipes() {
        this.isTopRecipe = true;
        this.title =
            '' +
                this.cuisine +
                ' recipes with ' +
                this.query +
                ' - ' +
                this.diet +
                ' diet';
        console.log('in query&diet');
        this.apiService
            .getRecipesQueryAndDiet(this.cuisine.toLowerCase(), this.query.toLowerCase(), this.diet.toLowerCase())
            .subscribe((list) => {
            this.recipeList = list.results;
        }, (err) => {
            console.error(err);
        }, () => console.log(this.recipeList));
    }
    goBackToTop() {
        this.isTopRecipe = false;
        this.title = 'Explore top ' + this.cuisine + ' recipes';
        this.apiService.getRecipes(this.cuisine.toLowerCase()).subscribe((list) => {
            this.recipeList = list.results;
        }, (err) => console.error(err), () => console.log(this.recipeList));
    }
}
RecipesPageComponent.ɵfac = function RecipesPageComponent_Factory(t) { return new (t || RecipesPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_apicall_service__WEBPACK_IMPORTED_MODULE_2__["ApicallService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_services_component__WEBPACK_IMPORTED_MODULE_3__["ServicesComponent"])); };
RecipesPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RecipesPageComponent, selectors: [["app-recipes-page"]], decls: 29, vars: 6, consts: [[1, "bg"], [1, "page-wrapper"], ["id", "heading", 1, "main-heading", "margin-top-100"], [1, "heading"], ["id", "searchQuery", 1, "padding-top-15"], [1, "text-15", "left"], [1, "row", "col-12"], ["placeholder", "Type in a query such as 'Pasta', 'Curry' or 'Soup' etc.. ", 1, "input", 3, "ngModel", "ngModelChange"], [1, "col-sm"], [1, "button1", 3, "click"], ["id", "dietOptions", 1, "padding-top-25"], [1, "center", "body"], [1, "grid-container"], ["class", "grid-item grid-item-1 btn-group btn-group-justified", 4, "ngFor", "ngForOf"], ["id", "recipesSection", 1, "padding-top-15"], ["class", "button1", 3, "click", 4, "ngIf"], [1, "grid-container-card"], ["class", "grid-item grid-item-1-card btn-group btn-group-justified", 4, "ngFor", "ngForOf"], [1, "clear", "margin-down-50"], [1, "grid-item", "grid-item-1", "btn-group", "btn-group-justified"], [1, "grid-item", "grid-item-1-card", "btn-group", "btn-group-justified"], [3, "imgSrc", "title", "isRecipe", "isDelete"]], template: function RecipesPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Looking for something specific? Search for ingredients below ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RecipesPageComponent_Template_input_ngModelChange_10_listener($event) { return ctx.query = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecipesPageComponent_Template_button_click_12_listener() { return ctx.getQueryRecipes(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "section", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Filter out recipes based on your diet restrictions if needed ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, RecipesPageComponent_div_18_Template, 3, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "section", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, RecipesPageComponent_button_24_Template, 2, 0, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, RecipesPageComponent_div_26_Template, 2, 4, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.cuisine, " Recipes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.query);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dietList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isTopRecipe);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.recipeList);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], _shared_recipe_card_recipe_card_component__WEBPACK_IMPORTED_MODULE_8__["RecipeCardComponent"]], styles: [".main-heading[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: bold;\n}\n\n.input[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n.padding-top-15[_ngcontent-%COMP%] {\n  padding-top: 15px;\n}\n\n.padding-top-25[_ngcontent-%COMP%] {\n  padding-top: 25px;\n}\n\n.center[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 15px;\n}\n\n.text-15[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n\n.margin-top-100[_ngcontent-%COMP%] {\n  margin-top: 100px;\n}\n\n.grid-container-card[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 130px);\n  grid-auto-rows: 80px;\n  row-gap: 300px;\n  column-gap: 200px;\n  justify-content: center;\n  align-content: stretch;\n}\n\n.grid-item-1-card[_ngcontent-%COMP%] {\n  font-size: small;\n  font-weight: bold;\n  text-align: center;\n}\n\n.bg[_ngcontent-%COMP%] {\n  background-image: url('home-page-bg.jpg') !important;\n  background-size: 100%;\n  background-position-y: bottom;\n}\n\n.margin-top-100[_ngcontent-%COMP%] {\n  margin-top: 85px;\n}\n\n.body[_ngcontent-%COMP%] {\n  font-family: Impact, fantasy;\n  text-align: center;\n  font-size: 22px;\n  letter-spacing: 0.2mm;\n  font-weight: 50;\n}\n\n.left[_ngcontent-%COMP%] {\n  text-align: left;\n  font-family: Impact, fantasy;\n  font-size: 22px;\n  letter-spacing: 0.2mm;\n  font-weight: lighter;\n}\n\n.heading[_ngcontent-%COMP%] {\n  font-family: Impact, fantasy;\n  text-align: center;\n  font-size: 45px;\n  letter-spacing: 0.3mm;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3JlY2lwZXMtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHVDQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLG9EQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtBQUNGOztBQUNBO0VBQ0UsZ0JBQUE7QUFFRjs7QUFDQTtFQUNFLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBRUY7O0FBQ0E7RUFDRSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7QUFFRjs7QUFDQTtFQUNFLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUFFRiIsImZpbGUiOiJyZWNpcGVzLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1oZWFkaW5nIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5pbnB1dCB7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLnBhZGRpbmctdG9wLTE1IHtcclxuICBwYWRkaW5nLXRvcDogMTVweDtcclxufVxyXG5cclxuLnBhZGRpbmctdG9wLTI1IHtcclxuICBwYWRkaW5nLXRvcDogMjVweDtcclxufVxyXG5cclxuLmNlbnRlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG5cclxuLnRleHQtMTUge1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG5cclxuLm1hcmdpbi10b3AtMTAwIHtcclxuICBtYXJnaW4tdG9wOiAxMDBweDtcclxufVxyXG5cclxuLmdyaWQtY29udGFpbmVyLWNhcmQge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMTMwcHgpO1xyXG4gIGdyaWQtYXV0by1yb3dzOiA4MHB4O1xyXG4gIHJvdy1nYXA6IDMwMHB4O1xyXG4gIGNvbHVtbi1nYXA6IDIwMHB4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IHN0cmV0Y2g7XHJcbn1cclxuXHJcbi5ncmlkLWl0ZW0tMS1jYXJkIHtcclxuICBmb250LXNpemU6IHNtYWxsO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmJnIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLy4uLy4uL2Fzc2V0cy9ob21lLXBhZ2UtYmcuanBnXCIpICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb24teTogYm90dG9tO1xyXG59XHJcbi5tYXJnaW4tdG9wLTEwMCB7XHJcbiAgbWFyZ2luLXRvcDogODVweDtcclxufVxyXG5cclxuLmJvZHkge1xyXG4gIGZvbnQtZmFtaWx5OiBJbXBhY3QsIGZhbnRhc3k7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4ybW07XHJcbiAgZm9udC13ZWlnaHQ6IDUwO1xyXG59XHJcblxyXG4ubGVmdCB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBmb250LWZhbWlseTogSW1wYWN0LCBmYW50YXN5O1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4ybW07XHJcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbn1cclxuXHJcbi5oZWFkaW5nIHtcclxuICBmb250LWZhbWlseTogSW1wYWN0LCBmYW50YXN5O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDQ1cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM21tO1xyXG59XHJcbiJdfQ== */", ".margin-top-50[_ngcontent-%COMP%] {\n  margin-top: 85px;\n}\n\n.sub-heading[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 14px;\n  color: whitesmoke;\n}\n\n.bg[_ngcontent-%COMP%] {\n  background-image: url('home-page-bg.jpg');\n  background-size: 100%;\n  background-position-y: bottom;\n}\n\n.padding-bottom-15[_ngcontent-%COMP%] {\n  padding-bottom: 15px;\n}\n\n.grid-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(5, 130px);\n  grid-auto-rows: 60px;\n  row-gap: 30px;\n  column-gap: 80px;\n  justify-content: center;\n  align-content: stretch;\n  box-sizing: border-box;\n  text-align: center;\n  float: none;\n  width: 100%;\n}\n\n.grid-item-1[_ngcontent-%COMP%] {\n  font-size: medium;\n  font-weight: bold;\n  text-align: center;\n}\n\n@media (max-width: 1000px) {\n  .grid-container[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 130px);\n    grid-auto-rows: 60px;\n  }\n}\n\n@media (max-width: 700px) {\n  .grid-container[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 130px);\n    grid-auto-rows: 60px;\n  }\n}\n\n@media (max-width: 300px) {\n  .grid-container[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(1, 130px);\n    grid-auto-rows: 60px;\n  }\n}\n\n.row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2hvbWUtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUNBO0VBQ0UseUNBQUE7RUFDQSxxQkFBQTtFQUVBLDZCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxvQkFBQTtBQUVGOztBQUFBO0VBQ0UsYUFBQTtFQUNBLHVDQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBR0Y7O0FBQUE7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFHRjs7QUFBQTtFQUNFO0lBQ0UsdUNBQUE7SUFDQSxvQkFBQTtFQUdGO0FBQ0Y7O0FBQUE7RUFDRTtJQUNFLHVDQUFBO0lBQ0Esb0JBQUE7RUFFRjtBQUNGOztBQUNBO0VBQ0U7SUFDRSx1Q0FBQTtJQUNBLG9CQUFBO0VBQ0Y7QUFDRjs7QUFpQkE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUFmRiIsImZpbGUiOiJob21lLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFyZ2luLXRvcC01MCB7XHJcbiAgbWFyZ2luLXRvcDogODVweDtcclxufVxyXG5cclxuLnN1Yi1oZWFkaW5nIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG59XHJcbi5iZyB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi8uLi8uLi9hc3NldHMvaG9tZS1wYWdlLWJnLmpwZ1wiKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XHJcblxyXG4gIGJhY2tncm91bmQtcG9zaXRpb24teTogYm90dG9tO1xyXG59XHJcbi5wYWRkaW5nLWJvdHRvbS0xNSB7XHJcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbn1cclxuLmdyaWQtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDEzMHB4KTtcclxuICBncmlkLWF1dG8tcm93czogNjBweDtcclxuICByb3ctZ2FwOiAzMHB4O1xyXG4gIGNvbHVtbi1nYXA6IDgwcHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogc3RyZXRjaDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmbG9hdDogbm9uZTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmdyaWQtaXRlbS0xIHtcclxuICBmb250LXNpemU6IG1lZGl1bTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcclxuICAuZ3JpZC1jb250YWluZXIge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMTMwcHgpO1xyXG4gICAgZ3JpZC1hdXRvLXJvd3M6IDYwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcclxuICAuZ3JpZC1jb250YWluZXIge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMTMwcHgpO1xyXG4gICAgZ3JpZC1hdXRvLXJvd3M6IDYwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMzAwcHgpIHtcclxuICAuZ3JpZC1jb250YWluZXIge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgMTMwcHgpO1xyXG4gICAgZ3JpZC1hdXRvLXJvd3M6IDYwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBidXR0b24ge1xyXG4vLyAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDE5OSwgMTkzKTtcclxuLy8gICBib3JkZXI6IHJnYmEoMTc1LCAxMDUsIDgxLCAwLjY4Myk7XHJcbi8vICAgY29sb3I6IHJnYigwLCAwLCAwKTtcclxuLy8gICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbi8vICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4vLyAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgIG1hcmdpbjogMnB4O1xyXG4vLyAgIGN1cnNvcjogcG9pbnRlcjtcclxuLy8gICBib3JkZXItcmFkaXVzOiAzMnB4O1xyXG4vLyB9XHJcbi8vIGJ1dHRvbjpob3ZlciB7XHJcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogIzlhZmZlMTtcclxuLy8gfVxyXG5cclxuLnJvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecipesPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-recipes-page',
                templateUrl: './recipes-page.component.html',
                styleUrls: [
                    './recipes-page.component.scss',
                    '../home-page/home-page.component.scss',
                ],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _services_apicall_service__WEBPACK_IMPORTED_MODULE_2__["ApicallService"] }, { type: _services_services_component__WEBPACK_IMPORTED_MODULE_3__["ServicesComponent"] }]; }, null); })();


/***/ }),

/***/ "64/j":
/*!***********************************************!*\
  !*** ./src/app/home-page/home-page.module.ts ***!
  \***********************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared-module */ "+fd8");
/* harmony import */ var _home_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home-page.component */ "F1my");
/* harmony import */ var _header_header_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../header/header.module */ "H6Li");
/* harmony import */ var _footer_footer_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../footer/footer.module */ "PpLr");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _recipes_page_recipes_page_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../recipes-page/recipes-page.module */ "7S+1");











class HomePageModule {
}
HomePageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomePageModule });
HomePageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomePageModule_Factory(t) { return new (t || HomePageModule)(); }, providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                {
                    path: 'app/home',
                    component: _home_page_component__WEBPACK_IMPORTED_MODULE_4__["HomePageComponent"],
                },
            ]),
            _header_header_module__WEBPACK_IMPORTED_MODULE_5__["HeaderModule"],
            _footer_footer_module__WEBPACK_IMPORTED_MODULE_6__["FooterModule"],
            _recipes_page_recipes_page_module__WEBPACK_IMPORTED_MODULE_8__["RecipesPageModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomePageModule, { declarations: [_home_page_component__WEBPACK_IMPORTED_MODULE_4__["HomePageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _header_header_module__WEBPACK_IMPORTED_MODULE_5__["HeaderModule"],
        _footer_footer_module__WEBPACK_IMPORTED_MODULE_6__["FooterModule"],
        _recipes_page_recipes_page_module__WEBPACK_IMPORTED_MODULE_8__["RecipesPageModule"]], exports: [_home_page_component__WEBPACK_IMPORTED_MODULE_4__["HomePageComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomePageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_home_page_component__WEBPACK_IMPORTED_MODULE_4__["HomePageComponent"]],
                providers: [],
                exports: [_home_page_component__WEBPACK_IMPORTED_MODULE_4__["HomePageComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                        {
                            path: 'app/home',
                            component: _home_page_component__WEBPACK_IMPORTED_MODULE_4__["HomePageComponent"],
                        },
                    ]),
                    _header_header_module__WEBPACK_IMPORTED_MODULE_5__["HeaderModule"],
                    _footer_footer_module__WEBPACK_IMPORTED_MODULE_6__["FooterModule"],
                    _recipes_page_recipes_page_module__WEBPACK_IMPORTED_MODULE_8__["RecipesPageModule"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "7S+1":
/*!*****************************************************!*\
  !*** ./src/app/recipes-page/recipes-page.module.ts ***!
  \*****************************************************/
/*! exports provided: RecipesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipesPageModule", function() { return RecipesPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared-module */ "+fd8");
/* harmony import */ var _header_header_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../header/header.module */ "H6Li");
/* harmony import */ var _footer_footer_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../footer/footer.module */ "PpLr");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _recipes_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./recipes-page.component */ "2tjI");










class RecipesPageModule {
}
RecipesPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RecipesPageModule });
RecipesPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RecipesPageModule_Factory(t) { return new (t || RecipesPageModule)(); }, providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                {
                    path: 'app/recipes/:id',
                    component: _recipes_page_component__WEBPACK_IMPORTED_MODULE_7__["RecipesPageComponent"],
                },
            ]),
            _header_header_module__WEBPACK_IMPORTED_MODULE_4__["HeaderModule"],
            _footer_footer_module__WEBPACK_IMPORTED_MODULE_5__["FooterModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RecipesPageModule, { declarations: [_recipes_page_component__WEBPACK_IMPORTED_MODULE_7__["RecipesPageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _header_header_module__WEBPACK_IMPORTED_MODULE_4__["HeaderModule"],
        _footer_footer_module__WEBPACK_IMPORTED_MODULE_5__["FooterModule"]], exports: [_recipes_page_component__WEBPACK_IMPORTED_MODULE_7__["RecipesPageComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecipesPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_recipes_page_component__WEBPACK_IMPORTED_MODULE_7__["RecipesPageComponent"]],
                providers: [],
                exports: [_recipes_page_component__WEBPACK_IMPORTED_MODULE_7__["RecipesPageComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                        {
                            path: 'app/recipes/:id',
                            component: _recipes_page_component__WEBPACK_IMPORTED_MODULE_7__["RecipesPageComponent"],
                        },
                    ]),
                    _header_header_module__WEBPACK_IMPORTED_MODULE_4__["HeaderModule"],
                    _footer_footer_module__WEBPACK_IMPORTED_MODULE_5__["FooterModule"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "Ahoc":
/*!***************************************************************************!*\
  !*** ./src/app/recipe-information-page/recipe-information-page.module.ts ***!
  \***************************************************************************/
/*! exports provided: RecipeInformationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeInformationPageModule", function() { return RecipeInformationPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared-module */ "+fd8");
/* harmony import */ var _header_header_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../header/header.module */ "H6Li");
/* harmony import */ var _footer_footer_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../footer/footer.module */ "PpLr");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _recipe_information_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./recipe-information-page.component */ "a1Tr");
/* harmony import */ var _recipes_page_recipes_page_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../recipes-page/recipes-page.module */ "7S+1");











class RecipeInformationPageModule {
}
RecipeInformationPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RecipeInformationPageModule });
RecipeInformationPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RecipeInformationPageModule_Factory(t) { return new (t || RecipeInformationPageModule)(); }, providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                {
                    path: 'app/recipes/id/:id',
                    component: _recipe_information_page_component__WEBPACK_IMPORTED_MODULE_7__["RecipeInformationPageComponent"],
                },
            ]),
            _header_header_module__WEBPACK_IMPORTED_MODULE_4__["HeaderModule"],
            _footer_footer_module__WEBPACK_IMPORTED_MODULE_5__["FooterModule"],
            _recipes_page_recipes_page_module__WEBPACK_IMPORTED_MODULE_8__["RecipesPageModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RecipeInformationPageModule, { declarations: [_recipe_information_page_component__WEBPACK_IMPORTED_MODULE_7__["RecipeInformationPageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _header_header_module__WEBPACK_IMPORTED_MODULE_4__["HeaderModule"],
        _footer_footer_module__WEBPACK_IMPORTED_MODULE_5__["FooterModule"],
        _recipes_page_recipes_page_module__WEBPACK_IMPORTED_MODULE_8__["RecipesPageModule"]], exports: [_recipe_information_page_component__WEBPACK_IMPORTED_MODULE_7__["RecipeInformationPageComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecipeInformationPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_recipe_information_page_component__WEBPACK_IMPORTED_MODULE_7__["RecipeInformationPageComponent"]],
                providers: [],
                exports: [_recipe_information_page_component__WEBPACK_IMPORTED_MODULE_7__["RecipeInformationPageComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                        {
                            path: 'app/recipes/id/:id',
                            component: _recipe_information_page_component__WEBPACK_IMPORTED_MODULE_7__["RecipeInformationPageComponent"],
                        },
                    ]),
                    _header_header_module__WEBPACK_IMPORTED_MODULE_4__["HeaderModule"],
                    _footer_footer_module__WEBPACK_IMPORTED_MODULE_5__["FooterModule"],
                    _recipes_page_recipes_page_module__WEBPACK_IMPORTED_MODULE_8__["RecipesPageModule"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "F1my":
/*!**************************************************!*\
  !*** ./src/app/home-page/home-page.component.ts ***!
  \**************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header/header.component */ "fECr");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../footer/footer.component */ "fp1T");






function HomePageComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomePageComponent_div_10_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const cuisine_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.onClickCuisine(cuisine_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cuisine_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", cuisine_r1, " ");
} }
class HomePageComponent {
    constructor(router) {
        this.router = router;
        this.username = '';
        this.cuisineList = [
            'African',
            'American',
            'British',
            'Cajun',
            'Caribbean',
            'Chinese',
            'Eastern European',
            'European',
            'French',
            'German',
            'Greek',
            'Indian',
            'Irish',
            'Italian',
            'Japanese',
            'Jewish',
            'Korean',
            'Latin American',
            'Mediterranean',
            'Mexican',
            'Middle Eastern',
            'Southern',
            'Spanish',
            'Thai',
            'Vietnamese',
        ];
    }
    ngOnInit() {
        console.log(sessionStorage);
        for (var i = 0; i < sessionStorage.length; i++) {
            if (sessionStorage.key(i) == 'user') {
                this.username =
                    'Welcome back ' + sessionStorage.getItem(sessionStorage.key(i));
            }
            else if (sessionStorage.key(i) == 'newUser') {
                this.username =
                    'Welcome to Heavenly Bite, ' +
                        sessionStorage.getItem(sessionStorage.key(i));
            }
        }
    }
    onClickCuisine(cusine) {
        this.router.navigate(['app/recipes/' + cusine]);
    }
}
HomePageComponent.ɵfac = function HomePageComponent_Factory(t) { return new (t || HomePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
HomePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomePageComponent, selectors: [["app-home-page"]], decls: 13, vars: 2, consts: [[1, "bg"], [1, "margin-top-50", "page-wrapper"], ["id", "heading"], [1, "heading"], [1, "body", "padding-bottom-15"], ["id", "body"], [1, "grid-container"], ["class", "grid-item grid-item-1 btn-group btn-group-justified", 4, "ngFor", "ngForOf"], [1, "margin-down-50"], [1, "grid-item", "grid-item-1", "btn-group", "btn-group-justified"], [1, "button1", 3, "click"]], template: function HomePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Select a cuisine to get started");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HomePageComponent_div_10_Template, 3, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.username, ". Thinking what to cook ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cuisineList);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]], styles: [".margin-top-50[_ngcontent-%COMP%] {\n  margin-top: 85px;\n}\n\n.sub-heading[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 14px;\n  color: whitesmoke;\n}\n\n.bg[_ngcontent-%COMP%] {\n  background-image: url('home-page-bg.jpg');\n  background-size: 100%;\n  background-position-y: bottom;\n}\n\n.padding-bottom-15[_ngcontent-%COMP%] {\n  padding-bottom: 15px;\n}\n\n.grid-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(5, 130px);\n  grid-auto-rows: 60px;\n  row-gap: 30px;\n  column-gap: 80px;\n  justify-content: center;\n  align-content: stretch;\n  box-sizing: border-box;\n  text-align: center;\n  float: none;\n  width: 100%;\n}\n\n.grid-item-1[_ngcontent-%COMP%] {\n  font-size: medium;\n  font-weight: bold;\n  text-align: center;\n}\n\n@media (max-width: 1000px) {\n  .grid-container[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 130px);\n    grid-auto-rows: 60px;\n  }\n}\n\n@media (max-width: 700px) {\n  .grid-container[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 130px);\n    grid-auto-rows: 60px;\n  }\n}\n\n@media (max-width: 300px) {\n  .grid-container[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(1, 130px);\n    grid-auto-rows: 60px;\n  }\n}\n\n.row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2hvbWUtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUNBO0VBQ0UseUNBQUE7RUFDQSxxQkFBQTtFQUVBLDZCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxvQkFBQTtBQUVGOztBQUFBO0VBQ0UsYUFBQTtFQUNBLHVDQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBR0Y7O0FBQUE7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFHRjs7QUFBQTtFQUNFO0lBQ0UsdUNBQUE7SUFDQSxvQkFBQTtFQUdGO0FBQ0Y7O0FBQUE7RUFDRTtJQUNFLHVDQUFBO0lBQ0Esb0JBQUE7RUFFRjtBQUNGOztBQUNBO0VBQ0U7SUFDRSx1Q0FBQTtJQUNBLG9CQUFBO0VBQ0Y7QUFDRjs7QUFpQkE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUFmRiIsImZpbGUiOiJob21lLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFyZ2luLXRvcC01MCB7XHJcbiAgbWFyZ2luLXRvcDogODVweDtcclxufVxyXG5cclxuLnN1Yi1oZWFkaW5nIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG59XHJcbi5iZyB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi8uLi8uLi9hc3NldHMvaG9tZS1wYWdlLWJnLmpwZ1wiKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XHJcblxyXG4gIGJhY2tncm91bmQtcG9zaXRpb24teTogYm90dG9tO1xyXG59XHJcbi5wYWRkaW5nLWJvdHRvbS0xNSB7XHJcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbn1cclxuLmdyaWQtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDEzMHB4KTtcclxuICBncmlkLWF1dG8tcm93czogNjBweDtcclxuICByb3ctZ2FwOiAzMHB4O1xyXG4gIGNvbHVtbi1nYXA6IDgwcHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogc3RyZXRjaDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmbG9hdDogbm9uZTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmdyaWQtaXRlbS0xIHtcclxuICBmb250LXNpemU6IG1lZGl1bTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcclxuICAuZ3JpZC1jb250YWluZXIge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMTMwcHgpO1xyXG4gICAgZ3JpZC1hdXRvLXJvd3M6IDYwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcclxuICAuZ3JpZC1jb250YWluZXIge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMTMwcHgpO1xyXG4gICAgZ3JpZC1hdXRvLXJvd3M6IDYwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMzAwcHgpIHtcclxuICAuZ3JpZC1jb250YWluZXIge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgMTMwcHgpO1xyXG4gICAgZ3JpZC1hdXRvLXJvd3M6IDYwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBidXR0b24ge1xyXG4vLyAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDE5OSwgMTkzKTtcclxuLy8gICBib3JkZXI6IHJnYmEoMTc1LCAxMDUsIDgxLCAwLjY4Myk7XHJcbi8vICAgY29sb3I6IHJnYigwLCAwLCAwKTtcclxuLy8gICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbi8vICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4vLyAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgIG1hcmdpbjogMnB4O1xyXG4vLyAgIGN1cnNvcjogcG9pbnRlcjtcclxuLy8gICBib3JkZXItcmFkaXVzOiAzMnB4O1xyXG4vLyB9XHJcbi8vIGJ1dHRvbjpob3ZlciB7XHJcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogIzlhZmZlMTtcclxuLy8gfVxyXG5cclxuLnJvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home-page',
                templateUrl: './home-page.component.html',
                styleUrls: ['./home-page.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "H6Li":
/*!*****************************************!*\
  !*** ./src/app/header/header.module.ts ***!
  \*****************************************/
/*! exports provided: HeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderModule", function() { return HeaderModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.component */ "fECr");




class HeaderModule {
}
HeaderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HeaderModule });
HeaderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HeaderModule_Factory(t) { return new (t || HeaderModule)(); }, providers: [], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HeaderModule, { declarations: [_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]],
                providers: [],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                exports: [_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "KfLr":
/*!************************************************!*\
  !*** ./src/app/services/services.component.ts ***!
  \************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ServicesComponent {
    constructor() {
        this.savedRecipes = new Map();
    }
    setValue(data) {
        this.savedRecipes = data;
    }
    setRecipeBtn(isRecipeBtn) {
        this.isRecipeBtn = isRecipeBtn;
    }
    setDeleteBtn(isDeleteBtn) {
        this.isDeleteBtn = isDeleteBtn;
    }
    getValue() {
        return this.savedRecipes;
    }
    getRecipeBtn() {
        return this.isRecipeBtn;
    }
    getDeleteBtn() {
        return this.isDeleteBtn;
    }
    ngOnInit() { }
}
ServicesComponent.ɵfac = function ServicesComponent_Factory(t) { return new (t || ServicesComponent)(); };
ServicesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ServicesComponent, selectors: [["app-services"]], decls: 2, vars: 0, template: function ServicesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "services works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXJ2aWNlcy5jb21wb25lbnQuc2NzcyJ9 */"] });
ServicesComponent.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ServicesComponent, factory: ServicesComponent.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServicesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-services',
                templateUrl: './services.component.html',
                styleUrls: ['./services.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "LGrl":
/*!********************************************************************!*\
  !*** ./src/app/shopping-list-page/shopping-list-page.component.ts ***!
  \********************************************************************/
/*! exports provided: ShoppingListPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingListPageComponent", function() { return ShoppingListPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header/header.component */ "fECr");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../footer/footer.component */ "fp1T");






function ShoppingListPageComponent_div_6_li_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ingredient_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate4"](" ", ingredient_r3.amount.us.value, " ", ingredient_r3.amount.us.unit, " of ", ingredient_r3.name, " : $", ingredient_r3.price, " ");
} }
function ShoppingListPageComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShoppingListPageComponent_div_6_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const item_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.deleteShopItem(item_r1.key); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "b", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Ingredients");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ShoppingListPageComponent_div_6_li_11_Template, 2, 4, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "b", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "b", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.value.t, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "" + item_r1.value.i + "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r1.value.ingredient);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total Cost : $", item_r1.value.tc, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total Cost per serving : $", item_r1.value.tcs, "");
} }
class ShoppingListPageComponent {
    constructor(router) {
        this.router = router;
        this.shoppingList = new Map();
        this.totalCost = 0;
        this.totalCostServing = 0;
        this.emptySpace = '   ';
    }
    ngOnInit() {
        for (var i = 0; i < sessionStorage.length; i++) {
            if (sessionStorage.key(i).substring(0, 3) == 'id:') {
                //console.log(sessionStorage.key(i));
                console.log(sessionStorage.getItem(sessionStorage.key(i)));
                this.shoppingList.set(sessionStorage.key(i).substring(3), JSON.parse(sessionStorage.getItem(sessionStorage.key(i))));
                let val = JSON.stringify(this.shoppingList.get(sessionStorage.key(i).substring(3)));
                this.totalCostServing += Number(val.substring(val.lastIndexOf(':') + 1, val.length - 1));
                console.log(val.substring(val.lastIndexOf(':') + 1, val.length - 1));
                this.totalCost += Number(this.getNum(val));
            }
        }
        this.router.routeReuseStrategy.shouldReuseRoute = () => {
            return false;
        };
    }
    getNum(str) {
        let str2 = '';
        let i = str.lastIndexOf(',') - 1;
        while (str.charAt(i) != ':') {
            str2 += str.charAt(i);
            i--;
        }
        console.log(str2.split('').reverse().join(''));
        return str2.split('').reverse().join('');
    }
    deleteShopItem(id) {
        sessionStorage.removeItem('id:' + id);
        this.shoppingList.delete(id);
        this.router.navigate(['app/shopping-list']);
    }
}
ShoppingListPageComponent.ɵfac = function ShoppingListPageComponent_Factory(t) { return new (t || ShoppingListPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
ShoppingListPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShoppingListPageComponent, selectors: [["app-shopping-list-page"]], decls: 16, vars: 5, consts: [[1, "bg"], [1, "page-wrapper", "margin-top-100"], ["id", "heading", 1, "center"], [1, "heading"], ["class", "padding", 4, "ngFor", "ngForOf"], [1, "center", "body"], [1, "clear"], [1, "padding"], [1, "sub-heading"], [1, "button1", 3, "click"], [1, "grid-container-4", "padding-top-20", "padding-down-20"], [1, "grid-item-1"], [1, "small-img", 3, "src"], [1, "grid-item-2"], [1, "body"], ["class", "font", 4, "ngFor", "ngForOf"], [1, "grid-item-3"], [1, "font"]], template: function ShoppingListPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Shopping List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ShoppingListPageComponent_div_6_Template, 19, 5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 3, ctx.shoppingList));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Overall cost: $ ", ctx.totalCost, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Overall cost per serving: $ ", ctx.totalCostServing, "");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["KeyValuePipe"]], styles: [".padding[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n\n.small-img[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n}\n\n.sub-heading[_ngcontent-%COMP%] {\n  font-size: 21px;\n  font-weight: 700;\n}\n\n.grid-container-4[_ngcontent-%COMP%] {\n  border-radius: black;\n  display: grid;\n  grid-template-columns: repeat(2, 300px);\n  row-gap: 30px;\n  column-gap: 40px;\n  justify-content: left;\n  width: -moz-fit-content;\n  width: fit-content;\n  grid-template-areas: \"image list\" \"cost list\";\n}\n\n.grid-item-1[_ngcontent-%COMP%] {\n  grid-area: image;\n}\n\n.grid-item-2[_ngcontent-%COMP%] {\n  grid-area: list;\n}\n\n.grid-item-3[_ngcontent-%COMP%] {\n  grid-area: cost;\n}\n\n.button2[_ngcontent-%COMP%] {\n  background-color: beige;\n  color: brown;\n  font-weight: 600;\n  display: inline-block;\n  width: 15%;\n  margin: 2px;\n  cursor: pointer;\n  border-radius: 16px;\n}\n\n.bg[_ngcontent-%COMP%] {\n  background-image: url('home-page-bg.jpg') !important;\n  background-size: 100%;\n  background-position-y: bottom;\n}\n\n.margin-top-100[_ngcontent-%COMP%] {\n  margin-top: 85px;\n}\n\n.font[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Nob3BwaW5nLWxpc3QtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLHVDQUFBO0VBRUEsYUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsNkNBQ0U7QUFESjs7QUFLQTtFQUNFLGdCQUFBO0FBRkY7O0FBSUE7RUFDRSxlQUFBO0FBREY7O0FBR0E7RUFDRSxlQUFBO0FBQUY7O0FBR0E7RUFDRSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFBRjs7QUFHQTtFQUNFLG9EQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtBQUFGOztBQUdBO0VBQ0UsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLGdCQUFBO0FBQUYiLCJmaWxlIjoic2hvcHBpbmctbGlzdC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZGRpbmcge1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uc21hbGwtaW1nIHtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgaGVpZ2h0OiAxNTBweDtcclxufVxyXG5cclxuLnN1Yi1oZWFkaW5nIHtcclxuICBmb250LXNpemU6IDIxcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLmdyaWQtY29udGFpbmVyLTQge1xyXG4gIGJvcmRlci1yYWRpdXM6IGJsYWNrO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMzAwcHgpO1xyXG4gIC8vIGdyaWQtYXV0by1yb3dzOiA2MHB4O1xyXG4gIHJvdy1nYXA6IDMwcHg7XHJcbiAgY29sdW1uLWdhcDogNDBweDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XHJcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XHJcbiAgICBcImltYWdlIGxpc3RcIlxyXG4gICAgXCJjb3N0IGxpc3RcIjtcclxufVxyXG5cclxuLmdyaWQtaXRlbS0xIHtcclxuICBncmlkLWFyZWE6IGltYWdlO1xyXG59XHJcbi5ncmlkLWl0ZW0tMiB7XHJcbiAgZ3JpZC1hcmVhOiBsaXN0O1xyXG59XHJcbi5ncmlkLWl0ZW0tMyB7XHJcbiAgZ3JpZC1hcmVhOiBjb3N0O1xyXG59XHJcblxyXG4uYnV0dG9uMiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmVpZ2U7XHJcbiAgY29sb3I6IGJyb3duO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAxNSU7XHJcbiAgbWFyZ2luOiAycHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbn1cclxuXHJcbi5iZyB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi8uLi8uLi9hc3NldHMvaG9tZS1wYWdlLWJnLmpwZ1wiKSAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IGJvdHRvbTtcclxufVxyXG5cclxuLm1hcmdpbi10b3AtMTAwIHtcclxuICBtYXJnaW4tdG9wOiA4NXB4O1xyXG59XHJcblxyXG4uZm9udCB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG4iXX0= */", ".padding-top-20[_ngcontent-%COMP%] {\n  padding-top: 20px;\n}\n\n.font-15[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n\n.padding-left-20[_ngcontent-%COMP%] {\n  padding-left: 20px;\n}\n\n.padding-down-20[_ngcontent-%COMP%] {\n  padding-bottom: 20px;\n}\n\n.grid-container[_ngcontent-%COMP%] {\n  border-radius: black;\n  display: grid;\n  grid-template-columns: repeat(2, 100px);\n  column-gap: 100px;\n  justify-content: left;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.grid-item[_ngcontent-%COMP%] {\n  color: whitesmoke;\n  text-align: left;\n}\n\n.grid-container-2[_ngcontent-%COMP%] {\n  border-radius: black;\n  display: grid;\n  grid-template-columns: repeat(2, 300px);\n  grid-template-rows: minmax(150px, auto);\n  row-gap: 30px;\n  column-gap: 300px;\n  justify-content: left;\n  width: -moz-fit-content;\n  width: fit-content;\n  float: none;\n}\n\n.grid-item-1[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.grid-item-2[_ngcontent-%COMP%] {\n  justify-content: center;\n  text-align: left;\n}\n\n.button[_ngcontent-%COMP%] {\n  background-color: beige;\n  color: brown;\n  font-weight: 600;\n  display: inline-block;\n  width: 50%;\n  margin: 2px;\n  cursor: pointer;\n  border-radius: 16px;\n}\n\n.bracket[_ngcontent-%COMP%]::before {\n  content: \"[\";\n}\n\n.bracket[_ngcontent-%COMP%]::after {\n  content: \"]\";\n}\n\n.grid-container-3[_ngcontent-%COMP%] {\n  border-radius: black;\n  display: grid;\n  grid-template-columns: repeat(4, 100px);\n  grid-auto-rows: 60px;\n  column-gap: 100px;\n  justify-content: left;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.font[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3JlY2lwZS1pbmZvcm1hdGlvbi1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxvQkFBQTtBQUVGOztBQUNBO0VBQ0Usb0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUNBQUE7RUFHQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFBQSxrQkFBQTtBQUFGOztBQUdBO0VBRUUsaUJBQUE7RUFDQSxnQkFBQTtBQURGOztBQUlBO0VBQ0Usb0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUNBQUE7RUFDQSx1Q0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLFdBQUE7QUFERjs7QUFLQTtFQUNFLGdCQUFBO0FBRkY7O0FBSUE7RUFDRSx1QkFBQTtFQUNBLGdCQUFBO0FBREY7O0FBSUE7RUFDRSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFERjs7QUFJQTtFQUNFLFlBQUE7QUFERjs7QUFJQTtFQUNFLFlBQUE7QUFERjs7QUFJQTtFQUNFLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLHVDQUFBO0VBQ0Esb0JBQUE7RUFFQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFBQSxrQkFBQTtBQUZGOztBQUtBO0VBQ0UsZ0JBQUE7QUFGRiIsImZpbGUiOiJyZWNpcGUtaW5mb3JtYXRpb24tcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWRkaW5nLXRvcC0yMCB7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5mb250LTE1IHtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuXHJcbi5wYWRkaW5nLWxlZnQtMjAge1xyXG4gIHBhZGRpbmctbGVmdDogMjBweDtcclxufVxyXG4ucGFkZGluZy1kb3duLTIwIHtcclxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmdyaWQtY29udGFpbmVyIHtcclxuICBib3JkZXItcmFkaXVzOiBibGFjaztcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDEwMHB4KTtcclxuICAvLyBncmlkLWF1dG8tcm93czogNjBweDtcclxuICAvLyByb3ctZ2FwOiAzMHB4O1xyXG4gIGNvbHVtbi1nYXA6IDEwMHB4O1xyXG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbn1cclxuXHJcbi5ncmlkLWl0ZW0ge1xyXG4gIC8vZm9udC1zaXplOiBtZWRpdW07XHJcbiAgY29sb3I6IHdoaXRlc21va2U7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLmdyaWQtY29udGFpbmVyLTIge1xyXG4gIGJvcmRlci1yYWRpdXM6IGJsYWNrO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMzAwcHgpO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogbWlubWF4KDE1MHB4LCBhdXRvKTtcclxuICByb3ctZ2FwOiAzMHB4O1xyXG4gIGNvbHVtbi1nYXA6IDMwMHB4O1xyXG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgZmxvYXQ6IG5vbmU7XHJcbiAgLy9tYXJnaW4tYm90dG9tOiAyNTBweDtcclxufVxyXG5cclxuLmdyaWQtaXRlbS0xIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi5ncmlkLWl0ZW0tMiB7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmVpZ2U7XHJcbiAgY29sb3I6IGJyb3duO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgbWFyZ2luOiAycHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbn1cclxuXHJcbi5icmFja2V0OjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiW1wiO1xyXG59XHJcblxyXG4uYnJhY2tldDo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXVwiO1xyXG59XHJcblxyXG4uZ3JpZC1jb250YWluZXItMyB7XHJcbiAgYm9yZGVyLXJhZGl1czogYmxhY2s7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxMDBweCk7XHJcbiAgZ3JpZC1hdXRvLXJvd3M6IDYwcHg7XHJcbiAgLy9yb3ctZ2FwOiAzMHB4O1xyXG4gIGNvbHVtbi1nYXA6IDEwMHB4O1xyXG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbn1cclxuXHJcbi5mb250IHtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShoppingListPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-shopping-list-page',
                templateUrl: './shopping-list-page.component.html',
                styleUrls: [
                    './shopping-list-page.component.scss',
                    '../recipe-information-page/recipe-information-page.component.scss',
                ],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "PpLr":
/*!*****************************************!*\
  !*** ./src/app/footer/footer.module.ts ***!
  \*****************************************/
/*! exports provided: FooterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterModule", function() { return FooterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer.component */ "fp1T");




class FooterModule {
}
FooterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FooterModule });
FooterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FooterModule_Factory(t) { return new (t || FooterModule)(); }, providers: [], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FooterModule, { declarations: [_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]],
                providers: [],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                exports: [_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'Recipe-search-and-management';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, consts: [[1, "component-wrapper-margin"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "WMYz":
/*!*******************************************************!*\
  !*** ./src/app/about-us-page/about-us-page.module.ts ***!
  \*******************************************************/
/*! exports provided: AboutUsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsPageModule", function() { return AboutUsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared-module */ "+fd8");
/* harmony import */ var _header_header_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../header/header.module */ "H6Li");
/* harmony import */ var _footer_footer_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../footer/footer.module */ "PpLr");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _about_us_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about-us-page.component */ "p38k");










class AboutUsPageModule {
}
AboutUsPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AboutUsPageModule });
AboutUsPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AboutUsPageModule_Factory(t) { return new (t || AboutUsPageModule)(); }, providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                {
                    path: 'app/about-us',
                    component: _about_us_page_component__WEBPACK_IMPORTED_MODULE_7__["AboutUsPageComponent"],
                },
            ]),
            _header_header_module__WEBPACK_IMPORTED_MODULE_4__["HeaderModule"],
            _footer_footer_module__WEBPACK_IMPORTED_MODULE_5__["FooterModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AboutUsPageModule, { declarations: [_about_us_page_component__WEBPACK_IMPORTED_MODULE_7__["AboutUsPageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _header_header_module__WEBPACK_IMPORTED_MODULE_4__["HeaderModule"],
        _footer_footer_module__WEBPACK_IMPORTED_MODULE_5__["FooterModule"]], exports: [_about_us_page_component__WEBPACK_IMPORTED_MODULE_7__["AboutUsPageComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutUsPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_about_us_page_component__WEBPACK_IMPORTED_MODULE_7__["AboutUsPageComponent"]],
                providers: [],
                exports: [_about_us_page_component__WEBPACK_IMPORTED_MODULE_7__["AboutUsPageComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                        {
                            path: 'app/about-us',
                            component: _about_us_page_component__WEBPACK_IMPORTED_MODULE_7__["AboutUsPageComponent"],
                        },
                    ]),
                    _header_header_module__WEBPACK_IMPORTED_MODULE_4__["HeaderModule"],
                    _footer_footer_module__WEBPACK_IMPORTED_MODULE_5__["FooterModule"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "XRVq":
/*!****************************************************************!*\
  !*** ./src/app/shopping-list-page/shopping-list-page.modue.ts ***!
  \****************************************************************/
/*! exports provided: ShoppingListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingListPageModule", function() { return ShoppingListPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared-module */ "+fd8");
/* harmony import */ var _header_header_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../header/header.module */ "H6Li");
/* harmony import */ var _footer_footer_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../footer/footer.module */ "PpLr");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _recipe_information_page_recipe_information_page_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../recipe-information-page/recipe-information-page.module */ "Ahoc");
/* harmony import */ var _shopping_list_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shopping-list-page.component */ "LGrl");











class ShoppingListPageModule {
}
ShoppingListPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ShoppingListPageModule });
ShoppingListPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ShoppingListPageModule_Factory(t) { return new (t || ShoppingListPageModule)(); }, providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                {
                    path: 'app/shopping-list',
                    component: _shopping_list_page_component__WEBPACK_IMPORTED_MODULE_8__["ShoppingListPageComponent"],
                },
            ]),
            _header_header_module__WEBPACK_IMPORTED_MODULE_4__["HeaderModule"],
            _footer_footer_module__WEBPACK_IMPORTED_MODULE_5__["FooterModule"],
            _recipe_information_page_recipe_information_page_module__WEBPACK_IMPORTED_MODULE_7__["RecipeInformationPageModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ShoppingListPageModule, { declarations: [_shopping_list_page_component__WEBPACK_IMPORTED_MODULE_8__["ShoppingListPageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _header_header_module__WEBPACK_IMPORTED_MODULE_4__["HeaderModule"],
        _footer_footer_module__WEBPACK_IMPORTED_MODULE_5__["FooterModule"],
        _recipe_information_page_recipe_information_page_module__WEBPACK_IMPORTED_MODULE_7__["RecipeInformationPageModule"]], exports: [_shopping_list_page_component__WEBPACK_IMPORTED_MODULE_8__["ShoppingListPageComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShoppingListPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_shopping_list_page_component__WEBPACK_IMPORTED_MODULE_8__["ShoppingListPageComponent"]],
                providers: [],
                exports: [_shopping_list_page_component__WEBPACK_IMPORTED_MODULE_8__["ShoppingListPageComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                        {
                            path: 'app/shopping-list',
                            component: _shopping_list_page_component__WEBPACK_IMPORTED_MODULE_8__["ShoppingListPageComponent"],
                        },
                    ]),
                    _header_header_module__WEBPACK_IMPORTED_MODULE_4__["HeaderModule"],
                    _footer_footer_module__WEBPACK_IMPORTED_MODULE_5__["FooterModule"],
                    _recipe_information_page_recipe_information_page_module__WEBPACK_IMPORTED_MODULE_7__["RecipeInformationPageModule"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _login_page_login_page_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login-page/login-page.module */ "x2uj");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/shared-module */ "+fd8");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");










class AppModule {
    constructor(router) {
        this.router = router;
        this.router = router;
    }
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"])); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _login_page_login_page_module__WEBPACK_IMPORTED_MODULE_4__["LoginPageModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _login_page_login_page_module__WEBPACK_IMPORTED_MODULE_4__["LoginPageModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _login_page_login_page_module__WEBPACK_IMPORTED_MODULE_4__["LoginPageModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }]; }, null); })();


/***/ }),

/***/ "a1Tr":
/*!******************************************************************************!*\
  !*** ./src/app/recipe-information-page/recipe-information-page.component.ts ***!
  \******************************************************************************/
/*! exports provided: RecipeInformationPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeInformationPageComponent", function() { return RecipeInformationPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_apicall_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/apicall.service */ "+Dr4");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../header/header.component */ "fECr");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../footer/footer.component */ "fp1T");
/* harmony import */ var _shared_recipe_card_recipe_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/recipe-card/recipe-card.component */ "qTX1");








function RecipeInformationPageComponent_li_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ingredient_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", ingredient_r5.amount.us.value, " ", ingredient_r5.amount.us.unit, " of ", ingredient_r5.name, " ");
} }
function RecipeInformationPageComponent_div_45_p_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const instruction_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", instruction_r6.length.number, " ", instruction_r6.length.unit, " ");
} }
function RecipeInformationPageComponent_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RecipeInformationPageComponent_div_45_p_5_Template, 2, 2, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const instruction_r6 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Step ", instruction_r6.number, " :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](instruction_r6.step);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.isMinutes(instruction_r6 == null ? null : instruction_r6.length));
} }
function RecipeInformationPageComponent_div_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const taste_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", taste_r9.key, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", taste_r9.value, "%");
} }
function RecipeInformationPageComponent_div_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const nutrition_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", nutrition_r10.value, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](nutrition_r10.key);
} }
function RecipeInformationPageComponent_div_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-recipe-card", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const recipe_r11 = ctx.$implicit;
    const i_r12 = ctx.index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imgSrc", ctx_r4.similarListImg[i_r12])("title", recipe_r11.title)("isRecipe", true)("isDelete", false);
} }
class RecipeInformationPageComponent {
    constructor(router, apiService) {
        this.router = router;
        this.apiService = apiService;
        this.id = '';
        this.cuisine = '';
        this.infoList = [];
        this.title = '';
        this.dishes = '';
        this.likes = '';
        this.imgSrc = '';
        this.time = '';
        this.servings = '';
        this.ingredientList = [];
        this.totalCost = '';
        this.totalCostPerServing = '';
        this.instructionList = [];
        this.tasteList = [];
        this.nutritionList = [];
        this.nutritionImgSrc = '';
        this.similarList = [];
        this.similarListImg = [];
        //
        this.shoppingList = [];
    }
    ngOnInit() {
        this.id = this.router.url.substring(this.router.url.lastIndexOf('/') + 1);
        this.cuisine = this.router.url.substring(13, this.router.url.lastIndexOf('/'));
        this.getRecipeInfo(this.id);
        this.getRecipeSummary(this.id);
        this.getIngridents(this.id);
        this.getInstructions(this.id);
        this.getTastes(this.id);
        this.getNutrition(this.id);
        this.getNutritionImg(this.id);
        this.getSimilarRecipes(this.id);
        this.router.routeReuseStrategy.shouldReuseRoute = () => {
            return false;
        };
    }
    getRecipeInfo(id) {
        this.apiService.getInfo(id).subscribe((list) => {
            this.imgSrc = list.image;
            this.title = list.title;
            this.infoList = list;
            this.dishes = list.dishTypes.toString().split(',').join(', ');
            this.likes = list.aggregateLikes;
            this.time = list.readyInMinutes;
            this.servings = list.servings;
        }, (err) => console.error(err)
        //() => console.log(this.infoList)
        );
    }
    getRecipeSummary(id) {
        this.apiService.getInfosummary(id).subscribe((list) => {
            this.summary = this.makeSummary(list.summary);
            //console.log(this.summary);
        }, (err) => console.error(err), () => console.log());
    }
    makeSummary(summary) {
        let div = '<div>' + summary + '</div>';
        return div;
    }
    getIngridents(id) {
        this.apiService.getIngridients(id).subscribe((list) => {
            this.ingredientList = list.ingredients;
            this.totalCost = list.totalCost;
            this.totalCostPerServing = list.totalCostPerServing;
        }, (err) => console.error(err), () => console.log(this.ingredientList));
    }
    getInstructions(id) {
        console.log(id);
        this.apiService.getInstructions(id).subscribe((list) => {
            console.log(list[0].steps);
            this.instructionList = list[0].steps;
        }, (err) => console.error(err), () => console.log(this.ingredientList));
    }
    isMinutes(value) {
        return value === undefined;
    }
    getTastes(id) {
        console.log(id);
        this.apiService.getTastes(id).subscribe((list) => {
            console.log(list);
            this.tasteList = list;
        }, (err) => console.error(err), () => console.log());
    }
    getNutrition(id) {
        console.log(id);
        this.apiService.getNutrition(id).subscribe((list) => {
            this.nutritionList = this.checkNutrition(list);
            console.log(this.nutritionList);
        }, (err) => console.error(err), () => console.log());
    }
    checkNutrition(list) {
        // console.log(list);
        let counter = 0;
        for (const [key] of Object.entries(list)) {
            //console.log(key.toString());
            counter++;
            if (counter > 4) {
                delete list[key];
            }
        }
        //console.log(list);
        return list;
    }
    getNutritionImg(id) {
        id = '22347';
        console.log(id);
        this.apiService.getNutritionImg(id).subscribe((list) => {
            console.log(list);
            this.nutritionImgSrc = this.makeImg(list);
        }, (err) => console.error(err), () => console.log());
    }
    makeImg(img) {
        let div = '<div>' + img + '</div>';
        return div;
    }
    getSimilarRecipes(id) {
        this.apiService.getSimilarRecipes(id).subscribe((list) => {
            console.log(list);
            this.similarList = list;
            this.getSimilarRecipesImg(list);
        }, (err) => console.error(err), () => console.log(this.similarList));
    }
    getSimilarRecipesImg(list) {
        let i;
        for (i = 0; i < list.length; i++) {
            this.apiService.getInfo(list[i].id).subscribe((list) => {
                this.similarListImg.push(list.image);
            }, (err) => console.error(err));
        }
        console.log(this.similarList);
    }
    addToShoppingList() {
        console.log(this.id);
        let obj = {
            t: this.title,
            i: this.imgSrc,
            ingredient: this.ingredientList,
            tc: this.totalCost,
            tcs: this.totalCostPerServing,
        };
        console.log(obj);
        sessionStorage.setItem('id:' + this.id, JSON.stringify(obj));
        this.shoppingList.push(this.id);
    }
}
RecipeInformationPageComponent.ɵfac = function RecipeInformationPageComponent_Factory(t) { return new (t || RecipeInformationPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_apicall_service__WEBPACK_IMPORTED_MODULE_2__["ApicallService"])); };
RecipeInformationPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RecipeInformationPageComponent, selectors: [["app-recipe-information-page"]], decls: 69, vars: 17, consts: [[1, "bg"], [1, "page-wrapper", "margin-top-100"], ["id", "heading", 1, "center"], [1, "heading"], [1, "font"], [1, "padding-left-20", "font-small", "font"], ["id", "image", 1, "center", "padding-top-20", "padding-down-20"], [3, "src"], [1, "padding-top-20", "padding-down-20"], [1, "left"], ["id", "Summary", 1, "font", 3, "innerHTML"], ["id", "prep-time", 1, "grid-container", "padding-top-20"], [1, "grid-item"], [1, "grid-item", "padding-down-20"], ["id", "ingredients", 1, "grid-container-2", "padding-top-20", "padding-down-20"], [1, "grid-item-1"], ["class", "font", 4, "ngFor", "ngForOf"], [1, "grid-item-2"], [1, "button1", 3, "click"], ["id", "instructions", 1, "padding-top-20", "padding-down-20"], ["id", "quick facts", 1, "padding-top-20", "padding-down-20"], [1, "grid-container-3", "padding-top-20"], ["class", "grid-item font", 4, "ngFor", "ngForOf"], ["id", "nutrition", 1, "padding-top-20", "padding-down-20"], ["id", "nutritionImg", 1, "font", 3, "innerHTML"], ["id", "similarRecipes", 1, "padding-top-20", "padding-down-20"], [1, "grid-container-card"], ["class", "grid-item grid-item-1-card btn-group btn-group-justified", 4, "ngFor", "ngForOf"], [1, "clear", "margin-down-50"], ["class", "bracket", 4, "ngIf"], [1, "bracket"], [1, "grid-item", "font"], [1, "grid-item", "grid-item-1-card", "btn-group", "btn-group-justified"], [3, "imgSrc", "title", "isRecipe", "isDelete"]], template: function RecipeInformationPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " users have liked this recipe! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h2", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Total Time:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Servings:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h2", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Ingredients");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, RecipeInformationPageComponent_li_34_Template, 2, 3, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "b", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Would you like to purchase these ingredients?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecipeInformationPageComponent_Template_button_click_39_listener() { return ctx.addToShoppingList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Click here to add to Shopping Cart ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h2", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Instructions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, RecipeInformationPageComponent_div_45_Template, 6, 3, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h2", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Some Quick facts about this recipe :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, RecipeInformationPageComponent_div_51_Template, 5, 2, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](52, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h2", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Nutrition");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, RecipeInformationPageComponent_div_58_Template, 5, 2, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](59, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h2", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "You may also like...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, RecipeInformationPageComponent_div_66_Template, 2, 4, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("You can have this dish as ", ctx.dishes, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.likes, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "" + ctx.imgSrc + "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.summary, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.time, " mins");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.servings);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ingredientList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.instructionList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](52, 13, ctx.tasteList));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](59, 15, ctx.nutritionList));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.nutritionImgSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.similarList);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _shared_recipe_card_recipe_card_component__WEBPACK_IMPORTED_MODULE_6__["RecipeCardComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["KeyValuePipe"]], styles: [".padding-top-20[_ngcontent-%COMP%] {\n  padding-top: 20px;\n}\n\n.font-15[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n\n.padding-left-20[_ngcontent-%COMP%] {\n  padding-left: 20px;\n}\n\n.padding-down-20[_ngcontent-%COMP%] {\n  padding-bottom: 20px;\n}\n\n.grid-container[_ngcontent-%COMP%] {\n  border-radius: black;\n  display: grid;\n  grid-template-columns: repeat(2, 100px);\n  column-gap: 100px;\n  justify-content: left;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.grid-item[_ngcontent-%COMP%] {\n  color: whitesmoke;\n  text-align: left;\n}\n\n.grid-container-2[_ngcontent-%COMP%] {\n  border-radius: black;\n  display: grid;\n  grid-template-columns: repeat(2, 300px);\n  grid-template-rows: minmax(150px, auto);\n  row-gap: 30px;\n  column-gap: 300px;\n  justify-content: left;\n  width: -moz-fit-content;\n  width: fit-content;\n  float: none;\n}\n\n.grid-item-1[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.grid-item-2[_ngcontent-%COMP%] {\n  justify-content: center;\n  text-align: left;\n}\n\n.button[_ngcontent-%COMP%] {\n  background-color: beige;\n  color: brown;\n  font-weight: 600;\n  display: inline-block;\n  width: 50%;\n  margin: 2px;\n  cursor: pointer;\n  border-radius: 16px;\n}\n\n.bracket[_ngcontent-%COMP%]::before {\n  content: \"[\";\n}\n\n.bracket[_ngcontent-%COMP%]::after {\n  content: \"]\";\n}\n\n.grid-container-3[_ngcontent-%COMP%] {\n  border-radius: black;\n  display: grid;\n  grid-template-columns: repeat(4, 100px);\n  grid-auto-rows: 60px;\n  column-gap: 100px;\n  justify-content: left;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.font[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3JlY2lwZS1pbmZvcm1hdGlvbi1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxvQkFBQTtBQUVGOztBQUNBO0VBQ0Usb0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUNBQUE7RUFHQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFBQSxrQkFBQTtBQUFGOztBQUdBO0VBRUUsaUJBQUE7RUFDQSxnQkFBQTtBQURGOztBQUlBO0VBQ0Usb0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUNBQUE7RUFDQSx1Q0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLFdBQUE7QUFERjs7QUFLQTtFQUNFLGdCQUFBO0FBRkY7O0FBSUE7RUFDRSx1QkFBQTtFQUNBLGdCQUFBO0FBREY7O0FBSUE7RUFDRSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFERjs7QUFJQTtFQUNFLFlBQUE7QUFERjs7QUFJQTtFQUNFLFlBQUE7QUFERjs7QUFJQTtFQUNFLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLHVDQUFBO0VBQ0Esb0JBQUE7RUFFQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFBQSxrQkFBQTtBQUZGOztBQUtBO0VBQ0UsZ0JBQUE7QUFGRiIsImZpbGUiOiJyZWNpcGUtaW5mb3JtYXRpb24tcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWRkaW5nLXRvcC0yMCB7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5mb250LTE1IHtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuXHJcbi5wYWRkaW5nLWxlZnQtMjAge1xyXG4gIHBhZGRpbmctbGVmdDogMjBweDtcclxufVxyXG4ucGFkZGluZy1kb3duLTIwIHtcclxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmdyaWQtY29udGFpbmVyIHtcclxuICBib3JkZXItcmFkaXVzOiBibGFjaztcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDEwMHB4KTtcclxuICAvLyBncmlkLWF1dG8tcm93czogNjBweDtcclxuICAvLyByb3ctZ2FwOiAzMHB4O1xyXG4gIGNvbHVtbi1nYXA6IDEwMHB4O1xyXG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbn1cclxuXHJcbi5ncmlkLWl0ZW0ge1xyXG4gIC8vZm9udC1zaXplOiBtZWRpdW07XHJcbiAgY29sb3I6IHdoaXRlc21va2U7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLmdyaWQtY29udGFpbmVyLTIge1xyXG4gIGJvcmRlci1yYWRpdXM6IGJsYWNrO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMzAwcHgpO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogbWlubWF4KDE1MHB4LCBhdXRvKTtcclxuICByb3ctZ2FwOiAzMHB4O1xyXG4gIGNvbHVtbi1nYXA6IDMwMHB4O1xyXG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgZmxvYXQ6IG5vbmU7XHJcbiAgLy9tYXJnaW4tYm90dG9tOiAyNTBweDtcclxufVxyXG5cclxuLmdyaWQtaXRlbS0xIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi5ncmlkLWl0ZW0tMiB7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmVpZ2U7XHJcbiAgY29sb3I6IGJyb3duO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgbWFyZ2luOiAycHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbn1cclxuXHJcbi5icmFja2V0OjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiW1wiO1xyXG59XHJcblxyXG4uYnJhY2tldDo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXVwiO1xyXG59XHJcblxyXG4uZ3JpZC1jb250YWluZXItMyB7XHJcbiAgYm9yZGVyLXJhZGl1czogYmxhY2s7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxMDBweCk7XHJcbiAgZ3JpZC1hdXRvLXJvd3M6IDYwcHg7XHJcbiAgLy9yb3ctZ2FwOiAzMHB4O1xyXG4gIGNvbHVtbi1nYXA6IDEwMHB4O1xyXG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbn1cclxuXHJcbi5mb250IHtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbiJdfQ== */", ".main-heading[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: bold;\n}\n\n.input[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n.padding-top-15[_ngcontent-%COMP%] {\n  padding-top: 15px;\n}\n\n.padding-top-25[_ngcontent-%COMP%] {\n  padding-top: 25px;\n}\n\n.center[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 15px;\n}\n\n.text-15[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n\n.margin-top-100[_ngcontent-%COMP%] {\n  margin-top: 100px;\n}\n\n.grid-container-card[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 130px);\n  grid-auto-rows: 80px;\n  row-gap: 300px;\n  column-gap: 200px;\n  justify-content: center;\n  align-content: stretch;\n}\n\n.grid-item-1-card[_ngcontent-%COMP%] {\n  font-size: small;\n  font-weight: bold;\n  text-align: center;\n}\n\n.bg[_ngcontent-%COMP%] {\n  background-image: url('home-page-bg.jpg') !important;\n  background-size: 100%;\n  background-position-y: bottom;\n}\n\n.margin-top-100[_ngcontent-%COMP%] {\n  margin-top: 85px;\n}\n\n.body[_ngcontent-%COMP%] {\n  font-family: Impact, fantasy;\n  text-align: center;\n  font-size: 22px;\n  letter-spacing: 0.2mm;\n  font-weight: 50;\n}\n\n.left[_ngcontent-%COMP%] {\n  text-align: left;\n  font-family: Impact, fantasy;\n  font-size: 22px;\n  letter-spacing: 0.2mm;\n  font-weight: lighter;\n}\n\n.heading[_ngcontent-%COMP%] {\n  font-family: Impact, fantasy;\n  text-align: center;\n  font-size: 45px;\n  letter-spacing: 0.3mm;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3JlY2lwZXMtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHVDQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLG9EQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtBQUNGOztBQUNBO0VBQ0UsZ0JBQUE7QUFFRjs7QUFDQTtFQUNFLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBRUY7O0FBQ0E7RUFDRSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7QUFFRjs7QUFDQTtFQUNFLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUFFRiIsImZpbGUiOiJyZWNpcGVzLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1oZWFkaW5nIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5pbnB1dCB7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLnBhZGRpbmctdG9wLTE1IHtcclxuICBwYWRkaW5nLXRvcDogMTVweDtcclxufVxyXG5cclxuLnBhZGRpbmctdG9wLTI1IHtcclxuICBwYWRkaW5nLXRvcDogMjVweDtcclxufVxyXG5cclxuLmNlbnRlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG5cclxuLnRleHQtMTUge1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG5cclxuLm1hcmdpbi10b3AtMTAwIHtcclxuICBtYXJnaW4tdG9wOiAxMDBweDtcclxufVxyXG5cclxuLmdyaWQtY29udGFpbmVyLWNhcmQge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMTMwcHgpO1xyXG4gIGdyaWQtYXV0by1yb3dzOiA4MHB4O1xyXG4gIHJvdy1nYXA6IDMwMHB4O1xyXG4gIGNvbHVtbi1nYXA6IDIwMHB4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IHN0cmV0Y2g7XHJcbn1cclxuXHJcbi5ncmlkLWl0ZW0tMS1jYXJkIHtcclxuICBmb250LXNpemU6IHNtYWxsO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmJnIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLy4uLy4uL2Fzc2V0cy9ob21lLXBhZ2UtYmcuanBnXCIpICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb24teTogYm90dG9tO1xyXG59XHJcbi5tYXJnaW4tdG9wLTEwMCB7XHJcbiAgbWFyZ2luLXRvcDogODVweDtcclxufVxyXG5cclxuLmJvZHkge1xyXG4gIGZvbnQtZmFtaWx5OiBJbXBhY3QsIGZhbnRhc3k7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4ybW07XHJcbiAgZm9udC13ZWlnaHQ6IDUwO1xyXG59XHJcblxyXG4ubGVmdCB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBmb250LWZhbWlseTogSW1wYWN0LCBmYW50YXN5O1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4ybW07XHJcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbn1cclxuXHJcbi5oZWFkaW5nIHtcclxuICBmb250LWZhbWlseTogSW1wYWN0LCBmYW50YXN5O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDQ1cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM21tO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecipeInformationPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-recipe-information-page',
                templateUrl: './recipe-information-page.component.html',
                styleUrls: [
                    './recipe-information-page.component.scss',
                    '../recipes-page/recipes-page.component.scss',
                ],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_apicall_service__WEBPACK_IMPORTED_MODULE_2__["ApicallService"] }]; }, null); })();


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class HeaderComponent {
    constructor(router) {
        this.router = router;
        this.isShow = false;
    }
    ngOnInit() { }
    routeToSR() {
        this.router.navigate(['app/saved']);
    }
    routeToSL() {
        this.router.navigate(['app/shopping-list']);
    }
    routeToLogin() {
        this.router.navigate(['app/login']);
    }
    routeToHome() {
        this.router.navigate(['app/home']);
    }
    routeToAU() {
        this.router.navigate(['app/about-us']);
    }
    showIcon() {
        this.isShow != this.isShow;
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 22, vars: 0, consts: [["role", "banner bg"], [1, "navbar", "navbar-expand-md", "navbar-dark", "bg-dark"], [1, "container"], ["type", "button", 1, "navbar-brand", "g2", 3, "click"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarsExample05", "aria-controls", "navbarsExample05", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarsExample05", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-auto", "pl-lg-5", "pl-0"], [1, "g1"], ["type", "button", 1, "nav-link", 3, "click"], [1, "navbar-nav", "ml-auto"], [1, "nav-item", "cta-btn", "g1"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_3_listener() { return ctx.routeToHome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Heavenly Bite");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_10_listener() { return ctx.routeToSR(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Saved Recipes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_13_listener() { return ctx.routeToSL(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Shopping List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_16_listener() { return ctx.routeToAU(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_20_listener() { return ctx.routeToLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Log Out");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".font[_ngcontent-%COMP%] {\n  font-family: \"Quicksand\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  font-size: 17px;\n  background-color: #fff;\n  height: 200vh;\n  position: relative;\n}\n\nheader[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 5;\n  padding: 0px 0;\n  padding: 0px 0;\n}\n\nheader[_ngcontent-%COMP%], nav[_ngcontent-%COMP%] {\n  display: block;\n}\n\n@media (max-width: 768px) {\n  header[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%] {\n    padding-top: 0;\n    padding-bottom: 0;\n    background: none !important;\n    position: relative;\n  }\n}\n\nheader[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%] {\n  background-image: url('home-page-bg.jpg') !important;\n  background-size: 100%;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n\n.bg[_ngcontent-%COMP%] {\n  background-image: url('home-page-bg.jpg') !important;\n  background-size: 100%;\n  background-position-y: bottom;\n}\n\n.padding-right-20[_ngcontent-%COMP%] {\n  padding-right: 90px;\n}\n\n@media (min-width: 768px) {\n  .navbar-expand-md[_ngcontent-%COMP%] {\n    flex-flow: row nowrap;\n    justify-content: flex-start;\n  }\n}\n\n.navbar[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.5rem 1rem;\n}\n\n@media (min-width: 768px) {\n  .navbar-expand-md[_ngcontent-%COMP%]    > .container[_ngcontent-%COMP%], .navbar-expand-md[_ngcontent-%COMP%]    > .container-fluid[_ngcontent-%COMP%] {\n    flex-wrap: nowrap;\n  }\n}\n\n@media (min-width: 768px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 720px;\n  }\n}\n\n@media (min-width: 576px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 540px;\n  }\n}\n\n.container[_ngcontent-%COMP%] {\n  display: grid !important;\n  grid-template-columns: repeat(10, 30px) !important;\n  grid-auto-rows: 75px;\n  row-gap: 30px;\n  column-gap: 70px;\n  justify-content: right;\n  align-content: right;\n  text-align: left;\n  float: left;\n  width: 100%;\n  grid-template-areas: \"icon icon icon icon icon icon item item item item\";\n}\n\n.g1[_ngcontent-%COMP%] {\n  grid-area: item;\n  font-size: 17px;\n  text-align: center;\n  white-space: nowrap;\n}\n\n.g2[_ngcontent-%COMP%] {\n  grid-area: icon;\n  font-size: 17px;\n  padding-right: 600px;\n  text-align: left;\n  white-space: pre-wrap;\n}\n\n@media (max-width: 1365px) {\n  .container[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(8, 30px) !important;\n    grid-template-areas: \"icon icon icon icon icon item item item item item\";\n    max-width: 50%;\n    position: relative;\n  }\n}\n\n@media (max-width: 1170px) {\n  .container[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(8, 30px) !important;\n    grid-template-areas: \"icon icon icon item item item item item\";\n  }\n}\n\n@media (max-width: 980px) {\n  .container[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(7, 30px) !important;\n    grid-template-areas: \"icon item item item item item item\";\n  }\n}\n\n@media (max-width: 892px) {\n  .container[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(6, 30px) !important;\n    grid-template-areas: \"icon item item item item \";\n  }\n}\n\n@media (max-width: 892px) {\n  .container[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(5, 30px) !important;\n    grid-template-areas: \"icon\";\n  }\n}\n\n.navbar-dark[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\nheader[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  letter-spacing: 0.2em;\n  font-weight: 800;\n  font-size: 2rem;\n}\n\n.navbar-brand[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding-top: 0.3125rem;\n  padding-bottom: 0.3125rem;\n  margin-right: 1rem;\n  font-size: 17px !important;\n  line-height: inherit;\n  white-space: pre-wrap;\n}\n\na[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:hover {\n  text-decoration: none !important;\n}\n\na[_ngcontent-%COMP%] {\n  transition: 0.3s all ease;\n}\n\na[_ngcontent-%COMP%] {\n  color: #007bff;\n  text-decoration: none;\n  background-color: transparent;\n}\n\n.navbar-dark[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%] {\n  border-color: transparent;\n}\n\n@media (min-width: 773px) {\n  .navbar-expand-md[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\nbutton[_ngcontent-%COMP%]:not(:disabled), [type=button][_ngcontent-%COMP%]:not(:disabled), [type=reset][_ngcontent-%COMP%]:not(:disabled), [type=submit][_ngcontent-%COMP%]:not(:disabled) {\n  cursor: pointer;\n}\n\n.navbar-toggler[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.75rem;\n  font-size: 1.25rem;\n  line-height: 1;\n  background-color: transparent;\n  border: 1px solid transparent;\n  border-radius: 0.25rem;\n}\n\nbutton[_ngcontent-%COMP%], [type=button][_ngcontent-%COMP%], [type=reset][_ngcontent-%COMP%], [type=submit][_ngcontent-%COMP%] {\n  -webkit-appearance: button;\n}\n\nbutton[_ngcontent-%COMP%] {\n  text-transform: none;\n  overflow: visible;\n  margin: 0;\n  font-family: inherit;\n}\n\n.navbar-dark[_ngcontent-%COMP%]   .navbar-toggler-icon[_ngcontent-%COMP%] {\n  background-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3e%3cpath stroke='rgba(255, 255, 255, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\");\n}\n\n.navbar-toggler-icon[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  display: inline-block;\n  width: 1.5em;\n  height: 1.5em;\n  vertical-align: middle;\n  content: \"\";\n  background: no-repeat center center;\n  background-size: 100% 100%;\n}\n\n@media (min-width: 768px) {\n  .navbar-expand-md[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%] {\n    display: flex !important;\n    flex-basis: auto;\n  }\n}\n\n.collapse[_ngcontent-%COMP%]:not(.show) {\n  display: none;\n}\n\n.navbar-collapse[_ngcontent-%COMP%] {\n  flex-basis: 100%;\n  flex-grow: 1;\n  align-items: center;\n}\n\n@media (min-width: 768px) {\n  .navbar-expand-md[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%] {\n    flex-direction: row;\n  }\n}\n\n.pl-0[_ngcontent-%COMP%], .px-0[_ngcontent-%COMP%] {\n  padding-left: 0 !important;\n}\n\n.navbar-nav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n}\n\nol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], dl[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\n\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\n  box-sizing: border-box;\n}\n\nheader[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n  color: #fff !important;\n}\n\n@media (max-width: 768px) {\n  .navbar-expand-md[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n  }\n}\n\n@media (max-width: 1199.98px) {\n  header[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n    padding: 0.5rem 0rem;\n  }\n}\n\nheader[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  padding-left: 30px;\n  padding-right: 70px;\n  outline: none !important;\n  font-size: 1rem;\n  color: rgba(255, 255, 255, 0.8) !important;\n}\n\n.navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  padding-right: 0;\n  padding-left: 0;\n}\n\n.nav-link[_ngcontent-%COMP%] {\n  display: block;\n  padding: 0.5rem 1rem;\n}\n\n.ml-auto[_ngcontent-%COMP%], .mx-auto[_ngcontent-%COMP%] {\n  margin-left: auto !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtNQUFBO0VBR0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBREY7O0FBSUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQURGOztBQUlBOztFQUVFLGNBQUE7QUFERjs7QUFJQTtFQUNFO0lBQ0UsY0FBQTtJQUNBLGlCQUFBO0lBQ0EsMkJBQUE7SUFDQSxrQkFBQTtFQURGO0FBQ0Y7O0FBSUE7RUFDRSxvREFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQUZGOztBQUtBO0VBQ0Usb0RBQUE7RUFDQSxxQkFBQTtFQUVBLDZCQUFBO0FBSEY7O0FBTUE7RUFDRSxtQkFBQTtBQUhGOztBQU1BO0VBQ0U7SUFJRSxxQkFBQTtJQUdBLDJCQUFBO0VBSEY7QUFDRjs7QUFNQTtFQUNFLGtCQUFBO0VBR0EsYUFBQTtFQUtBLG1CQUFBO0VBR0EsOEJBQUE7RUFDQSxvQkFBQTtBQU5GOztBQVNBO0VBQ0U7O0lBR0UsaUJBQUE7RUFORjtBQUNGOztBQXdCQTtFQUNFO0lBQ0UsZ0JBQUE7RUF0QkY7QUFDRjs7QUF5QkE7RUFDRTtJQUNFLGdCQUFBO0VBdkJGO0FBQ0Y7O0FBMEJBO0VBQ0Usd0JBQUE7RUFDQSxrREFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUdBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSx3RUFBQTtBQTFCRjs7QUE2QkE7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUExQkY7O0FBNkJBO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUExQkY7O0FBNkJBO0VBQ0U7SUFDRSxpREFBQTtJQUNBLHdFQUFBO0lBQ0EsY0FBQTtJQUNBLGtCQUFBO0VBMUJGO0FBQ0Y7O0FBNkJBO0VBQ0U7SUFDRSxpREFBQTtJQUNBLDhEQUFBO0VBM0JGO0FBQ0Y7O0FBOEJBO0VBQ0U7SUFDRSxpREFBQTtJQUNBLHlEQUFBO0VBNUJGO0FBQ0Y7O0FBK0JBO0VBQ0U7SUFDRSxpREFBQTtJQUNBLGdEQUFBO0VBN0JGO0FBQ0Y7O0FBZ0NBO0VBQ0U7SUFDRSxpREFBQTtJQUNBLDJCQUFBO0VBOUJGO0FBQ0Y7O0FBa0NBO0VBQ0UsV0FBQTtBQWhDRjs7QUFrQ0E7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBL0JGOztBQWlDQTtFQUNFLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0FBOUJGOztBQWdDQTs7RUFFRSxnQ0FBQTtBQTdCRjs7QUErQkE7RUFHRSx5QkFBQTtBQTVCRjs7QUE4QkE7RUFDRSxjQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtBQTNCRjs7QUE4QkE7RUFDRSx5QkFBQTtBQTNCRjs7QUE2QkE7RUFDRTtJQUNFLGFBQUE7RUExQkY7QUFDRjs7QUE2QkE7Ozs7RUFJRSxlQUFBO0FBM0JGOztBQTZCQTtFQUNFLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLHNCQUFBO0FBMUJGOztBQTRCQTs7OztFQUlFLDBCQUFBO0FBekJGOztBQTRCQTtFQUNFLG9CQUFBO0VBRUEsaUJBQUE7RUFDQSxTQUFBO0VBQ0Esb0JBQUE7QUExQkY7O0FBNkJBO0VBQ0UsOFBBQUE7QUExQkY7O0FBNEJBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLG1DQUFBO0VBQ0EsMEJBQUE7QUF6QkY7O0FBNEJBO0VBQ0U7SUFHRSx3QkFBQTtJQUVBLGdCQUFBO0VBekJGO0FBQ0Y7O0FBMkJBO0VBQ0UsYUFBQTtBQXpCRjs7QUEyQkE7RUFFRSxnQkFBQTtFQUdBLFlBQUE7RUFHQSxtQkFBQTtBQXhCRjs7QUEyQkE7RUFDRTtJQUlFLG1CQUFBO0VBeEJGO0FBQ0Y7O0FBOEJBOztFQUVFLDBCQUFBO0FBNUJGOztBQThCQTtFQUdFLGFBQUE7RUFJQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBM0JGOztBQTZCQTs7O0VBR0UsYUFBQTtFQUNBLG1CQUFBO0FBMUJGOztBQTZCQTs7O0VBR0Usc0JBQUE7QUExQkY7O0FBNkJBO0VBQ0Usc0JBQUE7QUExQkY7O0FBNkJBO0VBQ0U7SUFDRSxxQkFBQTtJQUNBLG9CQUFBO0VBMUJGO0FBQ0Y7O0FBNkJBO0VBQ0U7SUFDRSxvQkFBQTtFQTNCRjtBQUNGOztBQThCQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7RUFDQSwwQ0FBQTtBQTVCRjs7QUE4QkE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUEzQkY7O0FBNkJBO0VBQ0UsY0FBQTtFQUNBLG9CQUFBO0FBMUJGOztBQTZCQTs7RUFFRSw0QkFBQTtBQTFCRiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9udCB7XHJcbiAgZm9udC1mYW1pbHk6IFwiUXVpY2tzYW5kXCIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLFxyXG4gICAgUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBcIk5vdG8gU2Fuc1wiLCBzYW5zLXNlcmlmLFxyXG4gICAgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCIsIFwiTm90byBDb2xvciBFbW9qaVwiO1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGhlaWdodDogMjAwdmg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG5oZWFkZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICB6LWluZGV4OiA1O1xyXG4gIHBhZGRpbmc6IDBweCAwO1xyXG4gIHBhZGRpbmc6IDBweCAwO1xyXG59XHJcblxyXG5oZWFkZXIsXHJcbm5hdiB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIGhlYWRlciAubmF2YmFyIHtcclxuICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG59XHJcblxyXG5oZWFkZXIgLm5hdmJhciB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi8uLi8uLi9hc3NldHMvaG9tZS1wYWdlLWJnLmpwZ1wiKSAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcclxuICBwYWRkaW5nLXRvcDogMC41cmVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XHJcbn1cclxuXHJcbi5iZyB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi8uLi8uLi9hc3NldHMvaG9tZS1wYWdlLWJnLmpwZ1wiKSAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcclxuXHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiBib3R0b207XHJcbn1cclxuXHJcbi5wYWRkaW5nLXJpZ2h0LTIwIHtcclxuICBwYWRkaW5nLXJpZ2h0OiA5MHB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAubmF2YmFyLWV4cGFuZC1tZCB7XHJcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IGhvcml6b250YWw7XHJcbiAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcclxuICAgIC1tcy1mbGV4LWZsb3c6IHJvdyBub3dyYXA7XHJcbiAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XHJcbiAgICAtd2Via2l0LWJveC1wYWNrOiBzdGFydDtcclxuICAgIC1tcy1mbGV4LXBhY2s6IHN0YXJ0O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIH1cclxufVxyXG5cclxuLm5hdmJhciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLy8gLW1zLWZsZXgtd3JhcDogd3JhcDtcclxuICAvLyBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcclxuICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgLm5hdmJhci1leHBhbmQtbWQgPiAuY29udGFpbmVyLFxyXG4gIC5uYXZiYXItZXhwYW5kLW1kID4gLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgICAtbXMtZmxleC13cmFwOiBub3dyYXA7XHJcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICB9XHJcbn1cclxuXHJcbi8vIC5uYXZiYXIgPiAuY29udGFpbmVyLFxyXG4vLyAubmF2YmFyID4gLmNvbnRhaW5lci1mbHVpZCB7XHJcbi8vICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbi8vICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbi8vICAgZGlzcGxheTogZmxleDtcclxuLy8gICAtbXMtZmxleC13cmFwOiB3cmFwO1xyXG4vLyAgIGZsZXgtd3JhcDogd3JhcDtcclxuLy8gICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4vLyAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XHJcbi8vICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuLy8gICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xyXG4vLyAgIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XHJcbi8vICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4vLyB9XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAuY29udGFpbmVyIHtcclxuICAgIG1heC13aWR0aDogNzIwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcclxuICAuY29udGFpbmVyIHtcclxuICAgIG1heC13aWR0aDogNTQwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBncmlkICFpbXBvcnRhbnQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDMwcHgpICFpbXBvcnRhbnQ7XHJcbiAgZ3JpZC1hdXRvLXJvd3M6IDc1cHg7XHJcbiAgcm93LWdhcDogMzBweDtcclxuICBjb2x1bW4tZ2FwOiA3MHB4O1xyXG4gIGp1c3RpZnktY29udGVudDogcmlnaHQ7XHJcbiAgYWxpZ24tY29udGVudDogcmlnaHQ7XHJcbiAgLy9tYXJnaW4tbGVmdDogMC41cHg7XHJcbiAgLy9tYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBmbG9hdDogbGVmdDtcclxuICB3aWR0aDogMTAwJTtcclxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImljb24gaWNvbiBpY29uIGljb24gaWNvbiBpY29uIGl0ZW0gaXRlbSBpdGVtIGl0ZW1cIjtcclxufVxyXG5cclxuLmcxIHtcclxuICBncmlkLWFyZWE6IGl0ZW07XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG4uZzIge1xyXG4gIGdyaWQtYXJlYTogaWNvbjtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgcGFkZGluZy1yaWdodDogNjAwcHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMzY1cHgpIHtcclxuICAuY29udGFpbmVyIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDgsIDMwcHgpICFpbXBvcnRhbnQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImljb24gaWNvbiBpY29uIGljb24gaWNvbiBpdGVtIGl0ZW0gaXRlbSBpdGVtIGl0ZW1cIjtcclxuICAgIG1heC13aWR0aDogNTAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDExNzBweCkge1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoOCwgMzBweCkgIWltcG9ydGFudDtcclxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiaWNvbiBpY29uIGljb24gaXRlbSBpdGVtIGl0ZW0gaXRlbSBpdGVtXCI7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTgwcHgpIHtcclxuICAuY29udGFpbmVyIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcsIDMwcHgpICFpbXBvcnRhbnQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImljb24gaXRlbSBpdGVtIGl0ZW0gaXRlbSBpdGVtIGl0ZW1cIjtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA4OTJweCkge1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNiwgMzBweCkgIWltcG9ydGFudDtcclxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiaWNvbiBpdGVtIGl0ZW0gaXRlbSBpdGVtIFwiO1xyXG4gICAgLy9jb2x1bW4tZ2FwOiA0MHB4O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogODkycHgpIHtcclxuICAuY29udGFpbmVyIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDMwcHgpICFpbXBvcnRhbnQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImljb25cIjtcclxuICAgIC8vY29sdW1uLWdhcDogNDBweDtcclxuICB9XHJcbn1cclxuXHJcbi5uYXZiYXItZGFyayAubmF2YmFyLWJyYW5kIHtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5oZWFkZXIgLm5hdmJhci1icmFuZCB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBsZXR0ZXItc3BhY2luZzogMC4yZW07XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBmb250LXNpemU6IDJyZW07XHJcbn1cclxuLm5hdmJhci1icmFuZCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmctdG9wOiAwLjMxMjVyZW07XHJcbiAgcGFkZGluZy1ib3R0b206IDAuMzEyNXJlbTtcclxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XHJcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XHJcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xyXG59XHJcbmEsXHJcbmE6aG92ZXIge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcbmEge1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4zcyBhbGwgZWFzZTtcclxuICAtby10cmFuc2l0aW9uOiAwLjNzIGFsbCBlYXNlO1xyXG4gIHRyYW5zaXRpb246IDAuM3MgYWxsIGVhc2U7XHJcbn1cclxuYSB7XHJcbiAgY29sb3I6ICMwMDdiZmY7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4ubmF2YmFyLWRhcmsgLm5hdmJhci10b2dnbGVyIHtcclxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NzNweCkge1xyXG4gIC5uYXZiYXItZXhwYW5kLW1kIC5uYXZiYXItdG9nZ2xlciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuYnV0dG9uOm5vdCg6ZGlzYWJsZWQpLFxyXG5bdHlwZT1cImJ1dHRvblwiXTpub3QoOmRpc2FibGVkKSxcclxuW3R5cGU9XCJyZXNldFwiXTpub3QoOmRpc2FibGVkKSxcclxuW3R5cGU9XCJzdWJtaXRcIl06bm90KDpkaXNhYmxlZCkge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ubmF2YmFyLXRvZ2dsZXIge1xyXG4gIHBhZGRpbmc6IDAuMjVyZW0gMC43NXJlbTtcclxuICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcclxufVxyXG5idXR0b24sXHJcblt0eXBlPVwiYnV0dG9uXCJdLFxyXG5bdHlwZT1cInJlc2V0XCJdLFxyXG5bdHlwZT1cInN1Ym1pdFwiXSB7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcblxyXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LWZhbWlseTogaW5oZXJpdDtcclxufVxyXG5cclxuLm5hdmJhci1kYXJrIC5uYXZiYXItdG9nZ2xlci1pY29uIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnIHZpZXdCb3g9JzAgMCAzMCAzMCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzZSUzY3BhdGggc3Ryb2tlPSdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSknIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbWl0ZXJsaW1pdD0nMTAnIGQ9J000IDdoMjJNNCAxNWgyMk00IDIzaDIyJy8lM2UlM2Mvc3ZnJTNlXCIpO1xyXG59XHJcbi5uYXZiYXItdG9nZ2xlci1pY29uIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMS41ZW07XHJcbiAgaGVpZ2h0OiAxLjVlbTtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgYmFja2dyb3VuZDogbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIC5uYXZiYXItZXhwYW5kLW1kIC5uYXZiYXItY29sbGFwc2Uge1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3ggIWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94ICFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogYXV0bztcclxuICAgIGZsZXgtYmFzaXM6IGF1dG87XHJcbiAgfVxyXG59XHJcbi5jb2xsYXBzZTpub3QoLnNob3cpIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5uYXZiYXItY29sbGFwc2Uge1xyXG4gIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiAxMDAlO1xyXG4gIGZsZXgtYmFzaXM6IDEwMCU7XHJcbiAgLXdlYmtpdC1ib3gtZmxleDogMTtcclxuICAtbXMtZmxleC1wb3NpdGl2ZTogMTtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIC5uYXZiYXItZXhwYW5kLW1kIC5uYXZiYXItbmF2IHtcclxuICAgIC13ZWJraXQtYm94LW9yaWVudDogaG9yaXpvbnRhbDtcclxuICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xyXG4gICAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIH1cclxufVxyXG4ubWwtYXV0byxcclxuLm14LWF1dG8ge1xyXG4gIC8vIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbn1cclxuLnBsLTAsXHJcbi5weC0wIHtcclxuICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcclxufVxyXG4ubmF2YmFyLW5hdiB7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xyXG4gIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5vbCxcclxudWwsXHJcbmRsIHtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbiosXHJcbio6OmJlZm9yZSxcclxuKjo6YWZ0ZXIge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbmhlYWRlciAubmF2YmFyIC5uYXYtbGluay5hY3RpdmUge1xyXG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5uYXZiYXItZXhwYW5kLW1kIC5uYXZiYXItbmF2IC5uYXYtbGluayB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMTk5Ljk4cHgpIHtcclxuICBoZWFkZXIgLm5hdmJhciAubmF2LWxpbmsge1xyXG4gICAgcGFkZGluZzogMC41cmVtIDByZW07XHJcbiAgfVxyXG59XHJcblxyXG5oZWFkZXIgLm5hdmJhciAubmF2LWxpbmsge1xyXG4gIHBhZGRpbmctbGVmdDogMzBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiA3MHB4O1xyXG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KSAhaW1wb3J0YW50O1xyXG59XHJcbi5uYXZiYXItbmF2IC5uYXYtbGluayB7XHJcbiAgcGFkZGluZy1yaWdodDogMDtcclxuICBwYWRkaW5nLWxlZnQ6IDA7XHJcbn1cclxuLm5hdi1saW5rIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcclxufVxyXG5cclxuLm1sLWF1dG8sXHJcbi5teC1hdXRvIHtcclxuICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "fp1T":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class FooterComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() { }
    routeToSR() {
        this.router.navigate(['app/saved']);
    }
    routeToSL() {
        this.router.navigate(['app/shopping-list']);
    }
    routeToAU() {
        this.router.navigate(['app/about-us']);
    }
    routeToLogin() {
        this.router.navigate(['app/login']);
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 34, vars: 0, consts: [[1, "text-center", "text-lg-start", "text-white", "bg-grey"], [1, "container", "p-4", "pb-0"], [1, ""], [1, "row"], [1, "w-100", "clearfix", "d-md-none"], [1, "col-md-2", "col-lg-2", "col-xl-2", "mx-auto", "mt-3", "font"], [1, "text-uppercase", "mb-4", "font-bold"], ["type", "button", 3, "click"], [1, "col-md-4", "col-lg-3", "col-xl-3", "mx-auto", "mt-3", "font"], [1, "my-3", "p-3", "pt-0"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "LINKS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_a_click_9_listener() { return ctx.routeToSR(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Saved Recipes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_a_click_12_listener() { return ctx.routeToSL(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Shopping List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_a_click_15_listener() { return ctx.routeToAU(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_a_click_18_listener() { return ctx.routeToLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Log Out");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "hr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "hr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Leander, TX 12345, US");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "pruthvidudam43@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "+ 01 234 567 88");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "+ 01 234 567 89");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "hr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".bg-grey[_ngcontent-%COMP%] {\n  background-color: #faf9f6;\n}\n\n.text-white[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\nfooter[_ngcontent-%COMP%] {\n  bottom: 0;\n  left: 0;\n  position: static;\n  width: 100%;\n}\n\n.font[_ngcontent-%COMP%] {\n  font-family: \"Quicksand\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  font-size: 17px;\n  color: black;\n}\n\n.font-bold[_ngcontent-%COMP%] {\n  font-size: 21px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtBQUNGOztBQUVBO0VBQ0UsU0FBQTtFQUVBLE9BQUE7RUFDQSxnQkFBQTtFQUVBLFdBQUE7QUFERjs7QUFHQTtFQUNFLCtNQUFBO0VBR0EsZUFBQTtFQUNBLFlBQUE7QUFGRjs7QUFLQTtFQUNFLGVBQUE7QUFGRiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmctZ3JleSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZjlmNjtcclxufVxyXG5cclxuLnRleHQtd2hpdGUge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuZm9vdGVyIHtcclxuICBib3R0b206IDA7XHJcblxyXG4gIGxlZnQ6IDA7XHJcbiAgcG9zaXRpb246IHN0YXRpYzsgLy9jaGFuZ2VkIHRvIHJlbGF0aXZlIGZyb20gZml4ZWQgYWxzbyB3b3JrcyBpZiBwb3NpdGlvbiBpcyBub3QgdGhlcmVcclxuXHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmZvbnQge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIixcclxuICAgIFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgXCJOb3RvIFNhbnNcIiwgc2Fucy1zZXJpZixcclxuICAgIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiLCBcIk5vdG8gQ29sb3IgRW1vamlcIjtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uZm9udC1ib2xkIHtcclxuICBmb250LXNpemU6IDIxcHg7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "l0kB":
/*!********************************************************************!*\
  !*** ./src/app/saved-recipes-page/saved-recipes-page.component.ts ***!
  \********************************************************************/
/*! exports provided: SavedRecipesPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavedRecipesPageComponent", function() { return SavedRecipesPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/services.component */ "KfLr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../header/header.component */ "fECr");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../footer/footer.component */ "fp1T");
/* harmony import */ var _shared_recipe_card_recipe_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/recipe-card/recipe-card.component */ "qTX1");








function SavedRecipesPageComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-recipe-card", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("deletedRecipe", function SavedRecipesPageComponent_div_8_Template_app_recipe_card_deletedRecipe_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const recipe_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.getDeletedRecipe(recipe_r1.key); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const recipe_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imgSrc", recipe_r1.value)("title", recipe_r1.key)("isRecipe", true)("isDelete", true);
} }
class SavedRecipesPageComponent {
    constructor(shared, router) {
        this.shared = shared;
        this.router = router;
        this.savedRecipesList = new Map();
    }
    ngOnInit() {
        for (var i = 0; i < sessionStorage.length; i++) {
            if (sessionStorage.key(i).substring(0, 3) == 'id:' ||
                sessionStorage.key(i) == 'newUser' ||
                sessionStorage.key(i) == 'user') {
            }
            else {
                this.savedRecipesList.set(sessionStorage.key(i), sessionStorage.getItem(sessionStorage.key(i)));
            }
        }
        //this.savedRecipesList = this.shared.getValue();
        //console.log(this.savedRecipesList);
        console.log(localStorage);
    }
    getRecipe(id) {
        this.router.navigate(['app/recipes/' + id]);
    }
    getDeletedRecipe(title) {
        sessionStorage.removeItem(title);
        this.savedRecipesList.delete(title);
        console.log(this.savedRecipesList);
    }
}
SavedRecipesPageComponent.ɵfac = function SavedRecipesPageComponent_Factory(t) { return new (t || SavedRecipesPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_services_component__WEBPACK_IMPORTED_MODULE_1__["ServicesComponent"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
SavedRecipesPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SavedRecipesPageComponent, selectors: [["app-saved-recipes-page"]], decls: 12, vars: 3, consts: [[1, "bg"], [1, "page-wrapper", "center", "margin-top-100"], ["id", "heading"], [1, "heading"], ["id", "body", 1, "padding-top-20"], [1, "grid-container-card"], ["class", "grid-item grid-item-1-card btn-group btn-group-justified", 4, "ngFor", "ngForOf"], [1, "clear"], [1, "grid-item", "grid-item-1-card", "btn-group", "btn-group-justified"], [3, "imgSrc", "title", "isRecipe", "isDelete", "deletedRecipe"]], template: function SavedRecipesPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Saved Recipes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SavedRecipesPageComponent_div_8_Template, 2, 4, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 1, ctx.savedRecipesList));
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _shared_recipe_card_recipe_card_component__WEBPACK_IMPORTED_MODULE_6__["RecipeCardComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["KeyValuePipe"]], styles: [".margin-top-100[_ngcontent-%COMP%] {\n  margin-top: 100px;\n}\n\n.button[_ngcontent-%COMP%] {\n  size: 10%;\n}\n\n.bg[_ngcontent-%COMP%] {\n  background-image: url('home-page-bg.jpg');\n  background-size: 100%;\n  background-position-y: bottom;\n}\n\n.padding-top-20[_ngcontent-%COMP%] {\n  padding-top: 30px;\n}\n\n.margin-top-100[_ngcontent-%COMP%] {\n  margin-top: 85px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NhdmVkLXJlY2lwZXMtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5Q0FBQTtFQUNBLHFCQUFBO0VBRUEsNkJBQUE7QUFBRjs7QUFHQTtFQUNFLGlCQUFBO0FBQUY7O0FBR0E7RUFDRSxnQkFBQTtBQUFGIiwiZmlsZSI6InNhdmVkLXJlY2lwZXMtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXJnaW4tdG9wLTEwMCB7XHJcbiAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gIHNpemU6IDEwJTtcclxufVxyXG5cclxuLmJnIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLy4uLy4uL2Fzc2V0cy9ob21lLXBhZ2UtYmcuanBnXCIpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcclxuXHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiBib3R0b207XHJcbn1cclxuXHJcbi5wYWRkaW5nLXRvcC0yMCB7XHJcbiAgcGFkZGluZy10b3A6IDMwcHg7XHJcbn1cclxuXHJcbi5tYXJnaW4tdG9wLTEwMCB7XHJcbiAgbWFyZ2luLXRvcDogODVweDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SavedRecipesPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-saved-recipes-page',
                templateUrl: './saved-recipes-page.component.html',
                styleUrls: ['./saved-recipes-page.component.scss'],
            }]
    }], function () { return [{ type: _services_services_component__WEBPACK_IMPORTED_MODULE_1__["ServicesComponent"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "p38k":
/*!**********************************************************!*\
  !*** ./src/app/about-us-page/about-us-page.component.ts ***!
  \**********************************************************/
/*! exports provided: AboutUsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsPageComponent", function() { return AboutUsPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header/header.component */ "fECr");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../footer/footer.component */ "fp1T");




class AboutUsPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutUsPageComponent.ɵfac = function AboutUsPageComponent_Factory(t) { return new (t || AboutUsPageComponent)(); };
AboutUsPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutUsPageComponent, selectors: [["app-about-us-page"]], decls: 12, vars: 0, consts: [[1, "bg"], [1, "page-wrapper", "center", "margin-top-100"], ["id", "heading"], [1, "heading"], ["id", "body", 1, "font"], [1, "clear"]], template: function AboutUsPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Welcome to Heavenly Bite, a place to make your every bite worthy by trying out the worlds favorite recipes! To access the world\u2019s best recipes, a user must first login or signup.After successful login, user must choose a cuisine from available options to get recipes. All available recipes of the respective chosen cuisine are displayed. User can filter results using search box or available dietary options given (Vegetarian, Gluten Free, etc,.). After clicking on your favorite recipie card, user can see the complete recipe cooking instructions, ingredients, nutritional values etc. When a user likes a recipe, he can add the ingredients to shopping list using the button provided. The price of individual ingredients and overall price of the recipe can be viewed by clicking on the \u201CShopping List\u201D tab in the header. User can remove items from shopping list by clicking on the delete button next to each ingredient recipe list. Also, user can add recipes to favorites by clicking on heart icon on the right corner of each recipe card. Favorites can be accessed by clicking on the \u201CSaved Recipes\u201D tab in the header. User can remove items from favorites by clicking on the delete recipe button. Shopping List and Saved Recipes information is stored by default, so user can login and access the information anytime. Finally, similar recipe recommendations are displayed at the bottom of each recipe page for the users to choose from. Any questions, comments, queries about Heavenly Bite? Contact me at pruthvidudam43@gmail.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]], styles: [".bg[_ngcontent-%COMP%] {\n  background-image: url('home-page-bg.jpg') !important;\n  background-size: 100%;\n  background-position-y: bottom;\n}\n\n.margin-top-100[_ngcontent-%COMP%] {\n  margin-top: 85px;\n  padding-top: 20px;\n}\n\n.font[_ngcontent-%COMP%] {\n  font-weight: 500;\n  line-height: 35px;\n  font-size: 21px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Fib3V0LXVzLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvREFBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBQ0YiLCJmaWxlIjoiYWJvdXQtdXMtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZyB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi8uLi8uLi9hc3NldHMvaG9tZS1wYWdlLWJnLmpwZ1wiKSAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IGJvdHRvbTtcclxufVxyXG5cclxuLm1hcmdpbi10b3AtMTAwIHtcclxuICBtYXJnaW4tdG9wOiA4NXB4O1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uZm9udCB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBsaW5lLWhlaWdodDogMzVweDtcclxuICBmb250LXNpemU6IDIxcHg7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutUsPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about-us-page',
                templateUrl: './about-us-page.component.html',
                styleUrls: ['./about-us-page.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "pT+O":
/*!****************************************************!*\
  !*** ./src/app/login-page/login-page.component.ts ***!
  \****************************************************/
/*! exports provided: LoginPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function() { return LoginPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _shared_validators_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/validators/validators */ "vLHz");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_form_error_messages_form_error_messages_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/form-error-messages/form-error-messages.component */ "/Ids");








function LoginPageComponent_div_12_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-form-error-messages", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("validatorMessage", ctx_r4.oldUserInfoForm.controls.userName.errors);
} }
function LoginPageComponent_div_12_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-form-error-messages", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("validatorMessage", ctx_r5.oldUserInfoForm.controls.password.errors);
} }
const _c0 = function (a0) { return { "input-error": a0 }; };
function LoginPageComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LoginPageComponent_div_12_div_5_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, LoginPageComponent_div_12_div_10_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginPageComponent_div_12_Template_a_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.showPassword(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginPageComponent_div_12_Template_input_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.login(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.oldUserInfoForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.oldUserInfoForm.controls.userName.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx_r0.oldUserInfoForm.controls.userName.value && ctx_r0.oldUserInfoForm.controls.userName.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.oldUserInfoForm.controls.password.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx_r0.oldUserInfoForm.controls.password.value && ctx_r0.oldUserInfoForm.controls.password.touched))("type", ctx_r0.show ? "text" : "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.show ? "Hide" : "Show");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.oldUserInfoForm.invalid);
} }
function LoginPageComponent_div_13_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-form-error-messages", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("validatorMessage", ctx_r9.newUserInfoForm.controls.userName.errors);
} }
function LoginPageComponent_div_13_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-form-error-messages", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("validatorMessage", ctx_r10.newUserInfoForm.controls.password.errors);
} }
function LoginPageComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LoginPageComponent_div_13_div_5_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, LoginPageComponent_div_13_div_10_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Show");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginPageComponent_div_13_Template_input_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.newUser(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.newUserInfoForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.newUserInfoForm.controls.userName.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx_r1.newUserInfoForm.controls.userName.value && ctx_r1.newUserInfoForm.controls.userName.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.newUserInfoForm.controls.password.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx_r1.newUserInfoForm.controls.password.value && ctx_r1.newUserInfoForm.controls.password.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.newUserInfoForm.invalid);
} }
function LoginPageComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "UserName not found !");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginPageComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password is Incorrect ! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = function () { return { background: "#505260", color: "white" }; };
class LoginPageComponent {
    constructor(fb, router, route) {
        this.fb = fb;
        this.router = router;
        this.route = route;
        this.isSignin = true;
        this.isNew = false;
        this.userNotfound = false;
        this.passwordIncorrect = false;
        this.show = false;
        this.hidden = false;
    }
    ngOnInit() {
        this.oldUserInfoForm = this.fb.group({
            userName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _shared_validators_validators__WEBPACK_IMPORTED_MODULE_2__["UserNameValidator"].valid]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _shared_validators_validators__WEBPACK_IMPORTED_MODULE_2__["PasswordValidator"].valid]],
        });
        this.newUserInfoForm = this.fb.group({
            userName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _shared_validators_validators__WEBPACK_IMPORTED_MODULE_2__["UserNameValidator"].valid]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _shared_validators_validators__WEBPACK_IMPORTED_MODULE_2__["PasswordValidator"].valid]],
        });
        console.log(localStorage);
    }
    login() {
        if (!(this.oldUserInfoForm.controls.userName.value in localStorage)) {
            this.userNotfound = true;
            this.passwordIncorrect = false;
        }
        else if (localStorage.getItem(this.oldUserInfoForm.controls.userName.value) !=
            this.oldUserInfoForm.controls.password.value) {
            this.passwordIncorrect = true;
            this.userNotfound = false;
        }
        else {
            sessionStorage.setItem('user', this.oldUserInfoForm.controls.userName.value);
            this.router.navigate(['app/home']);
        }
        console.log(this.userNotfound);
    }
    newUser() {
        localStorage.setItem(this.newUserInfoForm.controls.userName.value, this.newUserInfoForm.controls.password.value);
        sessionStorage.setItem('newUser', this.newUserInfoForm.controls.userName.value);
        this.router.navigate(['app/home']);
        console.log(this.newUserInfoForm.controls.userName.value +
            ' : ' +
            this.newUserInfoForm.controls.password.value);
    }
    clickSignIn() {
        this.isSignin = true;
        this.isNew = false;
        console.log('sn-' + this.isSignin + ' n- ' + this.isNew);
    }
    clickNew() {
        this.isNew = true;
        this.isSignin = false;
        console.log('sn-' + this.isSignin + ' n- ' + this.isNew);
    }
    showPassword() {
        this.show = !this.show;
    }
}
LoginPageComponent.ɵfac = function LoginPageComponent_Factory(t) { return new (t || LoginPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
LoginPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginPageComponent, selectors: [["app-login-page"]], decls: 18, vars: 8, consts: [[1, "bg"], [1, "page-wrapper", "get-center", "margin-bottom-500"], [1, "header-font"], [1, "user-modal-container"], [1, "switcher"], [3, "ngStyle", "click"], ["id", "login", "class", "is-selected", 4, "ngIf"], ["id", "signup", "class", "is-selected", 4, "ngIf"], ["class", "col-xs error", 4, "ngIf"], [1, "margin-bottom-500"], ["id", "login", 1, "is-selected"], [1, "form", 3, "formGroup"], [1, "fieldset"], [1, "image-replace", "username"], ["class", "col-xs", 4, "ngIf"], ["type", "text", "name", "lastName", "formControlName", "userName", "placeholder", "Username", 1, "full-width", "has-padding", "has-border", 3, "ngClass"], [1, "image-replace", "password"], ["formControlName", "password", "placeholder", "Password", 1, "full-width", "has-padding", "has-border", 3, "ngClass", "type"], ["type", "button", 1, "hide-password", 3, "click"], ["type", "submit", "value", "Login", 1, "full-width", 3, "disabled", "click"], [1, "col-xs"], [3, "validatorMessage"], ["id", "signup", 1, "is-selected"], ["type", "password", "formControlName", "password", "placeholder", "Password", 1, "full-width", "has-padding", "has-border", 3, "ngClass"], ["href", "", 1, "hide-password"], ["type", "submit", "value", "Create User", 1, "full-width", 3, "disabled", "click"], [1, "col-xs", "error"]], template: function LoginPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Welcome to Heavenly Bite");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginPageComponent_Template_a_click_7_listener() { return ctx.clickSignIn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginPageComponent_Template_a_click_10_listener() { return ctx.clickNew(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "New account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, LoginPageComponent_div_12_Template, 16, 12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, LoginPageComponent_div_13_Template, 16, 10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, LoginPageComponent_div_14_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, LoginPageComponent_div_15_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.isSignin && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.isSignin == false && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSignin);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSignin == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userNotfound);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.passwordIncorrect);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _shared_form_error_messages_form_error_messages_component__WEBPACK_IMPORTED_MODULE_5__["FormErrorMessagesComponent"]], styles: [".margin-bottom-30[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n\n.header[_ngcontent-%COMP%] {\n  font-size: 1.17em;\n  font-weight: bold;\n}\n\n.required[_ngcontent-%COMP%], .error[_ngcontent-%COMP%] {\n  color: #ee0700;\n  size: 1rem;\n}\n\n.padding-top-15[_ngcontent-%COMP%] {\n  padding-top: 15px;\n}\n\n.padding-right-40[_ngcontent-%COMP%] {\n  padding-right: 20px;\n}\n\n.padding-center[_ngcontent-%COMP%] {\n  padding-left: 34.5%;\n}\n\n.bg[_ngcontent-%COMP%] {\n  background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url('login-bg.jpg');\n  background-size: 100%;\n}\n\n.get-center[_ngcontent-%COMP%] {\n  text-align: center;\n  padding-top: 10%;\n}\n\n.margin-bottom-500[_ngcontent-%COMP%] {\n  margin-bottom: 50px;\n}\n\n.padding-bottom-25[_ngcontent-%COMP%] {\n  padding-bottom: 25px;\n}\n\n.padding-top-25[_ngcontent-%COMP%] {\n  padding-top: 25px;\n}\n\n.header-font[_ngcontent-%COMP%] {\n  font-family: Impact, fantasy;\n  color: black;\n}\n\n.grid-container[_ngcontent-%COMP%] {\n  border-radius: black;\n  display: grid;\n  grid-template-columns: repeat(2, 100px);\n  grid-auto-rows: 60px;\n  row-gap: 30px;\n  column-gap: 200px;\n  justify-content: center;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin-left: 450px;\n}\n\n.is-selected[_ngcontent-%COMP%] {\n  display: block;\n}\n\n@media (min-width: 600px) {\n  .form[_ngcontent-%COMP%] {\n    padding: 2em;\n  }\n}\n\n.form[_ngcontent-%COMP%] {\n  padding: 1.4em;\n}\n\n@media (min-width: 600px) {\n  .form[_ngcontent-%COMP%]   .fieldset[_ngcontent-%COMP%]:first-child {\n    margin-top: 0;\n  }\n}\n\n.form[_ngcontent-%COMP%]   .fieldset[_ngcontent-%COMP%]:first-child {\n  margin-top: 0;\n}\n\n@media only screen and (min-width: 600px) {\n  .form[_ngcontent-%COMP%]   .fieldset[_ngcontent-%COMP%] {\n    margin: 2em 0;\n  }\n}\n\n.form[_ngcontent-%COMP%]   .fieldset[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 1.4em 0;\n}\n\n.form[_ngcontent-%COMP%]   label.username[_ngcontent-%COMP%] {\n  background-image: url(https://codyhouse.co/demo/login-signup-modal-window/img/cd-icon-username.svg);\n}\n\n.form[_ngcontent-%COMP%]   label.image-replace[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: absolute;\n  left: 15px;\n  top: 50%;\n  bottom: auto;\n  transform: translateY(-50%);\n  height: 20px;\n  width: 20px;\n  overflow: hidden;\n  text-indent: 100%;\n  white-space: nowrap;\n  color: transparent;\n  text-shadow: none;\n  background-repeat: no-repeat;\n  background-position: 50% 0;\n}\n\n.form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-size: 0.875rem;\n}\n\n@media only screen and (min-width: 600px) {\n  .form[_ngcontent-%COMP%]   input.has-padding[_ngcontent-%COMP%] {\n    padding: 16px 20px 16px 50px;\n  }\n}\n\n.form[_ngcontent-%COMP%]   input.has-border[_ngcontent-%COMP%] {\n  border: 1px solid #d2d8d8;\n  -webkit-appearance: none;\n  -o-appearance: none;\n  appearance: none;\n}\n\n.form[_ngcontent-%COMP%]   input.has-padding[_ngcontent-%COMP%] {\n  padding: 12px 20px 12px 50px;\n}\n\n.form[_ngcontent-%COMP%]   input.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  border-radius: 0.25em;\n}\n\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%], optgroup[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  font-family: sans-serif;\n  font-size: 100%;\n  line-height: 1.15;\n  margin: 0;\n}\n\nbutton[_ngcontent-%COMP%], hr[_ngcontent-%COMP%], input[_ngcontent-%COMP%] {\n  overflow: visible;\n}\n\n.form[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: absolute;\n  left: -5px;\n  bottom: -35px;\n  background: rgba(215, 102, 102, 0.9);\n  padding: 0.8em;\n  z-index: 2;\n  color: #fff;\n  font-size: 13px;\n  font-size: 0.8125rem;\n  border-radius: 0.25em;\n  pointer-events: none;\n  visibility: hidden;\n  opacity: 0;\n  transition: opacity 0.2s 0, visibility 0 0.2s;\n}\n\n.form[_ngcontent-%COMP%]   label.password[_ngcontent-%COMP%] {\n  background-image: url(https://codyhouse.co/demo/login-signup-modal-window/img/cd-icon-password.svg);\n}\n\n.form[_ngcontent-%COMP%]   .hide-password[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: absolute;\n  text-decoration: none;\n  right: 0;\n  top: 0;\n  padding: 6px 15px;\n  border-left: 1px solid #d2d8d8;\n  top: 50%;\n  bottom: auto;\n  transform: translateY(-50%);\n  font-size: 14px;\n  font-size: 0.875rem;\n  color: #343642;\n}\n\n@media only screen and (min-width: 600px) {\n  .form[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%] {\n    padding: 16px 0;\n  }\n}\n\n.form[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%] {\n  padding: 16px 0;\n  cursor: pointer;\n  background: #f64747;\n  color: #fff;\n  font-weight: bold;\n  border: none;\n  -webkit-appearance: none;\n  -o-appearance: none;\n  appearance: none;\n  -webkit-transition: all 0.3s ease-in-out;\n  -moz-transition: all 0.3s ease-in-out;\n  -ms-transition: all 0.3s ease-in-out;\n  -o-transition: all 0.3s ease-in-out;\n}\n\n.form[_ngcontent-%COMP%]   input.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nul[_ngcontent-%COMP%], li[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\n.user-modal-container[_ngcontent-%COMP%]   .switcher[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child   a[_ngcontent-%COMP%] {\n  border-radius: 0.25em 0 0 0;\n}\n\n@media only screen and (min-width: 600px) {\n  .user-modal-container[_ngcontent-%COMP%]   .switcher[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    height: 70px;\n    line-height: 70px;\n  }\n}\n\n.user-modal-container[_ngcontent-%COMP%]   .switcher[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 50px;\n  line-height: 50px;\n  background: #d2d8d8;\n  color: #809191;\n  text-decoration: none;\n}\n\n.user-modal-container[_ngcontent-%COMP%]   .switcher[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child   a[_ngcontent-%COMP%] {\n  border-radius: 0 0.25em 0 0;\n}\n\n@media only screen and (min-width: 600px) {\n  .user-modal-container[_ngcontent-%COMP%] {\n    margin: 4em auto;\n  }\n}\n\n.user-modal-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 90%;\n  max-width: 600px;\n  background: #fff;\n  margin: 3em auto 4em;\n  cursor: auto;\n  border-radius: 0.25em;\n  transform: translateY(-30px);\n  transition-property: transform;\n  transition-duration: 0.3s;\n}\n\n.user-modal-container[_ngcontent-%COMP%]   .switcher[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  width: 50%;\n  float: left;\n  text-align: center;\n  list-style: none;\n}\n\n.user-modal-container[_ngcontent-%COMP%]   .switcher[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:after, *[_ngcontent-%COMP%]:before {\n  box-sizing: border-box;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xvZ2luLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBOztFQUVFLGNBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvR0FBQTtFQUtBLHFCQUFBO0FBSEY7O0FBTUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FBSEY7O0FBTUE7RUFDRSxtQkFBQTtBQUhGOztBQU1BO0VBQ0Usb0JBQUE7QUFIRjs7QUFNQTtFQUNFLGlCQUFBO0FBSEY7O0FBTUE7RUFDRSw0QkFBQTtFQUNBLFlBQUE7QUFIRjs7QUFNQTtFQUNFLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLHVDQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxrQkFBQTtBQUhGOztBQVFBO0VBQ0UsY0FBQTtBQUxGOztBQVFBO0VBQ0U7SUFDRSxZQUFBO0VBTEY7QUFDRjs7QUFRQTtFQUNFLGNBQUE7QUFORjs7QUFTQTtFQUNFO0lBQ0UsYUFBQTtFQU5GO0FBQ0Y7O0FBU0E7RUFDRSxhQUFBO0FBUEY7O0FBU0E7RUFDRTtJQUNFLGFBQUE7RUFORjtBQUNGOztBQVFBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FBTkY7O0FBU0E7RUFDRSxtR0FBQTtBQU5GOztBQVNBO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUVBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtBQU5GOztBQVFBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FBTEY7O0FBUUE7RUFDRTtJQUNFLDRCQUFBO0VBTEY7QUFDRjs7QUFPQTtFQUNFLHlCQUFBO0VBQ0Esd0JBQUE7RUFHQSxtQkFBQTtFQUNBLGdCQUFBO0FBTEY7O0FBT0E7RUFDRSw0QkFBQTtBQUpGOztBQU1BO0VBQ0UsV0FBQTtBQUhGOztBQUtBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtBQUZGOztBQUtBOzs7OztFQUtFLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtBQUZGOztBQUlBOzs7RUFHRSxpQkFBQTtBQURGOztBQUlBO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0Esb0NBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBRUEsNkNBQUE7QUFERjs7QUFJQTtFQUNFLG1HQUFBO0FBREY7O0FBSUE7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUVBLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQURGOztBQUlBO0VBQ0U7SUFDRSxlQUFBO0VBREY7QUFDRjs7QUFJQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFHQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esd0NBQUE7RUFDQSxxQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsbUNBQUE7QUFGRjs7QUFJQTtFQUNFLFdBQUE7QUFERjs7QUFJQTs7RUFFRSxTQUFBO0VBQ0EsVUFBQTtBQURGOztBQUlBO0VBQ0UsMkJBQUE7QUFERjs7QUFJQTtFQUNFO0lBQ0UsWUFBQTtJQUNBLGlCQUFBO0VBREY7QUFDRjs7QUFHQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUFERjs7QUFJQTtFQUNFLDJCQUFBO0FBREY7O0FBSUE7RUFDRTtJQUNFLGdCQUFBO0VBREY7QUFDRjs7QUFJQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUVBLDRCQUFBO0VBR0EsOEJBQUE7RUFHQSx5QkFBQTtBQUZGOztBQUlBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBREY7O0FBSUE7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUFERjs7QUFJQTs7O0VBR0Usc0JBQUE7QUFERiIsImZpbGUiOiJsb2dpbi1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hcmdpbi1ib3R0b20tMzAge1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gIGZvbnQtc2l6ZTogMS4xN2VtO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ucmVxdWlyZWQsXHJcbi5lcnJvciB7XHJcbiAgY29sb3I6ICNlZTA3MDA7XHJcbiAgc2l6ZTogMXJlbTtcclxufVxyXG5cclxuLnBhZGRpbmctdG9wLTE1IHtcclxuICBwYWRkaW5nLXRvcDogMTVweDtcclxufVxyXG5cclxuLnBhZGRpbmctcmlnaHQtNDAge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5wYWRkaW5nLWNlbnRlciB7XHJcbiAgcGFkZGluZy1sZWZ0OiAzNC41JTtcclxufVxyXG5cclxuLmJnIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSxcclxuICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpXHJcbiAgICApLFxyXG4gICAgdXJsKFwiLi8uLi8uLi9hc3NldHMvbG9naW4tYmcuanBnXCIpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcclxufVxyXG5cclxuLmdldC1jZW50ZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogMTAlO1xyXG59XHJcblxyXG4ubWFyZ2luLWJvdHRvbS01MDAge1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcbi5wYWRkaW5nLWJvdHRvbS0yNSB7XHJcbiAgcGFkZGluZy1ib3R0b206IDI1cHg7XHJcbn1cclxuXHJcbi5wYWRkaW5nLXRvcC0yNSB7XHJcbiAgcGFkZGluZy10b3A6IDI1cHg7XHJcbn1cclxuXHJcbi5oZWFkZXItZm9udCB7XHJcbiAgZm9udC1mYW1pbHk6IEltcGFjdCwgZmFudGFzeTtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5ncmlkLWNvbnRhaW5lciB7XHJcbiAgYm9yZGVyLXJhZGl1czogYmxhY2s7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxMDBweCk7XHJcbiAgZ3JpZC1hdXRvLXJvd3M6IDYwcHg7XHJcbiAgcm93LWdhcDogMzBweDtcclxuICBjb2x1bW4tZ2FwOiAyMDBweDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgbWFyZ2luLWxlZnQ6IDQ1MHB4O1xyXG59XHJcblxyXG4vLy8vLy8vLy8tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbi5pcy1zZWxlY3RlZCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkge1xyXG4gIC5mb3JtIHtcclxuICAgIHBhZGRpbmc6IDJlbTtcclxuICB9XHJcbn1cclxuXHJcbi5mb3JtIHtcclxuICBwYWRkaW5nOiAxLjRlbTtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSB7XHJcbiAgLmZvcm0gLmZpZWxkc2V0OmZpcnN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgfVxyXG59XHJcblxyXG4uZm9ybSAuZmllbGRzZXQ6Zmlyc3QtY2hpbGQge1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xyXG4gIC5mb3JtIC5maWVsZHNldCB7XHJcbiAgICBtYXJnaW46IDJlbSAwO1xyXG4gIH1cclxufVxyXG4uZm9ybSAuZmllbGRzZXQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW46IDEuNGVtIDA7XHJcbn1cclxuXHJcbi5mb3JtIGxhYmVsLnVzZXJuYW1lIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9jb2R5aG91c2UuY28vZGVtby9sb2dpbi1zaWdudXAtbW9kYWwtd2luZG93L2ltZy9jZC1pY29uLXVzZXJuYW1lLnN2Zyk7XHJcbn1cclxuXHJcbi5mb3JtIGxhYmVsLmltYWdlLXJlcGxhY2Uge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMTVweDtcclxuICB0b3A6IDUwJTtcclxuICBib3R0b206IGF1dG87XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIGhlaWdodDogMjBweDtcclxuICB3aWR0aDogMjBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtaW5kZW50OiAxMDAlO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIHRleHQtc2hhZG93OiBub25lO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDA7XHJcbn1cclxuLmZvcm0gbGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXNpemU6IDAuODc1cmVtO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XHJcbiAgLmZvcm0gaW5wdXQuaGFzLXBhZGRpbmcge1xyXG4gICAgcGFkZGluZzogMTZweCAyMHB4IDE2cHggNTBweDtcclxuICB9XHJcbn1cclxuLmZvcm0gaW5wdXQuaGFzLWJvcmRlciB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2QyZDhkODtcclxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG4gIC1tcy1hcHBlYXJhbmNlOiBub25lO1xyXG4gIC1vLWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgYXBwZWFyYW5jZTogbm9uZTtcclxufVxyXG4uZm9ybSBpbnB1dC5oYXMtcGFkZGluZyB7XHJcbiAgcGFkZGluZzogMTJweCAyMHB4IDEycHggNTBweDtcclxufVxyXG4uZm9ybSBpbnB1dC5mdWxsLXdpZHRoIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uZm9ybSBpbnB1dCB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xyXG59XHJcblxyXG5idXR0b24sXHJcbmlucHV0LFxyXG5vcHRncm91cCxcclxuc2VsZWN0LFxyXG50ZXh0YXJlYSB7XHJcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxMDAlO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjE1O1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5idXR0b24sXHJcbmhyLFxyXG5pbnB1dCB7XHJcbiAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbn1cclxuXHJcbi5mb3JtIC5lcnJvci1tZXNzYWdlIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IC01cHg7XHJcbiAgYm90dG9tOiAtMzVweDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDIxNSwgMTAyLCAxMDIsIDAuOSk7XHJcbiAgcGFkZGluZzogMC44ZW07XHJcbiAgei1pbmRleDogMjtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgZm9udC1zaXplOiAwLjgxMjVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICBvcGFjaXR5OiAwO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIDAsIHZpc2liaWxpdHkgMCAwLjJzO1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyAwLCB2aXNpYmlsaXR5IDAgMC4ycztcclxufVxyXG5cclxuLmZvcm0gbGFiZWwucGFzc3dvcmQge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2NvZHlob3VzZS5jby9kZW1vL2xvZ2luLXNpZ251cC1tb2RhbC13aW5kb3cvaW1nL2NkLWljb24tcGFzc3dvcmQuc3ZnKTtcclxufVxyXG5cclxuLmZvcm0gLmhpZGUtcGFzc3dvcmQge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRvcDogMDtcclxuICBwYWRkaW5nOiA2cHggMTVweDtcclxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNkMmQ4ZDg7XHJcbiAgdG9wOiA1MCU7XHJcbiAgYm90dG9tOiBhdXRvO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICBjb2xvcjogIzM0MzY0MjtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xyXG4gIC5mb3JtIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0ge1xyXG4gICAgcGFkZGluZzogMTZweCAwO1xyXG4gIH1cclxufVxyXG5cclxuLmZvcm0gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSB7XHJcbiAgcGFkZGluZzogMTZweCAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBiYWNrZ3JvdW5kOiAjZjY0NzQ3O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG4gIC1tcy1hcHBlYXJhbmNlOiBub25lO1xyXG4gIC1vLWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG59XHJcbi5mb3JtIGlucHV0LmZ1bGwtd2lkdGgge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG51bCxcclxubGkge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4udXNlci1tb2RhbC1jb250YWluZXIgLnN3aXRjaGVyIGxpOmZpcnN0LWNoaWxkIGEge1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVlbSAwIDAgMDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xyXG4gIC51c2VyLW1vZGFsLWNvbnRhaW5lciAuc3dpdGNoZXIgYSB7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogNzBweDtcclxuICB9XHJcbn1cclxuLnVzZXItbW9kYWwtY29udGFpbmVyIC5zd2l0Y2hlciBhIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgYmFja2dyb3VuZDogI2QyZDhkODtcclxuICBjb2xvcjogIzgwOTE5MTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi51c2VyLW1vZGFsLWNvbnRhaW5lciAuc3dpdGNoZXIgbGk6bGFzdC1jaGlsZCBhIHtcclxuICBib3JkZXItcmFkaXVzOiAwIDAuMjVlbSAwIDA7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcclxuICAudXNlci1tb2RhbC1jb250YWluZXIge1xyXG4gICAgbWFyZ2luOiA0ZW0gYXV0bztcclxuICB9XHJcbn1cclxuXHJcbi51c2VyLW1vZGFsLWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWF4LXdpZHRoOiA2MDBweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIG1hcmdpbjogM2VtIGF1dG8gNGVtO1xyXG4gIGN1cnNvcjogYXV0bztcclxuICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwcHgpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzBweCk7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiAtd2Via2l0LXRyYW5zZm9ybTtcclxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiAtd2Via2l0LXRyYW5zZm9ybTtcclxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XHJcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtLCAtd2Via2l0LXRyYW5zZm9ybTtcclxuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XHJcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcclxufVxyXG4udXNlci1tb2RhbC1jb250YWluZXIgLnN3aXRjaGVyIGxpIHtcclxuICB3aWR0aDogNTAlO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcblxyXG4udXNlci1tb2RhbC1jb250YWluZXIgLnN3aXRjaGVyOmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG4gIGNsZWFyOiBib3RoO1xyXG59XHJcblxyXG4qLFxyXG4qOmFmdGVyLFxyXG4qOmJlZm9yZSB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login-page',
                templateUrl: './login-page.component.html',
                styleUrls: ['./login-page.component.scss'],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "qTX1":
/*!*************************************************************!*\
  !*** ./src/app/shared/recipe-card/recipe-card.component.ts ***!
  \*************************************************************/
/*! exports provided: RecipeCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeCardComponent", function() { return RecipeCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function RecipeCardComponent__svg_svg_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecipeCardComponent__svg_svg_3_Template__svg_svg_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onClickSaved(ctx_r4.title, ctx_r4.imgSrc); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RecipeCardComponent__svg_svg_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RecipeCardComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecipeCardComponent_div_11_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.getRecipe(ctx_r6.imgSrc); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Get Recipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RecipeCardComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecipeCardComponent_div_12_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.deleteRecipe(ctx_r8.title); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Delete Recipe ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class RecipeCardComponent {
    constructor(router) {
        this.router = router;
        this.savedRecipe = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.deletedRecipe = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.sendID = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.sendTitle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isClicked = false;
    }
    ngOnInit() { }
    onClickSaved(title, img) {
        sessionStorage.setItem(title, img);
        //console.log('HIII');
        //this.savedRecipe.emit(event);
        this.isClicked = !this.isClicked;
    }
    deleteRecipe(event) {
        console.log(event);
        this.deletedRecipe.emit(event);
    }
    getRecipe(id) {
        this.sendID.emit(this.imgSrc.substring(37, this.imgSrc.length - 12));
        this.sendTitle.emit(this.title);
        this.router.navigate([
            'app/recipes/id/' + id.substring(37, this.imgSrc.length - 12),
        ]);
    }
}
RecipeCardComponent.ɵfac = function RecipeCardComponent_Factory(t) { return new (t || RecipeCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
RecipeCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RecipeCardComponent, selectors: [["app-recipe-card"]], inputs: { imgSrc: "imgSrc", title: "title", isRecipe: "isRecipe", isDelete: "isDelete" }, outputs: { savedRecipe: "savedRecipe", deletedRecipe: "deletedRecipe", sendID: "sendID", sendTitle: "sendTitle" }, decls: 13, vars: 6, consts: [[1, "col-xs-12", "col-sm-4"], [1, "card", "box"], [1, "heart-icon"], ["xmlns", "http://www.w3.org/2000/svg", "width", "26", "height", "26", "fill", "red", "class", "bi bi-heart", "viewBox", "0 0 20 20", "type", "button", 3, "click", 4, "ngIf"], ["xmlns", "http://www.w3.org/2000/svg", "width", "26", "height", "26", "fill", "red", "class", "bi bi-heart-fill", "viewBox", "0 0 20 20", 4, "ngIf"], [1, "img-card"], ["id", "image", 3, "src"], [1, "card-content"], [1, "card-title"], ["class", "card-button", 4, "ngIf"], ["xmlns", "http://www.w3.org/2000/svg", "width", "26", "height", "26", "fill", "red", "viewBox", "0 0 20 20", "type", "button", 1, "bi", "bi-heart", 3, "click"], ["d", "m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"], ["xmlns", "http://www.w3.org/2000/svg", "width", "26", "height", "26", "fill", "red", "viewBox", "0 0 20 20", 1, "bi", "bi-heart-fill"], ["fill-rule", "evenodd", "d", "M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"], [1, "card-button"], [1, "button1", 3, "click"], [1, "button1", "go-up", 3, "click"]], template: function RecipeCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RecipeCardComponent__svg_svg_3_Template, 2, 0, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RecipeCardComponent__svg_svg_4_Template, 2, 0, "svg", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, RecipeCardComponent_div_11_Template, 3, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, RecipeCardComponent_div_12_Template, 3, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isClicked);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isClicked);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "" + ctx.imgSrc + "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isRecipe);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isDelete);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".col-sm-4[_ngcontent-%COMP%] {\n  width: 300px;\n  float: left;\n  position: relative;\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n\n.card[_ngcontent-%COMP%] {\n  opacity: 1;\n  animation: fade 2s linear;\n  display: block;\n  height: 350px;\n  margin-bottom: 20px;\n  line-height: 1.42857143;\n  background-color: #fff;\n  border-radius: 2px;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n  transition: box-shadow 0.25s;\n}\n\n.box[_ngcontent-%COMP%] {\n  transition: box-shadow 0.5s;\n  background-color: #faf9f6;\n  border-radius: 16px;\n}\n\n.box[_ngcontent-%COMP%]:hover {\n  box-shadow: rgba(250, 249, 246, 0.3) 0 1px 3px 0, rgba(250, 249, 246, 0.15) 0 4px 8px 3px;\n}\n\n.img-card[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 200px;\n  float: left;\n  background-size: cover;\n  border-top-left-radius: 2px;\n  border-top-right-radius: 2px;\n  display: block;\n  overflow: hidden;\n  border-radius: 16px;\n}\n\n.card-content[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 200px;\n  padding-top: 20px;\n  text-align: center;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  padding-top: 30px;\n  font-weight: bold;\n  font-size: 16px;\n  color: black;\n  text-align: center;\n}\n\n.card-button[_ngcontent-%COMP%] {\n  padding-left: 20px;\n  text-transform: uppercase;\n  text-align: center;\n}\n\n.button[_ngcontent-%COMP%] {\n  background-color: darkgray;\n  color: white;\n  font-weight: 600;\n  display: inline-block;\n  width: 50%;\n  margin-top: 55px;\n  margin-bottom: 5px;\n  cursor: pointer;\n  position: relative;\n  border-radius: 16px;\n}\n\n.button1[_ngcontent-%COMP%] {\n  align-items: center;\n  -webkit-appearance: none;\n          appearance: none;\n  background-color: #303030;\n  color: white;\n  border-style: none;\n  box-shadow: rgba(0, 0, 0, 0.2) 0 3px 5px -1px, rgba(0, 0, 0, 0.14) 0 6px 10px 0, rgba(0, 0, 0, 0.12) 0 1px 18px 0;\n  box-sizing: border-box;\n  cursor: pointer;\n  display: inline-flex;\n  fill: currentcolor;\n  font-size: 14px;\n  justify-content: center;\n  letter-spacing: 0.25px;\n  line-height: normal;\n  max-width: 100%;\n  overflow: visible;\n  padding: 2px 24px;\n  text-align: center;\n  text-transform: none;\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), opacity 15ms linear 30ms, transform 270ms cubic-bezier(0, 0, 0.2, 1) 0ms;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  height: 30px;\n  will-change: transform, opacity;\n  z-index: 0;\n  font-weight: 600;\n  display: inline-block;\n  width: 50%;\n  margin-top: 55px;\n  margin-bottom: 5px;\n  cursor: pointer;\n  position: relative;\n  border-radius: 16px;\n  height: 30px;\n}\n\n.button1[_ngcontent-%COMP%]:not(:disabled):hover {\n  box-shadow: rgba(250, 249, 246, 0.3) 0 2px 3px 0, rgba(250, 249, 246, 0.15) 0 6px 10px 4px;\n}\n\n.button1[_ngcontent-%COMP%]:not(:disabled) {\n  box-shadow: rgba(250, 249, 246, 0.3) 0 1px 3px 0, rgba(250, 249, 246, 0.15) 0 4px 8px 3px;\n}\n\n.button1[_ngcontent-%COMP%]:hover {\n  box-shadow: rgba(250, 249, 246, 0.3) 0 1px 3px 0, rgba(250, 249, 246, 0.15) 0 4px 8px 3px;\n  background: #faf9f6;\n  color: black;\n}\n\n.go-up[_ngcontent-%COMP%] {\n  margin-top: -40px;\n  padding-top: 0px;\n}\n\n.heart-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3JlY2lwZS1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkVBQUE7RUFDQSw0QkFBQTtBQUNGOztBQUVBO0VBQ0UsMkJBQUE7RUFFQSx5QkFBQTtFQUNBLG1CQUFBO0FBQUY7O0FBRUE7RUFDRSx5RkFBQTtBQUNGOztBQUdBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFBRjs7QUFHQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUFGOztBQU1BO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBRUEsa0JBQUE7QUFKRjs7QUFZQTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQVRGOztBQVlBO0VBQ0UsMEJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFURjs7QUFZQTtFQUNFLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUVBLGtCQUFBO0VBQ0EsaUhBQUE7RUFFQSxzQkFBQTtFQUVBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUVBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1JQUFBO0VBRUEsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQWRGOztBQWlCQTtFQUNFLDBGQUFBO0FBZEY7O0FBa0JBO0VBQ0UseUZBQUE7QUFmRjs7QUFrQkE7RUFDRSx5RkFBQTtFQUVBLG1CQUFBO0VBQ0EsWUFBQTtBQWhCRjs7QUFtQkE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FBaEJGOztBQWtCQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0FBZkYiLCJmaWxlIjoicmVjaXBlLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sLXNtLTQge1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBmbG9hdDogbGVmdDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWluLWhlaWdodDogMXB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgb3BhY2l0eTogMTtcclxuICBhbmltYXRpb246IGZhZGUgMnMgbGluZWFyO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGhlaWdodDogMzUwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBsaW5lLWhlaWdodDogMS40Mjg1NzE0MztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2IoMCAwIDAgLyAxNiUpLCAwIDJweCAxMHB4IDAgcmdiKDAgMCAwIC8gMTIlKTtcclxuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMjVzO1xyXG59XHJcblxyXG4uYm94IHtcclxuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuNXM7XHJcbiAgLy9ib3JkZXI6IDNweCBzb2xpZCBibGFjaztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUwIDI0OSAyNDYpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbn1cclxuLmJveDpob3ZlciB7XHJcbiAgYm94LXNoYWRvdzogcmdiKDI1MCAyNDkgMjQ2IC8gMzAlKSAwIDFweCAzcHggMCxcclxuICAgIHJnYigyNTAgMjQ5IDI0NiAvIDE1JSkgMCA0cHggOHB4IDNweDtcclxufVxyXG5cclxuLmltZy1jYXJkIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMnB4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAycHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG59XHJcblxyXG4uY2FyZC1jb250ZW50IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAvL2Rpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAvL2JhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG4gIC8vcGFkZGluZzogMC41dncgMC4xdnc7XHJcbn1cclxuXHJcbi5jYXJkLXRpdGxlIHtcclxuICBwYWRkaW5nLXRvcDogMzBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIC8vZm9udC1zaXplOiAxLjY1ZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIC8vYm9yZGVyLXJhZGl1czogODBweDtcclxuICAvL2Rpc3BsYXk6IHRhYmxlO1xyXG5cclxuICAvL2ZvbnQtZmFtaWx5OiBpbXBhY3Q7XHJcbiAgLy9mb250LXNpemU6IDQuMnZ3O1xyXG59XHJcblxyXG4uY2FyZC1idXR0b24ge1xyXG4gIHBhZGRpbmctbGVmdDogMjBweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyYXk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgbWFyZ2luLXRvcDogNTVweDtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG59XHJcblxyXG4uYnV0dG9uMSB7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBhcHBlYXJhbmNlOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMDMwMzA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG5cclxuICBib3JkZXItc3R5bGU6IG5vbmU7XHJcbiAgYm94LXNoYWRvdzogcmdiKDAgMCAwIC8gMjAlKSAwIDNweCA1cHggLTFweCwgcmdiKDAgMCAwIC8gMTQlKSAwIDZweCAxMHB4IDAsXHJcbiAgICByZ2IoMCAwIDAgLyAxMiUpIDAgMXB4IDE4cHggMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgZmlsbDogY3VycmVudGNvbG9yO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuXHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMjVweDtcclxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICBwYWRkaW5nOiAycHggMjRweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAyODBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpLFxyXG4gICAgb3BhY2l0eSAxNW1zIGxpbmVhciAzMG1zLCB0cmFuc2Zvcm0gMjcwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSkgMG1zO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm0sIG9wYWNpdHk7XHJcbiAgei1pbmRleDogMDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogNTAlO1xyXG4gIG1hcmdpbi10b3A6IDU1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbi5idXR0b24xOm5vdCg6ZGlzYWJsZWQpOmhvdmVyIHtcclxuICBib3gtc2hhZG93OiByZ2IoMjUwIDI0OSAyNDYgLyAzMCUpIDAgMnB4IDNweCAwLFxyXG4gICAgcmdiKDI1MCAyNDkgMjQ2IC8gMTUlKSAwIDZweCAxMHB4IDRweDtcclxufVxyXG5cclxuLmJ1dHRvbjE6bm90KDpkaXNhYmxlZCkge1xyXG4gIGJveC1zaGFkb3c6IHJnYigyNTAgMjQ5IDI0NiAvIDMwJSkgMCAxcHggM3B4IDAsXHJcbiAgICByZ2IoMjUwIDI0OSAyNDYgLyAxNSUpIDAgNHB4IDhweCAzcHg7XHJcbn1cclxuLmJ1dHRvbjE6aG92ZXIge1xyXG4gIGJveC1zaGFkb3c6IHJnYigyNTAgMjQ5IDI0NiAvIDMwJSkgMCAxcHggM3B4IDAsXHJcbiAgICByZ2IoMjUwIDI0OSAyNDYgLyAxNSUpIDAgNHB4IDhweCAzcHg7XHJcbiAgYmFja2dyb3VuZDogI2ZhZjlmNjtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5nby11cCB7XHJcbiAgbWFyZ2luLXRvcDogLTQwcHg7XHJcbiAgcGFkZGluZy10b3A6IDBweDtcclxufVxyXG4uaGVhcnQtaWNvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecipeCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-recipe-card',
                templateUrl: './recipe-card.component.html',
                styleUrls: ['./recipe-card.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, { imgSrc: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], savedRecipe: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], isRecipe: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isDelete: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], deletedRecipe: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], sendID: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], sendTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "vLHz":
/*!*************************************************!*\
  !*** ./src/app/shared/validators/validators.ts ***!
  \*************************************************/
/*! exports provided: UserNameValidator, PasswordValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserNameValidator", function() { return UserNameValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordValidator", function() { return PasswordValidator; });
class UserNameValidator {
    static valid(control) {
        let hasSpecialCharacters = /[$&+,:;=?@#|'<>.^*()%!-]/.test(control.value);
        let hasDigit = /[0-9]+/.test(control.value);
        const notValid = hasSpecialCharacters || hasDigit;
        if (control.value && notValid) {
            return { invalidUserName: true };
        }
        return null;
    }
}
class PasswordValidator {
    static valid(control) {
        let hasSpecialCharacters = /[^a-zA-Z0-9]/.test(control.value);
        let hasDigit = /[0-9]+/.test(control.value);
        let hasChar = /[a-zA-Z]+/.test(control.value);
        let inRange = /.{8,20}/.test(control.value);
        // console.log('Num, Upp, Low', hasNumber, hasUpper, hasLower);
        const notValid = hasSpecialCharacters || !inRange || !(hasDigit && hasChar);
        if (control.value && notValid) {
            // return what´s not valid
            return { invalidPassword: true };
        }
        return null;
    }
}


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _about_us_page_about_us_page_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about-us-page/about-us-page.module */ "WMYz");
/* harmony import */ var _home_page_home_page_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home-page/home-page.module */ "64/j");
/* harmony import */ var _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-page/login-page.component */ "pT+O");
/* harmony import */ var _login_page_login_page_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login-page/login-page.module */ "x2uj");
/* harmony import */ var _recipe_information_page_recipe_information_page_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./recipe-information-page/recipe-information-page.module */ "Ahoc");
/* harmony import */ var _recipes_page_recipes_page_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./recipes-page/recipes-page.module */ "7S+1");
/* harmony import */ var _saved_recipes_page_saved_recipes_page_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./saved-recipes-page/saved-recipes-page.module */ "wRsY");
/* harmony import */ var _shopping_list_page_shopping_list_page_modue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shopping-list-page/shopping-list-page.modue */ "XRVq");













const routes = [
    { path: '', redirectTo: 'app/login', pathMatch: 'full' },
    { path: '**', component: _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_5__["LoginPageComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[
            _login_page_login_page_module__WEBPACK_IMPORTED_MODULE_6__["LoginPageModule"],
            _home_page_home_page_module__WEBPACK_IMPORTED_MODULE_4__["HomePageModule"],
            _recipes_page_recipes_page_module__WEBPACK_IMPORTED_MODULE_8__["RecipesPageModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _saved_recipes_page_saved_recipes_page_module__WEBPACK_IMPORTED_MODULE_9__["SavedRecipesPageModule"],
            _recipe_information_page_recipe_information_page_module__WEBPACK_IMPORTED_MODULE_7__["RecipeInformationPageModule"],
            _shopping_list_page_shopping_list_page_modue__WEBPACK_IMPORTED_MODULE_10__["ShoppingListPageModule"],
            _about_us_page_about_us_page_module__WEBPACK_IMPORTED_MODULE_3__["AboutUsPageModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { onSameUrlNavigation: 'reload' }),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_login_page_login_page_module__WEBPACK_IMPORTED_MODULE_6__["LoginPageModule"],
        _home_page_home_page_module__WEBPACK_IMPORTED_MODULE_4__["HomePageModule"],
        _recipes_page_recipes_page_module__WEBPACK_IMPORTED_MODULE_8__["RecipesPageModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _saved_recipes_page_saved_recipes_page_module__WEBPACK_IMPORTED_MODULE_9__["SavedRecipesPageModule"],
        _recipe_information_page_recipe_information_page_module__WEBPACK_IMPORTED_MODULE_7__["RecipeInformationPageModule"],
        _shopping_list_page_shopping_list_page_modue__WEBPACK_IMPORTED_MODULE_10__["ShoppingListPageModule"],
        _about_us_page_about_us_page_module__WEBPACK_IMPORTED_MODULE_3__["AboutUsPageModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _login_page_login_page_module__WEBPACK_IMPORTED_MODULE_6__["LoginPageModule"],
                    _home_page_home_page_module__WEBPACK_IMPORTED_MODULE_4__["HomePageModule"],
                    _recipes_page_recipes_page_module__WEBPACK_IMPORTED_MODULE_8__["RecipesPageModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                    _saved_recipes_page_saved_recipes_page_module__WEBPACK_IMPORTED_MODULE_9__["SavedRecipesPageModule"],
                    _recipe_information_page_recipe_information_page_module__WEBPACK_IMPORTED_MODULE_7__["RecipeInformationPageModule"],
                    _shopping_list_page_shopping_list_page_modue__WEBPACK_IMPORTED_MODULE_10__["ShoppingListPageModule"],
                    _about_us_page_about_us_page_module__WEBPACK_IMPORTED_MODULE_3__["AboutUsPageModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { onSameUrlNavigation: 'reload' }),
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "wRsY":
/*!*****************************************************************!*\
  !*** ./src/app/saved-recipes-page/saved-recipes-page.module.ts ***!
  \*****************************************************************/
/*! exports provided: SavedRecipesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavedRecipesPageModule", function() { return SavedRecipesPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared-module */ "+fd8");
/* harmony import */ var _header_header_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../header/header.module */ "H6Li");
/* harmony import */ var _footer_footer_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../footer/footer.module */ "PpLr");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _saved_recipes_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./saved-recipes-page.component */ "l0kB");
/* harmony import */ var _recipes_page_recipes_page_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../recipes-page/recipes-page.module */ "7S+1");











class SavedRecipesPageModule {
}
SavedRecipesPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SavedRecipesPageModule });
SavedRecipesPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SavedRecipesPageModule_Factory(t) { return new (t || SavedRecipesPageModule)(); }, providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                {
                    path: 'app/saved',
                    component: _saved_recipes_page_component__WEBPACK_IMPORTED_MODULE_7__["SavedRecipesPageComponent"],
                },
            ]),
            _header_header_module__WEBPACK_IMPORTED_MODULE_4__["HeaderModule"],
            _footer_footer_module__WEBPACK_IMPORTED_MODULE_5__["FooterModule"],
            _recipes_page_recipes_page_module__WEBPACK_IMPORTED_MODULE_8__["RecipesPageModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SavedRecipesPageModule, { declarations: [_saved_recipes_page_component__WEBPACK_IMPORTED_MODULE_7__["SavedRecipesPageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _header_header_module__WEBPACK_IMPORTED_MODULE_4__["HeaderModule"],
        _footer_footer_module__WEBPACK_IMPORTED_MODULE_5__["FooterModule"],
        _recipes_page_recipes_page_module__WEBPACK_IMPORTED_MODULE_8__["RecipesPageModule"]], exports: [_saved_recipes_page_component__WEBPACK_IMPORTED_MODULE_7__["SavedRecipesPageComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SavedRecipesPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_saved_recipes_page_component__WEBPACK_IMPORTED_MODULE_7__["SavedRecipesPageComponent"]],
                providers: [],
                exports: [_saved_recipes_page_component__WEBPACK_IMPORTED_MODULE_7__["SavedRecipesPageComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                        {
                            path: 'app/saved',
                            component: _saved_recipes_page_component__WEBPACK_IMPORTED_MODULE_7__["SavedRecipesPageComponent"],
                        },
                    ]),
                    _header_header_module__WEBPACK_IMPORTED_MODULE_4__["HeaderModule"],
                    _footer_footer_module__WEBPACK_IMPORTED_MODULE_5__["FooterModule"],
                    _recipes_page_recipes_page_module__WEBPACK_IMPORTED_MODULE_8__["RecipesPageModule"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "x2uj":
/*!*************************************************!*\
  !*** ./src/app/login-page/login-page.module.ts ***!
  \*************************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _login_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login-page.component */ "pT+O");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared-module */ "+fd8");








class LoginPageModule {
}
LoginPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LoginPageModule });
LoginPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LoginPageModule_Factory(t) { return new (t || LoginPageModule)(); }, providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                {
                    path: 'app/login',
                    component: _login_page_component__WEBPACK_IMPORTED_MODULE_2__["LoginPageComponent"],
                },
            ]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LoginPageModule, { declarations: [_login_page_component__WEBPACK_IMPORTED_MODULE_2__["LoginPageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_login_page_component__WEBPACK_IMPORTED_MODULE_2__["LoginPageComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_login_page_component__WEBPACK_IMPORTED_MODULE_2__["LoginPageComponent"]],
                providers: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                        {
                            path: 'app/login',
                            component: _login_page_component__WEBPACK_IMPORTED_MODULE_2__["LoginPageComponent"],
                        },
                    ]),
                ],
                exports: [_login_page_component__WEBPACK_IMPORTED_MODULE_2__["LoginPageComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map