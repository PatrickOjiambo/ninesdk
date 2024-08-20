import { Base } from "../base";
import { CreateRequestParams, CreateRequestResponse } from "./types";
const resourceName = "request";
export class Request extends Base {
  createRequest(args: CreateRequestParams): Promise<CreateRequestResponse> {
    return this.invoke(`/${resourceName}/create`, {
      method: "POST",
      body: JSON.stringify(args),
    });
  }
}
