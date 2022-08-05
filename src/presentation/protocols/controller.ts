import type { HttpResponse } from "@/presentation/protocols";

export interface Controller<T = any> {
  handle: (params: T) => Promise<HttpResponse<T>>;
}
