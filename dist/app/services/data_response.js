export const DataResponse = (message, data = []) => {
    return {
        message: message.messages || message.message || message,
        data,
    };
};
//# sourceMappingURL=data_response.js.map