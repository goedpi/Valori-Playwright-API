import { expect, test } from './my-test';

test('Verify Authentication', async ({valoriAcademyPlanner}) => {
    const responseShow = await valoriAcademyPlanner.GetTrainingDetails('Acceptatietest')
    expect(responseShow.status()).toBe(200);
    const ResponseBodyDetails = await responseShow.text();
    const ResponseBodyDetailsJson = JSON.parse(ResponseBodyDetails);
});