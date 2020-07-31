import { BrowserRouter } from 'react-router-dom'
import React from 'react'

import { Navigation, Routes } from './routes'
import * as classes from './App.module.css'

const MyApp = () => (
    <BrowserRouter>
        <main className={classes.container}>
            <aside className={classes.aside}>
                <Navigation />
            </aside>

            <section className={classes.section}>
                <Routes />
            </section>
        </main>
    </BrowserRouter>
)

export default MyApp
