import React from 'react'
import Error404 from "./pages/Error404";
import PreJunior from "./pages/PreJunior";
import {Route, Routes, Navigate} from 'react-router-dom';
import Junior from "./pages/Junior";
import JuniorPlus from "./pages/JuniorPlus";


export const PATH = {
    PRE_JUNIOR: '/Pre-junior',
    JUNIOR: '/Junior',
    JUNIOR_PLUS: '/Junior+',
    // add paths
}

function Pages() {
    return (

        <div>
            <div>
                <Routes>
                    <Route path={'/'} element={<Navigate to={PATH.PRE_JUNIOR}/>}/>
                    <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
                    <Route path={PATH.JUNIOR} element={<Junior/>}/>
                    <Route path={PATH.JUNIOR_PLUS} element={<JuniorPlus/>}/>
                    он отрисуется если пользователь захочет попасть на несуществующую страницу
                    <Route path={'/*'} element={<Error404/>}/>

                </Routes>
            </div>

        </div>


    )
}

export default Pages
