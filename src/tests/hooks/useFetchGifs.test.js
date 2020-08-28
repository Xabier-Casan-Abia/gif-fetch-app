import '@testing-library/jest-dom';
const { useFetchGifs } = require("../../hooks/useFetchGifs")
const { renderHook } = require("@testing-library/react-hooks")

describe('Tests in the hook useFetchGifs', () => {

    test('should return initial state', async() => {
        const { result, waitForNextUpdate } = renderHook(()=> useFetchGifs('Rupaul'));
        const { data, loading } = result.current;
        await waitForNextUpdate();

        expect(data).toEqual([]);
        expect(loading).toBe(true);
    })
    
    test('should return an array of images and loading equals to false', async() => {
        const { result, waitForNextUpdate } = renderHook(()=> useFetchGifs('Rupaul'));
        await waitForNextUpdate();
        const { data, loading } = result.current;
        
        expect(data.length).toBe(10);
        expect(loading).toBe(false);
    })
    
})
