const request = require('supertest');
const app = require('../lib/app');

describe('app routes', () => {

    it('tests / GET route, expects response "hi"', async () => {

        const response = await request(app)
            .get('/');

        expect(response.text).toEqual('hi');

    });

    it('tests /GET route, expects status code 200 && plain text request body', () => {
        const text = 'plain text'
        const response = await request(app)
            .post('/echo')
            .send(text);

        expect(response.body).toEqual(text);
    })

});
