import React from 'react'
import { render } from 'react-dom'
import { IndexRedirect, Router, Route, Link, browserHistory } from 'react-router'

import App from './components/App.jsx'
import Game from './components/Game/Game.jsx'
import GameEdit from './components/GameEdit/GameEdit.jsx'
import Games from './components/Games/Games.jsx'
import AboutPage from './components/About/About.jsx'
import Help from './components/Help/Help.jsx'
import AddGame from './components/AddGame/AddGame.jsx'
import RemoteGames from './components/RemoteGames/RemoteGames.jsx'
import UserProfile from './components/UserProfile/UserProfile.jsx'
import Page404 from './components/404/404.jsx'
import Page403 from './components/403/403.jsx'

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="help" component={Help}/>
      <Route path="about" component={AboutPage}/>
      <Route path="create" component={AddGame}/>
      <Route path="download" component={RemoteGames}/>
      <Route path="games" component={Games} />
      <Route path="games/:gameSlug" component={Game}/>
      <Route path="games/:gameSlug/edit" component={GameEdit}/>
      <Route path="profile" component={UserProfile} />
      <Route path="unauthorized" component={Page403}/>
      <Route path="*" component={Page404}/>
      <IndexRedirect to="/games" />
    </Route>
  </Router>
), document.getElementById('ludobox'))
