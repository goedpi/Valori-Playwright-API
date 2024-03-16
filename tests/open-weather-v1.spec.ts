import { APIRequestContext, test, expect } from '@playwright/test';

const APPID = '969437dd660b6c2251c86d58ae2458c5';

let apiContext: APIRequestContext;

test.beforeAll(async ({ playwright }) => {
    apiContext = await playwright.request.newContext({
        baseURL: 'https://api.openweathermap.org'
    });
});

test.afterAll(async ({ }) => {
    await apiContext.dispose();
  });

test('Opdracht 1', async () => {
    const response = await apiContext.get('/data/2.5/weather?q=Utrecht&appid=')
    
    expect(response.status()).toBe(401);
    
    const body = await response.text();
    expect(body).toContain('Invalid API key');
});