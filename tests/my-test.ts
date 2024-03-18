import { test as base, request } from '@playwright/test';
import { OpenWeatherClient } from '../apis/open-weather/open-weather-client';
import { ValoriAcademyPlannerClient } from '../apis/valori-academy-planner/valori-academy-planner-client';
import { BigTomClient } from '../apis/big-tom/big-tom-client';

type MyFixtures = {
    openWeatherClient: OpenWeatherClient;
    valoryAcademyPlannerClient: ValoriAcademyPlannerClient;
    bigTomClient: BigTomClient;
};

export const test = base.extend<MyFixtures>({
    openWeatherClient: async ({}, use) => {
        const context = await request.newContext({
            baseURL: process.env.OPEN_WEATHER_BASE_URL
          });

        await use(new OpenWeatherClient(context));
        context.dispose();
    },
    valoryAcademyPlannerClient: async ({}, use) => {
        const context = await request.newContext({
            baseURL: process.env.VALORI_OUTSYSTEMS_BASE_URL,
            extraHTTPHeaders: {
                'Token': process.env.VALORI_OUTSYSTEMS_TOKEN!
            }
        });

        await use(new ValoriAcademyPlannerClient(context));
        context.dispose;
    },
    bigTomClient: async ({}, use) => {
        const context = await request.newContext({
            baseURL: 'https://skillup.wiremockapi.cloud'
        });

        await use(new BigTomClient(context));
        context.dispose;
    }
});
export { expect } from '@playwright/test';