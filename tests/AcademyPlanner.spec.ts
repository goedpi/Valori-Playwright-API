import { expect, test } from './my-test';
import { Training } from '../apis/open-weather/Academy/Models/Training'; 
import { Guid } from 'guid-typescript';
import { valoriAcademyPlanner } from '../apis/open-weather/Academy/Academy-client';
import { fakerDE as faker } from '@faker-js/faker';

test('Verify Authentication', async ({valoriAcademyPlanner}) => {
    const responseShow = await valoriAcademyPlanner.GetTrainingDetails('Acceptatietest')
    expect(responseShow.status()).toBe(200);
    const ResponseBodyDetails = await responseShow.text();
    const ResponseBodyDetailsJson = JSON.parse(ResponseBodyDetails);
    console.log(ResponseBodyDetails)
    expect(ResponseBodyDetailsJson.Naam).toEqual('Acceptatietest')
});

test('Create New Training', async ({valoriAcademyPlanner}) => { 
    var training = new Training(); 
    training.Naam = faker.company.name() + faker.string.uuid()
    training.Omschrijving = faker.color.space()
    training.Opzet='Zoek het uit'
    training.Eigenaar = 23;
    training.Leerdoel='Geen'; 
    training.HasExamen = true;
    training.HasAmortisatie = false; 
    training.DoelgroepId = 1;
    training.Voorkennis = 'Een beetje'; 
    training.IsZelfstudieMogelijk = false
    training.MaxCapaciteit = 12;
    training.TrainingCategorieId = 1; 
    training.CreatedOn = new Date(); 

    const response = await valoriAcademyPlanner.CreateTraining(training);
    const body = await response.text();
    const responseJSON = JSON.parse(body);
    
    expect (response.status(), await response.text()).toBe(200);
    expect (response).not.toBeTruthy;

    const TrainingsNumber = parseInt(responseJSON);
    expect(TrainingsNumber).toBeGreaterThan(0)
    

});
test.describe('Create Get and Delete Trainingen', () => {
    test('Create new Training', async ({ valoriAcademyPlanner }) => {
    var training = new Training(); 
    const TrainingNaam = faker.company.name() + faker.string.uuid()
    training.Naam = TrainingNaam
    training.Omschrijving = faker.color.space()
    training.Voorkennis = 'Een beetje'; 
    training.Opzet='Zoek het uit'
    training.Leerdoel='Geen'; 
    training.HasExamen = true;
    training.MaxCapaciteit = 12;
    training.TrainingCategorieId = 1; 
    training.DoelgroepId = 1;
    training.IsZelfstudieMogelijk = false
    training.CreatedOn = new Date(); 

    const response = await valoriAcademyPlanner.CreateTraining(training);
    expect (response.status(), await response.text()).toBe(200);

    const body = await response.text();
    const responseJSON = JSON.parse(body);
    
    expect (response).not.toBeTruthy;
    
    //Validate Training is created
    const TrainingsNumber = parseInt(responseJSON);
    expect(TrainingsNumber).toBeGreaterThan(0)
    
    //Only Get Trainingsdetails if training is made
    if (TrainingsNumber >= 0){
        
        const responseShow = await valoriAcademyPlanner.GetTrainingDetails(TrainingNaam)
        expect(responseShow.status()).toBe(200);
        const ResponseBodyDetails = await responseShow.text();
        const ResponseBodyDetailsJson = JSON.parse(ResponseBodyDetails);
        console.log(ResponseBodyDetails)
        //If Training is made then delete
        if (ResponseBodyDetailsJson.Naam == TrainingNaam){
            
            const DeletionResponse = await valoriAcademyPlanner.DeleteTraining(TrainingNaam);
            expect(DeletionResponse.status()).toBe(200)
            
            const DeletionResponseText = await DeletionResponse.text();
            const DeletionResponseJSON = JSON.parse(DeletionResponseText);
            expect(DeletionResponseJSON.IsSuccess).toBe(true)
        }
    }
    });   
});
