import vine from '@vinejs/vine';
import { uniqueRule } from './rules/unique.js';
export const personaStoreValidator = vine.compile(vine.object({
    cedula: vine.string().use(uniqueRule({ table: 'personas', column: 'cedula' })),
    primerNombre: vine.string(),
    segundoNombre: vine.string().optional(),
    primerApellido: vine.string(),
    segundoApellido: vine.string(),
    genero: vine.enum(['f', 'm']),
    fechaNacimiento: vine.date({ formats: 'DD/MM/YYYY' }),
}));
//# sourceMappingURL=persona.js.map