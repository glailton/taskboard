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
var estoria_mock_1 = require('./estoria.mock');
var core_1 = require('@angular/core');
var EstoriaService = (function () {
    function EstoriaService() {
        this.estorias = estoria_mock_1.ESTORIA;
    }
    EstoriaService.prototype.getEstorias = function () {
        return estoria_mock_1.ESTORIA;
    };
    EstoriaService.prototype.cadastrarTarefas = function (tarefa) {
        this.estoria.tarefas.push(tarefa);
    };
    EstoriaService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], EstoriaService);
    return EstoriaService;
}());
exports.EstoriaService = EstoriaService;
//# sourceMappingURL=estoria.service.js.map