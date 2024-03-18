import { StatusCodes } from 'http-status-codes';
import { expect, test } from './my-test';
import { BigTom } from '../apis/big-tom/models/big-tom';

var JSONbig = require('json-bigint');

test('Opdracht 12 A', async ({ bigTomClient }) => {
    const response = await bigTomClient.getBigTomMock();

    expect(response.status(), await response.text()).toBe(StatusCodes.OK);

    const body = await response.text();
    const actualBigTom = JSONbig.parse(body) as BigTom;

    const value = actualBigTom.value.filter(x => x.ID == 44191571378160266n)[0];
    expect(value.DataSourceID).toBe(99996001);
    expect(value.Category).toBe('COLOR_INTERIEUR');
});

test('Opdracht 12 B', async ({ bigTomClient }) => {
    const response = await bigTomClient.getBigTomMock();

    expect(response.status(), await response.text()).toBe(StatusCodes.OK);

    const body = await response.text();
    
    const actualBigTom = JSONbig.parse(body) as BigTom;

    const value = actualBigTom.value.filter(x => x.ID == 44191571378160266n)[0];
    expect(value.TypeOptions?.filter(x => x.ID == 33495522807893558n)).toHaveLength(1);
});
