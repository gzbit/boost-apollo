import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { ApolloClient, InMemoryCache, HttpLink } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo'
import gql from 'graphql-tag'

const cache = new InMemoryCache()
const URI = 'https://fakeql.com/graphql/29fa9d3a0eb312f256daf35e6aae2745'

const client = new ApolloClient({
    cache,
    link: new HttpLink({
        uri: URI
    }),
})
client
    .query({
        query: gql`
            query {
                todos {
                    id
                    task
                    done
                }
            }
        `
    })
    .then(
        result => console.log(result)
    )

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>, 

    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
