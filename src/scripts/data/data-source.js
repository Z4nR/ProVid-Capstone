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

  static async covidProvince () {
    const response = await fetch(API_ENDPOINT.COVID_PROV_DATA)
    return response.json()
  }

  static async cityRisk () {
    const response = await fetch(API_ENDPOINT.CITY_RISK)
    const { data } = await response.json()
    return data
  }
}

export default DataSource
