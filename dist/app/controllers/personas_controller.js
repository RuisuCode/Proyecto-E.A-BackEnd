import Persona from '#models/persona';
import { DataResponse } from '#services/data_response';
export default class PersonasController {
    async index({ response }) {
        try {
            const data = await Persona.query();
            return DataResponse('Personas obtenidas', data);
        }
        catch (error) {
            return response.badRequest(DataResponse(error));
        }
    }
    async store({}) { }
    async show({}) { }
    async update({}) { }
    async delete({}) { }
}
//# sourceMappingURL=personas_controller.js.map