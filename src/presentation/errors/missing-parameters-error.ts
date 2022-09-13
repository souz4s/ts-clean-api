export class MissingParametersError extends Error {
  constructor() {
    super("Missing required parameters");
    this.name = "Missing Parameters Error";
  }
}
