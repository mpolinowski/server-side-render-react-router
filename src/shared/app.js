import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import NavBar from './navbar'
import routes from './routes'
import NoMatch from './404'

class App extends Component {
  render(data) {
    return (
      <div>
        <NavBar />
        <Switch>
          {routes.map(({ path, exact, component: C, ...rest }) => (
            <Route
              key={path}
              path={path}
              exact={exact}
              render={(props) => (
                <C {...props} {...rest} />
              )}
            />
          ))}
          <Route render={() => <NoMatch />} />
        </Switch>
      </div>
    )
  }
}

export default App