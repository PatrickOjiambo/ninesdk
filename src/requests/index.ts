import { Base } from "src/base";
import { CreateRequestParams } from "./types";

export class Requests extends Base {
  createRequest(args: CreateRequestParams): Promise<string> {
    return this.invoke("/", {
      method: "POST",
      body: JSON.stringify(args),
    });
  }
}
