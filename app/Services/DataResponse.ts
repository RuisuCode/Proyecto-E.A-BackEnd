export const DataResponse = (message: any, data: any = []) => {
  return {
    message: message.messages || message.message || message,
    data,
  };
};
