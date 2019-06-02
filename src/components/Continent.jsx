import React from 'react';
import './continent.css'
import Country from './Country'
export default class Continent extends React.PureComponent {
  render() {
    const { continent } = this.props
    return (
      <div className='continent'>
        <h2>{continent.name}</h2>
        <h4>List of countries</h4>

        {

          continent.countries.map((country) => {
            return <Country country={country} />
          })
        }

      </div>
    )

  }

}