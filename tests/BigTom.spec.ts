import { BigTom } from '../apis/open-weather/Academy/Models/BigTom/big-tom';
import { expect, test } from './my-test';
var JSONbig = require('json-bigint');

test('12a', async ({ BigTomClient }) => {
    const response = await BigTomClient.GetBigTom();

    expect(response.status(), await response.text()).toBe(200);

    const body = await response.text();
    const actualBigTom = JSONbig.parse(body) as BigTom;
    const value = actualBigTom.value.filter(x => x.ID == 44191571378160266n)[0];
    expect(value.DataSourceID).toBe(99996001);
    expect(value.Category).toBe('COLOR_INTERIEUR');
    console.log(actualBigTom.value[1].CompanyCatalogCarOptions[0].CompanyCatalogCar)
});
