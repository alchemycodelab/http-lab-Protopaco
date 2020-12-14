const request = require('supertest');
const app = require('../lib/app');

describe('app routes', () => {

    it('tests / GET route, expectes response "hi"', async () => {

        const response = await request(app)
            .get('/');

        expect(response.text).toEqual('hi');

    })

});
