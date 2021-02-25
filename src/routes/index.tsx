import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import appRoutes from './appRoutes'

const Router: React.FC = () => (
  <BrowserRouter>
    <Switch>
      {appRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
    </Switch>
  </BrowserRouter>
)

export default Router
