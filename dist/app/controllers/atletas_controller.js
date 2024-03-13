import Persona from '#models/persona';
import { DataResponse } from '#services/data_response';
import { atletaStoreValidator } from '#validators/atleta';
import db from '@adonisjs/lucid/services/db';
export default class AtletasController {
    async index({ response }) {
        try {
            const data = await Persona.query().preload('datosGenericos').preload('datosDeportivos');
            return DataResponse('Personas obtenidas', data);
        }
        catch (error) {
            return response.badRequest(DataResponse(error));
        }
    }
    async store({ request, response }) {
        const trx = await db.transaction();
        try {
            const payload = await request.validateUsing(atletaStoreValidator);
            await Persona.create(payload, { client: trx });
            return DataResponse('Atleta registrado con éxito', payload);
        }
        catch (error) {
            return response.badRequest(DataResponse(error));
        }
    }
    async show({}) { }
    async update({}) { }
    async delete({}) { }
}
//# sourceMappingURL=atletas_controller.js.map