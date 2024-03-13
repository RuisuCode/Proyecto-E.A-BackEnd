import vine, { SimpleMessagesProvider } from '@vinejs/vine'

const messages = {
  required: '{{ field }}, es un campo requerido',
  string: '{{ field }}, es un campo tipo texto',
  enum: '{{ field }}, es una selección incorrecta',
}

const fields = {
  name: 'Nombre',
  username: 'Nombre de usuario',
  password: 'Contraseña',
  cedula: 'Cédula',
}

vine.messagesProvider = new SimpleMessagesProvider(messages, fields)
