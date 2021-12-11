import API_ENDPOINT from '../globals/api-endpoint'

class DataSource {
  static async vaccine () {
    const response = await fetch(API_ENDPOINT.VACCINE)
    return response.json()
  }
}

export default DataSource
