export interface Controller<T = never> {
  handle: (params: T) => Promise<unknown>;
}
