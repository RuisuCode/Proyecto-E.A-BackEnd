"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataResponse = void 0;
const DataResponse = (message, data = []) => {
    return {
        message: message.messages || message.message || message,
        data,
    };
};
exports.DataResponse = DataResponse;
//# sourceMappingURL=DataResponse.js.map