import { APIRequestContext, APIResponse } from "@playwright/test";

const APPID = '1b86881d19e79087f3a0527e484e08d0';

export class OpenWeatherClient {
  private readonly _context: APIRequestContext;

  constructor(context: APIRequestContext) {
    this._context = context;    
  }

  async getCurrentWeatherByCity(city: string): Promise<APIResponse>
  async getCurrentWeatherByCity(city: string, appId: string): Promise<APIResponse>
  async getCurrentWeatherByCity(city: string, appId?: string): Promise<APIResponse> {
    return await this._context.get(`/data/2.5/weather?q=${city}&appid=${appId != null ? appId : APPID}`);
  }

  async getCurrentWeatherByLatLong(lat: string, lon: string): Promise<APIResponse>
  async getCurrentWeatherByLatLong(lat: string, lon: string, appId: string): Promise<APIResponse>
  async getCurrentWeatherByLatLong(lat: string, lon: string, appId?: string): Promise<APIResponse> {
    return await this._context.get(`/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId != null ? appId : APPID}`);
  }
}