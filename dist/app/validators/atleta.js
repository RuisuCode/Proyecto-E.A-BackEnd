import vine from '@vinejs/vine';
export const atletaStoreValidator = vine.compile(vine.object({
    cedula: vine.string(),
    primer_nombre: vine.string(),
    segundo_nombre: vine.string().optional(),
    primer_apellido: vine.string(),
    segundo_apellido: vine.string().optional(),
    genero: vine.string().optional(),
    fecha_nacimiento: vine.date().optional(),
    estatura: vine.number(),
    peso: vine.number(),
    envergadura: vine.number().optional(),
    tipo_sangre: vine.string().optional(),
    catagoria: vine.string().optional(),
    especialidad: vine.string().optional(),
    marcas: vine.string().optional(),
    observaciones: vine.string().optional(),
}));
//# sourceMappingURL=atleta.js.map