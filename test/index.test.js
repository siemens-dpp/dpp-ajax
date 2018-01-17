

import { initAjax, ajax } from '../src/index';
import mock from '../src/mock';

describe('test ajax', () => {
    test('initAjax', async () => {
        const baseURL = 'https://some-domain.com/api';
        initAjax({
            baseURL,
        });
        mock.onGet('/login').reply(200, { isSuccess: true });
        const response = await ajax.get('/login');
        expect(response.config.baseURL).toBe(baseURL);
        expect(response.data).toEqual({ isSuccess: true });
    });
});
