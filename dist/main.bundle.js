webpackJsonp([1,4],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_global__ = __webpack_require__(23);
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
    function AppComponent() {
        this.title = 'Products';
        this.header_color = __WEBPACK_IMPORTED_MODULE_1__services_global__["a" /* GLOBAL */].header_color;
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(159),
        styles: [__webpack_require__(157)]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_home_component__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_error_component__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_productos_list_component__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_producto_add_component__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_producto_detail_component__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_producto_edit_component__ = __webpack_require__(66);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// Rutas

// Componentes







var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_error_component__["a" /* ErrorComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_productos_list_component__["a" /* ProductosListComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_producto_add_component__["a" /* ProductoAddComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_producto_detail_component__["a" /* ProductoDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_producto_edit_component__["a" /* ProductoEditComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing__["a" /* routing */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__app_routing__["b" /* appRoutingProviders */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_home_component__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_error_component__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_productos_list_component__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_producto_add_component__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_producto_detail_component__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_producto_edit_component__ = __webpack_require__(66);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return appRoutingProviders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });

// Componentes






var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__components_home_component__["a" /* HomeComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_1__components_home_component__["a" /* HomeComponent */] },
    { path: 'productos', component: __WEBPACK_IMPORTED_MODULE_3__components_productos_list_component__["a" /* ProductosListComponent */] },
    { path: 'crear-producto', component: __WEBPACK_IMPORTED_MODULE_4__components_producto_add_component__["a" /* ProductoAddComponent */] },
    { path: 'producto/:id', component: __WEBPACK_IMPORTED_MODULE_5__components_producto_detail_component__["a" /* ProductoDetailComponent */] },
    { path: 'editar-producto/:id', component: __WEBPACK_IMPORTED_MODULE_6__components_producto_edit_component__["a" /* ProductoEditComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_2__components_error_component__["a" /* ErrorComponent */] }
];
var appRoutingProviders = [];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ 103:
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

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(51)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 159:
/***/ (function(module, exports) {

module.exports = "<div id=\"content\" class=\"\">\n\t<header id=\"header\" class=\"col-lg-12\" [style.background]=\"header_color\">\n\t\t<h1>\n\t\t  {{title}}\n\t\t</h1>\n\t\t<nav id=\"nav\" class=\"col-lg-12\">\n\t\t\t<ul>\n\t\t\t\t<li><a [routerLink]=\"['/home']\" [routerLinkActive]=\"['activado']\">Home</a></li>\n\t\t\t\t<li><a [routerLink]=\"['/productos']\" [routerLinkActive]=\"['activado']\">Productos</a></li>\n\t\t\t\t<li><a [routerLink]=\"['/crear-producto']\" [routerLinkActive]=\"['activado']\">Crear producto</a></li>\n\t\t\t</ul>\n\t\t</nav>\n\t</header>\n\n\t<section id=\"main\" class=\"col-lg-12\">\n\t\t<!-- Componente actual -->\n\t\t<router-outlet></router-outlet>\n\t</section>\n\n\t<footer id=\"footer\" class=\"col-lg-12\">\n\t\t<p>https://marccerrilloweb.com</p>\n\t</footer>\n</div>\n"

/***/ }),

/***/ 160:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-10 col-lg-offset-1\">\r\n\t<div class=\"jumbotron\">\r\n\t\t<h2>{{titulo}}</h2>\r\n\t\t<p>La página que intentas cargar no existe, prueba con estos botones:</p>\r\n\t\t<p>\r\n\t\t\t<a [routerLink]=\"['/productos']\" class=\"btn btn-lg btn-primary\">Ver productos</a>\r\n\t\t\t<a [routerLink]=\"['/crear-producto']\" class=\"btn btn-lg btn-success\">Añadir productos</a>\r\n\t\t</p>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ 161:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-10 col-lg-offset-1\">\r\n\t<div class=\"jumbotron\">\r\n\t\t<h2>{{titulo}}</h2>\r\n\t\t<p>Gestiona tus productos con la aplicación web SPA creada con Angular desde cero</p>\r\n\t\t<p>\r\n\t\t\t<a [routerLink]=\"['/productos']\" class=\"btn btn-lg btn-primary\">Ver productos</a>\r\n\t\t\t<a [routerLink]=\"['/crear-producto']\"  class=\"btn btn-lg btn-success\">Añadir productos</a>\r\n\t\t</p>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ 162:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!producto\">\r\n\t<p>Cargando producto...</p>\r\n</div>\r\n<div class=\"row\" *ngIf=\"producto\">\r\n\t<div class=\"col-lg-4\" *ngIf=\"producto.imagen\">\r\n\t\t<br>\r\n\t\t<img src=\"http://localhost/curso-angular4-backend/uploads/{{producto.imagen}}\" class=\"producto_imagen\"/>\r\n\t</div>\r\n\t<div class=\"col-lg-8\">\r\n\t\t<h3>{{producto.nombre}}</h3>\r\n\t\t<p><strong>{{producto.precio}} €</strong></p>\r\n\t\t<p>{{producto.descripcion}}</p>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ 163:
/***/ (function(module, exports) {

module.exports = "<h3>{{titulo}}</h3>\r\n<hr/>\r\n\r\n<div *ngIf=\"!productos\">\r\n\tCargando listado de productos...\r\n</div>\r\n<div *ngIf=\"productos\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-lg-3\" *ngFor=\"let producto of productos\">\r\n\t\t\t<div class=\"thumbnail\">\r\n\t\t\t\t<div *ngIf=\"producto.imagen\" class=\"imagen_container\">\r\n\t\t\t\t\t<img src=\"http://localhost/curso-angular4-backend/uploads/{{producto.imagen}}\" class=\"producto_imagen\"/>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div *ngIf=\"!producto.imagen\">\r\n\t\t\t\t\t<div class=\"imagen_relleno\"></div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"caption\">\r\n\t\t\t\t\t<h3>{{producto.nombre}}</h3>\r\n\t\t\t\t\t<p>{{producto.precio}} €</p>\r\n\r\n\t\t\t\t\t<div class=\"botones\" *ngIf=\"confirmado != producto.id\">\r\n\t\t\t\t\t\t<a [routerLink]=\"['/producto', producto.id]\" class=\"btn btn-md btn-primary\">Ver</a>\r\n\t\t\t\t\t\t<a [routerLink]=\"['/editar-producto', producto.id]\" class=\"btn btn-md btn-warning\">Editar</a>\r\n\t\t\t\t\t\t<a (click)=\"borrarConfirm(producto.id)\" class=\"btn btn-md btn-danger\">Borrar</a>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"seguro\" *ngIf=\"confirmado == producto.id\">\r\n\t\t\t\t\t\t<a (click)=\"onDeleteProducto(producto.id)\" class=\"btn btn-md btn-danger\">\r\n\t\t\t\t\t\t\tQuiero eliminarlo\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t<a (click)=\"cancelarConfirm()\" class=\"btn btn-md btn-warning\">Cancelar</a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(94);


/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GLOBAL; });
var GLOBAL = {
    url: 'https://mcmatas.github.io/shop-backend/index.php/',
    header_color: '#E03137'
};
//# sourceMappingURL=global.js.map

/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductoService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductoService = (function () {
    function ProductoService(_http) {
        this._http = _http;
        this.url = __WEBPACK_IMPORTED_MODULE_3__global__["a" /* GLOBAL */].url;
    }
    ProductoService.prototype.getProductos = function () {
        return this._http.get(this.url + 'productos').map(function (res) { return res.json(); });
    };
    ProductoService.prototype.getProducto = function (id) {
        return this._http.get(this.url + 'producto/' + id).map(function (res) { return res.json(); });
    };
    ProductoService.prototype.addProducto = function (producto) {
        var json = JSON.stringify(producto);
        var params = 'json=' + json;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this._http.post(this.url + 'productos', params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ProductoService.prototype.editProducto = function (id, producto) {
        var json = JSON.stringify(producto);
        var params = "json=" + json;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this._http.post(this.url + 'update-producto/' + id, params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ProductoService.prototype.deleteProducto = function (id) {
        return this._http.get(this.url + 'delete-producto/' + id)
            .map(function (res) { return res.json(); });
    };
    ProductoService.prototype.makeFileRequest = function (url, params, files) {
        return new Promise(function (resolve, reject) {
            var formData = new FormData();
            var xhr = new XMLHttpRequest();
            for (var i = 0; i < files.length; i++) {
                formData.append('uploads[]', files[i], files[i].name);
            }
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.response));
                    }
                    else {
                        reject(xhr.response);
                    }
                }
            };
            xhr.open("POST", url, true);
            xhr.send(formData);
        });
    };
    return ProductoService;
}());
ProductoService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], ProductoService);

var _a;
//# sourceMappingURL=producto.service.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ErrorComponent = (function () {
    function ErrorComponent() {
        this.titulo = "Error!! Página no encontrada.";
    }
    ErrorComponent.prototype.ngOnInit = function () {
        console.log("Componente error.component.ts cargado");
    };
    return ErrorComponent;
}());
ErrorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'error',
        template: __webpack_require__(160)
    }),
    __metadata("design:paramtypes", [])
], ErrorComponent);

//# sourceMappingURL=error.component.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
        this.titulo = 'Webapp de productos con Angular 4';
    }
    HomeComponent.prototype.ngOnInit = function () {
        console.log('Se ha cargado el componente home.component.ts');
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'home',
        template: __webpack_require__(161)
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_producto_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_producto__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_global__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductoAddComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductoAddComponent = (function () {
    function ProductoAddComponent(_productoService, _route, _router) {
        this._productoService = _productoService;
        this._route = _route;
        this._router = _router;
        this.titulo = 'Crear un nuevo producto';
        this.producto = new __WEBPACK_IMPORTED_MODULE_3__models_producto__["a" /* Producto */](0, '', '', 0, '');
    }
    ProductoAddComponent.prototype.ngOnInit = function () {
        console.log('producto-add.component.ts cargado...');
    };
    ProductoAddComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.producto);
        if (this.filesToUpload && this.filesToUpload.length >= 1) {
            this._productoService.makeFileRequest(__WEBPACK_IMPORTED_MODULE_4__services_global__["a" /* GLOBAL */].url + 'upload-file', [], this.filesToUpload).then(function (result) {
                console.log(result);
                _this.resultUpload = result;
                _this.producto.imagen = _this.resultUpload.filename;
                _this.saveProducto();
            }, function (error) {
                console.log(error);
            });
        }
        else {
            this.saveProducto();
        }
    };
    ProductoAddComponent.prototype.saveProducto = function () {
        var _this = this;
        this._productoService.addProducto(this.producto).subscribe(function (response) {
            if (response.code == 200) {
                _this._router.navigate(['/productos']);
            }
            else {
                console.log(response);
            }
        }, function (error) {
            console.log(error);
        });
    };
    ProductoAddComponent.prototype.fileChangeEvent = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
        console.log(this.filesToUpload);
    };
    return ProductoAddComponent;
}());
ProductoAddComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'producto-add',
        template: __webpack_require__(80),
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_producto_service__["a" /* ProductoService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_producto_service__["a" /* ProductoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_producto_service__["a" /* ProductoService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _c || Object])
], ProductoAddComponent);

var _a, _b, _c;
//# sourceMappingURL=producto-add.component.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_producto_service__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductoDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductoDetailComponent = (function () {
    function ProductoDetailComponent(_productoService, _route, _router) {
        this._productoService = _productoService;
        this._route = _route;
        this._router = _router;
    }
    ProductoDetailComponent.prototype.ngOnInit = function () {
        console.log('producto-detail.Component.ts cargado...');
        this.getProducto();
    };
    ProductoDetailComponent.prototype.getProducto = function () {
        var _this = this;
        this._route.params.forEach(function (params) {
            var id = params['id'];
            _this._productoService.getProducto(id).subscribe(function (response) {
                if (response.code == 200) {
                    _this.producto = response.data;
                }
                else {
                    _this._router.navigate(['/productos']);
                }
            }, function (error) {
                console.log(error);
            });
        });
    };
    return ProductoDetailComponent;
}());
ProductoDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'producto-detail',
        template: __webpack_require__(162),
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_producto_service__["a" /* ProductoService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_producto_service__["a" /* ProductoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_producto_service__["a" /* ProductoService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _c || Object])
], ProductoDetailComponent);

var _a, _b, _c;
//# sourceMappingURL=producto-detail.component.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_producto_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_producto__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_global__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductoEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductoEditComponent = (function () {
    function ProductoEditComponent(_productoService, _route, _router) {
        this._productoService = _productoService;
        this._route = _route;
        this._router = _router;
        this.titulo = 'Editar producto';
        this.producto = new __WEBPACK_IMPORTED_MODULE_3__models_producto__["a" /* Producto */](1, '', '', 1, '');
        this.is_edit = true;
    }
    ProductoEditComponent.prototype.ngOnInit = function () {
        console.log(this.titulo);
        this.getProducto();
    };
    ProductoEditComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.producto);
        if (this.filesToUpload && this.filesToUpload.length >= 1) {
            this._productoService.makeFileRequest(__WEBPACK_IMPORTED_MODULE_4__services_global__["a" /* GLOBAL */].url + 'upload-file', [], this.filesToUpload).then(function (result) {
                console.log(result);
                _this.resultUpload = result;
                _this.producto.imagen = _this.resultUpload.filename;
                _this.updateProducto();
            }, function (error) {
                console.log(error);
            });
        }
        else {
            this.updateProducto();
        }
    };
    ProductoEditComponent.prototype.updateProducto = function () {
        var _this = this;
        this._route.params.forEach(function (params) {
            var id = params['id'];
            _this._productoService.editProducto(id, _this.producto).subscribe(function (response) {
                if (response.code == 200) {
                    _this._router.navigate(['/producto', id]);
                }
                else {
                    console.log(response);
                }
            }, function (error) {
                console.log(error);
            });
        });
    };
    ProductoEditComponent.prototype.fileChangeEvent = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
        console.log(this.filesToUpload);
    };
    ProductoEditComponent.prototype.getProducto = function () {
        var _this = this;
        this._route.params.forEach(function (params) {
            var id = params['id'];
            _this._productoService.getProducto(id).subscribe(function (response) {
                if (response.code == 200) {
                    _this.producto = response.data;
                }
                else {
                    _this._router.navigate(['/productos']);
                }
            }, function (error) {
                console.log(error);
            });
        });
    };
    return ProductoEditComponent;
}());
ProductoEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'producto-edit',
        template: __webpack_require__(80),
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_producto_service__["a" /* ProductoService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_producto_service__["a" /* ProductoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_producto_service__["a" /* ProductoService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _c || Object])
], ProductoEditComponent);

var _a, _b, _c;
//# sourceMappingURL=producto-edit.component.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_producto_service__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductosListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductosListComponent = (function () {
    function ProductosListComponent(_route, _router, _productoService) {
        this._route = _route;
        this._router = _router;
        this._productoService = _productoService;
        this.titulo = 'Listado de productos';
        this.confirmado = null;
    }
    ProductosListComponent.prototype.ngOnInit = function () {
        console.log('productos-list.component.ts cargado');
        this.getProductos();
    };
    ProductosListComponent.prototype.getProductos = function () {
        var _this = this;
        this._productoService.getProductos().subscribe(function (result) {
            if (result.code != 200) {
                console.log(result);
            }
            else {
                _this.productos = result.data;
            }
        }, function (error) {
            console.log(error);
        });
    };
    ProductosListComponent.prototype.borrarConfirm = function (id) {
        this.confirmado = id;
    };
    ProductosListComponent.prototype.cancelarConfirm = function () {
        this.confirmado = null;
    };
    ProductosListComponent.prototype.onDeleteProducto = function (id) {
        var _this = this;
        this._productoService.deleteProducto(id).subscribe(function (response) {
            if (response.code == 200) {
                _this.getProductos();
            }
            else {
                alert('Error al borrar producto');
            }
        }, function (error) {
            console.log(error);
        });
    };
    return ProductosListComponent;
}());
ProductosListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'productos-list',
        template: __webpack_require__(163),
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_producto_service__["a" /* ProductoService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_producto_service__["a" /* ProductoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_producto_service__["a" /* ProductoService */]) === "function" && _c || Object])
], ProductosListComponent);

var _a, _b, _c;
//# sourceMappingURL=productos-list.component.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Producto; });
var Producto = (function () {
    function Producto(id, nombre, descripcion, precio, imagen) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.imagen = imagen;
    }
    return Producto;
}());

//# sourceMappingURL=producto.js.map

/***/ }),

/***/ 80:
/***/ (function(module, exports) {

module.exports = "<h3>{{titulo}}</h3>\r\n<hr/>\r\n\r\n<form #formProducto=\"ngForm\" (ngSubmit)=\"onSubmit()\" class=\"col-lg-6\" id=\"form-producto\">\r\n\r\n\t<label>\r\n\t\tNombre\r\n\t\t<span *ngIf=\"!nombre.valid && nombre.touched\" class=\"label label-danger\">El nombre es obligatorio</span>\r\n\t</label>\r\n\t<input type=\"text\" #nombre=\"ngModel\" name=\"nombre\" [(ngModel)]=\"producto.nombre\" class=\"form-control\" required />\r\n\r\n\t<label>\r\n\t\tDescripción\r\n\t\t<span *ngIf=\"!descripcion.valid && descripcion.touched\" class=\"label label-danger\">La descripción es obligatorio</span>\r\n\t</label>\r\n\t<textarea #descripcion=\"ngModel\" name=\"descripcion\" [(ngModel)]=\"producto.descripcion\" class=\"form-control\" required></textarea>\r\n\r\n\t<label>\r\n\t\tPrecio\r\n\t\t<span *ngIf=\"!precio.valid && precio.touched\" class=\"label label-danger\">El precio no es correcto</span>\r\n\t</label>\r\n\t<input type=\"text\" #precio=\"ngModel\" name=\"precio\" [(ngModel)]=\"producto.precio\" class=\"form-control\" required pattern=\"[0-9]+\"/>\r\n\r\n\t<label>Imagen</label>\r\n\t<div *ngIf=\"is_edit\">\r\n\t\t<img src=\"http://localhost/curso-angular4-backend/uploads/{{producto.imagen}}\" width=\"60\"/>\r\n\t</div>\r\n\t<input type=\"file\" class=\"form-control\" (change)=\"fileChangeEvent($event)\"/>\r\n\r\n\t<br/>\r\n\t<input type=\"submit\" value=\"{{titulo}}\" [disabled]=\"!formProducto.form.valid\" class=\"btn btn-success\"/>\r\n</form>"

/***/ }),

/***/ 93:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 93;


/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(103);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ })

},[195]);
//# sourceMappingURL=main.bundle.js.map