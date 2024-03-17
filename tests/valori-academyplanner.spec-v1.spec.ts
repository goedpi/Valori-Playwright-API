import { StatusCodes } from 'http-status-codes';
import { expect, test } from './my-test';
import { Training } from '../apis/valori-academy-planner/models/training';
import { Guid } from 'guid-typescript';
import { Result } from '../apis/valori-academy-planner/models/result';

test('Opdracht 6', async ({ valoryAcademyPlannerClient }) => {
    const response = await valoryAcademyPlannerClient.getTrainingInformation('JOSF Architect');

    expect(response.status()).toBe(StatusCodes.OK);

    const body = await response.text();
    // Body weer parsen naar een zelf gemaakt Typescript object middels JSON.Parse();
});

test('Opdracht 8', async ({ valoryAcademyPlannerClient }) => {
    // ARRANGE
    var training = new Training();
    training.Naam = Guid.raw();
    training.Omschrijving = 'Ronald TestOmschrijving';
    training.Voorkennis = 'Ronald TestVoorkennis';
    training.Leerdoel = 'Ronald TestLeerdoel';
    training.MaxCapaciteit = 12;
    training.Opzet = 'Ronald TrainingOpzet';
    training.TrainingCategorieId = 1;
    training.DoelgroepId = 1;
    training.CreatedOn = new Date();

    const response = await valoryAcademyPlannerClient.createNewTraining(training);

    expect(response.status(), await response.text()).toBe(StatusCodes.OK);

    const body = await response.text();
    const actualResult = JSON.parse(body) as Result;
    expect(actualResult.IsSuccess).toBeTruthy();
    expect(actualResult.ResultMessage).not.toBeUndefined();
});