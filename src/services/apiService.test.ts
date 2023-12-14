import CITY from './apiService';

describe('CITY', () => {
    const originalFetch = global.fetch;
    beforeEach(() => {
        global.fetch = jest.fn();
    });
    afterEach(() => {
        global.fetch = originalFetch;
    });

    it('fetches cities successfully', async () => {
        (global.fetch as any).mockResolvedValueOnce({
            ok: true,
            json: async () => [
                { id: 1, name: 'City1', continent: 'Continent1', population: 1000000, country: 'Country1', founded: 2000, landmarks: ['Landmark1'] },
                { id: 2, name: 'City2', continent: 'Continent2', population: 2000000, country: 'Country2', founded: 2010, landmarks: ['Landmark2'] },
            ],
        });

        const city = new CITY();
        const cities = await city.getCities(1);

        expect(cities).toEqual([
            { id: 1, name: 'City1', continent: 'Continent1', population: 1000000, country: 'Country1', founded: 2000, landmarks: ['Landmark1'] },
            { id: 2, name: 'City2', continent: 'Continent2', population: 2000000, country: 'Country2', founded: 2010, landmarks: ['Landmark2'] },
        ]);

        expect(global.fetch).toHaveBeenCalledWith(expect.stringContaining('/cities?page=1'));
    });

    it('handles API errors', async () => {
        (global.fetch as any).mockResolvedValueOnce({
            ok: false,
            status: 404,
            json: async () => ({ error: 'Not Found' }),
        });

        const city = new CITY();
        await expect(city.getCities(1)).rejects.toThrowError('Could not fetch');
    });
});
