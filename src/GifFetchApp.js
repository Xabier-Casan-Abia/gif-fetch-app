import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
import PropTypes from 'prop-types';

export const GifFetchApp = ( {defaultCategories = ["Rupaul", "Miss Vanjie"]} ) => {

    const [categories, setCategories] = useState(defaultCategories);

    return (
        <>
            <h2>GifFetchApp</h2>
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

GifFetchApp.propTypes = {
    categories: PropTypes.array
}