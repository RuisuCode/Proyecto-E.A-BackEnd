var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { DateTime } from 'luxon';
import { BaseModel, beforeCreate, belongsTo, column } from '@adonisjs/lucid/orm';
import { v4 as uuid } from 'uuid';
import DatosGenetico from './datos_genetico.js';
import DatosDeportivo from './datos_deportivo.js';
export default class Persona extends BaseModel {
    static assignUuid(user) {
        user.id = uuid();
    }
}
__decorate([
    column({ isPrimary: true }),
    __metadata("design:type", String)
], Persona.prototype, "id", void 0);
__decorate([
    column(),
    __metadata("design:type", String)
], Persona.prototype, "cedula", void 0);
__decorate([
    column(),
    __metadata("design:type", String)
], Persona.prototype, "datosGenericosId", void 0);
__decorate([
    column(),
    __metadata("design:type", String)
], Persona.prototype, "primerNombre", void 0);
__decorate([
    column(),
    __metadata("design:type", String)
], Persona.prototype, "segundoNombre", void 0);
__decorate([
    column(),
    __metadata("design:type", String)
], Persona.prototype, "primerApellido", void 0);
__decorate([
    column(),
    __metadata("design:type", String)
], Persona.prototype, "segundoApellido", void 0);
__decorate([
    column(),
    __metadata("design:type", String)
], Persona.prototype, "genero", void 0);
__decorate([
    column(),
    __metadata("design:type", Date)
], Persona.prototype, "fechaNacimiento", void 0);
__decorate([
    column.dateTime({ autoCreate: true }),
    __metadata("design:type", DateTime)
], Persona.prototype, "createdAt", void 0);
__decorate([
    column.dateTime({ autoCreate: true, autoUpdate: true }),
    __metadata("design:type", DateTime)
], Persona.prototype, "updatedAt", void 0);
__decorate([
    belongsTo(() => DatosGenetico),
    __metadata("design:type", Object)
], Persona.prototype, "datosGenericos", void 0);
__decorate([
    belongsTo(() => DatosDeportivo),
    __metadata("design:type", Object)
], Persona.prototype, "datosDeportivos", void 0);
__decorate([
    beforeCreate(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Persona]),
    __metadata("design:returntype", void 0)
], Persona, "assignUuid", null);
//# sourceMappingURL=persona.js.map