import vine from '@vinejs/vine'

export const loginValidator = vine.compile(
  vine.object({
    cedula: vine.string().trim(),
    password: vine.string().trim(),
  })
)
