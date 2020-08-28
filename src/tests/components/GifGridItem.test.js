import React from 'react'
import '@testing-library/jest-dom';
import { GifGridItem } from "../../components/GifGridItem";
const { shallow } = require("enzyme")

describe('Tests in <GifGridItem />', () => {
    
    const title = "Rupaul";
    const url = "https://localhost/";
    const wrapper = shallow( <GifGridItem title={ title } url={ url }/>)

    test('should show the component correctly', () => {  
        expect(wrapper).toMatchSnapshot();
    })
  
    test('should have a p tag with props title', () => {
        const p = wrapper.find('p').text().trim();

        expect(p).toBe(title);
    })

    test('should have an img src and img alt equal to url and title respectively from props', () => {
        const src = wrapper.find('img').prop('src');
        const alt = wrapper.find('img').prop('alt');

        expect(src).toBe(url);
        expect(alt).toBe(title);
    })

    test('should have a div that contains animate__fadeIn', () => {
        const className = wrapper.find('div').prop('className');
        
        expect(className.includes('animate__fadeIn')).toBe(true);
    })
    
})
