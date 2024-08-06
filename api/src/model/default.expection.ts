import { HttpStatusCode } from "axios";
import { ErrorList } from "../common/error/error-list.js";
import { errorMessages } from "../common/error/error-messages.js";

export class DefaultException extends Error {
  private readonly _status: number;

  private readonly _code: string;

  constructor(status: number, code: string, message: string) {
    super(message);
    this._status = status;
    this._code = code;
  }

  get status(): number {
    return this._status;
  }

  get code(): string {
    return this._code;
  }

  static getDefaultError() {
    return new DefaultException(
      HttpStatusCode.BadRequest,
      ErrorList.DEFAULT_ERROR,
      errorMessages[ErrorList.DEFAULT_ERROR]
    );
  }
}
