"use strict";
(self["webpackChunkTestAngular"] = self["webpackChunkTestAngular"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_component_unit_test_component_unit_test_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/component-unit-test/component-unit-test.component */ 5357);
/* harmony import */ var _components_get_azure_adtoken_get_azure_adtoken_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/get-azure-adtoken/get-azure-adtoken.component */ 7497);
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ 8263);
/* harmony import */ var _components_test_canvas_drawing_test_canvas_drawing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/test-canvas-drawing/test-canvas-drawing.component */ 2913);
/* harmony import */ var _components_test_directives_test_directives_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/test-directives/test-directives.component */ 3229);
/* harmony import */ var _components_test_file_upload_test_file_upload_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/test-file-upload/test-file-upload.component */ 2682);
/* harmony import */ var _components_test_google_maps_test_google_maps_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/test-google-maps/test-google-maps.component */ 9821);
/* harmony import */ var _components_test_image_magnifier_test_image_magnifier_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/test-image-magnifier/test-image-magnifier.component */ 4070);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);











const routes = [
    {
        path: 'home',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'directives',
        component: _components_test_directives_test_directives_component__WEBPACK_IMPORTED_MODULE_4__.TestDirectivesComponent
    },
    {
        path: 'login',
        component: _components_get_azure_adtoken_get_azure_adtoken_component__WEBPACK_IMPORTED_MODULE_1__.GetAzureADTokenComponent
    },
    {
        path: 'fileupload',
        component: _components_test_file_upload_test_file_upload_component__WEBPACK_IMPORTED_MODULE_5__.TestFileUploadComponent
    },
    {
        path: 'canvasdrawing',
        component: _components_test_canvas_drawing_test_canvas_drawing_component__WEBPACK_IMPORTED_MODULE_3__.TestCanvasDrawingComponent
    },
    {
        path: 'googlemaps',
        component: _components_test_google_maps_test_google_maps_component__WEBPACK_IMPORTED_MODULE_6__.TestGoogleMapsComponent
    },
    {
        path: 'imagmagnifier',
        component: _components_test_image_magnifier_test_image_magnifier_component__WEBPACK_IMPORTED_MODULE_7__.TestImageMagnifierComponent
    },
    {
        path: 'componentunittests',
        component: _components_component_unit_test_component_unit_test_component__WEBPACK_IMPORTED_MODULE_0__.ComponentUnitTestComponent
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class AppComponent {
    constructor() {
        this.title = 'TestAngular';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _components_test_mat_tables_test_mat_tables_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/test-mat-tables/test-mat-tables.component */ 7479);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ 8263);
/* harmony import */ var _components_test_directives_test_directives_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/test-directives/test-directives.component */ 3229);
/* harmony import */ var _directives_change_color_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directives/change-color.directive */ 6794);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _components_get_azure_adtoken_get_azure_adtoken_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/get-azure-adtoken/get-azure-adtoken.component */ 7497);
/* harmony import */ var _components_test_file_upload_test_file_upload_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/test-file-upload/test-file-upload.component */ 2682);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _components_test_canvas_drawing_test_canvas_drawing_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/test-canvas-drawing/test-canvas-drawing.component */ 2913);
/* harmony import */ var _components_test_photo_capture_test_photo_capture_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/test-photo-capture/test-photo-capture.component */ 4798);
/* harmony import */ var _components_test_google_maps_test_google_maps_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/test-google-maps/test-google-maps.component */ 9821);
/* harmony import */ var _angular_google_maps__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/google-maps */ 3889);
/* harmony import */ var ng2_canvas_whiteboard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng2-canvas-whiteboard */ 8550);
/* harmony import */ var _components_test_image_magnifier_test_image_magnifier_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/test-image-magnifier/test-image-magnifier.component */ 4070);
/* harmony import */ var ng_img_magnifier__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ng-img-magnifier */ 3695);
/* harmony import */ var _components_test_liveswitch_sdk_test_liveswitch_sdk_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/test-liveswitch-sdk/test-liveswitch-sdk.component */ 693);
/* harmony import */ var _components_unit_test_componenet_unit_test_componenet_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/unit-test-componenet/unit-test-componenet.component */ 5548);
/* harmony import */ var _components_component_unit_test_component_unit_test_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/component-unit-test/component-unit-test.component */ 5357);
/* harmony import */ var _directives_directive_unit_test_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./directives/directive-unit-test.directive */ 3776);
/* harmony import */ var _pipes_to_upper_case_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pipes/to-upper-case.pipe */ 5825);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 2560);























//import { WebUnitTestingPrototypeComponent } from './components/web-unit-testing-prototype/web-unit-testing-prototype.component';






class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjector"]({ providers: [ng2_canvas_whiteboard__WEBPACK_IMPORTED_MODULE_18__.CanvasWhiteboardShapeService], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__.BrowserAnimationsModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_21__.MatTableModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_22__.MatCardModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_23__.MatButtonModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_24__.MatListModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__.MatIconModule,
        // MsalModule.forRoot(new PublicClientApplication({
        //   auth: {
        //     clientId: 'Enter_the_Application_Id_here', // Application (client) ID from the app registration
        //     authority: 'Enter_the_Cloud_Instance_Id_Here/Enter_the_Tenant_Info_Here', // The Azure cloud instance and the app's sign-in audience (tenant ID, common, organizations, or consumers)
        //     redirectUri: 'Enter_the_Redirect_Uri_Here'// This is your redirect URI
        //   },
        //   cache: {
        //     cacheLocation: 'localStorage',
        //     //storeAuthStateInCookie: isIE, // Set to true for Internet Explorer 11
        //   }
        // }), null, null),
        _angular_google_maps__WEBPACK_IMPORTED_MODULE_26__.GoogleMapsModule,
        ng2_canvas_whiteboard__WEBPACK_IMPORTED_MODULE_18__.CanvasWhiteboardModule,
        ng_img_magnifier__WEBPACK_IMPORTED_MODULE_27__.ImgMagnifier,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_28__.HttpClientModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _components_test_mat_tables_test_mat_tables_component__WEBPACK_IMPORTED_MODULE_2__.TestMatTablesComponent,
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__.HomeComponent,
        _components_test_directives_test_directives_component__WEBPACK_IMPORTED_MODULE_4__.TestDirectivesComponent,
        _directives_change_color_directive__WEBPACK_IMPORTED_MODULE_5__.ChangeColorDirective,
        _components_get_azure_adtoken_get_azure_adtoken_component__WEBPACK_IMPORTED_MODULE_6__.GetAzureADTokenComponent,
        _components_test_file_upload_test_file_upload_component__WEBPACK_IMPORTED_MODULE_7__.TestFileUploadComponent,
        _components_test_canvas_drawing_test_canvas_drawing_component__WEBPACK_IMPORTED_MODULE_8__.TestCanvasDrawingComponent,
        _components_test_photo_capture_test_photo_capture_component__WEBPACK_IMPORTED_MODULE_9__.TestPhotoCaptureComponent,
        _components_test_google_maps_test_google_maps_component__WEBPACK_IMPORTED_MODULE_10__.TestGoogleMapsComponent,
        _components_test_image_magnifier_test_image_magnifier_component__WEBPACK_IMPORTED_MODULE_11__.TestImageMagnifierComponent,
        _components_test_liveswitch_sdk_test_liveswitch_sdk_component__WEBPACK_IMPORTED_MODULE_12__.TestLiveswitchSdkComponent,
        //WebUnitTestingPrototypeComponent,
        _components_unit_test_componenet_unit_test_componenet_component__WEBPACK_IMPORTED_MODULE_13__.UnitTestComponenetComponent,
        _components_component_unit_test_component_unit_test_component__WEBPACK_IMPORTED_MODULE_14__.ComponentUnitTestComponent,
        _directives_directive_unit_test_directive__WEBPACK_IMPORTED_MODULE_15__.DirectiveUnitTestDirective,
        _pipes_to_upper_case_pipe__WEBPACK_IMPORTED_MODULE_16__.ToUpperCasePipe], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__.BrowserAnimationsModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_21__.MatTableModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_22__.MatCardModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_23__.MatButtonModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_24__.MatListModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__.MatIconModule,
        // MsalModule.forRoot(new PublicClientApplication({
        //   auth: {
        //     clientId: 'Enter_the_Application_Id_here', // Application (client) ID from the app registration
        //     authority: 'Enter_the_Cloud_Instance_Id_Here/Enter_the_Tenant_Info_Here', // The Azure cloud instance and the app's sign-in audience (tenant ID, common, organizations, or consumers)
        //     redirectUri: 'Enter_the_Redirect_Uri_Here'// This is your redirect URI
        //   },
        //   cache: {
        //     cacheLocation: 'localStorage',
        //     //storeAuthStateInCookie: isIE, // Set to true for Internet Explorer 11
        //   }
        // }), null, null),
        _angular_google_maps__WEBPACK_IMPORTED_MODULE_26__.GoogleMapsModule,
        ng2_canvas_whiteboard__WEBPACK_IMPORTED_MODULE_18__.CanvasWhiteboardModule,
        ng_img_magnifier__WEBPACK_IMPORTED_MODULE_27__.ImgMagnifier,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_28__.HttpClientModule] }); })();


/***/ }),

/***/ 5357:
/*!*********************************************************************************!*\
  !*** ./src/app/components/component-unit-test/component-unit-test.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentUnitTestComponent": () => (/* binding */ ComponentUnitTestComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/users.service */ 4961);
/* harmony import */ var _directives_directive_unit_test_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../directives/directive-unit-test.directive */ 3776);
/* harmony import */ var _pipes_to_upper_case_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pipes/to-upper-case.pipe */ 5825);




//import { User } from '../../models/user.model';
class ComponentUnitTestComponent {
    constructor(userService) {
        this.userService = userService;
        this.title = '';
        this.userId = 36112007;
        this.counterPartTitle = '';
        this.loggedInUser = {
            "id": 1,
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz",
            "address": {
                "street": "Kulas Light",
                "suite": "Apt. 556",
                "city": "Gwenborough",
                "zipcode": "92998-3874",
                "geo": {
                    "lat": "-37.3159",
                    "lng": "81.1496"
                }
            },
            "phone": "1-770-736-8031 x56442",
            "website": "hildegard.org",
            "company": {
                "name": "Romaguera-Crona",
                "catchPhrase": "Multi-layered client-server neural-net",
                "bs": "harness real-time e-markets"
            }
        };
        this.users = new Array();
        this.title = "component unit testing";
    }
    ngOnInit() {
        this.loggedInUser = this.userService.getUserInfor(this.userId);
        this.userService.setTestUserAge(20);
    }
    getUserAge() {
        return this.userService.userAge; //25
    }
    getAllUsers() {
        let operation = "users";
        this.userService.getUsers(operation).subscribe((users) => {
            this.users = users;
            console.log("Users>>> " + JSON.stringify(this.users));
        });
    }
}
ComponentUnitTestComponent.ɵfac = function ComponentUnitTestComponent_Factory(t) { return new (t || ComponentUnitTestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_users_service__WEBPACK_IMPORTED_MODULE_0__.UsersService)); };
ComponentUnitTestComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ComponentUnitTestComponent, selectors: [["app-component-unit-test"]], decls: 9, vars: 3, consts: [["appDirectiveUnitTest", "", 1, "first_header"], [3, "click"]], template: function ComponentUnitTestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "toUpperCase");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div")(5, "ul")(6, "li")(7, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ComponentUnitTestComponent_Template_button_click_7_listener() { return ctx.getAllUsers(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Get users");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 1, ctx.title));
    } }, dependencies: [_directives_directive_unit_test_directive__WEBPACK_IMPORTED_MODULE_1__.DirectiveUnitTestDirective, _pipes_to_upper_case_pipe__WEBPACK_IMPORTED_MODULE_2__.ToUpperCasePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wb25lbnQtdW5pdC10ZXN0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 7497:
/*!*****************************************************************************!*\
  !*** ./src/app/components/get-azure-adtoken/get-azure-adtoken.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetAzureADTokenComponent": () => (/* binding */ GetAzureADTokenComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class GetAzureADTokenComponent {
    constructor() { }
    ngOnInit() {
    }
}
GetAzureADTokenComponent.ɵfac = function GetAzureADTokenComponent_Factory(t) { return new (t || GetAzureADTokenComponent)(); };
GetAzureADTokenComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GetAzureADTokenComponent, selectors: [["app-get-azure-adtoken"]], decls: 2, vars: 0, template: function GetAzureADTokenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "get-azure-adtoken works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnZXQtYXp1cmUtYWR0b2tlbi5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 8263:
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 833);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/users.service */ 4961);
/* harmony import */ var src_app_services_browser_detection_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/browser-detection.service */ 1461);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/list */ 6517);








class HomeComponent {
    // constructor(private router:Router) { }
    constructor(router, user, browserDetection) {
        this.router = router;
        this.user = user;
        this.browserDetection = browserDetection;
        this.targetAction = '';
        this.allUsers = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable();
        this.userBrowserInfor = {};
    }
    ngOnInit() {
    }
    processTest(test) {
        this.targetAction = test;
        switch (test) {
            case 'directives':
                this.router.navigate(['directives']);
                break;
            case 'login':
                this.router.navigate(['login']);
                break;
            case 'fileupload':
                this.router.navigate(['fileupload']);
                break;
            case 'canvasdrawing':
                this.router.navigate(['canvasdrawing']);
                break;
            case 'googlemaps':
                this.router.navigate(['googlemaps']);
                break;
            case 'imagmagnifier':
                this.router.navigate(['imagmagnifier']);
                break;
            case 'componentunittests':
                this.router.navigate(['componentunittests']);
                break;
            case 'browserdetection':
                //this.router.navigate(['browserdetection']);
                console.log("Browser infor is>>> " + JSON.stringify(this.browserDetection.getDeviceInfo()));
                break;
            default: {
            }
        }
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_users_service__WEBPACK_IMPORTED_MODULE_0__.UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_browser_detection_service__WEBPACK_IMPORTED_MODULE_1__.BrowserDetectionService)); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 34, vars: 0, consts: [["mat-raised-button", "", "color", "primary", 3, "click"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-card")(1, "mat-card-header")(2, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Test Angular ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Test angular concepts");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-card-content")(7, "mat-list")(8, "mat-list-item")(9, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_9_listener() { return ctx.processTest("directives"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Test Directives");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "mat-list-item")(12, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_12_listener() { return ctx.processTest("fileupload"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Test File Upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "mat-list-item")(15, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_15_listener() { return ctx.processTest("canvasdrawing"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Test Canvas Drawing");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "mat-list-item")(18, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_18_listener() { return ctx.processTest("photocapture"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Test Photo Capture");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "mat-list-item")(21, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_21_listener() { return ctx.processTest("googlemaps"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Test Google maps");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "mat-list-item")(24, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_24_listener() { return ctx.processTest("imagmagnifier"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Test Image Magnifier");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "mat-list-item")(27, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_27_listener() { return ctx.processTest("componentunittests"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Component unit tests");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "mat-list-item")(30, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_30_listener() { return ctx.processTest("browserdetection"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "Browser/Device detection");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "mat-card-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, " written by Zyler ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } }, dependencies: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardFooter, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_list__WEBPACK_IMPORTED_MODULE_7__.MatList, _angular_material_list__WEBPACK_IMPORTED_MODULE_7__.MatListItem], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 2913:
/*!*********************************************************************************!*\
  !*** ./src/app/components/test-canvas-drawing/test-canvas-drawing.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestCanvasDrawingComponent": () => (/* binding */ TestCanvasDrawingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var ng2_canvas_whiteboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-canvas-whiteboard */ 8550);
/* harmony import */ var src_app_services_rectangle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/rectangle */ 8958);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/list */ 6517);







const _c0 = ["layer1"];
const _c1 = ["buffercanvas"];
const _c2 = ["canvasWhiteboard"];
class TestCanvasDrawingComponent {
    constructor(canvasWhiteboardShapeService) {
        this.canvasWhiteboardShapeService = canvasWhiteboardShapeService;
        this.drawItems = [];
        this.originalItems = [];
        this.count = 0;
        //@Input('CanvasHeight') CanvasHeight:number = 250;
        //@Input('CanvasWidth') CanvasWidth:number = 300;
        this.CanvasHeight = 400;
        this.CanvasWidth = 400;
        this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.taggedItem = "";
        this.showInput = false;
        this.isMoving = false;
        this.imgWidth = 0;
        this.initX = 0;
        this.initY = 0;
        this.imgHeight = 0;
        this.url = '';
        this.originalImageWidth = 0;
        this.originalImageHeight = 0;
        this.hRatio = 0;
        this.vRatio = 0;
        this.translatePos = { x: this.CanvasWidth / 2, y: this.CanvasHeight / 2 };
        this.scale = 1.0;
        this.scaleMultiplier = 0.8;
        this.detectionSectors = new Array();
        this.testImage = "https://www.tutorialspoint.com/assets/questions/media/426142-1668760872.png";
        this.canvasOptions = {
            strokeColor: "green",
            shouldDownloadDrawing: true,
            scaleFactor: 1.8,
            imageUrl: this.testImage
        };
        this.canvasWhiteboardShapeOptions = new ng2_canvas_whiteboard__WEBPACK_IMPORTED_MODULE_2__.CanvasWhiteboardShapeOptions();
        this.myRect = new src_app_services_rectangle__WEBPACK_IMPORTED_MODULE_0__.Rectangle();
    }
    ngOnInit() {
        this.detectionSectors.push({ xCordOffset: 150, yCordOffset: 40 });
        this.detectionSectors.push({ xCordOffset: 50, yCordOffset: 100 });
        this.detectionSectors.push({ xCordOffset: 180, yCordOffset: 130 });
        //this.imageLoad();
    }
    ngAfterViewInit() {
        // this.imageLoad();
        this.whiteBoardCanvas = this.canvasWtboard.nativeElement;
        this.whiteBoardCtx = this.whiteBoardCanvas.getContext("2d");
        this.canvasWhiteboardShapeService.registerShape(src_app_services_rectangle__WEBPACK_IMPORTED_MODULE_0__.Rectangle);
        this.drawRects();
    }
    imageLoaded(event) {
        console.log("Image Loaded..." + JSON.stringify(event));
    }
    zoomIn() {
        console.log("zooming in");
        this.scale /= this.scaleMultiplier;
        //this.showImage();
        this.redrawCanvas();
    }
    zoomOut() {
        console.log("zooming out");
        this.scale *= this.scaleMultiplier;
        //this.showImage();
        this.redrawCanvas();
    }
    //load image
    // This image initializes the image abd sets h and w of the canvas element
    imageLoad() {
        this.image = new Image(400, 400);
        this.image.src = "https://i.ibb.co/12TJSNy/patio.jpg";
        this.image.onload = () => {
            console.log(this.CanvasWidth, this.CanvasHeight);
            console.log(this.image.width, this.image.height);
            this.originalImageWidth = this.image.width; //400
            this.originalImageHeight = this.image.height; //400
            //this.image.width = this.CanvasWidth;
            //this.image.height = this.CanvasHeight;
            this.hRatio = this.originalImageWidth / this.CanvasWidth;
            this.vRatio = this.originalImageHeight / this.CanvasHeight;
            this.canvas = this.layer1Canvas.nativeElement;
            this.context = this.canvas.getContext('2d');
            this.bfCanvas = this.bufferCanvas.nativeElement;
            this.bufferCtx = this.bfCanvas.getContext('2d');
            this.bfCanvas.width = this.image.width;
            this.bfCanvas.height = this.image.height;
            this.showImage();
        };
    }
    showImage() {
        this.count++;
        //this.layer1CanvasElement = this.layer1Canvas.nativeElement;
        // this.context = this.layer1CanvasElement.getContext("2d");
        this.bufferCtx.clearRect(0, 0, this.CanvasWidth, this.CanvasHeight);
        this.bufferCtx.save();
        this.bufferCtx.translate(this.translatePos.x, this.translatePos.y);
        this.bufferCtx.scale(this.scale, this.scale);
        this.bufferCtx.drawImage(this.image, 0, 0, this.image.width, this.image.height);
        this.bufferCtx.restore();
        // let parent = this;
        //if(this.count==1){
        this.bfCanvas.addEventListener("mousedown", (e) => {
            this.isMoving = true;
            this.initX = e.offsetX;
            this.initY = e.offsetY;
        });
        this.bfCanvas.addEventListener("mouseup", (e) => {
            this.isMoving = false;
            this.showInput = true;
            //this.drawRect("red", e.offsetX - this.initX, e.offsetY - this.initY, 0);
            this.uniX = undefined;
            this.uniY = undefined;
        });
        //}
        this.bfCanvas.addEventListener("mousemove", (e) => {
            if (this.isMoving) {
                this.drawRect("red", e.offsetX - this.initX, e.offsetY - this.initY, 0);
            }
        });
        this.drawRect("red", 0, 0, 1);
    }
    //Draw rectangle
    drawRect(color = "black", height, width, flag) {
        if (this.uniX | flag) {
            this.bufferCtx.clearRect(0, 0, this.CanvasWidth, this.CanvasHeight);
            this.bufferCtx.save();
            this.bufferCtx.translate(this.translatePos.x, this.translatePos.y);
            this.bufferCtx.scale(this.scale, this.scale);
            this.bufferCtx.drawImage(this.image, 0, 0, this.image.width, this.image.height);
            this.bufferCtx.restore();
        }
        // console.log(this.image.width, this.image.height)
        this.uniX = height;
        this.uniY = width;
        this.uniX2 = height;
        this.uniY2 = width;
        this.bufferCtx.beginPath();
        this.bufferCtx.strokeStyle = "#FF0000";
        this.detectionSectors.forEach((sector) => {
            let al = { state: "normal", temps: "max" };
            this.bufferCtx.strokeRect(sector.xCordOffset, sector.yCordOffset, 100, 50); //vals from Thomas
            this.bufferCtx.fillStyle = "red";
            this.bufferCtx.fillText("State: " + al.state, sector.xCordOffset, sector.yCordOffset - 20);
            this.bufferCtx.fillText("Temperatures: " + al.temps, sector.xCordOffset, sector.yCordOffset - 10);
        });
        this.context.drawImage(this.bfCanvas, 0, 0);
    }
    //redraw canvas
    redrawCanvas() {
        //this.scale *= this.scaleMultiplier;
        this.bufferCtx.clearRect(0, 0, this.CanvasWidth, this.CanvasHeight);
        this.bufferCtx.save();
        this.bufferCtx.translate(this.translatePos.x, this.translatePos.y);
        this.bufferCtx.scale(this.scale, this.scale);
        this.bufferCtx.drawImage(this.image, 0, 0, this.image.width, this.image.height);
        this.bufferCtx.restore();
        //add events
        //cont
        this.bufferCtx.beginPath();
        this.bufferCtx.strokeStyle = "#FF0000";
        this.detectionSectors.forEach((sector) => {
            let al = { state: "normal", temps: "max" };
            this.bufferCtx.strokeRect(sector.xCordOffset, sector.yCordOffset, 100, 50); //vals from Thomas
            this.bufferCtx.fillStyle = "red";
            this.bufferCtx.fillText("State: " + al.state, sector.xCordOffset, sector.yCordOffset - 20);
            this.bufferCtx.fillText("Temperatures: " + al.temps, sector.xCordOffset, sector.yCordOffset - 10);
        });
        this.context.drawImage(this.bfCanvas, 0, 0);
    }
    //Draw rectangles
    drawRects() {
        //context
        this.detectionSectors.forEach((sector) => {
            let rect = new src_app_services_rectangle__WEBPACK_IMPORTED_MODULE_0__.Rectangle();
            this.canvasWhiteboardShapeOptions.strokeStyle = "blue";
            rect = new src_app_services_rectangle__WEBPACK_IMPORTED_MODULE_0__.Rectangle(new ng2_canvas_whiteboard__WEBPACK_IMPORTED_MODULE_2__.CanvasWhiteboardPoint(sector.xCordOffset, sector.yCordOffset), this.canvasWhiteboardShapeOptions);
            rect.draw(this.whiteBoardCtx);
        });
    }
}
TestCanvasDrawingComponent.ɵfac = function TestCanvasDrawingComponent_Factory(t) { return new (t || TestCanvasDrawingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng2_canvas_whiteboard__WEBPACK_IMPORTED_MODULE_2__.CanvasWhiteboardShapeService)); };
TestCanvasDrawingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TestCanvasDrawingComponent, selectors: [["app-test-canvas-drawing"]], viewQuery: function TestCanvasDrawingComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.layer1Canvas = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.bufferCanvas = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.canvasWtboard = _t.first);
    } }, outputs: { selected: "selected" }, decls: 10, vars: 1, consts: [["canvasWhiteboard", ""], [3, "options", "onImageLoaded"], ["mat-raised-button", "", "color", "primary", 3, "click"]], template: function TestCanvasDrawingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "canvas", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "canvas-whiteboard", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onImageLoaded", function TestCanvasDrawingComponent_Template_canvas_whiteboard_onImageLoaded_2_listener($event) { return ctx.imageLoaded($event.target); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-list")(4, "mat-list-item")(5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TestCanvasDrawingComponent_Template_button_click_5_listener() { return ctx.zoomIn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Zoom in");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-list-item")(8, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TestCanvasDrawingComponent_Template_button_click_8_listener() { return ctx.zoomOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Zoom out");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.canvasOptions);
    } }, dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_material_list__WEBPACK_IMPORTED_MODULE_4__.MatList, _angular_material_list__WEBPACK_IMPORTED_MODULE_4__.MatListItem, ng2_canvas_whiteboard__WEBPACK_IMPORTED_MODULE_2__.CanvasWhiteboardComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXN0LWNhbnZhcy1kcmF3aW5nLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 3229:
/*!*************************************************************************!*\
  !*** ./src/app/components/test-directives/test-directives.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestDirectivesComponent": () => (/* binding */ TestDirectivesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _directives_change_color_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../directives/change-color.directive */ 6794);



class TestDirectivesComponent {
    constructor() { }
    ngOnInit() {
    }
}
TestDirectivesComponent.ɵfac = function TestDirectivesComponent_Factory(t) { return new (t || TestDirectivesComponent)(); };
TestDirectivesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TestDirectivesComponent, selectors: [["app-test-directives"]], decls: 13, vars: 0, consts: [["appChangeColor", ""]], template: function TestDirectivesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-list")(1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Goat players");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-list-item", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Ronaldo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-list-item", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Messi");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-list-item", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Neymar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-list-item", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Mbappe");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-list-item", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Modric");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } }, dependencies: [_angular_material_list__WEBPACK_IMPORTED_MODULE_2__.MatList, _angular_material_list__WEBPACK_IMPORTED_MODULE_2__.MatListItem, _directives_change_color_directive__WEBPACK_IMPORTED_MODULE_0__.ChangeColorDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXN0LWRpcmVjdGl2ZXMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 2682:
/*!***************************************************************************!*\
  !*** ./src/app/components/test-file-upload/test-file-upload.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestFileUploadComponent": () => (/* binding */ TestFileUploadComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 7822);




class TestFileUploadComponent {
    constructor() {
        this.fuPlaceholder = 'No files chosen';
        this.url = "";
    }
    ngOnInit() {
    }
    processUploadedFile(event) {
        console.log("Uploaded file is: " + JSON.stringify(event.target.value));
        //console.log(event.target.value)
        let mimeType = event.target.files[0].type;
        if (!event.target.files[0] || event.target.files[0].length == 0) {
            console.log("Sio file....");
            alert("You must choose a file.");
        }
        else if (mimeType.match(/image\/*/) == null) {
            console.log("Si image....");
            alert("File must be an image!");
        }
        else {
            console.log("Iko sawa....");
            let fileReader = new FileReader();
            fileReader.readAsDataURL(event.target.files[0]);
            fileReader.onload = (eve) => {
                this.url = fileReader.result;
            };
            console.log("results is: " + fileReader.result);
            console.log("Image url issss: " + JSON.stringify(this.url));
        }
    }
}
TestFileUploadComponent.ɵfac = function TestFileUploadComponent_Factory(t) { return new (t || TestFileUploadComponent)(); };
TestFileUploadComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TestFileUploadComponent, selectors: [["app-test-file-upload"]], decls: 12, vars: 2, consts: [["type", "file", 1, "file_upload_butt", 3, "input"], ["fileUpload", ""], ["readonly", "", 3, "placeholder"], ["mat-mini-fab", "", "color", "primary", 1, "upload-btn", 3, "click"], ["alt", "image", "width", "400px", "height", "400px", 3, "src"]], template: function TestFileUploadComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card")(1, "mat-card-header")(2, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "File Upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content")(5, "input", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function TestFileUploadComponent_Template_input_input_5_listener($event) { return ctx.processUploadedFile($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TestFileUploadComponent_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](_r0.click()); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "attach_file");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx.fuPlaceholder);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, dependencies: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardTitle, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon], styles: [".file_upload_butt[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QtZmlsZS11cGxvYWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxhQUFBO0FBQUoiLCJmaWxlIjoidGVzdC1maWxlLXVwbG9hZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uZmlsZV91cGxvYWRfYnV0dHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 9821:
/*!***************************************************************************!*\
  !*** ./src/app/components/test-google-maps/test-google-maps.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestGoogleMapsComponent": () => (/* binding */ TestGoogleMapsComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _angular_google_maps__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/google-maps */ 3889);









function TestGoogleMapsComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 2)(2, "google-map", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "map-marker", 4)(4, "map-marker", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r0.mapOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("position", ctx_r0.sampleFirstMarkerPos);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("position", ctx_r0.sampleSecondMarkerPos);
} }
//import as '../../../environments/environment';
// import '@types/google.maps';
//import { google } from "google-maps";
class TestGoogleMapsComponent {
    constructor(http) {
        this.http = http;
        this.sampleCoord = new Array();
        //aa:google.maps.geometry.
        this.directionsService = new google.maps.DirectionsService();
        this.sampleFirstMarkerPos = { lat: -1.198848542045613, lng: 36.87396347486188 }; //Githurai 44
        this.sampleSecondMarkerPos = { lat: -1.3268077503358393, lng: 36.87396347486188 }; //Imara daima
        this.currentuserlocation = false;
        this.currentUserLocation = { lat: 0, lng: 0 };
        this.currentuserlocation = true;
        //nb. longitude => x-axis, latitude => y-axis
        this.sampleCoord.push({ name: "garden city mall", long: 36.8782713029769, lat: -1.221912368984167, pos: { lat: -1.221912368984167, lng: 36.8782713029769 } });
        this.sampleCoord.push({ name: "buffalo pub wangige", long: 36.712920987942354, lat: -1.2182989695224158, pos: { lat: -1.2182989695224158, lng: 36.712920987942354 } });
        this.mapOptions = { center: { lat: 40, lng: -20 }, zoom: 0 };
        //alert(this.distanceBetweenTwoPoints(this.sampleCoord[0].pos,this.sampleCoord[1].pos));
    }
    ngOnInit() {
        this.testDirectionsService();
    }
    //Return the shortest path btn two points (in Meters)
    //In real transportation scenarion consider capturing distances based on the passages like ROADS.
    distanceBetweenTwoPoints(pointA, pointB) {
        return google.maps.geometry.spherical.computeDistanceBetween(pointA, pointB);
    }
    //Test the Directions API.
    //Hit the DirectionsService service
    testDirectionsService() {
        let origin = new google.maps.LatLng(-1.221912368984167, 36.8782713029769);
        let destination = new google.maps.LatLng(-1.2182989695224158, 36.712920987942354);
        let directionRequest = {
            origin: origin,
            destination: destination,
            travelMode: google.maps.TravelMode.DRIVING,
            drivingOptions: {
                departureTime: new Date(Date.now()),
                trafficModel: google.maps.TrafficModel.OPTIMISTIC
            },
            // unitSystem: UnitSystem,
            // optimizeWaypoints: Boolean,
            // provideRouteAlternatives: Boolean,
            // avoidFerries: Boolean,
            // avoidHighways: Boolean,
            // avoidTolls: Boolean,
            region: "Kenya"
        };
        this.directionRequest = directionRequest;
        this.directionsService.route(this.directionRequest, (dirResults, dirStatus) => {
            console.log("Req result Routes are: " + JSON.stringify(dirResults?.routes[0].legs[0]));
        }).then((res) => {
            console.log(res);
        });
    }
    //
    processOperation(operation) {
        switch (operation) {
            case "currentuserlocation":
                // alert("Zyler")
                this.currentuserlocation = true;
                //this.getCurrentUserLocation();
                break;
            case "roadsbtnpoints":
                this.getRoadsBtnPoints().subscribe((roads) => {
                    console.log("Roads btn 2 points are: " + JSON.stringify(roads));
                });
                break;
            case "distancebtnpoints":
                this.getDistanceBtnPoints();
                break;
            case "sketchpathbtnpoints":
                this.sketchPathBtnPoints();
                break;
            default:
                alert("WTF");
                break;
        }
    }
    //Get current user Location
    getCurrentUserLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((success) => {
                let obj = success;
                console.log("Current location is: " + success.coords.latitude);
                this.currentUserLocation.lat = success.coords.latitude;
                this.currentUserLocation.lng = success.coords.longitude;
                //console.log("Current location is: " + JSON.stringify({arr:success}));
                this.currentuserlocation = true;
                this.updateMarkerPosition(this.currentUserLocation);
            }, (error) => {
                this.currentuserlocation = false;
                console.log("Error getting current user location >>>> Exact error:" + JSON.stringify(error));
            });
            // navigator.geolocation.getCurrentPosition(this.showPosition);
        }
        else {
            this.currentuserlocation = false;
            alert("Geolocation is not supported");
        }
    }
    //get all roads btn 2 points
    getRoadsBtnPoints() {
        let requestParams = `points=${this.sampleFirstMarkerPos.lat},${this.sampleFirstMarkerPos.lng}|${this.sampleSecondMarkerPos.lat},${this.sampleSecondMarkerPos.lng}`;
        let requestFullUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.roadsApiEndpoint + requestParams + `&key=${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.googleMapsApiKey}`;
        return this.http.get(requestFullUrl);
    }
    getDistanceBtnPoints() {
    }
    sketchPathBtnPoints() {
    }
    showPosition(pos) {
        console.log("Current location is: " + JSON.stringify(pos));
    }
    //Track user location and update the marker on the map
    trackUserLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.watchPosition((success) => {
                this.currentuserlocation = true;
                this.updateMarkerPosition(success);
            }, (error) => {
            });
        }
    }
    //updater marker position on map
    updateMarkerPosition(positionCoords) {
        let latLng = positionCoords;
        this.sampleFirstMarkerPos = latLng;
    }
}
TestGoogleMapsComponent.ɵfac = function TestGoogleMapsComponent_Factory(t) { return new (t || TestGoogleMapsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
TestGoogleMapsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TestGoogleMapsComponent, selectors: [["app-test-google-maps"]], decls: 19, vars: 1, consts: [["mat-raised-button", "", 3, "click"], [4, "ngIf"], [1, "my-google-map"], [3, "options"], [3, "position"]], template: function TestGoogleMapsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card")(1, "mat-card-header")(2, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Choose action");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-card-content")(5, "mat-list")(6, "mat-list-item")(7, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TestGoogleMapsComponent_Template_button_click_7_listener() { return ctx.processOperation("currentuserlocation"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Show current user location ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-list-item")(10, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TestGoogleMapsComponent_Template_button_click_10_listener() { return ctx.processOperation("roadsbtnpoints"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Roads btn the points ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-list-item")(13, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TestGoogleMapsComponent_Template_button_click_13_listener() { return ctx.processOperation("distancebtnpoints"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Distance btn the points ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-list-item")(16, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TestGoogleMapsComponent_Template_button_click_16_listener() { return ctx.processOperation("sketchpathbtnpoints"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Sketch the path btn the points ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, TestGoogleMapsComponent_div_18_Template, 5, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.currentuserlocation);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardTitle, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_material_list__WEBPACK_IMPORTED_MODULE_6__.MatList, _angular_material_list__WEBPACK_IMPORTED_MODULE_6__.MatListItem, _angular_google_maps__WEBPACK_IMPORTED_MODULE_7__.GoogleMap, _angular_google_maps__WEBPACK_IMPORTED_MODULE_7__.MapMarker], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXN0LWdvb2dsZS1tYXBzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 4070:
/*!***********************************************************************************!*\
  !*** ./src/app/components/test-image-magnifier/test-image-magnifier.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestImageMagnifierComponent": () => (/* binding */ TestImageMagnifierComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var ng_img_magnifier__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-img-magnifier */ 3695);


class TestImageMagnifierComponent {
    constructor() { }
    ngOnInit() {
    }
}
TestImageMagnifierComponent.ɵfac = function TestImageMagnifierComponent_Factory(t) { return new (t || TestImageMagnifierComponent)(); };
TestImageMagnifierComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TestImageMagnifierComponent, selectors: [["app-test-image-magnifier"]], decls: 1, vars: 0, consts: [["thumbImage", "https://yoast.com/app/uploads/2015/10/ALTtag_FI.png", "fullImage", "https://yoast.com/app/uploads/2015/10/ALTtag_FI.png", "top", "30", "right", "1", "lensWidth", "100", "lensHeight", "100", "resultWidth", "35", "resultHeight", "55", "imgWidth", "500", "imgHeight", "250"]], template: function TestImageMagnifierComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ng-img-magnifier", 0);
    } }, dependencies: [ng_img_magnifier__WEBPACK_IMPORTED_MODULE_1__.NgImgMagnifierComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXN0LWltYWdlLW1hZ25pZmllci5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 693:
/*!*********************************************************************************!*\
  !*** ./src/app/components/test-liveswitch-sdk/test-liveswitch-sdk.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestLiveswitchSdkComponent": () => (/* binding */ TestLiveswitchSdkComponent)
/* harmony export */ });
/* harmony import */ var C_Users_KamsAdmin_PRJS_Angular_TestAngular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var fm_liveswitch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fm.liveswitch */ 2020);
/* harmony import */ var fm_liveswitch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fm_liveswitch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_models_liveswitch_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/liveswitch.config */ 4018);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);



 //import { LiveswitchConfig } from ''

class TestLiveswitchSdkComponent {
  constructor() {
    this.localMedia = null;
    this.config = new src_app_models_liveswitch_config__WEBPACK_IMPORTED_MODULE_2__.LiveswitchConfig();
    this.client = null; //The list of all the channels we are currently.

    this.channels = null;
    this.authToken = "";
  }

  ngOnInit() {
    //Create an instance of LocalMedia.
    this.localMediaContext();
  } //start local media context


  localMediaContext() {
    var _this = this;

    return (0,C_Users_KamsAdmin_PRJS_Angular_TestAngular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this.localMedia = new (fm_liveswitch__WEBPACK_IMPORTED_MODULE_1___default().LocalMedia)(false, {
          video: {
            width: {
              ideal: 640,
              max: 1920
            },
            height: {
              ideal: 480,
              max: 1080
            }
          }
        }); //enable screen sharing

        yield _this.localMedia.start();
      } catch (error) {
        console.log("Unable to start the local media context!");
      }
    })();
  } //create client and sign them up for signaling. This will connect the user to the Liveswitch gateway


  configureClient() {
    var _this2 = this;

    return (0,C_Users_KamsAdmin_PRJS_Angular_TestAngular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this2.config.gatewayUrl = "";
        _this2.config.applicationId = "";
        _this2.config.sharedSecret = "";
        _this2.config.deviceId = "zyleronliveswitch";
        _this2.config.userId = fm_liveswitch__WEBPACK_IMPORTED_MODULE_1___default().Guid.newGuid().toString();
        _this2.client = new (fm_liveswitch__WEBPACK_IMPORTED_MODULE_1___default().Client)(_this2.config.gatewayUrl, _this2.config.applicationId, _this2.config.userId, _this2.config.deviceId); //configure channel claims

        let primaryChannel = new (fm_liveswitch__WEBPACK_IMPORTED_MODULE_1___default().ChannelClaim)("myChannelId");
        primaryChannel.setDisableSendVideo(false);
        primaryChannel.setDisableSendAudio(false);
        let channelClaims = [primaryChannel]; // 2d.create a token (WARNING: THIS ALWAYS SHOULD BE DONE SERVER SIDE. CLIENT SIDE ONLY FOR THE DEMO!)

        _this2.authToken = fm_liveswitch__WEBPACK_IMPORTED_MODULE_1___default().Token.generateClientRegisterToken(_this2.client, channelClaims, _this2.config.sharedSecret); //register the client to the signalling server using our new token

        _this2.channels = yield _this2.client.register(_this2.authToken);

        if (_this2.channels === null) {
          throw new Error("Client register did not join any channels, you must join a channel to continue.");
        }
      } catch (clientGenException) {
        console.log("Error ctreating client: " + JSON.stringify(clientGenException));
      }
    })();
  }

}

TestLiveswitchSdkComponent.ɵfac = function TestLiveswitchSdkComponent_Factory(t) {
  return new (t || TestLiveswitchSdkComponent)();
};

TestLiveswitchSdkComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: TestLiveswitchSdkComponent,
  selectors: [["app-test-liveswitch-sdk"]],
  decls: 2,
  vars: 0,
  template: function TestLiveswitchSdkComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "test-liveswitch-sdk works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXN0LWxpdmVzd2l0Y2gtc2RrLmNvbXBvbmVudC5zY3NzIn0= */"]
});

/***/ }),

/***/ 7479:
/*!*************************************************************************!*\
  !*** ./src/app/components/test-mat-tables/test-mat-tables.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestMatTablesComponent": () => (/* binding */ TestMatTablesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ 5288);


function TestMatTablesComponent_mat_header_cell_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " telemetryId");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TestMatTablesComponent_mat_cell_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r15.telemetryId, "");
} }
function TestMatTablesComponent_mat_header_cell_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " companyId");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TestMatTablesComponent_mat_cell_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r16.companyId, "");
} }
function TestMatTablesComponent_mat_header_cell_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " assetId");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TestMatTablesComponent_mat_cell_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r17.assetId, "");
} }
function TestMatTablesComponent_mat_header_cell_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " assetType");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TestMatTablesComponent_mat_cell_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r18.assetType, "");
} }
function TestMatTablesComponent_mat_header_cell_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " dateCreated");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TestMatTablesComponent_mat_cell_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r19.dateCreated, "");
} }
function TestMatTablesComponent_mat_header_cell_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " timeSeriesKey");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TestMatTablesComponent_mat_cell_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r20.timeSeriesKey, "");
} }
function TestMatTablesComponent_mat_header_row_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-header-row");
} }
function TestMatTablesComponent_mat_row_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-row");
} }
class TestMatTablesComponent {
    constructor() {
        this.telemetriesData = new Array();
        this.tableColumns = [
            'telemetryId',
            'companyId',
            'assetId',
            'assetType',
            'dateCreated',
            'timeSeriesKey',
        ];
        this.columns = new Array();
        this.telemetriesData.push({ telemetryId: "tel001", companyId: "comp001", assetId: "as001", assetType: "typeone", dateCreated: "01/10/2022", timeSeriesKey: "01102022" });
        this.telemetriesData.push({ telemetryId: "tel002", companyId: "comp002", assetId: "as002", assetType: "typetwo", dateCreated: "01/10/2022", timeSeriesKey: "01102022" });
        this.telemetriesData.push({ telemetryId: "tel003", companyId: "comp003", assetId: "as003", assetType: "typethree", dateCreated: "01/10/2022", timeSeriesKey: "01102022" });
        this.telemetriesData.push({ telemetryId: "tel004", companyId: "comp004", assetId: "as004", assetType: "typefour", dateCreated: "01/10/2022", timeSeriesKey: "01102022" });
        this.telemetriesData.push({ telemetryId: "tel005", companyId: "comp005", assetId: "as005", assetType: "typefive", dateCreated: "01/10/2022", timeSeriesKey: "01102022" });
        this.telemetriesData.push({ telemetryId: "tel006", companyId: "comp006", assetId: "as006", assetType: "typesix", dateCreated: "01/10/2022", timeSeriesKey: "01102022" });
        this.telemetriesData.push({ telemetryId: "tel007", companyId: "comp007", assetId: "as007", assetType: "typeseven", dateCreated: "01/10/2022", timeSeriesKey: "01102022" });
        this.telemetriesData.push({ telemetryId: "tel008", companyId: "comp008", assetId: "as008", assetType: "typeone", dateCreated: "01/10/2022", timeSeriesKey: "01102022" });
        this.telemetriesData.push({ telemetryId: "tel009", companyId: "comp009", assetId: "as009", assetType: "typeone", dateCreated: "01/10/2022", timeSeriesKey: "01102022" });
        this.telemetriesData.push({ telemetryId: "tel010", companyId: "comp010", assetId: "as010", assetType: "typeone", dateCreated: "01/10/2022", timeSeriesKey: "01102022" });
        this.telemetriesData.push({ telemetryId: "tel011", companyId: "comp011", assetId: "as011", assetType: "typeone", dateCreated: "01/10/2022", timeSeriesKey: "01102022" });
        this.telemetriesData.push({ telemetryId: "tel012", companyId: "comp012", assetId: "as012", assetType: "typeone", dateCreated: "01/10/2022", timeSeriesKey: "01102022" });
        this.telemetriesData.push({ telemetryId: "tel013", companyId: "comp013", assetId: "as013", assetType: "typeone", dateCreated: "01/10/2022", timeSeriesKey: "01102022" });
        this.telemetriesData.push({ telemetryId: "tel014", companyId: "comp014", assetId: "as014", assetType: "typeone", dateCreated: "01/10/2022", timeSeriesKey: "01102022" });
        this.telemetriesData.push({ telemetryId: "tel015", companyId: "comp015", assetId: "as015", assetType: "typeone", dateCreated: "01/10/2022", timeSeriesKey: "01102022" });
    }
    ngOnInit() {
    }
}
TestMatTablesComponent.ɵfac = function TestMatTablesComponent_Factory(t) { return new (t || TestMatTablesComponent)(); };
TestMatTablesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TestMatTablesComponent, selectors: [["app-test-mat-tables"]], decls: 23, vars: 3, consts: [[1, "container"], ["matSort", "", 3, "dataSource"], ["table", ""], ["matColumnDef", "telemetryId"], ["mat-sort-header", "", 4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "companyId"], ["matColumnDef", "assetId"], ["matColumnDef", "assetType"], ["matColumnDef", "dateCreated"], ["matColumnDef", "timeSeriesKey"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], ["mat-sort-header", ""]], template: function TestMatTablesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "mat-table", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](3, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TestMatTablesComponent_mat_header_cell_4_Template, 2, 0, "mat-header-cell", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TestMatTablesComponent_mat_cell_5_Template, 2, 1, "mat-cell", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](6, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TestMatTablesComponent_mat_header_cell_7_Template, 2, 0, "mat-header-cell", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TestMatTablesComponent_mat_cell_8_Template, 2, 1, "mat-cell", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](9, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TestMatTablesComponent_mat_header_cell_10_Template, 2, 0, "mat-header-cell", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TestMatTablesComponent_mat_cell_11_Template, 2, 1, "mat-cell", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](12, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, TestMatTablesComponent_mat_header_cell_13_Template, 2, 0, "mat-header-cell", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, TestMatTablesComponent_mat_cell_14_Template, 2, 1, "mat-cell", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](15, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, TestMatTablesComponent_mat_header_cell_16_Template, 2, 0, "mat-header-cell", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, TestMatTablesComponent_mat_cell_17_Template, 2, 1, "mat-cell", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](18, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, TestMatTablesComponent_mat_header_cell_19_Template, 2, 0, "mat-header-cell", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, TestMatTablesComponent_mat_cell_20_Template, 2, 1, "mat-cell", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, TestMatTablesComponent_mat_header_row_21_Template, 1, 0, "mat-header-row", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, TestMatTablesComponent_mat_row_22_Template, 1, 0, "mat-row", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.telemetriesData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.tableColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.tableColumns);
    } }, dependencies: [_angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatRow], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXN0LW1hdC10YWJsZXMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 4798:
/*!*******************************************************************************!*\
  !*** ./src/app/components/test-photo-capture/test-photo-capture.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestPhotoCaptureComponent": () => (/* binding */ TestPhotoCaptureComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ 4522);


class TestPhotoCaptureComponent {
    constructor() { }
    ngOnInit() {
    }
    takePhoto() {
    }
}
TestPhotoCaptureComponent.ɵfac = function TestPhotoCaptureComponent_Factory(t) { return new (t || TestPhotoCaptureComponent)(); };
TestPhotoCaptureComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TestPhotoCaptureComponent, selectors: [["app-test-photo-capture"]], decls: 1, vars: 0, consts: [["mat-raised-button", "", 3, "click"]], template: function TestPhotoCaptureComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TestPhotoCaptureComponent_Template_button_click_0_listener() { return ctx.takePhoto(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatButton], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXN0LXBob3RvLWNhcHR1cmUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 5548:
/*!***********************************************************************************!*\
  !*** ./src/app/components/unit-test-componenet/unit-test-componenet.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnitTestComponenetComponent": () => (/* binding */ UnitTestComponenetComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class UnitTestComponenetComponent {
    constructor() { }
    ngOnInit() {
    }
}
UnitTestComponenetComponent.ɵfac = function UnitTestComponenetComponent_Factory(t) { return new (t || UnitTestComponenetComponent)(); };
UnitTestComponenetComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UnitTestComponenetComponent, selectors: [["app-unit-test-componenet"]], decls: 2, vars: 0, template: function UnitTestComponenetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "unit-test-componenet works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1bml0LXRlc3QtY29tcG9uZW5ldC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 6794:
/*!******************************************************!*\
  !*** ./src/app/directives/change-color.directive.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangeColorDirective": () => (/* binding */ ChangeColorDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);


class ChangeColorDirective {
    constructor(ele) {
        this.ele = ele;
    }
    onMouseEnter() {
        this.changeTextColor('red');
    }
    onMouseLeave() {
        this.changeTextColor('green');
    }
    changeTextColor(color) {
        this.ele.nativeElement.style.color = color;
    }
}
ChangeColorDirective.ɵfac = function ChangeColorDirective_Factory(t) { return new (t || ChangeColorDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef)); };
ChangeColorDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ChangeColorDirective, selectors: [["", "appChangeColor", ""]], hostBindings: function ChangeColorDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function ChangeColorDirective_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); })("mouseleave", function ChangeColorDirective_mouseleave_HostBindingHandler() { return ctx.onMouseLeave(); });
    } } });


/***/ }),

/***/ 3776:
/*!*************************************************************!*\
  !*** ./src/app/directives/directive-unit-test.directive.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DirectiveUnitTestDirective": () => (/* binding */ DirectiveUnitTestDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);


//This will act as an attribute directive
class DirectiveUnitTestDirective {
    constructor(ele) {
        this.ele = ele;
        this.headerColor = 'green';
        // this.ele.nativeElement.style.backgroundColor = this.headerColor;
        //this.ele.nativeElement.style.customProperty = true;
    }
    ngAfterViewInit() {
        this.ele.nativeElement.style.color = this.headerColor;
    }
    ngOnChanges() {
        this.ele.nativeElement.style.backgroundColor = this.headerColor;
    }
}
DirectiveUnitTestDirective.ɵfac = function DirectiveUnitTestDirective_Factory(t) { return new (t || DirectiveUnitTestDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef)); };
DirectiveUnitTestDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DirectiveUnitTestDirective, selectors: [["", "appDirectiveUnitTest", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });


/***/ }),

/***/ 4018:
/*!*********************************************!*\
  !*** ./src/app/models/liveswitch.config.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LiveswitchConfig": () => (/* binding */ LiveswitchConfig)
/* harmony export */ });
class LiveswitchConfig {
    constructor() {
        //global vars
        this.gatewayUrl = "";
        this.applicationId = "";
        this.sharedSecret = "";
        //Local vars
        this.userId = "";
        this.deviceId = "";
    }
}


/***/ }),

/***/ 5825:
/*!*********************************************!*\
  !*** ./src/app/pipes/to-upper-case.pipe.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToUpperCasePipe": () => (/* binding */ ToUpperCasePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class ToUpperCasePipe {
    constructor() {
        this.valueToTransform = 'kisee';
    }
    transform(value) {
        this.valueToTransform = value;
        return value.length === 0 ? '' :
            value.replace(/\w\S*/g, (txt => txt[0].toUpperCase() + txt.slice(1).toLowerCase()));
    }
}
ToUpperCasePipe.ɵfac = function ToUpperCasePipe_Factory(t) { return new (t || ToUpperCasePipe)(); };
ToUpperCasePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "toUpperCase", type: ToUpperCasePipe, pure: true });


/***/ }),

/***/ 1461:
/*!*******************************************************!*\
  !*** ./src/app/services/browser-detection.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrowserDetectionService": () => (/* binding */ BrowserDetectionService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-device-detector */ 7454);


class BrowserDetectionService {
    constructor(deviceDetector) {
        this.deviceDetector = deviceDetector;
    }
    getDeviceInfo() {
        let devPlatform = "";
        if (this.deviceDetector.isDesktop()) {
            devPlatform = "desktop";
        }
        else if (this.deviceDetector.isMobile()) {
            devPlatform = "mobile";
        }
        else if (this.deviceDetector.isTablet()) {
            devPlatform = "tablet";
        }
        else {
            devPlatform = "unknown";
        }
        this.deviceInfo = {
            browserName: this.deviceDetector.browser,
            browserVersion: this.deviceDetector.browser_version,
            device: this.deviceDetector.device,
            os: this.deviceDetector.os,
            osVersion: this.deviceDetector.os_version,
            browserAgent: this.deviceDetector.userAgent,
            devicePlatform: devPlatform
        };
        return this.deviceInfo;
    }
}
BrowserDetectionService.ɵfac = function BrowserDetectionService_Factory(t) { return new (t || BrowserDetectionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_device_detector__WEBPACK_IMPORTED_MODULE_1__.DeviceDetectorService)); };
BrowserDetectionService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BrowserDetectionService, factory: BrowserDetectionService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8958:
/*!***************************************!*\
  !*** ./src/app/services/rectangle.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Rectangle": () => (/* binding */ Rectangle)
/* harmony export */ });
/* harmony import */ var ng2_canvas_whiteboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng2-canvas-whiteboard */ 8550);

class Rectangle extends ng2_canvas_whiteboard__WEBPACK_IMPORTED_MODULE_0__.CanvasWhiteboardShape {
    //constructor
    constructor(startPoint, options) {
        super(startPoint, options);
    }
    getShapeName() {
        return "Rectangle";
    }
    onUpdateReceived(update) {
    }
    draw(context) {
        Object.assign(context, this.options);
        context.save();
        context.beginPath();
        context.stroke();
        context.fill();
        context.closePath();
        context.restore();
        // this.bufferCtx.strokeRect(sector.xCordOffset,sector.yCordOffset, 100, 50); //vals from Thomas
        // this.bufferCtx.fillStyle="red";
    }
    drawPreview(context) {
    }
}


/***/ }),

/***/ 235:
/*!****************************************************!*\
  !*** ./src/app/services/user-languages.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserLanguagesService": () => (/* binding */ UserLanguagesService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class UserLanguagesService {
    constructor() {
        this.users = new Array();
        this.users.push({ name: "Ezra", userId: 1, languages: ["Java", "Php", "Javascript", "Angular", "Laravel"] });
        this.users.push({ name: "Kimati", userId: 2, languages: ["C#", "Go", "Javascript", "Ionic", "Symphony"] });
    }
    //get user Languages
    getLanguages(userId) {
        let langs = new Array();
        this.users.forEach((user) => {
            if (user.userId == userId) {
                langs = user.languages;
            }
        });
        return langs;
    }
}
UserLanguagesService.ɵfac = function UserLanguagesService_Factory(t) { return new (t || UserLanguagesService)(); };
UserLanguagesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserLanguagesService, factory: UserLanguagesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4961:
/*!*******************************************!*\
  !*** ./src/app/services/users.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersService": () => (/* binding */ UsersService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 833);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _user_languages_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-languages.service */ 235);




class UsersService {
    constructor(http, userLanguages) {
        this.http = http;
        this.userLanguages = userLanguages;
        this.testBool = true;
        this.userAge = 25;
        this.salaryUnit = 2000;
        this.allUsers = new Array();
        this.usersObservable = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable();
        this.sampleUser = {
            "id": 1,
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz",
            "address": {
                "street": "Kulas Light",
                "suite": "Apt. 556",
                "city": "Gwenborough",
                "zipcode": "92998-3874",
                "geo": {
                    "lat": "-37.3159",
                    "lng": "81.1496"
                }
            },
            "phone": "1-770-736-8031 x56442",
            "website": "hildegard.org",
            "company": {
                "name": "Romaguera-Crona",
                "catchPhrase": "Multi-layered client-server neural-net",
                "bs": "harness real-time e-markets"
            }
        };
    }
    //user salary
    computeSalary(age, salUnit) {
        let pr = new Promise((resolve, reject) => {
            resolve((age * salUnit) + 1);
        });
        return pr;
    }
    getUserInfor(userId) {
        //Can be an api call here.....
        return this.sampleUser;
    }
    setTestUserAge(age) {
        this.userAge = age;
    }
    //fnx returning an observable
    getSalaryUnit() {
        let salUnit = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(this.salaryUnit);
        return salUnit;
    }
    //returns an array of user languages
    getUserLanguages(userId) {
        return this.userLanguages.getLanguages(userId);
    }
    getUsers(operation) {
        let baseUrl = "https://jsonplaceholder.typicode.com/";
        this.usersObservable = this.http.get(baseUrl + operation);
        this.usersObservable.subscribe((users) => {
            this.allUsers = users;
        });
        return this.usersObservable;
    }
    testfnxCall() {
    }
}
UsersService.ɵfac = function UsersService_Factory(t) { return new (t || UsersService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_user_languages_service__WEBPACK_IMPORTED_MODULE_0__.UserLanguagesService)); };
UsersService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: UsersService, factory: UsersService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment),
/* harmony export */   "googleMapsApiKey": () => (/* binding */ googleMapsApiKey),
/* harmony export */   "roadsApiEndpoint": () => (/* binding */ roadsApiEndpoint)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
const googleMapsApiKey = "AIzaSyCIvj-wfNaQNk0t3nnWMGCWPB3W-vJD3_4"; //testgooglemaps project
const roadsApiEndpoint = "https://roads.googleapis.com/v1/nearestRoads?";
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map