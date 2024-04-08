import { APIRequestContext, APIResponse } from "@playwright/test";

export class BigTomClient {
  private readonly _context: APIRequestContext;


  constructor(context: APIRequestContext) {
    this._context = context;
  }
  async GetBigTom(){
    return await this._context.get(`/odata/DataSource/v1/Options`)
  }
}