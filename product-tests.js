const assert = require('assert');
const { get, post } = require('axios');

const baseURL = 'http://localhost:9002/laio/';

const expectedStatusOk = 200;

describe('Product tests', () => {
    it('Should find all products', async () => {
       
        const response = await get(`${baseURL}products`);

        assert.deepEqual(response.status, expectedStatusOk);

    }),
        it('Should create a product', async () => {

            const testProduct = {
                "productName": "surpresa de uva",
                "price": 2.00
            }

            const response = await post(`${baseURL}products/new`, testProduct);

            assert.deepEqual(response.status, expectedStatusOk);
        })s

});