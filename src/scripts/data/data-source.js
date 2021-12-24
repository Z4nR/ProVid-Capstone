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

  static async hospitalProv () {
    const response = await fetch(API_ENDPOINT.HOSPITAL_PROV_DATA)
    return response.json()
  }

  static async hospitalInCity (province) {
    const response = await fetch(API_ENDPOINT.HOSPITAL_CITY_IN_PROV(province))
    const { cities } = await response.json()
    return cities
  }

  static async searchHospital (prov, city) {
    const response = await fetch(API_ENDPOINT.SEARCH_HOSPITAL(prov, city))
    const { hospitals } = await response.json()
    return hospitals
  }

  static async hospitalMap (hospitalId) {
    const response = await fetch(API_ENDPOINT.HOSPITAL_MAP(hospitalId))
    const { data } = await response.json()
    return data
  }
}

export default DataSource
