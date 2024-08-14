//Switches between unfetch & node-fetch for client & server.
import fetch from "isomorphic-unfetch";

type Config = {
  baseUrl: string;
};

export abstract class Base {
  private baseUrl: string;

  constructor(config: Config) {
    this.baseUrl = config.baseUrl;
  }
  //change to async
  protected invoke<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const url = this.baseUrl + endpoint;
    const headers = {
      "Content-Type": "application/json",
    };
    const config = {
      ...options,
      headers,
    };
    return fetch(url, config).then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(response.statusText);
      }
    });
  }
}
