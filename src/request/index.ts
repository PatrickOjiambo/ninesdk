import { Base } from "src/base";
import { CreateRequestParams } from "./types";
const resource = "";
export class Request extends Base {
  createRequest(args: CreateRequestParams): Promise<string> {
    return this.invoke(`${resource}/`, {
      method: "POST",
      body: JSON.stringify(args),
    });
  }
}
