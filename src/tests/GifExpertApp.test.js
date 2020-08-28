import React from 'react'
import '@testing-library/jest-dom';
import { GifExpertApp } from "../GifExpertApp";
const { shallow } = require("enzyme")

describe('Tests in <GifExpertApp />', () => {
    
    const categories = ["Rupaul","Drag Queen "]
    const wrapper = shallow( <GifExpertApp categories= { categories }/>);

    test('should show the component correctly', () => {  
        expect(wrapper).toMatchSnapshot();
    })

    test('should show a list of categories', () => {

        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    })
})
