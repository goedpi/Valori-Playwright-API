import { APIRequestContext, APIResponse } from "@playwright/test";

export class TvMazeClient {
  private readonly _context: APIRequestContext;


  constructor(context: APIRequestContext) {
    this._context = context;
  }

  async GetTvMazeShow(show: string): Promise<APIResponse>{
    return await this._context.get(`/search/shows?q=${show}`)
    
    
  }
  async GetTvMazeShowDetails(id: number): Promise<APIResponse>{
    return await this._context.get(`/shows/${id}`)
    
  }
}