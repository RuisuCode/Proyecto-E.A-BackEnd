import vine from '@vinejs/vine';
export const createUser = vine.compile(vine.object({
    cedula: vine.string().trim(),
    password: vine.string().trim(),
    rolId: vine.number(),
}));
//# sourceMappingURL=user.js.map