import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
import PropTypes from 'prop-types';

export const GifExpertApp = ( {defaultCategories = ["Rupaul", "Miss Vanjie"]} ) => {

    const [categories, setCategories] = useState(defaultCategories);

    return (
        <>
            <h2>GifExpertApp</h2>
            < AddCategory setCategories={setCategories}/>
            <hr/>

            <ol>
                {categories.map(category => (
                <GifGrid key= {category} category= {category}/>
                ))
            }
            </ol>
        </>
    )
}

GifExpertApp.propTypes = {
    categories: PropTypes.array
}