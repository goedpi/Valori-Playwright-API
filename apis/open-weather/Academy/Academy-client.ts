import { APIRequestContext, APIResponse } from "@playwright/test";
import { Training  } from './Models/Training';

export class valoriAcademyPlanner {
    private readonly _context: APIRequestContext;
    private readonly _basicAuth: string;

    constructor(context: APIRequestContext) {
        this._context = context;
        this._basicAuth = this.CreateBasicAuth();
    }
    //Get Training details
    async GetTrainingDetails(TrainingNaam: string): Promise<APIResponse> {
        return await this._context.get(`https://valori-dev.outsystemscloud.com/ValoriAcademyPlanner_TestApp/rest/GetData/GetTrainingInformation?Name=${TrainingNaam}`); 
    }
    //Create new training
    async CreateTraining(training:Training): Promise<APIResponse> {
        return await this._context.post(`https://valori-dev.outsystemscloud.com/ValoriAcademyPlanner_TestApp/rest/PostData_V2/CreateNewTraining`, {
            headers:{
               Authorization: this._basicAuth
            }, 
            data: training
        })
    }
    //DeleteTraining
    async DeleteTraining(TrainingNaam: String): Promise<APIResponse> {
        return await this._context.delete(`https://valori-dev.outsystemscloud.com/ValoriAcademyPlanner_TestApp/rest/DeleteData/Training_Delete?TrainingName=${TrainingNaam}`, {
            headers:{
               Authorization: this._basicAuth
            }
        })
    }
    private CreateBasicAuth(){
        const basicAuth = Buffer.from(`${process.env.VALORI_OUTSYSTEMS_USERNAME}:${process.env.VALORI_OUTSYSTEMS_PASSWORD}`).toString('base64')
        return `Basic ${basicAuth}`;
    }
}