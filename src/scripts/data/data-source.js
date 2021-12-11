import API_ENDPOINT from '../globals/api-endpoint'

class DataSource {
  static async vaccine () {
    const response = await fetch(API_ENDPOINT.VACCINE)
    return response.json()
  }

  static async covidProvince () {
    const response = await fetch(API_ENDPOINT.COVID_PROV_DATA)
    return response.json()
  }
}

export default DataSource
