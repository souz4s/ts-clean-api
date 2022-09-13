export class InternalServerError extends Error {
  constructor(stack: string) {
    super("Internal Server Error");
    this.name = "Internal Server Error";
    this.stack = stack;
  }
}
