import ApolloClient from 'apollo-boost';
import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Continent from './Continent'
// initialize a GraphQL client
const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com'
});

// write a GraphQL query that asks for names and codes for all countries
const GET_CONTINENTS = gql`
 {
  continents {
    code
    name
  }
}
`;
const getContinnentDetails = (code) => gql`
{
 continent (code: "${code}") {
  name
  countries {
    code
    name
    native
    phone
    currency
    emoji
    emojiU
    languages {
      name
    }
  }
}
}
`;

export default class Continents extends Component {
  state = {
    continent: ''
  };

  onContinentChange = event => {
    this.setState({ continent: event.target.value });
  };

  render() {
    return (
      <div>
        <Query query={GET_CONTINENTS} client={client}>
          {({ loading, error, data }) => {
            if (loading) return <p>Loading... Continents</p>;
            if (error) return <p>{error.message}</p>;
            return (
              <div><select value={this.state.country} onChange={this.onContinentChange}>
                {data.continents.map(continent => (
                  <option key={continent.code} value={continent.code}>
                    {continent.name}
                  </option>
                ))}
              </select></div>
            );
          }}
        </Query>
        {this.state.continent !== '' ?
          <Query query={getContinnentDetails(this.state.continent)} client={client}>
            {({ loading, error, data }) => {
              if (loading) return <p>Loading...Continent Info</p>;
              if (error) return <p>{error.message}</p>;
              return <Continent continent={data.continent} />
            }}
          </Query>
          : null}
      </div>
    );
  }
}
