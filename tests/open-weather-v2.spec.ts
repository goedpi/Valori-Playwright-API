import { expect, test } from './my-test';
import { ErrorMessageWeather } from '../apis/open-weather/models/error-message-weather';
import { StatusCodes } from 'http-status-codes';
import { OpenWeather } from '../apis/open-weather/models/open-weather';

test('Opdracht 1', async ({ openWeatherClient }) => {
    const response = await openWeatherClient.getCurrentWeatherByCity('Utrecht', 'FOUT!');

    expect(response.status()).toBe(StatusCodes.UNAUTHORIZED);

    const body = await response.text();

    const expectedErrorMessage = new ErrorMessageWeather();
    expectedErrorMessage.cod = StatusCodes.UNAUTHORIZED;
    expectedErrorMessage.message = 'Invalid API key. Please see https://openweathermap.org/faq#error401 for more info.';

    const actualErrorMessage = JSON.parse(body) as ErrorMessageWeather;
    expect(actualErrorMessage).toEqual(expectedErrorMessage);
});

test('Opdracht 2', async ({ openWeatherClient }) => {
    const response = await openWeatherClient.getCurrentWeatherByCity('Utrecht');

    expect(response.status()).toBe(StatusCodes.OK);

    const body = await response.text();

    const actualOpenWeather = JSON.parse(body) as OpenWeather;
    expect(actualOpenWeather.name).toBe('Provincie Utrecht');
    expect(actualOpenWeather).toEqual(expect.objectContaining({ name: 'Provincie Utrecht' })) // ADVANCED: same assertion as previous, but more options
});