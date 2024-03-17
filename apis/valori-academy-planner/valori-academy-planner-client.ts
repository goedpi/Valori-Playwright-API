import { APIRequestContext } from "@playwright/test";
import { Training } from "./models/training";

export class ValoriAcademyPlannerClient {
    private readonly _context: APIRequestContext;
    private readonly _basicAuth: string;

    constructor(context: APIRequestContext) {
        this._context = context;
        this._basicAuth = this.createBasicAuthHeader();
    }

    async getTrainingInformation(name: String) {
        return await this._context.get(`/ValoriAcademyPlanner_TestApp/rest/GetData/GetTrainingInformation?Name=${name}`);
    }

    async createNewTraining(training: Training) {
        return await this._context.post('/ValoriAcademyPlanner_TestApp/rest/PostData/CreateNewTraining', {
            headers: {
                'Authorization': this._basicAuth
            },
            data: training
        });
    }

    private createBasicAuthHeader() {
        const basicAuth = Buffer.from(`${process.env.VALORI_OUTSYSTEMS_USERNAME}:${process.env.VALORI_OUTSYSTEMS_PASSWORD}`).toString('base64');
        return `Basic ${basicAuth}`;
    }
}