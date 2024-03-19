import { TvMazeClient } from '../apis/open-weather/TV-maze-client';
import { expect, test } from './my-test';


test('Search Show & obtain variable', async ({ tvMazeClient}) => {
    const responseShow = await tvMazeClient.GetTvMazeShow('breaking bad');
    expect(responseShow.status()).toBe(200);
    const Showbody = await responseShow.text();
    const responseShowBody = JSON.parse(Showbody);
    const id = responseShowBody[0].show.id;
    
    //Initiate Second request to obtain show details with previousle obtained ID
    const responseDetails = await tvMazeClient.GetTvMazeShowDetails(id)
    expect(responseDetails.status()).toBe(200);
    const detailBody = await responseDetails.text();
    const detailresponse = JSON.parse(detailBody);

    expect(detailresponse.url).toContain(`${id}`)

});
