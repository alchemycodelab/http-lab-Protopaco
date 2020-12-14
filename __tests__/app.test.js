const request = require('supertest');
const app = require('../lib/app');

describe('app routes', () => {

    it('tests / GET route, expects response "hi"', async () => {

        const response = await request(app)
            .get('/');

        expect(response.text).toEqual('hi');

    });

    it('tests /echo POST route, expects status code 200 && plain text request body', async () => {
        const text = 'plain text'
        const response = await request(app)
            .post('/echo')
            .send(text);

        expect(response.text).toEqual(text);
        expect(response.status).toEqual(200);
    })

    it('tests /red GET route, expects "<h1>red</h1>"', async () => {
        const response = await request(app)
            .get('/red')

        expect(response.text).toEqual("<h1>red</h1>");
    })

    it('tests /green GET route, expects "<h1>green</h1>"', async () => {
        const response = await request(app)
            .get('/green')

        expect(response.text).toEqual("<h1>green</h1>");
    })

    it('tests /blue GET route, expects "<h1>blue</h1>', async () => {
        const response = await request(app)
            .get('/blue')

        expect(response.text).toEqual("<h1>blue</h1>");
    })

});
