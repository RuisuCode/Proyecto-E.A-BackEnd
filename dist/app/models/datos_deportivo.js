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
import { BaseModel, beforeCreate, column } from '@adonisjs/lucid/orm';
import { v4 as uuid } from 'uuid';
export default class DatosDeportivo extends BaseModel {
    static assignUuid(user) {
        user.id = uuid();
    }
}
__decorate([
    column({ isPrimary: true }),
    __metadata("design:type", String)
], DatosDeportivo.prototype, "id", void 0);
__decorate([
    column(),
    __metadata("design:type", String)
], DatosDeportivo.prototype, "categoria", void 0);
__decorate([
    column(),
    __metadata("design:type", String)
], DatosDeportivo.prototype, "especialidad", void 0);
__decorate([
    column(),
    __metadata("design:type", String)
], DatosDeportivo.prototype, "observaciones", void 0);
__decorate([
    column(),
    __metadata("design:type", String)
], DatosDeportivo.prototype, "marcas", void 0);
__decorate([
    column.dateTime({ autoCreate: true }),
    __metadata("design:type", DateTime)
], DatosDeportivo.prototype, "createdAt", void 0);
__decorate([
    column.dateTime({ autoCreate: true, autoUpdate: true }),
    __metadata("design:type", DateTime)
], DatosDeportivo.prototype, "updatedAt", void 0);
__decorate([
    beforeCreate(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [DatosDeportivo]),
    __metadata("design:returntype", void 0)
], DatosDeportivo, "assignUuid", null);
//# sourceMappingURL=datos_deportivo.js.map