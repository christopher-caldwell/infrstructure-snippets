import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import {BrowserRouter as Router} from "react-router-dom";
import 'styles/main.sass';

import App from './App';

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
});


ReactDOM.render(
  <React.StrictMode>
		<Router>
			<ApolloProvider client={client}>
				<App />
			</ApolloProvider>
		</Router>
  </React.StrictMode>,
  document.getElementById('root')
);
