function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["recipes-recipes-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/recipes.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/recipes.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRecipesRecipesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-title>Big Eats</ion-title>\n</ion-header>\n\n<ion-content>\n    <ion-list>\n        <ion-item *ngFor=\"let rec of recipes\" (click)=\"setTitle(rec.title)\">\n            <ion-avatar slot=\"start\">\n                <ion-thumbnail class='recipe-thumb' [routerLink]=\"rec.id\">\n                    <ion-img [src]=\"rec.imgUrl\"></ion-img>\n                </ion-thumbnail>\n            </ion-avatar>\n            <ion-label>\n                {{rec.title}}\n            </ion-label>\n            <ion-button slot=\"end\" (click)=\"deleteRecipe(rec.id)\" color=\"danger\" fill=\"clear\"\n                size=\"large\">\n                <ion-icon name=\"close-outline\">\n                </ion-icon>\n            </ion-button>\n        </ion-item>\n    </ion-list>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/recipes/recipes-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/recipes/recipes-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: RecipesPageRoutingModule */

  /***/
  function srcAppRecipesRecipesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecipesPageRoutingModule", function () {
      return RecipesPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _recipes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./recipes.page */
    "./src/app/recipes/recipes.page.ts");

    var routes = [{
      path: '',
      component: _recipes_page__WEBPACK_IMPORTED_MODULE_3__["RecipesPage"]
    }, {
      path: 'recipes/:id',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | recipe-detail-recipe-detail-module */
        "common").then(__webpack_require__.bind(null,
        /*! ./recipe-detail/recipe-detail.module */
        "./src/app/recipes/recipe-detail/recipe-detail.module.ts")).then(function (m) {
          return m.RecipeDetailPageModule;
        });
      }
    }];

    var RecipesPageRoutingModule = function RecipesPageRoutingModule() {
      _classCallCheck(this, RecipesPageRoutingModule);
    };

    RecipesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], RecipesPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/recipes/recipes.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/recipes/recipes.module.ts ***!
    \*******************************************/

  /*! exports provided: RecipesPageModule */

  /***/
  function srcAppRecipesRecipesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecipesPageModule", function () {
      return RecipesPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _recipes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./recipes-routing.module */
    "./src/app/recipes/recipes-routing.module.ts");
    /* harmony import */


    var _recipes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./recipes.page */
    "./src/app/recipes/recipes.page.ts");

    var RecipesPageModule = function RecipesPageModule() {
      _classCallCheck(this, RecipesPageModule);
    };

    RecipesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _recipes_routing_module__WEBPACK_IMPORTED_MODULE_5__["RecipesPageRoutingModule"]],
      declarations: [_recipes_page__WEBPACK_IMPORTED_MODULE_6__["RecipesPage"]]
    })], RecipesPageModule);
    /***/
  },

  /***/
  "./src/app/recipes/recipes.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/recipes/recipes.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppRecipesRecipesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-title {\n  color: #111;\n  font-family: \"Helvetica Neue\", sans-serif;\n  font-size: 30px;\n  font-weight: bold;\n  letter-spacing: -1px;\n  line-height: 1.5;\n  text-align: center;\n  background-color: #f38219;\n}\n\n.recipe-thumb {\n  --border-radius: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjaXBlcy9DOlxcVXNlcnNcXEJvc3N1bHRhblxcRGVza3RvcFxcaW9uaWMtYW5ndWxhci1jb3Vyc2Uvc3JjXFxhcHBcXHJlY2lwZXNcXHJlY2lwZXMucGFnZS5zY3NzIiwic3JjL2FwcC9yZWNpcGVzL3JlY2lwZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLHlDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUNDSjs7QURFQTtFQUNJLHFCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9yZWNpcGVzL3JlY2lwZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxlIHtcclxuICAgIGNvbG9yOiAjMTExO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZjM4MjE5O1xyXG59XHJcblxyXG4ucmVjaXBlLXRodW1iIHtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMTVweDtcclxufVxyXG4iLCJpb24tdGl0bGUge1xuICBjb2xvcjogIzExMTtcbiAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzODIxOTtcbn1cblxuLnJlY2lwZS10aHVtYiB7XG4gIC0tYm9yZGVyLXJhZGl1czogMTVweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/recipes/recipes.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/recipes/recipes.page.ts ***!
    \*****************************************/

  /*! exports provided: RecipesPage */

  /***/
  function srcAppRecipesRecipesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecipesPage", function () {
      return RecipesPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _recipes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./recipes.service */
    "./src/app/recipes/recipes.service.ts");

    var RecipesPage = /*#__PURE__*/function () {
      function RecipesPage(recipeServ, alertCtrler) {
        _classCallCheck(this, RecipesPage);

        this.recipeServ = recipeServ;
        this.alertCtrler = alertCtrler;
      }

      _createClass(RecipesPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.recipes = this.recipeServ.getAllRecipes();
        }
      }, {
        key: "setTitle",
        value: function setTitle(input) {
          var titleLength = input.length * 9;
          var titleToken = '-' + titleLength.toString() + 'px';
          this.recipeServ.setTitleLengthPx(titleToken);
          console.log('set in recipes page ' + titleToken);
        }
      }, {
        key: "deleteRecipe",
        value: function deleteRecipe(recId) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    console.log('suka');
                    _context.next = 3;
                    return this.alertCtrler.create({
                      cssClass: 'delete-alert alert-wrapper',
                      header: 'For real?',
                      message: 'You sure u wanna delete that?',
                      buttons: [{
                        text: 'Nah',
                        role: 'cancel'
                      }, {
                        text: 'Yeh',
                        handler: function handler() {
                          _this.recipeServ.deleteRecipe(recId);

                          _this.recipes = _this.recipeServ.getAllRecipes();
                        }
                      }]
                    });

                  case 3:
                    alert = _context.sent;
                    _context.next = 6;
                    return alert.present();

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return RecipesPage;
    }();

    RecipesPage.ctorParameters = function () {
      return [{
        type: _recipes_service__WEBPACK_IMPORTED_MODULE_3__["RecipesService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }];
    };

    RecipesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-recipes',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./recipes.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/recipes.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./recipes.page.scss */
      "./src/app/recipes/recipes.page.scss"))["default"]]
    })], RecipesPage);
    /***/
  }
}]);
//# sourceMappingURL=recipes-recipes-module-es5.js.map