import React from 'react'
import '@testing-library/jest-dom';
import { AddCategory } from '../../components/AddCategory';
const { shallow } = require("enzyme")

describe('Tests in <AddCategory />', () => {

    const setCategories = jest.fn();
    let wrapper;
    const value = 'Rupaul'; 

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={ setCategories} />);
    });
   
    test('should show the component correctly', () => {  
        expect(wrapper).toMatchSnapshot();
    })

    test('should change input box', () => {  
        const input = wrapper.find('input');     
        input.simulate('change', { target: { value } }); 

        const inputValue = wrapper.find('input').prop('value');
        expect(inputValue).toBe(value)
    })
    
    test('should not submit an empty input', () => {  
        wrapper.find('form').simulate('submit', { preventDefault: () => {} }); 
        
        expect(setCategories).not.toHaveBeenCalled();
    })

    test('should call setCategories and reset input', () => {

        const input = wrapper.find('input');
        input.simulate('change', { target: { value } });

        const form = wrapper.find('form'); 
        form.simulate('submit', { preventDefault: () => {} }); 

        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
        expect(input.prop('value')).toBe("");
    })
    
})
