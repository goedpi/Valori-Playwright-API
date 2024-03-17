import { StatusCodes } from 'http-status-codes';
import { expect, test } from './my-test';
import { Training } from '../apis/valori-academy-planner/models/training';
import { Guid } from 'guid-typescript';
import { Result } from '../apis/valori-academy-planner/models/result';
import { faker } from '@faker-js/faker';

test('Opdracht 6', async ({ valoryAcademyPlannerClient }) => {
    const response = await valoryAcademyPlannerClient.getTrainingInformation('JOSF Architect');

    expect(response.status()).toBe(StatusCodes.OK);

    const body = await response.text();
    // Body weer parsen naar een zelf gemaakt Typescript object middels JSON.Parse();
});

test('Opdracht 8', async ({ valoryAcademyPlannerClient }) => {
    // ARRANGE
    var training = new Training();
    training.Naam = faker.science.chemicalElement().name;
    training.Omschrijving = faker.lorem.sentence();
    training.Voorkennis = faker.hacker.noun();
    training.Leerdoel = faker.animal.insect();
    training.MaxCapaciteit = faker.number.int({ min: 1, max: 12 });
    training.Opzet = faker.music.songName();
    training.TrainingCategorieId = faker.number.int({ min: 1, max: 9 });
    training.DoelgroepId = faker.number.int({ min: 1, max: 5 });
    training.CreatedOn = faker.date.recent();

    // ACT
    const response = await valoryAcademyPlannerClient.createNewTraining(training);

    // ASSERT
    expect(response.status(), await response.text()).toBe(StatusCodes.OK);

    const body = await response.text();
    const actualResult = JSON.parse(body) as Result;
    expect(actualResult.IsSuccess).toBeTruthy();

    const trainingNumber = parseInt(actualResult.ResultMessage);
    expect(trainingNumber).toBeGreaterThan(0);
});