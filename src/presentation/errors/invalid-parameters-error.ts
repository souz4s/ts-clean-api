export class InvalidParametersError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "InvalidParametersError";
  }
}
