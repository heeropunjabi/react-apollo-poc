import React from 'react';
import './continent.css'
export default class Country extends React.PureComponent {
  render() {
    const { country } = this.props
    return (
      <ul>

        <li>Country Name: {country.name}</li>
        <li>Phone Code: {country.phone}</li>
        <li>emoji: {country.emojiU}</li>
        {country.languages.length > 0 ? <li>Languages: <ol>
          {country.languages.map((language) => {
            return (
              <li>{language.name}</li>
            )
          })}
        </ol>
        </li> : null}

      </ul>


    )
  }
}
