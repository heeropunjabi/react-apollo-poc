import React from 'react';
import './continent.css'
export default class Country extends React.PureComponent {
  render() {
    const { country } = this.props
    return (
      <ul key={country.code}>

        <li>Country Name: {country.name}</li>
        <li>Phone Code: {country.phone}</li>
        <li>emoji: {country.emoji}</li>
        {country.languages.length > 0 ? <li>Languages: <ol key={country.code}>
          {country.languages.map((language) => {
            return (
              <li key={language.code}>{language.name}</li>
            )
          })}
        </ol>
        </li> : null}
      </ul>
    )
  }
}
