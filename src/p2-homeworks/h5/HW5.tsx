import React from 'react'
import Header from './Header'
import {HashRouter, Navigate, Route, Routes} from "react-router-dom";
import Pages from "./Pages";




function HW5() {
    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}
            <HashRouter>
                <Header/>
                <Pages/>
            </HashRouter>
        </div>
    )
}

export default HW5
