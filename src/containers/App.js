import React from 'react';
// import ReactDOM from 'react-dom;'
import { Switch, Route, HashRouter } from 'react-router-dom';
// import axios from 'axios;'
// import '../styles/App.css';
import theme from "../styles/theme";
import Login from './Login'
import Home from './Home';
import ScrumInfo from './ScrumInfo';
import Menu from "../components/nav/Menu";
import { ThemeProvider } from 'styled-components';

const App = (props) =>{

  return (
    <ThemeProvider theme={theme}>
    <HashRouter>
      <Menu />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/scrum-info" component={ScrumInfo} />
      </Switch>
    </HashRouter>
</ThemeProvider>
  );
}

export default App;
