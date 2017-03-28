"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var estoria_service_1 = require('./estoria.service');
var EstoriaComponent = (function () {
    function EstoriaComponent(estoriaService) {
        this.estoriaService = estoriaService;
    }
    EstoriaComponent.prototype.ngOnInit = function () {
        this.estorias = this.estoriaService.getEstorias();
    };
    EstoriaComponent = __decorate([
        core_1.Component({
            selector: 'estoria',
            templateUrl: 'app/estoria.component.html',
            styleUrls: ['app/estoria.component.css']
        }), 
        __metadata('design:paramtypes', [estoria_service_1.EstoriaService])
    ], EstoriaComponent);
    return EstoriaComponent;
}());
exports.EstoriaComponent = EstoriaComponent;
//# sourceMappingURL=estoria.component.js.map