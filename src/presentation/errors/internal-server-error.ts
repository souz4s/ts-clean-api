export class InternalServerError extends Error {
  constructor(stack: string) {
    super("Internal Server Error");
    this.name = "InternalServerError";
    this.stack = stack;
  }
}
