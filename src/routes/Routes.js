import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { DataElemList } from '../components/data-elements'
import { IndicatorsList } from '../components/indicators'

export const Routes = () => (
    <Switch>
        <Route exact path="/indicators" component={IndicatorsList} />
        <Route exact path="/data-elements" component={DataElemList} />
    </Switch>
)
