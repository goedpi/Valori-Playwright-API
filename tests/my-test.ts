import { test as base, request } from '@playwright/test';
import { OpenWeatherClient } from '../apis/open-weather/open-weather-client';

type MyFixtures = {
    openWeatherClient: OpenWeatherClient;
};

export const test = base.extend<MyFixtures>({
    openWeatherClient: async ({}, use) => {
        const context = await request.newContext({
            baseURL: 'https://api.openweathermap.org',
          });

        await use(new OpenWeatherClient(context));
        context.dispose();
    }
});
export { expect } from '@playwright/test';