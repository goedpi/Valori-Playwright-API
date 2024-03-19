import { APIRequestContext, APIResponse } from "@playwright/test";

export class valoriAcademyPlanner {
    private readonly _context: APIRequestContext;
    constructor(context: APIRequestContext) {
        this._context = context;
    }

    async GetTrainingDetails(TrainingNaam: string): Promise<APIResponse> {
        return await this._context.get(`https://valori-dev.outsystemscloud.com/ValoriAcademyPlanner_TestApp/rest/GetData/GetTrainingInformation?Name=${TrainingNaam}`);
    }
    async CreateTraining(id: number): Promise<APIResponse> {
        return await this._context.get(`/shows/${id}`)
    }
    private CreateBasicAuth(){
        const basicAuth = Buffer.from(`${process.env.VALORI_OUTSYSTEMS_USERNAME}:${process.env.VALORI_OUTSYSTEMS_PASSWORD}`).toString('base64')
        return `Basic ${basicAuth}`;
    }
}