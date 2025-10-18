import React from 'react'
import { IoGrid } from "react-icons/io5";
import { BsList } from "react-icons/bs";
import "./sort.css"
import { UseFilterContext } from '../context/filterContext';

const Sort = () => {
    const { grid_view, Grid_View, List_View, Sorting } = UseFilterContext();


    return (
        <div className='sort'>
            <div className='sort-container'>
                <button className={`${grid_view ? 'button-color-selected' : 'button-color-default'}`} onClick={() => { Grid_View() }}>
                    <IoGrid className='icon-grid' />
                </button>
                <button className={`${grid_view ? 'button-color-default' : 'button-color-selected'}`} onClick={() => { List_View() }}>
                    <BsList className='icon-list' />
                </button>
            </div>
            <p className='total-products'>total products</p>
            <select className='sort-dropdown' name='Sort' onClick={(event) => Sorting(event)}>
                <option value={'lowest'}>lowest to higest(Price)</option>
                <option value={'highest'}> higest to lowest(Price)</option>
                <option value={'a-z'}>a-z(Name)</option>
                <option value={'z-a'}>z-a(Name)</option>
            </select>
        </div>
    )
}

export default Sort
