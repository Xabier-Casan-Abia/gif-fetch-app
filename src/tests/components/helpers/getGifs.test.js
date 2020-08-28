const { getGifs } = require("../../../helpers/getGifs")

describe('Tests in getGifs />', () => {
    
    test('should return an array of 10 elements', async() => {
        const gifs = await getGifs('Dragon Ball');
        expect(gifs.length).toBe(10);
    })

    test('should return an empty array', async() => {
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);
    })
    
})
