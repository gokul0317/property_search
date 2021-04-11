import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ListProperty from './pages/ListProperty'
import SinglePropertyView from './pages/SinglePropertyView'
import PageWrapper from './pages/PageWrapper'
function App() {
	return (
	   <BrowserRouter>
		<PageWrapper>
			<Switch>
			<Route path="/" component={ListProperty} exact />
			<Route path="/view/:id" component={SinglePropertyView} exact />
			</Switch>
		</PageWrapper>
      </BrowserRouter>
	);
}

export default App