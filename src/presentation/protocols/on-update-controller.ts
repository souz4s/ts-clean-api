import { Controller } from "@/presentation/protocols";

export interface OnUpdateController<T = unknown> extends Controller {
  handle: (params: OnUpdateController.Params<T>) => Promise<unknown>;
}

export declare namespace OnUpdateController {
  export type Params<T = unknown> = { eventType: "updated"; previousData: T; newData: T };
}
