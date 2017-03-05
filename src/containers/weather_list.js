import React, { Component } from 'react'
import { connect } from 'react-redux'

import Chart from '../components/chart'
import GoogleMap from '../components/google_map'


export class WeatherList extends Component {
    renderWeather(cityData) {
        const tempData = cityData.list.map(entry => entry.main.temp).map(t => t - 273)
        const pressureData = cityData.list.map(entry => entry.main.pressure)
        const humidityData = cityData.list.map(entry => entry.main.humidity)
        const name = cityData.city.name;
        const {lon, lat} = cityData.city.coord
        return (
            <tr key={name}>
                <td><GoogleMap lat = {lat} lon={lon} /></td>
                <td ><Chart data={tempData} color="blue" units="˚C" /></td>
                <td ><Chart data={pressureData} color="red" units="hPa" /></td>
                <td ><Chart data={humidityData} color="grey" units="%" /></td>
            </tr>


        )
    }
    render() {
        return(
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature (Celsius)</th>
                    <th>Pressure (hPa)</th>
                    <th>Humidity (%)</th>
                </tr>
                </thead>
                <tbody>
                {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps({weather}){
    return { weather }
}

export default connect(mapStateToProps)(WeatherList)