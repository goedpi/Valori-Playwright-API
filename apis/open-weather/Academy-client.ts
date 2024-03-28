import { APIRequestContext, APIResponse } from "@playwright/test";

export class valoriAcademyPlanner {
    private readonly _context: APIRequestContext;
    private readonly _basicAuth: string;

    constructor(context: APIRequestContext) {
        this._context = context;
        this._basicAuth = this.CreateBasicAuth();
    }

    async GetTrainingDetails(TrainingNaam: string): Promise<APIResponse> {
        return await this._context.get(`https://valori-dev.outsystemscloud.com/ValoriAcademyPlanner_TestApp/rest/GetData/GetTrainingInformation?Name=${TrainingNaam}`);
        
    }
    async CreateTraining(
        // naam: string, 
        // omschrijving:string,
        // voorkennis: string,
        // opzet:string,
        naam, omschrijving, voorkennis, opzet, leerdoel, trainingMateriaal:string, 
        maxCapaciteit, trainingCategorieId,doelgroepId,eigenaar, studieLast:number, 
        hasExamen, isZelfstudieMogelijk, hasAmortisatie:boolean

        ): Promise<APIResponse> {
        return await this._context.post(`https://valori-dev.outsystemscloud.com/ValoriAcademyPlanner_TestApp/rest/PostData_V2/CreateNewTraining`, {
            data:{
                Naam: naam,
                Omschrijving: omschrijving ,
                Voorkennis: voorkennis,
                Opzet: opzet,
                Leerdoel: leerdoel,
                HasExamen: hasExamen,
                MaxCapaciteit: maxCapaciteit,
                TrainingCategorieId: trainingCategorieId,
                DoelgroepId: doelgroepId,
                HasAmortisatie: hasAmortisatie,
                Eigenaar: eigenaar,
                TrainingMateriaal: trainingMateriaal ,
                Studielast: studieLast,
                IsZelfstudieMogelijk: isZelfstudieMogelijk
            }
        })
    }
    private CreateBasicAuth(){
        const basicAuth = Buffer.from(`${process.env.VALORI_OUTSYSTEMS_USERNAME}:${process.env.VALORI_OUTSYSTEMS_PASSWORD}`).toString('base64')
        return `Basic ${basicAuth}`;
    }
}