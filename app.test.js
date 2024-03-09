const request = require('supertest');
const { app, server } = require('./app'); 

describe('GET /', () => {
    it('responds with "Hello World"', async () => {
        const response = await request(app).get('/');
        expect(response.text).toEqual('Hello World');
        expect(response.status).toBe(200); 
    });
});

afterAll(async () => {
    // Чекаємо, поки сервер закриється
    await new Promise(resolve => server.close(resolve));
});
