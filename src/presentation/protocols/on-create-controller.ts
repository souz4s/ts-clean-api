import { Controller } from "@/presentation/protocols";

export interface OnCreateController<T = unknown> extends Controller {
  handle: (params: OnCreateController.Params<T>) => Promise<unknown>;
}

export declare namespace OnCreateController {
  export type Params<T = unknown> = { eventType: "created"; previousData: undefined; newData: T };
}
