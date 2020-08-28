import React from 'react'
import '@testing-library/jest-dom';
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

const { shallow } = require("enzyme")

describe('Tests in <GifGrid />', () => {

   const category = 'Rupaul'
   const gifs = [{
       id: 123,
       url: 'https://localhost',
       title: 'Rupaul'
    },{
        id: 345,
        url: 'https://localhost',
        title: 'Drag Queen'
    }];

    test('should show the component correctly', () => {  
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });
        
        const wrapper = shallow( <GifGrid category={ category } />)
    
        expect(wrapper).toMatchSnapshot();
    })
    
    test('should show items after loading them with useFetchGifs', () => {
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow( <GifGrid category={ category } />)

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    })
    
})
