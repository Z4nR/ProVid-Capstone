import API_ENDPOINT from '../globals/api-endpoint'
import prov from './geojson/prov_api'

class DataSource {
  static getProvinceGeoJson () {
    return prov
  }

  static async vaccine () {
    const response = await fetch(API_ENDPOINT.VACCINE)
    return response.json()
  }

  static async covidNational () {
    const response = await fetch(API_ENDPOINT.COVID_DATA)
    const { lastUpdate } = await response.json()
    return lastUpdate
  }

  static async covidProvince () {
    const response = await fetch(API_ENDPOINT.COVID_PROV_DATA)
    return response.json()
  }

  static async cityRisk () {
    const response = await fetch(API_ENDPOINT.CITY_RISK).then(response => response.json())
    return response
  }

  static searchHospital (keyword) {
    return fetch(API_ENDPOINT.SEARCH_HOSPITAL = keyword)
      .then(response => {
        return response.json()
      })
      .then(responseJson => {
        if (responseJson.teams) {
          return Promise.resolve(responseJson.teams)
        } else {
          return Promise.reject(`${keyword} is not found`)
        }
      })
  }
}

export default DataSource
