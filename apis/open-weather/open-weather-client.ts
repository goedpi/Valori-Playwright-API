import { APIRequestContext, APIResponse } from "@playwright/test";

export class OpenWeatherClient {
  private readonly _context: APIRequestContext;
  private readonly _appId: String;

  constructor(context: APIRequestContext) {
    this._context = context;
    this._appId = process.env.OPEN_WEATHER_APPID!;
  }

  async getCurrentWeatherByCity(city: string): Promise<APIResponse>
  async getCurrentWeatherByCity(city: string, appId: string): Promise<APIResponse>
  async getCurrentWeatherByCity(city: string, appId?: string): Promise<APIResponse> {
    return await this._context.get(`/data/2.5/weather?q=${city}&appid=${appId != null ? appId : this._appId}`);
  }

  async getCurrentWeatherByLatLong(lat: string, lon: string): Promise<APIResponse>
  async getCurrentWeatherByLatLong(lat: string, lon: string, appId: string): Promise<APIResponse>
  async getCurrentWeatherByLatLong(lat: string, lon: string, appId?: string): Promise<APIResponse> {
    return await this._context.get(`/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId != null ? appId : this._appId}`);
  }
}