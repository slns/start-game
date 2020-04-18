'use strict'

import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import App from './components/App';

import "./index.scss"

const renderApp = (NextApp) => {
	render(
		<AppContainer>
			<App/>
		</AppContainer>,
		document.querySelector('[data-js="app"]')
	)

}

renderApp(App)

if (module.hot) {
	module.hot.accept('./components/App', () => {
		const NextApp = require('./components/App').default
		renderApp(NextApp)
	})
}