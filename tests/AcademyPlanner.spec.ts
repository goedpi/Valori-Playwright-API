import { expect, test } from './my-test';
import { Guid } from 'guid-typescript'

test('Verify Authentication', async ({valoriAcademyPlanner}) => {
    const responseShow = await valoriAcademyPlanner.GetTrainingDetails('Acceptatietest')
    expect(responseShow.status()).toBe(200);
    const ResponseBodyDetails = await responseShow.text();
    const ResponseBodyDetailsJson = JSON.parse(ResponseBodyDetails);
    console.log(ResponseBodyDetails)
    expect(ResponseBodyDetailsJson.Naam).toEqual('Acceptatietest')
});

test('Create New Training', async ({valoriAcademyPlanner}) => { 
    const GUID = Guid.raw();
    const responseShow = await valoriAcademyPlanner.CreateTraining('Acceptatietest')
});