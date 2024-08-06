import { errorMessages } from "./error-messages.js";

enum ErrorList {
  DEFAULT_ERROR = "001",
}

const getErrorMessage = (
  errorCode: string,
  paramName: string,
  extraParams?: string[]
): string => {
  let message = errorMessages[errorCode as keyof typeof ErrorList].replace(
    "{0}",
    paramName
  );
  extraParams?.forEach((item: string, index: number) => {
    message = message.replace(`{${index + 1}}`, item);
  });
  return message;
};

const buildErrorMessage = (errorCode: ErrorList, params: string[]): string => {
  let message = errorMessages[errorCode];
  params.forEach((item: string, index: number) => {
    message = message.replace(`{${index}}`, item);
  });
  return message;
};

export { ErrorList, getErrorMessage, buildErrorMessage };
